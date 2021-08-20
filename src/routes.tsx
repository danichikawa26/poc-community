import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Streaming from './pages/streaming/streaming'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/streaming" component={Streaming} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
