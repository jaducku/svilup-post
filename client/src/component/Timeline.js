import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getTimelines } from '../queries/queries';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Timeline extends Component{
    constructor(props){
      super(props);
      this.state = {
      }
    }
  
    displayTimelines = ()=>{
      var data = this.props.data;
      if(data.loading){
          return( <div>Loading timeline...</div> );
      } else {
        return data.timelines.map(timeline => {
          return (
            <VerticalTimelineElement className="vertical-timeline-element--work"
                                      date={timeline.cDate}>
                                    <h3 className="vertical-timeline-element-title">{timeline.title}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{timeline.subtitle}</h4>
                                    <p>
                                      {timeline.content}
                                    </p>
            </VerticalTimelineElement>
          );
        })
      }
    }

    render=()=>{
      return(
        <VerticalTimeline>
        {this.displayTimelines()}
      </VerticalTimeline>
      );
    }
}

export default graphql(getTimelines)(Timeline);