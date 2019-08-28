import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './Navigation.css';

//Component Imports
import App from './../home/App';
import About from './../about/About'

class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <navItem>

                </navItem>
            </nav>
            <Link to="/"><p><strong>Home</strong></p></Link>
            <Link to="/about"><p><strong>About</strong></p></Link>

            
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            
        );
    }
    
}   
export default Navigation;