"use client"
import React,{useState} from 'react'
import Style from './Error.module.css';
export default function Error({error}) {
  const [open,setOpen] = useState(error);
  return (
    <div>
    {(open!==""?(<div className={Style.Error}>
      <div style={{display:'inline-block'}}>
      <button style={{position:"absolute",top:"5%",right:"5%"}} onClick={(e)=>{setOpen("")}}><img width="50" height="50" src="https://img.icons8.com/ios/50/close-window--v1.png" alt="close-window--v1"/></button>
      </div>
      <div className={Style.Error_box}> 
        <h1>Please fix this error and & reload browser</h1>
        {error}
      </div>
      
    </div>):(""))}
    </div>
    // <div className={Style.Error}>
    //   <div style={{display:'inline-block'}}>
    //   <button style={{position:"absolute",top:"5%",right:"5%"}} onClick={(e)=>{setOpen(!open)}}><img width="50" height="50" src="https://img.icons8.com/ios/50/close-window--v1.png" alt="close-window--v1"/></button>
    //   </div>
    //   <div className={Style.Error_box}> 
    //     <h1>Please fix this error and & reload browser</h1>
    //     {error}
    //   </div>
      
    // </div>
  )
}
