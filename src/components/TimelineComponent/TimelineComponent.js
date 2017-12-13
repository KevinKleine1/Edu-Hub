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
<h3 className="vertical-timeline-element-title">{this.props.name}</h3>
<h4 className="vertical-timeline-element-subtitle">Oemer</h4>
<p>
{this.props.text}
</p>
</VerticalTimelineElement>
    )
  }
}

export default TimelineComponent;