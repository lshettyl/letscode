import React, { Component } from 'react';
import {Entry} from './Entry'

export default class Status extends Component {

  constructor(props) {

    super(props);
  }

  render() {

    let entries = (
      (this.props.searchKeyword || "").trim() &&
      this.props.busStatusData.filter(entry => {
        return entry.busNumber.indexOf(this.props.searchKeyword.toLowerCase()) !== -1
      }) ||
      this.props.busStatusData
    ).map(entry => {
      return (
        <Entry key={entry.busNumber} entry={entry} />
      )
    });

    return (

      <div className="search-results">
        {/*<h3>Results:</h3>*/}
        {/*entries.length && entries || "Nothing found!"*/}
        {entries}
      </div>
    )
  }
}
