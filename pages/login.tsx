import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Page } from ".";
import {
    CreateWallet,
    PaperUser,
    LoginWithPaper
  } from "@paperxyz/react-client-sdk";

interface Props {
    email: string,
    setEmail: Function;
    creatingWallet: boolean,
    setCreatingWallet: Function,
    recipientWalletAddress: string | undefined,
    setRecipientWalletAddress: Function,
    setUserCode: Function,
    exchangeCodeForToken: Function;
    setCurrentPage: Function;
}

const Login: NextPage<Props> = (props) => {
    const { 
        email, 
        setEmail, 
        creatingWallet, 
        setCreatingWallet, 
        recipientWalletAddress,
        setRecipientWalletAddress, 
        setUserCode, 
        exchangeCodeForToken,
        setCurrentPage,
    } = props;

    return (
        <>
            <div style={{display:'flex', justifyContent: 'space-between'}}>
              <div className={styles.signinOption} style={{marginRight: '200px'}}>
                <h2>Register </h2>
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
                      setCurrentPage(Page.CLAIM_NEW_PASS);
                    }}
                    onError={(error) => {
                      console.log("error", error);
                    }}
                  >
                    {/* @ts-ignore */}
                    <button 
                      disabled={creatingWallet}
                    >
                    {creatingWallet ? ('Loading...') : ('First time here')}
                    </button>
                  </CreateWallet>
                  </div>
              </div>
              <div className={styles.signinOption}>
                <h2>Login</h2>
                  <LoginWithPaper onSuccess={async (code: string) => {
                    setUserCode(code);
                    exchangeCodeForToken(code);
                  }}/>
              </div>
            </div>
            {creatingWallet && !recipientWalletAddress ? (<h3>First time here? Check your email inbox!</h3>) : ("")}
          </>
    )
};

export default Login;