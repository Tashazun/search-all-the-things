import React, { Component } from 'react';

export default class Paging extends Component {

  handlePage(increment) {
    const { page, onPage } = this.props; //eslint-disable-line
    onPage({ page: page + increment });
  }

  render() {
    const { totalResults, page } = this.props; //eslint-disable-line
    
    if(!totalResults) return <div>Squanch a name</div>;

    const totalPages = Math.ceil(totalResults / 20);
    return (
      <div>
        <span>Page {page} of {totalPages}</span>
        &nbsp;
        <button onClick={() => this.handlePage(-1)} disabled={page === 1}>&lt; Prev</button>
        <button onClick={() => this.handlePage(+1)} disabled={page === totalPages}>Next &gt;</button>
      </div>
    );
  }
}