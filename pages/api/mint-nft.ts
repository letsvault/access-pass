import type { NextApiRequest, NextApiResponse } from 'next';
import { ThirdwebSDK, TransactionResultWithId } from "@thirdweb-dev/sdk";
import { SecretManagerServiceClient } from '@google-cloud/secret-manager';

const client = new SecretManagerServiceClient({
    credentials: {
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
    },
  });
const name = 'projects/204118709939/secrets/University/versions/latest';


async function getSecretVersion() {
    const [version] = await client.accessSecretVersion({
      name: name,
    });

    const payload = version.payload?.data?.toString();

    return payload;
};

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse
) {
    try {
        const { address } = req.body;

        const key = await getSecretVersion();

        if (key) {
            const sdk = ThirdwebSDK.fromPrivateKey(
                key, // Your wallet private key
                "polygon", // configure this to your network
            );
    
            const contractAddress = '0xB5CBF0BE6413F8F7241A1D32725286DB078784ed';
            const contract = await sdk.getContract(contractAddress, "edition-drop");

            const tokenId = 1;
            const quantity = 1;
            const transaction = await contract.claimTo(address as string, tokenId, quantity);

            const metadata = (await contract.get(tokenId)).metadata;

            res.status(200).json(metadata);
            }
    }
    catch (error){
        console.log(error);
        res.status(500).json(error);
    }
}