import React, { Component } from 'react'
import EthTipJarContract from '../build/contracts/EthTipJar.json'
import getWeb3 from './utils/getWeb3'
import EthTipJar from './components/EthTipJar.js'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <main className="container">
          <div className="pure-g">
            <EthTipJar />
          </div>
        </main>
      </div>
    );
  }
}

export default App
