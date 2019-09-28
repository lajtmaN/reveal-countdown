import React from 'react'
import './App.css'
import { Counter } from './Counter'
import { Logo } from './Logo'

const App: React.FC = () => {
  const [, deadline, game] = window.location.pathname.split('/')
  if (!deadline || !game) {
    return (
      <pre>
        Error! No valid time and game. Enter in url: '/2019-09-27T23:51:40.599/I
        skal spille tetris'
      </pre>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <h4>Næste Mystery turnering:</h4>
        <h2>
          <Counter deadline={new Date(deadline)} game={decodeURI(game)} />
        </h2>
      </header>
      <Logo />
    </div>
  )
}

export default App
