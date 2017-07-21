import React, { Component } from 'react'
import './App.css'
import HomePage from './HomePage'
import SignUp from './SignUp'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from "./Header"
import {Provider} from "react-redux"
import store from "./redux/store"


class App extends Component {

  render() {
    return (
      <Provider store ={store}>
      <Router>
        <div>
          <Header/>
          <Switch>
           <Route exact path="/" component={HomePage} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>
      </Provider>
    )
  }
}

export default App