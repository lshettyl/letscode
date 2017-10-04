import React, { Component } from 'react';
import Search from './Search'
import Status from './Status'
import LoaderHOC from './../hoc/LoaderHOC';

class TflBusStatus extends Component {

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

export default LoaderHOC('busStatusData')(TflBusStatus);
