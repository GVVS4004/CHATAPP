"use client"
import React, {useEffect,useState, useContext} from 'react'
import { ChatAppContext } from './context/ChatAppContext'
import { Navbar , Friend, Filter} from './components';
function ChatApp() {
  const {title} = useContext(ChatAppContext);
  return (
    <div>
      <Navbar></Navbar>
      <Filter></Filter>
      <Friend ></Friend>
    </div>
  );
}
export default ChatApp;