import React, { Component } from 'react';
import classes from './Search.css';
import Items from './Items/Items';
import JSON from '../../resources/data/db.json';
class Search extends Component {
    state = {
        events: JSON,
        filtered:[],
        keyword: ''
    }

    inputEventHandler = (e) =>{
        const keyword = e.target.value;
        // read up on filtered and indexOf Es6 MDN and do this !!
        const filtered = this.state.events.filter(word => {
            return(
                word.title.toLowerCase().includes(keyword.toLowerCase()) || 
                word.date.toLowerCase().includes(keyword.toLowerCase()) || 
                word.location.toLowerCase().includes(keyword.toLowerCase()) 
               
            )
          
        });
  
        this.setState({filtered,keyword})
  
    }

    render() {
        let noSearchRes = '';
        if(this.state.keyword !== '' && this.state.filtered.length === 0){
            noSearchRes = 'No Search Results'
        }
        return (
            <div className = {classes.Search}>
                
                <h2>Upcoming Events</h2>
                <input onChange = {this.inputEventHandler} type="text" placeholder = "search for event"/>
                
                <Items items = {this.state.keyword === '' ? this.state.events : this.state.filtered}/>
                <div className = {classes.noResults}>{noSearchRes}</div>
                
            </div>
        );
    }
}

export default Search;