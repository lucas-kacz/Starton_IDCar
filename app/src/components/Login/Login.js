import { useState } from "react";
import Card from "../UI/Card/Card";

const Login = (props) => {

    const[isConnecting, setIsConnecting] = useState(false);

    const detectProvider = () => {
        let provider;
        if(window.ethereum) {
            provider = window.ethereum;
        }else if (window.web3) {
            provider = window.web3.currentProvider;
        }else {
            window.alert("No ethereum browser detected ! Check Metamask !")

        }
        return provider;
    };


    const onLoginHandler = async () => {
        const provider = detectProvider();
        if (provider) {
            if (provider !== window.ethereum){
                console.error("Not window.ethereum provider. Do you have multiple wallets installed ?")
            }
            setIsConnecting(true);
            await provider.request({
                method : "eth_requestAccounts",
            });
            setIsConnecting(false);
            props.onLogin(provider);
        }
    };

    return (
        <Card className="login">
            <button onClick={onLoginHandler} className="button" type="button">
                {!isConnecting && "Connect"}
                {isConnecting && "Loading..."}
            </button>
        </Card>
    );
};

export default Login;