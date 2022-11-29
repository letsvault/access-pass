import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { NFTMetadata } from "@thirdweb-dev/sdk";
import { ThirdwebNftMedia, useContract } from "@thirdweb-dev/react";
import  Image  from "next/image"

interface Props {
    mintedNft: NFTMetadata;
}

const ViewPass: NextPage<Props> = (props) => {
    const { mintedNft } = props;

    return (
        <div className={styles.nft}>
            <ThirdwebNftMedia 
                metadata={mintedNft} 
                style={{width:300}}/>
            <div style={{marginTop: '10px'}}>
                <form className={styles.engageButtonAndLogo} action="https://discord.gg/5GXRS5Bp8R" method="get" target="_blank">
                    <button className={styles.engageButton} type="submit">Join the conversation</button>
                    <Image width={50} height={50} src="/discord.png" alt="discord logo"></Image>
                </form>
                <form className={styles.engageButtonAndLogo} action="https://app.dework.xyz/i/0iANxqqEjdh2PVGeS3eYfZ" method="get" target="_blank">
                    <button className={styles.engageButton} type="submit">View open grants</button>
                    <Image width={40} height={40} src="/dework.png" alt="dework logo"></Image>
                </form>
            </div>
        </div>
    )
};

export default ViewPass;