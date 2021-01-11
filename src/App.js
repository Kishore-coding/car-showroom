import React, { Component } from 'react'
import Home from './components/Home'
import Navbar from "./components/Navbar"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Models from './components/Models'
import Feature from './components/Feature'
import AboutUs from './components/AboutUs'
import CarDetailsPage from './components/CarDetailsPage'
import Backdrop from './components/Backdrop/Backdrop'
import Sidedrawer from "./components/Sidedrawer/Sidedrawer"
import NotFound from './components/NotFound'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       sideDrawerOpen:false
    }
  }
  
  buttonClickHandler=()=>{
    this.setState((prevState)=>{
      return {
        sideDrawerOpen:!prevState.sideDrawerOpen
      }
    })
  }

  backdropClickHandler=()=>{
    this.setState({
      sideDrawerOpen:false
    })
  }

  render() {
    let sidedrawer;
    let backdrop;

    if(this.state.sideDrawerOpen){
      sidedrawer=<Sidedrawer/>
      backdrop= <Backdrop click={this.backdropClickHandler}/>
    }
    
    
    return (
      <div>
        <BrowserRouter>
        <Navbar clickHandler={this.buttonClickHandler}/>
          
        {sidedrawer}
        {backdrop}
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/models" component={Models}/>
            <Route path="/features" component={Feature}/>
            <Route path="/about" component={AboutUs}/>
            <Route path="/product/:id"  component={CarDetailsPage}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
         
          
      </div>
    )
  }
}
