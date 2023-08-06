import React from 'react'
import { Navbar } from '../components'
import images from '../assets'
import Image from 'next/image'
export default function Page() {
  return (
    <div>
      <Navbar curactive={3}></Navbar>
      {/* <iframe src='/src/app/assets/video1.mp4'></iframe> */}
      <Image src={images.contactus} style={{width:"90%",margin:"2rem auto"}}></Image>
      
    </div>
  )
}

