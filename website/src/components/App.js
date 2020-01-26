import React, { Fragment, Component } from 'react';
import '../css/style.css';
import Header from '../components/Header';
import WorkBox from '../components/WorkBox';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header
          name="Aman Ruzaini"
          description="I'm a visual designer based in Cyberjaya, Malaysia. Currently working at Astro Radio."
        />
        <div className="container-fluid body">
          <div className="row justify-content-center align-items-center">
            <WorkBox />
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
