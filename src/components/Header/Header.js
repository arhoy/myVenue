import React, {Component} from 'react';

// Custom Comp
import classes from './Header.css';
//import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import SideDrawer from './SideDrawer/SideDrawer';

// Material UI Comp
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton'


class Header extends Component {

    state = {
        drawerOpen: false,
        hasScrolled: false
    }

    componentDidMount(){
        window.addEventListener('scroll',this.scrollEventHandler)
    }

    scrollEventHandler = () =>{
        if(window.scrollY > 0){
           // console.log('I am scrolling you');
            this.setState({hasScrolled:true})
        }
        else{
            this.setState({hasScrolled:false})
        }
    }
    toggleDrawer = () => {
        this.setState({drawerOpen:!this.state.drawerOpen})
        // console.log('I am being toggled!');
    }
    render(){
        return (
            <div className = {classes.Header}>
                <AppBar className = {classes.AppBar}
                    position = 'fixed'
                    style ={{
                        backgroundColor: this.state.hasScrolled ? 'rgba(41, 0, 102,0.8)' : 'transparent'
                    }}
                >
        
                    <Toolbar className = {classes.Toolbar}>
                        <Logo/>
                        <IconButton className= {classes.IconButton}  aria-label="Menu"
                                onClick = {this.toggleDrawer}
                        >
        
                                <MenuIcon/>
        
                        </IconButton>
             
                    </Toolbar>
                </AppBar>
        
                <SideDrawer
                    open = {this.state.drawerOpen}
                    onClose = {this.toggleDrawer}
                />
            </div>
            ) 
    }
}
   
export default Header;
  