import React, { Component } from 'react';
import Character from './Character';

export default class Characters extends Component {

  render() {
    const { characters } = this.props; //eslint-disable-line

    return (
      <ul>
        {characters.map((character, i) => (
          <Character key={i} character={character}/>
        ))}
      </ul>
    );
  }
}