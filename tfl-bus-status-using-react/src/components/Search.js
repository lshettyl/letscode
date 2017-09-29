import React, { Component } from 'react';

export default class Search extends Component {

  constructor(props) {

    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {

    this.props.searchFunc(this.refs);
  }

  render() {
    return (
      <div className="search-box">
        {/*<h3>Enter bus number:</h3>-->*/}
        <input
          type="text"
          placeholder="Enter bus number"
          ref="busNumber"
          onKeyUp={this.handleSearch} />
      </div>
    )
  }
}
