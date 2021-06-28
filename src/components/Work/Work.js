import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './Work.css';

library.add(fab, fas);

export default class Work extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="Work">
        <h1>Some of my works</h1>
          <div id="Projects">
            {
              resumeData.portfolio && resumeData.portfolio.map((item)=>{
                return (
                  <div className="Project">
                    <div className="Ptop">
                      <p>{item.name}</p>
                      <p>{item.description}</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/images/" + `${item.imgurl}`} alt="img"/>
                    <div className="Pbottom">
                      {
                        (`${item.website}` !== "") &&
                            <a href={`${item.website}`} target="_blank" class="website"><FontAwesomeIcon icon={["fas", "globe"]}/> Website</a>
                      }
                      {
                        (`${item.git}` !== "") &&
                            <a href={`${item.git}`} target="_blank" class="git"><FontAwesomeIcon icon={["fab", "github"]}/> Repo</a>
                      }
                    </div>
                  </div>
                );
              })
            }
          </div>
      </section>
    );
  }
}
