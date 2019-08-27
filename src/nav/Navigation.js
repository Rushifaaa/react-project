import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <Router>
               <div class="nav-div">
                   <ul>
                       <li>
                           <Route exact to="/">Home</Route>
                       </li>
                   </ul>
               </div>
            </Router>
        );
    }
}   