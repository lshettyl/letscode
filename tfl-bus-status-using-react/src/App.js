import React, { Component } from 'react';
import TflBusStatus from './components/TflBusStatus'

export default class App extends Component {

  constructor() {

    super();
    this.state = {
      busStatusData: []
    }
  }

  componentWillMount() {

    // Would probably never use this function
    // as it's not a good idea to act on a component that is not mounted yet
  }

  componentDidMount() {

    // The most common use is to load up data from APIs and so on via ajax
    fetch("https://api.tfl.gov.uk/line/mode/bus/status")
    .then(stream => stream.json())
    .then(busStatusData => busStatusData.map(entry => {

      let {
        statusSeverityDescription = null,
        reason = null,
        validityPeriods = null
      } = entry.lineStatuses[0];
      let {
        categoryDescription = null,
        description = null
      } = entry.lineStatuses[0].disruption || {};
      let {
        fromDate = null,
        toDate = null
      } = entry.lineStatuses[0].validityPeriods[0] || {};

      return {
        busNumber: entry.id,
        statusSeverityDescription,
        reason,
        categoryDescription,
        description,
        fromDate,
        toDate
      }
    }))
    .then(busStatusData => this.setState({busStatusData}));
  }

  componentWillReceiveProps(nextProps) {

    // Place to check if things have changed by comparing nextProps against this.props
    // such as:
    // if (nextProps.x !== this.props.x) {
    //   things have changed. Hence, act on it.
    // }
    // Not called on initial render as there aren’t any old props to compare to!
  }

  shouldComponentUpdate(nextProps, nextState) {

    // Place to determine whether or not the component needs to be updated
    // Must always return a boolean
    // such as:
    // return this.props.x !== nextProps.x || nextState.y !== this.state.y;
    return true;
  }

  componentWillUpdate() {

    // If at all we need to do anything before re-rendering the compnent
  }

  componentDidUpdate() {

    // Place where we do stuff post render, such as updating DOM
  }

  componentWillUnmount() {

    // This is mostly for garbge collection (cleaning up any leftover debris), such as removing event listeners and so on.
  }

  render() {

    console.log(this.state.busStatusData);
    return (

      <TflBusStatus {...this.state} />

    );
  }
}
