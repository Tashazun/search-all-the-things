import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Rick and Morty!</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
            <Route path="/characters" render={() => <li>only on characters!</li>}/>
          </ul>
        </nav>
      </header>
    );
  }
}