import React from 'react'
import './App.css'
import Home from './pages/home'

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
 
library.add(fab, faCheckSquare, faCoffee)


function App() {
  return (
    <div className="App">

      <Home />

    </div>
  )
}

export default App
