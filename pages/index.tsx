import { useContract } from "@thirdweb-dev/react";
import { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { NFTMetadata } from "@thirdweb-dev/sdk";
import ViewPass from "./view-pass";
import Login from "./login";

export enum Page {
  LOGIN = 'login',
  CLAIM_NEW_PASS = 'claim new pass',
  VIEW_PASS = 'view pass',
  LOADING = 'loading',
}

const Home: NextPage = () => {
  const { contract } = useContract(
    process.env.CONTRACT_ADDRESS, 
    "edition-drop"
  );

  const [currentPage, setCurrentPage] = useState<Page>(Page.LOGIN);
  const [email, setEmail] = useState<string>("");
  const [loggingIn, setLoggingIn ] = useState<boolean>(false);
  const [minting, setMinting] = useState<boolean>(false);
  const [mintedNft, setMintedNft] = useState<NFTMetadata | undefined>(undefined);
  const [recipientWalletAddress, setRecipientWalletAddress] = useState<string>("");
  const [creatingWallet, setCreatingWallet] = useState<boolean>(false);
  const [userCode, setUserCode] = useState<string | undefined>(undefined);

  async function mintNft() {
    setMinting(true);

    try {
      const result = await fetch("/api/mint-nft", {
        method: "POST",
        body: JSON.stringify({recipientWalletAddress}),
        headers: {
          "Content-Type": "application/json",
        }
      });
      
      const mintedNftMetadata = await result.json();

      setMintedNft(mintedNftMetadata as NFTMetadata);
      setCurrentPage(Page.VIEW_PASS);

    } catch (error){
      console.log(error);
      alert("Something went wrong. Please try again.")
    } finally {
      setMinting(false);
    }
  }

  async function exchangeCodeForToken(code: string) {
    setLoggingIn(true);
    try {
      const response = await fetch('/api/exchange-user-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });

      const token = await response.json();

      if (token) {
        getUserDetails(token);
        getBalance(token);
      }

    } catch (error){
      console.log(error);
    }
  }

  async function getUserDetails(userToken: string) {
    try {
      const response = await fetch('/api/get-user-details', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userToken }),
      });

      const userDetails = await response.json();
      setEmail(userDetails.email);
      setRecipientWalletAddress(userDetails.walletAddress);

      console.log(userDetails);

    } catch (error){
      console.log(error);
    }
  }

  async function getBalance(userToken: string) {
    try {
      const response = await fetch('/api/get-access-pass-balance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userToken }),
      });

      const nftsHeld = await response.json();

      if (nftsHeld) {
        setMintedNft(nftsHeld as NFTMetadata);
      }

      setLoggingIn(false);
      setCurrentPage(Page.VIEW_PASS);

    } catch (error){
      console.log(error);
    }
  }
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>University Alumni Access Pass</h1>

        {loggingIn && (
          <h2>Retreiving your Access Pass...</h2>
        )}

        {!loggingIn && currentPage === Page.LOGIN && (
          <Login
            email={email} 
            setEmail={setEmail} 
            creatingWallet={creatingWallet} 
            setCreatingWallet={setCreatingWallet} 
            recipientWalletAddress={recipientWalletAddress}
            setRecipientWalletAddress={setRecipientWalletAddress}
            setUserCode={setUserCode} 
            exchangeCodeForToken={exchangeCodeForToken}
            setCurrentPage={setCurrentPage}>
          </Login>
        )}

        {currentPage === Page.CLAIM_NEW_PASS && (
          <>
            <h2>Hi, Alum! 👋 </h2>
            <button 
              onClick={() => mintNft()}
              disabled={mintedNft !== undefined}
            >
                {minting ? ("Loading...") : ("Get Your Access Pass")}
            </button>
          </>
        )}

        {mintedNft !== undefined && currentPage === Page.VIEW_PASS && (
          <ViewPass mintedNft={mintedNft}></ViewPass>
        )}

        <div style={{marginTop: '30px'}}>
          <p>If you have any issues {currentPage === Page.LOGIN ? "claiming or " : ""} connecting, reach out to us at team@letsvault.xyz.</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
