import React, {Component} from 'react';
import '../styles/SavedReps.css';

class SavedReps extends Component {
  render(){
    return(
      <div className="Representatives">
        <div className="repCard">
          <h2>{this.props.name}</h2>
          <p className="riding">{this.props.office}</p>
          <p>{this.props.riding}</p>
          <p>{this.props.party}</p>
          <div className="repContact clearfix">
            <a href={this.props.phone}><i className="fas fa-phone" aria-hidden="true"></i><span className="sr-only">Call {this.props.name}</span>{this.props.phone}</a>
            <a href={this.props.email}><i className="fas fa-envelope" aria-hidden="true"></i><span className="sr-only">Email {this.props.name}</span>{this.props.email}</a>
            {(this.props.url) ?
              (<a href={this.props.url} className="url">Visit {this.props.name}'s website</a>) : (<a href={this.props.personalUrl} className="url">Visit {this.props.name}'s website</a>)
            }
          </div>
        </div>
      </div>
    )
  }
}

export default SavedReps;