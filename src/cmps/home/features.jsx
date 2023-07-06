import React from "react";
import HomeSVG3 from "../../assets/svgs/bg-pattern-home-3.svg";
import SVGChart from "../../assets/svgs/icon-chart.svg";
import SVGCog from "../../assets/svgs/icon-cog.svg";
import SVGPerson from "../../assets/svgs/icon-person.svg";

export function Features() {
  return (
    <section className="features">
      <header className="header-container flex column">
        <div className="rect" />
        <h2>
          Build & manage
          <br />
          distributed teams
          <br />
          like no one else.
          <br />
        </h2>
      </header>
      <ul className="flex">
        <li>
          <div className="list-item">
            <img className="svg" src={SVGPerson} alt="person line drawing" />
            <div className="text-container">
              <h3>Experienced Individuals</h3>
              <p>
                Our network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="list-item">
            <img className="svg" src={SVGCog} alt="cog line drawing" />
            <div className="text-container">
              <h3>Easy to Implement</h3>
              <p>
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="list-item">
            <img className="svg" src={SVGChart} alt="chart line drawing" />
            <div className="text-container">
              <h3>Enhanced Productivity</h3>
              <p>
                Our customized platform with in-built analytics helps you manage
                your distributed teams.
              </p>
            </div>
          </div>
        </li>
      </ul>
      <img className="svg" src={HomeSVG3} alt="circle illustration" />
    </section>
  );
}
