import React, { PureComponent } from 'react'

import logo from '../../logo.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faSearch, faWrench, faUser, faQuestion } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

const tabs = [
  'An ecumenical app being developed since the COVID-19 started to change our lifes. It will contain a meditation counter customized by each user, a map with spitirual places near by, a soulmate optional section for those unhappy with the vulgar dating apps, a market section for small business about spirituality and holistic therapy, a section to connect vegan cookers and hungry users, and finally an optional social section for positive contents.',
  'First, to measure and promote a global vibration of awakening, calculating how many users are meditating \'together\' at each session. Second, to create a community of meditators who support each other\'s businesses.',
  'This is a single developer project with many apps in one, so hopefully it will be available before the end of 2020. Would you like to submit any suggestions? Just send us a direct message on our Instagram account.',
  'The core of this app will be the meditation metrics, individually and collectively. Also, in the other hand, the meditation score from each one plays an important role setting the audience under their influence, for either someone who is selling stuff or just a basic user sharing content. The more you meditate, the more you get featured.',
  'Being created by Paulo Pamplona, a Brazilian-Portuguese citizen who started to practice meditation in 2012 and started to study web development in 2016. The app is either a programming practice or a dream to do something for the benefit of humankind. The main intention is to encourage more people to meditate and encourage those who already do to keep growing in the practice. Also, once we get really connected we may figure out more ways to help our community.'  
]

class Home extends PureComponent {
  constructor () {
    super()
    
    this.state = {
      content: 'Loading...'
    }
  }

  handleTab = (index) => {

    const btns = document.querySelectorAll('.tab-bar button')

    this.clearActiveColor(btns)
    this.handleBtnColor(index, btns)

    this.setState({
      content: tabs[index]
    })
  }

  handleBtnColor = (index, btns) => {
    btns[index].classList.add('active')
  }

  clearActiveColor = (btns) => {
    for (let i = 0; i < btns.length; i++){
      btns[i].classList.remove('active')
    }
  }

  componentDidMount () {

    this.handleTab(0)

  }

  render () {

    return (

      <>
        <header>

          <img src={logo} className="logo" alt="logo" />

          <div className="brand">
            <h1 className="brand-name">metta.club</h1>
            <p className="brand-moto">No matter your belief, if you meditate you are one of us.</p>
          </div>

        </header>

        <main>

          <div className="tab-wrapper">
            <div className="tab-bar">
              <button onClick={() => this.handleTab(0)}>
              <FontAwesomeIcon  className="tab-icon" icon={faSearch} />
                <p className="tab-w">What</p>
              </button>
              <button onClick={() => this.handleTab(1)}>
                <FontAwesomeIcon  className="tab-icon" icon={faQuestion} />
                <p className="tab-w">Why</p>
              </button>
              <button onClick={() => this.handleTab(2)}>
              <FontAwesomeIcon  className="tab-icon" icon={faRocket} />
                <p className="tab-w">When</p>
              </button>
              <button onClick={() => this.handleTab(3)}>
              <FontAwesomeIcon  className="tab-icon" icon={faWrench} />
                <p className="tab-w">How</p>
              </button>
              <button onClick={() => this.handleTab(4)}>
              <FontAwesomeIcon  className="tab-icon" icon={faUser} />
                <p className="tab-w">Who</p>
              </button>
            </div>

            <div className="tab-contents">

              <p>{this.state.content}</p>

            </div>

          </div>

        </main>

        <footer>

          <div className="metta-meaning">
            <p className="question">metta.club</p>
            <p>From the ancient Pāli language, "metta" or "mettā" means benevolence, loving-kindness, friendliness, amity, good will. It's also a very common term used in some traditions, as a meditation focused on the development of unconditional love for all beings. Would you join this club?</p>
          </div>

          <div className="follow-us">
            <div className="wrap">
              <a target="_blank" href="https://www.instagram.com/app.metta.club/">
                <FontAwesomeIcon className="insta-icon" icon={['fab', 'instagram']}/>
                <p className="insta-address"> @app.metta.club</p>
              </a>
            </div> 
          </div>

          <div className="copy">
            <p>©2020 All rights reserved</p>
          </div>
        </footer>
      </>
    )
  }
}

export default Home