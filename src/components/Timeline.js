import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    const eventsComponents = this.props.eventsList.map((oneEvent) => {
      return (
        <TimelineEvent
          person={oneEvent.person}
          status={oneEvent.status}
          timeStamp={oneEvent.timeStamp}
        />
      );
    });
    return(
      <section className="timeline">{eventsComponents}</section>
    );
  }
}

export default Timeline;
