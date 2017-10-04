import React, { Component } from 'react';
import './LoaderHOC.css';

const LoaderHOC = (propName) => (WrappedComponent) => {

  return class LoaderHOC extends Component {

    componentDidMount() {
      this.startTime = Date.now();
    }
    componentWillUpdate() {
      this.endTime = Date.now();
    }

    isEmpty(prop) {
      return (
        prop === null ||
        prop === undefined ||
        (prop.hasOwnProperty('length') && prop.length === 0) ||
        (prop.constructor === Object && Object.keys(prop).length === 0)
      );
    }

    render() {

      const newProps = {
        loadTime: ((this.endTime - this.startTime) / 1000).toFixed(2)
      };
      // So, this.props.loadTime is now available in the WrappedComponent

      return this.isEmpty(this.props[propName]) &&
             <div class="loader-wrap"><div class="loader">Loading...</div></div> ||
             <WrappedComponent {...this.props} {...newProps} />

    }

  }

};

export default LoaderHOC;
