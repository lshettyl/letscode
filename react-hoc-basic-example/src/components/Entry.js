// A dumb/stateless/presentational Component
import React from 'react';
import moment from 'moment';

export const Entry = (props) => {

  let statusDescription = () => {

    if (props.entry.statusSeverityDescription.indexOf('Special') !== -1) {

      return (

        <div className="bus-status-details">
          <div className="bus-status-category"><span>Category:</span>{props.entry.categoryDescription}</div>
          <div className="bus-status-reason"><span>Description:</span>{props.entry.reason}</div>
          <div className="bus-status-date">Start time: {moment(props.entry.fromDate).format('MMM Do YYYY, h:mma')} <br />End Time: {moment(props.entry.toDate).format('MMM Do YYYY, h:mma')}</div>
        </div>

      );

    }
  }

  return (
    <div className={'entry ' + props.entry.statusSeverityDescription.toLowerCase().replace(/\s+/g, '-')}>
      <div className="bus-number">{props.entry.busNumber}</div>
      <div className="bus-status">
        {props.entry.statusSeverityDescription}
      </div>
      {statusDescription()}
    </div>
  )
};
