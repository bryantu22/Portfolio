import React from 'react';
import Typewriter from 'Typewriter';

class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero-container">
        <Typewriter className="hero-title" text="Bryan_Tu"/>
        <div className="hero-description">
          I am currently studying computer science with an emphasis in software development. I also dedicate a lot of my time to putting out (debatably) interesting content on the internet. Follow my progress by exploring my recent <a href="#projects">projects</a> below.
        </div>
      </div>
    );
  }
}

export default Hero;
