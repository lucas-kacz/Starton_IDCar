import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import { ethers } from "ethers";
import { useState } from "react";

const Home = props => {

    let[contractData, setContractData] = useState("");

    const connectContractDealer = async() => {

    }


    return (
        <Card className={classes.home}>
            <h1>Welcome</h1>
            <p>{props.currentAccount}</p>
            <button onClick={connectContractDealer}></button>
        </Card>
    );
};

export default Home;