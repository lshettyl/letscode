import React, { Component } from 'react';
import Search from './Search'
import Status from './Status'

export default class TflBusStatus extends Component {

  constructor(props) {

    super(props);
    this.state = {
      searchKeyword: null
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(refs) {

    this.setState({searchKeyword: refs.busNumber.value});
  }

  render() {

    return (

      <div className="tfl-bus-status">
        <Search searchKeyword={this.state.searchKeyword} searchFunc={this.handleSearch} />
        <Status {...this.state} {...this.props} />
      </div>

    );
  }
}
