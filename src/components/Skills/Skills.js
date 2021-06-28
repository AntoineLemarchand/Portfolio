import React, {Component} from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

export default class Skills extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="Skills">
        <h1>My Skillset</h1>
        <div id="Skillset">
          {
            resumeData.skills && resumeData.skills.map((item)=> {
              return(
                  <div className="Skill">
                    <FontAwesomeIcon className="Icon" icon={[`${item.classType}`,`${item.className}`]}/>
                    <p>{item.skillname}</p>
                  </div>
              )
            })
          }
        </div>
      </section>
    )
  }
}
