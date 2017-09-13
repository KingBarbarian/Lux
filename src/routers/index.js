import React from 'react'
import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom'

import CounterContainer from '@/containers/CounterContainer'
import AppContainer from '@/containers/AppContainer'
import HomeContainer from '@/containers/HomeContainer'
import NoMatchContainer from '@/containers/NoMatchContainer'
import FormContainer from '@/containers/SimpleFormContainer'
const routes = (
  <HashRouter>
    <AppContainer>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path='/counter' component={CounterContainer} />
        <Route path='/form' component={FormContainer} />
        <Route component={NoMatchContainer} />
      </Switch>
    </AppContainer>
  </HashRouter>
)

export default routes
