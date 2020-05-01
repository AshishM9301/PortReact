import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './content/Home'
import AboutPage from './content/AboutPage'
import ContactPage from './content/ContactPage'

const Main=()=> (
    <Switch>
        <Route exact path="/" component={Home} />
        
        <Route exact path="/about" component={AboutPage} />
        
        
    </Switch>
)

export default Main;