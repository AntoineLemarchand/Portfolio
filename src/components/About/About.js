import React, { Component } from 'react';
import  './About.css';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="About">
        <h1>About Me</h1>
        <p>
        {
          resumeData.aboutme
        }
        </p>
      </section>
    );
  }
}
