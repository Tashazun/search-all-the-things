import React, { Component } from 'react';
import Paging from '../paging/Paging';
import Characters from '../characters/Characters';
import { searchCharacter } from '../../services/rickAndMortyApi';
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
    searchName: '',
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
    const { search: searchName, page } = queryString.parse(query);

    this.setState({ searchName, page: +page });
    if(!searchName) return;

    searchCharacter(searchName, page)
      .then(({ search }) => {
        this.setState({ characters: search });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  makeSearch = () => {
    this.setState({ error: null });
    const { searchName, page } = this.state;
    
    const query = {
      name: searchName || '',
      page: page || 1
    };

    this.props.history.push({
      search: queryString.stringify(query)
    });
  };

  handleSearch = searchName => {
    this.setState({ 
      error: null,
      searchName,
      page: 1
    }, this.makeSearch);
  };

  handlePage = page => {
    this.setState({ 
      error: null,
      page
    }, this.makeSearch);
  };
  

 
  render() {
    const { characters, error, searchName, page } = this.state;
    console.log(characters);
    return (
      <div>
        <SearchForm searchName={searchName} onSearch={this.handleSearch}/>
        {error && <div>{error}</div>}
        <Paging page={page} onPage={this.handlePage}/>
        {(!error && characters) && <Characters characters={characters}/>}
      </div>
    );
  }
}