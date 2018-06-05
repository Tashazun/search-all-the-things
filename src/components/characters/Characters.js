import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

export default class Characters extends Component {
  
  static propTypes = {
    characters: PropTypes.array
  };

  render() {
    const { characters } = this.props;

    return (
      <ul>
        {characters.map(character => <Character key={character.id} {...character}/>)}
      </ul>
    );
  }
}