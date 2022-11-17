import { ThirdwebNftMedia, useAddress, useContract } from "@thirdweb-dev/react";
import { useState } from "react";
import { useMagic } from "@thirdweb-dev/react/evm/connectors/magic";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { NFT, NFTMetadata } from "@thirdweb-dev/sdk";


const Home: NextPage = () => {
  const { contract } = useContract(
    process.env.CONTRACT_ADDRESS, 
    "edition-drop"
  );

  const connectWithMagic = useMagic();
  const [email, setEmail] = useState<string>("");
  const address = useAddress();
  const [loading, setLoading] = useState<boolean>(false);
  const [mintedNft, setMintedNft] = useState<NFTMetadata | undefined>(undefined);

  async function mintNft() {
    setLoading(true);

    try {
      const result = await fetch("/api/mint-nft", {
        method: "POST",
        body: JSON.stringify({address}),
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
        {address ? (
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

              <button
                onClick={() => {
                  connectWithMagic({ email })
                }}
              >
                Login
              </button>

            </div>
          </>
        )}
        
      </main>
    </div>
  );
};

export default Home;
