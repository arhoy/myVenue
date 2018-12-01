import React, { Component } from 'react';
import Header from './components/Header/Header';
//import Main from  './pages/main/main';
import Featured from './components/Featured/Featured';
import VenueInfo from './components/VenueInfo/VenueInfo';
import Highlights from './components/HighLights/Highlights';
import Pricing from './components/Pricing/Pricing';
import GoogleMaps from './components/UI/GoogleMaps/GoogleMaps';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import classes from './App.css';
import {Element} from 'react-scroll';

class App extends Component {
  render() {
    return (
      <div className= {classes.App}>
            <div className = {classes.App__header}>
               <Header/>
            </div>
        
            <div className = {classes.App__featured}>
              <Element name = "featured">
               <Featured/>
              </Element>
            </div>
            <div className = {classes.App__venueInfo}>
              <Element name = "venueInfo">
                <VenueInfo/>
              </Element> 
            </div>
            <div className = {classes.App__highlights}>
              <Element name = "highlights">
                <Highlights/>
              </Element> 
            </div>
            <div className = {classes.App__pricing}>
              <Element name = "pricing">
                <Pricing/>
              </Element> 
            </div>
            <div className = {classes.App__googleMaps}>
              <GoogleMaps/>
            </div>
            <div className = {classes.App__search}>
              <Element name = "more">
                <Search/>
              </Element> 
            </div>
            <div className = {classes.App__footer}>
              <Footer/>
            </div>
            
           
      </div>
    );
  }
}

export default App;
