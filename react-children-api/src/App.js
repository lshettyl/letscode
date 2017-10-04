import React, { Component } from 'react';
import Parent from './components/Parent.js'

export default class App extends Component {

  constructor() {

    super();
  }

  render() {

    return (
      <Parent>
        <img src="http://via.placeholder.com/100x100" />
        <img data-is-hidden={true} src="http://via.placeholder.com/200x200" />
        <img src="http://via.placeholder.com/150x150" />
        <img src="http://via.placeholder.com/250x250" />
        <img data-is-hidden={true} src="http://via.placeholder.com/200x200" />
      </Parent>
    );
  }
}
