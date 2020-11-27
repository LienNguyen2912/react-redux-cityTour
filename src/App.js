import React, {Component} from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.scss';
import TourList from './components/TourList/TourList'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import {Route, BrowserRouter, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={TourList}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/contact' component={Contact}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
