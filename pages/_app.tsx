import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { MagicConnector } from "@thirdweb-dev/react/evm/connectors/magic";
import { PaperSDKProvider } from "@paperxyz/react-client-sdk";

const magicLinkConnector = new MagicConnector({
  options: {
    apiKey: process.env.NEXT_PUBLIC_MAGIC_CONNECTOR_KEY as string,
    rpcUrls: {
      [ChainId.Polygon]: 'https://polygon-rpc.com/'
    },
  }
})


// This is the chainId your dApp will work on.
const activeChainId = ChainId.Polygon;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PaperSDKProvider chainName="Polygon">
      <ThirdwebProvider 
        desiredChainId={activeChainId}
        walletConnectors= {[magicLinkConnector]}
      >
        <Component {...pageProps} />
      </ThirdwebProvider>
    </PaperSDKProvider>
  );
}

export default MyApp;
