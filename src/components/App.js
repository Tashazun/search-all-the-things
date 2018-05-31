import React, { Component } from 'react';
import { search } from '../services/rickAndMortyApi';
import Search from './Search';
import Paging from './Paging';
import Character from './Character';
import Characters from './Characters';

export default class App extends Component {

    state = {
        name: '',
        loading: false,
        error: null,
        totalResults: 0,
        page: 1,
        perPage: 20,
        characters: []
      };

      searchCharacters = () => {
        const { name, page, perPage } = this.state;
    
        this.setState({ loading: true });
        
        search({ name }, { page, perPage })
          .then(({ characters, totalResults }) => {
            this.setState({ characters, totalResults, error: null });
          }, error => {
            this.setState({ error });
          })
          .then(() => this.setState({ loading: false }));
    
      };

      handleSearch = ({ search }) => {
        this.setState({ topic: search }, this.searchNews);
      };
    
      handlePage = ({ page }) => {
        this.setState({ page }, this.searchNews);
      };

    render() {
        const { characters, loading, totalResults, page, perPage, error } = this.state;


        return (
            <div>
            <header>
              <div className="header-container">
                <h1>Rick and Morty Characters</h1>
              </div>
              <div className="search-container">
                <Search onSearch={this.handleSearch}/>
              </div>
            </header>
            <main>
              <section className="notifications">
                {loading && <div>Loading...</div>}
                {error && <div>Error :( {error.message}</div>}
              </section>
              <section>
                <Paging 
                  totalResults={totalResults}
                  page={page}
                  perPage={perPage}
                  onPage={this.handlePage}/>
                <Characters characters={characters}/>
              </section>
            
            </main>
          </div>
        );
      }
    };
