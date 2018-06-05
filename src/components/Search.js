import React, { Component } from 'react';
// import './Search.css';

export default class Search extends Component {

  state = {
    search: ''
  };
  
  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state); //eslint-disable-line
  };

  render() {
    const { search } = this.state;

    return (
      <form className="search-form" onSubmit={event => this.handleSubmit(event)}>
        <label>
          Search For:&nbsp;
          <input value={search} onChange={this.handleChange}/>
        </label>
        <button>Search</button>
      </form>
    );
  }
}