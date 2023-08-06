import React from 'react'
import Image from "next/image"
import images from "../../assets";
import Style from './UserCard.module.css'
export default function UserCard({ele, ind, addFriends}) {
  // console.log(ele);
  return (
    <div className={Style.UserCard}>
      <div className={Style.UserCard_box}>
        <Image className={Style.UserCard_box_img} src={images[`image${(ind+1)%10}`]} alt='user' height={100} width={100}/>
        <div className={Style.UserCard_box_info}>
          <h3>{ele.name}</h3>
          <p>{ele.accountAddress.slice(0,25)}...</p>
          <button onClick={()=>{addFriends({name:ele.name , accountAddress:ele.accountAddress})}} >
            Add Friend
          </button>
        </div>
      </div>
      <small className={Style.number}>{ind+1}</small>
    </div>
  )
}
