import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

library.add(fas);

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData
    return (
      <header className="Header">
      <div id="Logo">
        <img src="build/images/logo1.svg" alt="Logo"/>
        <p>Antoine Lemarchand</p>
      </div>
      <div id="navs">
        <div id="mobileNav">
          <input id="burger" type="checkbox"/>
          <label id="open" for="burger">
            <FontAwesomeIcon id="open" icon={["fas","bars"]}/>
          </label>
          
          <div id="navContent">
            <label for="burger">
              <FontAwesomeIcon id="close" icon={["fas","times"]}/>
            </label>
            <div id="items">
            {
              resumeData.header && resumeData.header.map((item)=>{
                return (
                  <div className="navitem">
                    <AnchorLink href={`${item.href}`}>{item.name}</AnchorLink>
                  </div>
                );
              })
            }  
            </div>
          </div>
        </div>
        <div id="nav">
          {
              resumeData.header && resumeData.header.map((item)=>{
                return (
                  <div className="navitem">
                    <AnchorLink href={`${item.href}`}>{item.name}</AnchorLink>
                  </div>
                );
              })
          }
        </div>
      </div>
      </header>
    )
  }
}
