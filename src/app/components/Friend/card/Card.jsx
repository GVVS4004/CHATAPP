"use client"
import React,{useEffect} from 'react'
import Style from "./Card.module.css"
import images from "../../../assets"
import Link from "next/link"
import Image from 'next/image'
import { ST } from 'next/dist/shared/lib/utils'


export default function Card({readMessage, ele, readUser,ind}) {
  return (
    <Link href={{pathname:"/",query:{name:`${ele.name}`,address:`${ele.pubkey}`}}}>
        <div className={Style.Card} onClick={()=>{readMessage(ele.pubkey),readUser(ele.pubkey)}}>
            <div className={Style.Card_box}>
                <div className={Style.Card_box_left}>
                    <Image
                        src={images[`image` + `${(ind+1)%10}`]}
                        alt="username"
                        width={50}
                        height={50}
                        className={Style.Card_box_left_img}
                    ></Image>
                </div>
                <div className={Style.Card_box_right}>
                    <div className={Style.Card_box_right_middle}>
                        <h4>{ele.name}</h4>
                        <small>{ele.pubkey.slice(21)}...</small>
                    </div>
                    <div className={Style.Card_box_right_end}>
                        <small>{ind+1}</small>
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}
