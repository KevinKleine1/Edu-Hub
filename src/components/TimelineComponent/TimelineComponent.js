import React, {Component} from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Link} from 'react-router-dom';

//Class which creates the nodes in our timeline

class TimelineComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.type == "addImage"){
      var farbe = 'rgb(127, 140, 141)';
    }
      else if(this.props.type == "addDocument"){
        var farbe = 'rgb(127, 140, 141)';
      }
      else if(this.props.type == "newComment"){
        var farbe = 'rgb(52, 152, 219)';
      }
      else if(this.props.type == "addTermin"){
        var farbe = 'rgb(231, 76, 60)';
      }
      else if(this.props.type == "bemember"){
        var farbe = 'rgb(46, 204, 113)';
      }
      else if(this.props.type == "cancelmembership"){
        var farbe = 'rgb(46, 204, 113)';
      }
  
    return (<VerticalTimelineElement className="vertical-timeline-element--education" iconStyle={{
        background: farbe,
        color: '#fff'
      }} animate={true}>
      <Link to={{
          pathname: '/projectpage/' + this.props.projectid
        }}>
        <h3 className="vertical-timeline-element-title">{this.props.name}</h3>
      </Link>
      <Link to={{
          pathname: '/user/' + this.props.authormail,
          state: {
            userid: this.props.userid
          }
        }}>
        <h4 className="vertical-timeline-element-subtitle">{this.props.authorvorname} {this.props.authorname}</h4>
      </Link>
      <p>
        {this.props.text}
      </p>
    </VerticalTimelineElement>)
  }
}

export default TimelineComponent;