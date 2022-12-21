import React, { useState } from 'react'
import earth from "../assets/earth.png";
import map from "../assets/map.png";

const Form = () => {

  const [projectName, setProjectName] = useState('')
  const [address, setAddress] = useState('')
  const [lattitude, setlattitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [demand, setDemand] = useState('')

  const handleClick = () => {
    alert(`Project name : ${projectName}, address: ${address}, lattitude : ${lattitude}, longitude : ${longitude}, Demand : ${demand}`)
  }

  return (
    <div id='form'>
      <main>
        <img src={earth} alt="earth" />
      </main>
      <section>
        <form>
          <main>
            <label>Project Name<br /><input type={'text'} placeholder='Enter project Name' onChange={e => setProjectName(e.target.value)} /></label><br />
            <label>Address <br /><input type={'text'} placeholder='Select Address' onChange={e => setAddress(e.target.value)} /></label>
            <p>OR</p>
            <label>Lattitude<br /><input type={'number'} placeholder='Enter Lattitude' onChange={e => setlattitude(e.target.value)} /></label><br />
            <label>Longitude<br /><input type={'number'} placeholder='Enter Longitude' onChange={e => setLongitude(e.target.value)} /></label><br />
            <button onClick={handleClick} >Create Project</button>
          </main>
          <aside>
            <label>Demand<br /><input type={'text'} placeholder='Enter Demand' onChange={e => setDemand(e.target.value)} /></label>
            <div>
              {/* <img src={map} alt="" /> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7564.871385480829!2d73.90153169631961!3d18.55438607273311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1168624b4dd%3A0x393131001e36616e!2sChitale%20Bandhu%20Mithaiwale!5e0!3m2!1sen!2sin!4v1671633516166!5m2!1sen!2sin"
                width="100%" height="300px" style={{ border: 0 }} ></iframe>
            </div>
          </aside>

        </form>

      </section>
    </div>
  )
}

export default Form