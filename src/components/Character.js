import React, { Component } from 'react';

export default class Character extends Component {

  render() {
    const { name, status, species, image, url } = this.props.character; //eslint-disable-line
    
    return (
      <li>
        <h2>{name}</h2>
        <img src={image}/>
        <p>{status}</p>
        <p>{species}</p>
        <a href={url} target="_blank">view</a>
      </li>
    );
  }
}