"use client"
import React,{useState,useEffect,useContext} from 'react'

import { UserCard } from './components'
import Style from './allUsers.module.css'
import { ChatAppContext } from './context/ChatAppContext'
export default function allUsers() {
    const {userLists, addFriends} = useContext(ChatAppContext);
  return (
    <div>
      <div className={Style.allUser_info}>
        <h1>Find Your Friends</h1>
      </div>
      <div className={Style.allUser}>
        {userLists.mao((ele,ind)=>{
            <UserCard key={ind+1} ele={ele} ind={ind} addFriends={addFriends}/>
        })}
      </div>
    </div>
  )
}
