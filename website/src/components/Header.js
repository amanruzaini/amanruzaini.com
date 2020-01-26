import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="sticky-top">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center header">
            <div className="offset-md-0 col-12 col-md-10">
              <h1>{this.props.name}</h1>
              <p>{this.props.description}</p>
              <a href="mailto:amanruzaini@gmail.com">
                <i className="fas fa-at"></i>
              </a>
              <a href="https://dribbble.com/amanruzaini">
                <i className="fab fa-dribbble"></i>
              </a>
              <a href="https://www.linkedin.com/in/amanruzaini/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://amanruzaini.com/resume-amanruzaini2019.pdf">
                <i className="fas fa-briefcase"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
