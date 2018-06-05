import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {

  static propTypes = {
    searchName: PropTypes.string,
    onSearch: PropTypes.func.isRequired
  };

  state = {
    current: this.props.searchName || ''
  };

  componentDidUpdate({ searchName }) {
    if(searchName !== this.state.current) {
      this.setState({ current: searchName || '' });
    }
  }

  handleChange = ({ target }) => {
    this.setState({ current: target.value });
    console.log('Morty', target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.callSearch();
  };

  callSearch() {
    const { current } = this.state;
    if(!current) return;
    this.props.onSearch(current);
  }

  render() {
    const { current } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label>
            Squanch for Rick and Morty Characters: <input value={current} 
              onChange={this.handleChange} 
              name="search" 
              placeholder="Name Here"/>
          </label>
          <label>
            &nbsp;<button>Squanch</button>
          </label>
        </fieldset>
      </form>
    );
  }
}