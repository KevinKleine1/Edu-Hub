import React, {Component} from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Link} from 'react-router-dom';


class TimelineComponent extends React.Component {
constructor(props) {
    super(props);
  }

  render() {
    return (

<VerticalTimelineElement
className="vertical-timeline-element--education"

iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
animate={true}
>
<Link to={{pathname: '/projectpage/' + this.props.projectid}}>
<h3 className="vertical-timeline-element-title">{this.props.name}</h3>
</Link>
<Link to={{pathname: '/user/' + this.props.authormail, state: {userid: this.props.userid} }}>
<h4 className="vertical-timeline-element-subtitle">{this.props.authorvorname} {this.props.authorname}</h4>
</Link>
<p>
{this.props.text}
</p>
</VerticalTimelineElement>
    )
  }
}

export default TimelineComponent;