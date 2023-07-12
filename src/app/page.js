"use client"
import React, {useEffect,useState, useContext} from 'react'
import { ChatAppContext } from './context/ChatAppContext'
import { Navbar } from './components';
function ChatApp() {
  const {title} = useContext(ChatAppContext);
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
}
export default ChatApp;