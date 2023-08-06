import React from 'react'
import './page.css'
import { Loader, Navbar } from '../components'
export default function page() {
  return (
    <div>
      <Navbar curactive={5}></Navbar>
        <h1 style={{width:"90%",margin:"2rem auto",textAlign:"center",color:"#F18303"}}>This Page is under maintainance</h1>
        <Loader></Loader>

    </div>
  )
}
