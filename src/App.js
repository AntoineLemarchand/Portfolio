import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './App.css';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Skills from './components/Skills/Skills.js'
import Work from './components/Work/Work.js';
import Contact from './components/Contact/Contact.js';
import DataEN from './dataen';


export default class App extends Component {

    render() {
        return (
            <html>
            <Helmet>
                <meta charSet='utf-8'/>
                <title>Antoine Lemarchand</title>
            </Helmet>
            <body>
                <div className="App">
                    <Header resumeData={DataEN}/>
                    <Home resumeData={DataEN}/>
                    <About resumeData={DataEN}/>
                    <Skills resumeData={DataEN}/>
                    <Work resumeData={DataEN}/>
                    <Contact/>
                </div>
            </body>
            </html>
        );
    }
}
