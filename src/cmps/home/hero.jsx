import React from "react";
import HomeSVG1 from "../../assets/svgs/bg-pattern-home-1.svg";
import HomeSVG2 from "../../assets/svgs/bg-pattern-home-2.svg";

export function Hero() {
  return (
    <section className="hero center flex">
      <img
        className="top-left-svg svg"
        src={HomeSVG1}
        alt="circle illustration"
      />
      <div className="hero-container flex">
        <h1>
          Find the <br />
          best <span>talent</span>
        </h1>
        <div className="p-container flex column">
          <div className="rect" />
          <p>
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
          <img
            className="svg bottom-right-svg"
            src={HomeSVG2}
            alt="circle illustration"
          />
        </div>
      </div>
    </section>
  );
}
