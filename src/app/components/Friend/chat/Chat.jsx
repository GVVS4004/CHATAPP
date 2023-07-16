"use client";
import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";

import Style from "./Chat.module.css";
import images from "../../../assets";
import { convertTime } from "@/app/utils/apiFeature";
import { Loader } from "../..";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
export default function Chat({
  functionName,
  readMessage,
  friendMsg,
  account,
  userName,
  loading,
  currentUserAddress,
  currentUserName,
  readUser,
}) {
  const [message, setMessage] = useState("");

  const x = 1;
  const [chatData, setChatData] = useState({
    name: "",
    address: "",
  });
  const searchParams = useSearchParams();
  // const urlParms= new URLSearchParams(window.location.search)
  useEffect(() => {
    var addr = searchParams.get("address");
    var name = searchParams.get("name");
    readUser(addr);
    readMessage(addr);
    if (addr) {
      setChatData((prev) => {
        return {
          name: name,
          address: addr,
        };
      });
    } else {
      return;
    }
  }, [searchParams.get("address"),friendMsg]);

  return (
    <div className={Style.Chat}>
      {currentUserName && currentUserAddress ? (
        <div className={Style.Chat_user_info}>
          <Image src={images.accountName} alt="image" width={70} height={70} />
          <div className={Style.Chat_user_info_box}>
            <h4>{currentUserName}</h4>
            <p className={Style.show}>{currentUserAddress}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    
    {loading==true?(<Loader></Loader>):(

      <div className={Style.Chat_box_box}>
        <div className={Style.Chat_box}>
          <div className={Style.Chat_box_left}>
            {friendMsg.map((ele, ind) => {
              return (
                <div>
                    
                  {ele.sender == chatData.address ? (
                    <div className={Style.Chat_box_left_title}>
                      <Image
                        src={images[`image` + `${x}`]}
                        alt="accountname"
                        width={50}
                        height={50}
                      />
                      <span>
                        {chatData.name}{" "}
                        <small>{convertTime(ele.timestamp)}</small>
                      </span>
                    </div>
                  ) : (
                    <div className={Style.Chat_box_left_title}>
                      <Image
                        src={images[`image` + `${x}`]}
                        alt="accountname"
                        width={50}
                        height={50}
                      />
                      <span style={{ color: "white" }}>
                        {userName}{" "}
                        <small>{convertTime(ele.timestamp)}</small>
                      </span>
                    </div>
                  )}
                  {ele.sender == chatData.address ? (
                    <p key={ind + 1}>{ele.msg}</p>
                  ) : (
                    <p style={{ color: "white" }} key={ind + 1}>
                      {ele.msg}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {currentUserAddress && currentUserName ? (
          <div className={Style.Chat_box_send}>
            <Image src={images.smile} alt="smile" width={50} height={500} />
            <input
              type="text"
              placeholder="type your message"
              onChange={(e) => setMessage(e.target.value)}
            ></input>
            {
              <Image
                src={images.send}
                alt="send"
                width={50}
                height={50}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  functionName({ msg: message, address: chatData.address })
                }
              />
            }
          </div>
        ) : (
          ""
        )}
      </div>
    )}
    </div>
  );
}
