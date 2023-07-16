"use client"
import React,{useState,useEffect,useContext} from 'react'

import { Friend, Navbar, UserCard } from '../components'
// import { UserCard } from '../components'
import Style from './page.module.css'
import { ChatAppContext } from '../context/ChatAppContext'
export default function allUsers() {
    const {userLists, addFriends} = useContext(ChatAppContext);
  return (
    <div>
      <Navbar curactive={1}></Navbar>
      <div className={Style.alluser_info}>
        <h1>Find Your Friends</h1>
      </div>
      <div className={Style.alluser}>
        {userLists.map((ele,ind)=>{
          return (
            <UserCard key={ind+1} ele={ele} ind={ind} addFriends={addFriends}/>
            ) 
        })}
      </div>
    </div>
  )
}
