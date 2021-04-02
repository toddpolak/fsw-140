import React from 'react'
import { Route, Switch } from 'react-router'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Avengers from './components/Avengers'

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Switch>
        <Route 
          exact path='/'
          component={Home} />
        <Route
          path='/avengers' 
          component={Avengers} />
      </Switch>
    </div>
  )
}

export default App
