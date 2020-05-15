import React from 'react'

import logo from '../../logo.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

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
          <p className="question">Why?</p>
          <p>First, to mesuare and promote a global vibration of awakeness, calculating how many users are meditating 'together', every session. Second, to create a community of meditators who support each other's business.</p>
        </div>

        <div className="topic">
          <p className="question">What's the meaning of the word "metta"?</p>
          <p>From the ancient Pāli language, "metta" or "mettā" means benevolence, loving-kindness, friendliness, amity, good will. It's also a very common term used in some traditions, as a meditation focused on the development of unconditional love for all beings.</p>
        </div>

        <div className="follow-us">
          <div className="wrap">
            <FontAwesomeIcon className="insta-icon" icon={['fab', 'instagram']}/>
            <p className="insta-address"> @app.metta.club</p>
          </div> 
        </div>

      </div>     

    </header>
  )
}

export default Home