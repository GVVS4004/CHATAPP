"use client"
import React, { useState, useContext } from "react";
import Image from "next/image";
import Style from "./Friend.module.css";
import Card from "./card/Card";
import Chat from "./chat/Chat";

import { ChatAppContext } from "@/app/context/ChatAppContext";
export default function Friend() {
  const {
    sendMessage,
    account,
    friendLists,
    readMessage,
    readUser,
    loading,
    currentUserName,
    currentUserAddress,
    friendMsg,
    userName,
    filter
  } = useContext(ChatAppContext);
  const friendData=friendLists.filter(item=> item.name.toLowerCase().includes(filter.toLowerCase()))
  const [imgInd,setImgInd]=useState(1)
  return (
          <div className={Style.Friend}>
            <div className={Style.Friend_box}>
              <div className={Style.Friend_box_left}>
                  {friendData.map((ele,ind)=>{
                    return(
                    <button onClick={(e)=>{setImgInd(ind)}} style={{width:"100%"}}>
                    <Card key={ind+1}
                      ele={ele}
                      ind={ind}
                      readMessage={readMessage}
                      readUser={readUser}
                    />
                    </button>
                    )
                  })}
              </div>
              <div className={Style.Friend_box_right}>
                <Chat functionName={sendMessage}
                      readMessage={readMessage}
                      friendMsg={friendMsg}
                      account={account}
                      userName={userName}
                      loading={loading}
                      currentUserAddress={currentUserAddress}
                      currentUserName={currentUserName}
                      readUser={readUser}
                      imgInd={imgInd}
                 />
                  
                
              </div>
            </div>

          </div>
  );
}
