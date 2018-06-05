import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCharacter } from '../../services/rickAndMortyApi';

// import { Link } from 'react-router-dom';

export default class MovieDetail extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    history: PropTypes.object
  };

  state = {
    movie: null
  };

  componentDidMount() {
    getCharacter(this.props.id)
      .then(character => this.setState({ character }));
  }

  handleBack = event => {
    event.preventDefault();
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const { character } = this.state;

    if(character === null) return null;

    return (
      <article className={styles['character-detail']}>
        <div className="container">
          { <a href="" onClick={this.handleBack}>Back</a> }
          <h2>{character.name}</h2>
          <img src={character.image}/>
          <h3>{character.id}</h3>
          <h3>{character.species}</h3>
          <ul>
              <li>{character.status}</li>
              <li>{character.gender}</li>
              <li>{character.origin.name}</li>
              <li>{character.location.name}</li>
          </ul>
        </div>
      </article>
    );
  }
}