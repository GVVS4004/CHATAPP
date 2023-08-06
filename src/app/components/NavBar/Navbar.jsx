"use client";
import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import Style from "./NavBar.module.css";
import { ChatAppContext } from "@/app/context/ChatAppContext";
import { Model, Error, Loader } from "../index";
// import images from '../../assets';
import images from "../../assets";
function Navbar({curactive}) {
  const menuItems = [
    {
      menu: "ALL USERS",
      link: "/allusers",
    },
    {
      menu: "CHAT",
      link: "/",
    },
    {
      menu: "CONTACT",
      link: "/contactus",
    },
    {
      menu: "FAQS",
      link: "/faq",
    },
    {
      menu: "TERMS OF USE",
      link: "/termsofuse",
    },
  ];

  const [active, setActive] = useState(curactive||2);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const { account, userName, connectWallet, createAccount, error } = useContext(ChatAppContext);

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
          <Image src={images.logo} alt="logo" width={50} height={50} />
        </div>
        <div className={Style.NavBar_box_right}>
          <div className={Style.NavBar_box_right_menu}>
            {menuItems.map((ele, ind) => {
              return (
                <div
                  onClick={() => {
                    setActive(ind + 1);
                  }}
                  key={ind + 1}
                  className={`${Style.NavBar_box_right_menu_items} ${
                    active == ind + 1 ? Style.active_btn : ""
                  }`}
                >
                  <Link
                    className={Style.NavBar_box_right_menu_items_link}
                    href={ele.link}
                  >
                    {ele.menu}
                  </Link>
                </div>
              );
            })}
          </div>
          {open && (
            <div className={Style.mobile_menu}>
              {menuItems.map((ele, ind) => {
                return (
                  <div
                    onClick={() => {
                      setActive(ind + 1);
                    }}
                    key={ind + 1}
                    className={`${Style.mobile_menu_items} ${
                      active == ind + 1 ? Style.active_btn : ""
                    }`}
                  >
                    <Link
                      className={Style.mobile_menu_items_link}
                      href={ele.link}
                    >
                      {ele.menu}
                    </Link>
                  </div>
                );
              })}
              <p className={Style.mobile_menu_btn}>
                <Image
                  src={images.close}
                  alt="close"
                  height={50}
                  width={50}
                  onClick={() => setOpen(false)}
                ></Image>
              </p>
            </div>
          )}
          <div className={Style.NavBar_box_right_connect}>
            {account == "" ? (
              <button
                onClick={() => {
                  connectWallet();
                }}
              >
                {""}
                <span>Connect Wallet </span>
              </button>
            ) : (
              <button onClick={() => setOpenModel(true)}>
                {""}
                <Image
                  src={userName ? images.accountName : images.create2}
                  alt="Account Image"
                  width={20}
                  height={20}
                ></Image>
                {""}
                <small> {userName||"Create Account"}</small>
              </button>
            )}
          </div>
          <div className={Style.NavBar_box_right_open} onClick={()=>{setOpen(true)}}>
              <Image src={images.open} alt="open" width={30} height={30} />
          </div>
        </div>
      </div>
      {openModel&&(
        <div className={Style.modelBox}>
          <Model 
                openBox={setOpenModel}
                title="WELCOME TO"
                head="CHAT APP"
                info="This is a chat app which can send messages through your blockchain account"
                smallInfo="Kindly enter your name"
                image={images.hero}
                functionName= {createAccount}
                address={account}
          />
        </div>
      )}
      {error==""?"":<Error error={error}></Error>}
    </div>
  );
}
export default Navbar;
