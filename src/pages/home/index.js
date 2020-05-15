import React from 'react'

import logo from '../../logo.svg'
//import { AntDesign } from '@expo/vector-icons'
import './styles.css'

function Home() {
  return (
    <header className="header">

      <img src={logo} className="logo" alt="logo" />

      <div className="brand">
        <h1>
          metta.club
        </h1>
        <p className="moto">No matter your belief, if you meditate you are one of us.</p>
      </div>

      

      <div className="container">

        <div className="topic">
          <p className="question">What is it?</p>
          <p>An ecumenical app being developed since COVID-19 started to change our lifes.</p>
        </div>
        
        <div className="topic">
          <p className="question">What goals does it has?</p>
          <p>First, to mesuare and promote a global vibration of awakeness, calculating how many users are meditating 'together', every session. Second, to create a community of meditators who support each other's business.</p>
        </div>

        <div className="topic">
          <p className="question">What's the meaning of the word "metta"?</p>
          <p>From the ancient Pāli language, "metta" or "mettā" means benevolence, loving-kindness, friendliness, amity, good will. It's also a very common term used in some traditions, as a meditation focused on the development of unconditional love for all beings.</p>
        </div>

        
      </div>     

    </header>
  )
}

export default Home