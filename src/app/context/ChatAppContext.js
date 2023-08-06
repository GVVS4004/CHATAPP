"use client"
import React ,{useState,useEffect}from 'react';
import { useRouter } from 'next/navigation';
import { connectWallet,connectingWithContract,CheckIfWalletConnected } from '../utils/apiFeature';

const ChatAppContext = React.createContext();
const ChatAppProvider = ({children})=>{
    const title = "Hey there welcome to blockchain chat app"
    const [account,setAccount] = useState("")
    const [userName, setUserName] =useState("");
    const [friendLists, setFriendLists]= useState([]);
    const [friendMsg, setFriendMsg] =useState([]);
    const [loading, setLoading] =useState(false);
    const [userLists, setUserLists] = useState([]);
    const [error,setError] = useState("");
    const [filter,setFilter] = useState("");

    const [currentUserName, setCurrentUserName] = useState('');
    const [currentUserAddress ,setCurrentUserAddress] = useState("");

    const router =useRouter();

    const fetchData = async()=>{
        try{
            const contract = await connectingWithContract();
            // console.log(contract);

            const connectAccount = await connectWallet();
            setAccount(connectAccount);
            // console.log(connectAccount);
            const userName= await contract.getUsername(connectAccount);
            setUserName(userName);
            const friendLists = await contract.getMyFriendList();
            setFriendLists(friendLists);

            const userList = await contract.getAllAppUser();
            setUserLists(userList);

        }
        catch(error){
            console.log("fetchData");
            setError("Please Install and connect your Wallet");
            console.log(error)
        }
        
    }
    const readMessage =async(friendAddress)=>{
        try {
            const contract = await connectingWithContract();
            const read = await contract.readMessage(friendAddress);
            setFriendMsg(read);
        }
        catch(error){
            console.log("readMessage");
            console.log("Currently you have no message");
            // console.log(error);
        }
    };
    const  createAccount = async ({name,accountAddress})=>{
        try{
            // if(name || accountAddress) return setError("Name and Account Address cannot be empty");
            const contract = await connectingWithContract();
            const getCreatedUser = await contract.createAccount(name);
            setLoading(true);
            await getCreatedUser.wait();
            setLoading(false);
            window.location.reload();
        }
        catch(error){
            console.log("createAccount");
            setError("Error while creating your account please reload browser");
        }
    }
    const addFriends = async({name,accountAddress})=>{
        try{
            if (!name||!accountAddress) return setError("Please porvide the name and account address");
            const contract  =await connectingWithContract();
            const addMyFriend = await contract.addFriend(accountAddress,name);
            setLoading(true);
            await addMyFriend.wait();
            // console.log("context",loading);
            setLoading(false);
            router.push("/");
            window.location.reload()
        }
        catch(error){
            console.log(error);
            console.log("addFriends");
            setError("Check the address or the user is already a friend");
        }
    }
    const sendMessage =async ({msg,address})=>{
        try{
            // if(!msg) return setError("Please tyoe your message");
        
            const contract = await connectingWithContract();
            const addMessage = await contract.sendMessage(address,msg);
            setLoading(true);
            await addMessage.wait();
            
            // window.location.reload();
            setLoading(false);
        }
        catch(error){
            console.log("sendMessage");
            setError("Please reload and try again");
            console.log(error)
        }
    }

    const readUser = async(userAddress)=>{
        const contract =await connectingWithContract();
        const userName = await contract.getUsername(userAddress);
        setCurrentUserAddress(userAddress);
        setCurrentUserName(userName);
    }
    useEffect(()=>{
        fetchData();
    },[]);
    return(
        <ChatAppContext.Provider value={{readMessage, createAccount, addFriends, sendMessage, readUser, connectWallet, CheckIfWalletConnected, setFilter, account, userName, friendLists, friendMsg, loading, userLists, userName, currentUserAddress, currentUserName, error, filter}}>
            {children}
        </ChatAppContext.Provider>
    )
}
export {ChatAppContext,ChatAppProvider};