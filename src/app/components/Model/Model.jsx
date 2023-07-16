"use client"
import React,{useState,useContext} from 'react'
import Image from "next/image";
import Style from './Model.module.css'
import { ChatAppContext } from '@/app/context/ChatAppContext';
import { Loader, Error } from '..';
import images from "../../assets";
export default function Model({openBox, title, head, info, smallInfo, image, functionName, address}) {
  const [name,setName] = useState("");
  const [accountAddress,setAccountAddress]= useState("");
  const { loading } = useContext(ChatAppContext);
  console.log(loading);
  return (
    <div className={Style.Model}>
      {
            loading===true?(
              <Loader/>
            ):
      <div className={Style.Model_box}>
        <div className={Style.Model_box_left}>
          <Image src={image} alt="buddy" width={700} height={700} />
        </div>
        <div className={Style.Model_box_right}>
          <h1>
            {title} <span>{head}</span>
          </h1>
          <p>{info}</p>
          <small>{smallInfo}</small>
          <div className={Style.Model_box_right_name}>
              <div className={Style.Model_box_right_name_info}>
                <Image src={images.username} alt="username" width={30} height={30}/>
                <input
                type="text"
                placeholder='your name'
                onChange={(e)=>{setName(e.target.value)}}
                ></input>
              </div>
              <div className={Style.Model_box_right_name_info}>
                <Image src={images.account} alt="username" width={30} height={30}/>
                <input
                type="text"
                placeholder={address || "Enter Address..."}
                onChange={(e)=>{setAccountAddress(e.target.value)}}
                ></input>
              </div>
              <div className={Style.Model_box_right_name_btn}>
                <button onClick={()=> {functionName({name, accountAddress})}}>
                  {""}
                  <Image src={images.send} alt="send" width={30} height={30} />
                  {""}
                  Submit
                </button>
                <button onClick={()=> openBox(false)}>
                  {""}
                  <Image src={images.close} alt="close" width={30} height={30} />
                  {""}
                  Cancel
                </button>
              </div>
            </div>
        
        </div>
      </div>}
    </div>
  )
}
