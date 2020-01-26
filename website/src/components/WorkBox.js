import React, { Component } from 'react';

class WorkBox extends Component {
  render() {
    return (
      <div className="col-12 col-md-5 mt-2">
        <img
          src="images/thumb-hitz-app.png"
          className="img-fluid"
          alt="HITZ Mobile App"
        />
        <div className="card-text">
          <div className="title">
            <h4>HITZ Mobile App</h4>
          </div>
          <div className="description">
            <p>UI & UX Design for HITZ Mobile App mock design.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkBox;
