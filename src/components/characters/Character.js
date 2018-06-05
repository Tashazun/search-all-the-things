import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Character extends Component {
  
  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.any,
  };

  render() {
    const { id, name, image } = this.props;
    
    return (
      <li>
        <Link to={`/characters/${id}`}>
        <h2>{name}</h2>
        <img src={image}/>
        </Link>
      </li>
    );
  }
}