import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import Spinner from './components/Spinner';
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {

state={
  progress:10
}

setProgress=(progress)=>{
  this.setState({progress:progress})
}

  render() {
    return (
      <div>
      <Router>
        <Navbar/>
        <LoadingBar
        color='yellow'
        progress={this.state.progress}
        height={3}
      />
        <Routes>
        <Route exact path="/"  key="general"  element = {<div className="container text-center"><News setProgress={this.setProgress} key="general" pageSize={6} country="in" category="general"/></div>}/>
        <Route exact path="/business" key="business"  element = {<div className="container text-center"><News setProgress={this.setProgress} key="business" pageSize={6} country="in" category="business"/></div>}/>
        <Route exact path="/entertainment" key="entertainment"  element = {<div className="container text-center"><News setProgress={this.setProgress} key="entertainment" pageSize={6} country="in" category="entertainment"/></div>}/>
        <Route exact path="/health"  key="health" element = {<div className="container text-center"><News setProgress={this.setProgress} key="health" pageSize={6} country="in" category="health"/></div>}/>
        <Route exact path="/science"  key="science" element = {<div className="container text-center"><News setProgress={this.setProgress}  key="science" pageSize={6} country="in" category="science"/></div>}/>
        <Route exact path="/sports" key="sports"  element = {<div className="container text-center"><News setProgress={this.setProgress} key="sports" pageSize={6} country="in" category="sports"/></div>}/>
        <Route exact path="/technology"  key="technology" element = {<div className="container text-center"><News setProgress={this.setProgress} key="technology" pageSize={6} country="in" category="technology"/></div>}/>
        </Routes>
        </Router>
        <Footer/>
      </div>
    )
  }
}

