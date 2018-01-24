import React, {Component} from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Link} from 'react-router-dom';

//Class which creates the nodes in our timeline

class ProfileComponent extends React.Component {
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
      else if(this.props.type == "changeTitle"){
        var farbe = 'rgb(18, 155, 155)';
      }
      else if(this.props.type == "changeDescription"){
        var farbe = 'rgb(18, 155, 155)';
      }
      else if (this.props.type == "addComment"){
        var farbe = 'rgb(90, 249, 62)';
      }
      else if (this.props.type == "beeditor"){
        var farbe = 'rgb(43, 78, 216)';
      }
      else if(this.props.type == "deleteeditor"){
        var farbe = 'rgb(252, 176, 0)';
      }
      else if(this.props.type == "addlike"){
        var farbe = 'rgb(220, 120, 20)';
      }
      else if(this.props.type == "changeRights"){
        var farbe = 'rgb(225, 100, 80)';
      }
      else if(this.props.type == "cancelfavorite"){
        var farbe = 'rgb(190, 100, 80)';
      }
      else if(this.props.type == "befavorite"){
        var farbe = 'rgb(190, 100, 80)';
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

export default ProfileComponent;