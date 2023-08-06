"use client"
import React,{useState,useEffect,useContext} from 'react'

import { Filter, Friend, Navbar, UserCard } from '../components'
// import { UserCard } from '../components'
import Style from './page.module.css'
import { ChatAppContext } from '../context/ChatAppContext'
export default function allUsers() {
    const {userLists, addFriends, filter} = useContext(ChatAppContext);
    var userData=userLists;
    if (filter.slice(0,2)!='0x'){
          var userData=userLists.filter(item=> item.name.toLowerCase().includes(filter.toLowerCase()));
    }
    else{
      var userData=userLists.filter(item=> item.accountAddress.includes(filter));
    }
  return (
    <div>
      <Navbar curactive={1}></Navbar>'
      <Filter></Filter>
      <div className={Style.alluser_info}>
        <h1>Find Your Friends</h1>
      </div>
      <div className={Style.alluser}>
        {userData.map((ele,ind)=>{
          return (
            <UserCard key={ind+1} ele={ele} ind={ind} addFriends={addFriends}/>
            ) 
        })}
      </div>
    </div>
  )
}
