// 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
// 0x5FbDB2315678afecb367f032d93F642f64180aa3
require("dotenv").config();
// import chatAppJSON from '../../../artifacts/contracts/ChatApp.sol/ChatApp.json'
import chatAppJSON from './ChatApp.json'
console.log("contract_address:",process.env.CONTRACT_ADDRESS);
const ChatAppAddress=process.env.CONTRACT_ADDRESS==null?process.env.NEXT_PUBLIC_CONTRACT_ADDRESS:process.env.CONTRACT_ADDRESS;
const ChatAppABI = chatAppJSON.abi;
export {ChatAppAddress,ChatAppABI};