import React from 'react'
import { TbReportSearch } from 'react-icons/tb'
import { TfiTarget } from 'react-icons/tfi'
import { FaHandshake } from 'react-icons/fa'
import wave from "../assets/wave.png";


const Aboutus = () => {
  return (
    <div id='aboutus'>
      <h1>About us</h1>
      <img src={wave} />
      <main>
        <div>
          <TbReportSearch size={40} />
          <h2>Accurate Reports</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dignissimos.</p>
        </div>
        <div>
          <TfiTarget size={40} />
          <h2>One-Stop Solution</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dignissimos.</p>
        </div>
        <div>
          <FaHandshake size={40} />
          <h2>Consultancy</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dignissimos.</p>
        </div>
      </main>
    </div>
  )
}

export default Aboutus