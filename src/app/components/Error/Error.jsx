"use client"
import React from 'react'
import Style from './Error.module.css';
export default function Error({error}) {
  return (
    <div className={Style.Error}>
      <div className={Style.Error_box}> 
        <h1>Please fix this error and & reload browser</h1>
        {error}
      </div>
      
    </div>
  )
}
