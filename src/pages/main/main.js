import React from 'react'
import { Switch, Route } from 'react-router-dom'
import classes from './main.css';
import page_home from './page_home/page_home';
import page_about from './page_about/page_about';
import page_countdown from './page_countdown/page_countdown';
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main className = {classes.main}>
    <Switch>
      <Route exact path='/' component={page_home}/>
      <Route exact path='/count-down-timer' component={page_countdown}/>
      <Route exact path='/about' component={page_about}/>
    </Switch>
  </main>
)

export default Main
