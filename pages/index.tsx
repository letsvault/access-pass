import { ThirdwebNftMedia, useAddress, useContract } from "@thirdweb-dev/react";
import { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { NFTMetadata } from "@thirdweb-dev/sdk";
import  Image  from "next/image"
import {
  CreateWallet,
  PaperUser,
} from "@paperxyz/react-client-sdk";


const Home: NextPage = () => {
  const { contract } = useContract(
    process.env.CONTRACT_ADDRESS, 
    "edition-drop"
  );

  const [email, setEmail] = useState<string>("");
  // const address = useAddress();
  const [loading, setLoading] = useState<boolean>(false);
  const [mintedNft, setMintedNft] = useState<NFTMetadata | undefined>(undefined);
  const [recipientWalletAddress, setRecipientWalletAddress] = useState("");
  const [creatingWallet, setCreatingWallet] = useState<boolean>(false);

  async function mintNft() {
    setLoading(true);

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

    } catch (error){
      console.log(error);
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {recipientWalletAddress ? (
          <>
            <h2>Hi, Alum! 👋 </h2>
            <button 
              onClick={() => mintNft()}
              disabled={mintedNft !== undefined}
            >
                {loading ? ("Loading...") : mintedNft ? ("Access Pass Claimed") : ("Get Your Access Pass")}
            </button>

            {mintedNft && (
              <div className={styles.nft}>
                <h3>Your Access Pass</h3>
                <ThirdwebNftMedia 
                  metadata={mintedNft} 
                  style={{width:300}}/>

                <form className={styles.engageButtonAndLogo} action="https://discord.gg/5GXRS5Bp8R" method="get" target="_blank">
                  <button className={styles.engageButton} type="submit">Join the Discord</button>
                  <Image width={50} height={50} src="/discord.png" alt="discord logo"></Image>
                </form>
                <form className={styles.engageButtonAndLogo} action="https://app.dework.xyz/i/0iArJIWaUyOHy8NOOffjyz" method="get" target="_blank">
                  <button className={styles.engageButton} type="submit">View our job board</button>
                  <Image width={40} height={40} src="/dework.png" alt="dework logo"></Image>
                </form>
              </div>
            )}
          </>
        ) : (
          <>
            <h2>Login With Email </h2>
             <div>
              <input 
              type="email"
              placeholder="Your Email Address"
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
              <CreateWallet
                emailAddress={email}
                onEmailVerificationInitiated={() => setCreatingWallet(true)}
                onSuccess={(user: PaperUser) => {
                  setRecipientWalletAddress(user.walletAddress);
                }}
                onError={(error) => {
                  console.log("error", error);
                }}
              >
                {/* @ts-ignore */}
                <button 
                  disabled={creatingWallet}
                >
                {creatingWallet ? ('Loading...') : ('Verify Email')}
                </button>
              </CreateWallet>
              {creatingWallet ? (<h3>If this is your first time logging in, check your email inbox!</h3>) : ("")}

            </div>
          </>
        )}
        
      </main>
    </div>
  );
};

export default Home;
