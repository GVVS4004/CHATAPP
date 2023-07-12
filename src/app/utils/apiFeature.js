import {ethers} from "ethers";
import Web3Modal from "web3modal";

import { ChatAppAddress,ChatAppABI } from "../context/constants";
export const CheckIfWalletConnected =async ()=>{
    try{
        if(!window.ethereum) return console.log("Install Metamask");
        const accounts= await window.ethereum.request({
            method:"eth_accounts",
        });
        const firstAccount = accounts[0];
    }
    catch(error){
        console.log(error);
    }
}

export const connectWallet = async ()=>{
    try {
        if(!window.ethereum) return console.log("Install MetaMask");
        // console.log("connecting wallet");
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        const firstAccount = accounts[0];
        // console.log(firstAccount); 
        return firstAccount;
    }
    catch(error){
        console.log(error);
    }
};

const fetchContract  = (signerOrProvider)=>
    new ethers.Contract(ChatAppAddress,ChatAppABI,signerOrProvider);

export const connectingWithContract = async ()=>{
    try{
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        // console.log(connection);
        const provider = new ethers.providers.Web3Provider(connection);
        // console.log(provider);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        // console.log(await provider.getCode(ChatAppAddress));
        // console.log(contract);
        return contract;
    }
    catch(error){
        console.log(error);
    }
}

export const convertTime = (time)=>{
    const newTime = new Date(time.toNumber());
    const realTIme = newTime.getHours()+"/"+newTime.getMinutes()+"/"+newTime.getSeconds()+" Date:"+newTime.getDate()+"/"+(newTime.getMonth()+1)+"/"+newTime.getFullYear();
    return realTIme;
}