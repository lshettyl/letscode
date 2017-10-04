import React, { Component, Children } from 'react';

export default class Parent extends Component {

  constructor() {

    super();
    this.state = {};
  }

  render() {

    const childrenUsingMap = Children.map(this.props.children, child => {
      return <div className="round-image">{child}</div>
    });

    const childrenUsingForEach = [];
    Children.forEach(this.props.children, (child, index) => {

      if (child.props['data-is-hidden'] !== true) {
        childrenUsingForEach.push(<div key={index} className="round-image">{child}</div>)
      }
    });

    return (

      <div className="parent">

        <h3>Total children: {Children.count(this.props.children)}</h3>
        {childrenUsingMap}
        <hr />
        {childrenUsingForEach}

      </div>

    );
  }
}
