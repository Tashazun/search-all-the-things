import React, { Component } from 'react';
import Paging from '../paging/Paging';
import { search } from '../../services/movieApi';
import SearchForm from './SearchForm';
import PropTypes from 'prop-types';
import queryString from 'query-string';

const getSearch = location => location ? location.search : '';

export default class Search extends Component {
  
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  state = {
    name: '',
    error: null,
    characters: null,
    page: 1
  };
  componentDidMount() {
    this.searchFromQuery(this.props.location.search);
  }

  componentWillReceiveProps({ location }) {
    const next = getSearch(location);
    const current = getSearch(this.props.location);
    if(current === next) return;
    this.searchFromQuery(next);
  }
  
  searchFromQuery(query) {
    const { search: name, page } = queryString.parse(query);

    this.setState({ name, page: +page });
    if(!name) return;

    search(name, page)
      .then(({ Search }) => {
        this.setState({ characters: Search });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  makeSearch = () => {
    this.setState({ error: null });
    const { name, page } = this.state;
    
    const query = {
      search: name || '',
      page: page || 1
    }

    this.props.history.push({
      search: queryString.stringify(query)
    });
  };

  handleSearch = name => {
    this.setState({ 
      error: null,
      name,
      page: 1
    }, this.makeSearch);
  };

  handlePage = page => {
    this.setState({ 
      error: null,
      page
    }, this.makeSearch);
  }
  

 
  render() {
    const { characters, error, name, page } = this.state;

    return (
      <div>
        <SearchForm name={name} onSearch={this.handleSearch}/>
        {error && <div>{error}</div>}
        <Paging page={page} onPage={this.handlePage}/>
        {(!error && characters) && <Characters characters={characters}/>}
      </div>
    );
  }
}