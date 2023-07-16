"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import Style from "./Filter.module.css";
import images from "../../assets";
import { ChatAppContext } from "@/app/context/ChatAppContext";
import { Model } from "..";
import { Fascinate } from "next/font/google";

export default function Filter() {
  const { account, addFriends, setFilter } = useContext(ChatAppContext);
  const [addFriend, setAddFriend] = useState(false);

  return (
    <div className={Style.Filter}>
      <div className={Style.Filter_box}>
        <div className={Style.Filter_box_left}>
          <div className={Style.Filter_box_left_search}>
            {""}
            <Image src={images.search} alt="image" width={20} height={20} />
            {""}
            <input type="text" placeholder="search.." onChange={(e)=>{setFilter(e.target.value)}} />
          </div>
        </div>
        <div className={Style.Filter_box_right}>
          {/* <button>
            {""}
            <Image src={images.clear} alt="clear" width={20} height={20} />
            {""}
            <span>CLEAR CHAT</span>
          </button> */}
          <button
            onClick={() => {
              setAddFriend(true);
            }}
          >
            {""}
            <Image src={images.user} alt="clear" width={20} height={20}></Image>
            {""}
            <span>ADD FRIEND</span>
          </button>
        </div>
      </div>
      {addFriend && (
        <div className={Style.Filter_model}>
          <Model
            openBox={setAddFriend}
            title="WELCOME TO"
            head="CHAT APP"
            info="This is a chat application where you can chat with your friends"
            smallInfo="Kindly Enter your Friend Name and Address"
            image={images.hero}
            functionName={addFriends}
          />
        </div>
      )}
    </div>
  );
}
