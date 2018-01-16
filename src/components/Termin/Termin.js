import React, { Component } from 'react'

export default class Termin extends Component {

    constructor(props) {
        super(props);

    }

    formatDate(date_unformatted) {
        var day = date_unformatted.substr(8, 2);
        var month = date_unformatted.substr(5, 2);
        var year = date_unformatted.substr(0, 4);
        var date_formatted = day + '.' + month + '.' + year;
        return date_formatted;
      }
  render() {
     var Datum = this.formatDate(this.props.termin);
    return (
     <div>
        <hr className="transparent mx-3 my-0"/>
            <div className="callout callout-warning m-0 py-3">
              <div className="avatar float-right">
                <img src={'http://backend-edu.azurewebsites.net/' + localStorage.getItem("picture")} className="img-avatar" alt="admin@bootstrapmaster.com"/>
              </div>
              <div>{this.props.parent}: {this.props.name} <strong>{this.props.text}</strong></div>
              <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp;{Datum}</small>
            </div>
    </div>
    )
  }
}
