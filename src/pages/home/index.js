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

        <div className="row">

          <div className="topic widthThird">
            <p className="question">What</p>
            <p>An ecumenical app being developed since the COVID-19 started to change our lifes.</p>
          </div>
          
          <div className="topic widthThird">
            <p className="question">Why</p>
            <p>First, to measure and promote a global vibration of awakening, calculating how many users are meditating 'together' at each session. Second, to create a community of meditators who support each other's businesses.</p>
          </div>

          <div className="topic widthThird">
            <p className="question">When</p>
            <p>This is a single developer project, so hopefully it will be available before the end of 2020. Would you like to submit any suggestions? Just send us a direct message on our Instagram account.</p>
          </div>
          
        </div>

        <div className="topic widthFull">
          <p className="question">metta.club</p>
          <p>From the ancient Pāli language, "metta" or "mettā" means benevolence, loving-kindness, friendliness, amity, good will. It's also a very common term used in some traditions, as a meditation focused on the development of unconditional love for all beings. Would you join this club?</p>
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