import React from "react";
import './Hero.scss'

const Hero = ({ adLink }) => {
	const handleClick = () => {
		window.open(adLink)
	}

	return (
    <div className="box" onClick={handleClick}>
      <div className="inner-box">
        <h1 className="slogan">StatusCode Weekly</h1>
        <p className="description">
          A weekly newsletter focusing on software development, infrastructure,
          the server, performance, and the stack end of things.
        </p>
      </div>
    </div>
  );
};

export default Hero;
