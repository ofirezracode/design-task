import React from "react";
import HomeSVG4 from "../../assets/svgs/bg-pattern-home-4-about-3.svg";
import HomeSVG5 from "../../assets/svgs/bg-pattern-home-5.svg";
import IconQuotes from "../../assets/svgs/icon-quotes.svg";
import User1 from "../../assets/imgs/avatar-kady.jpg";
import User2 from "../../assets/imgs/avatar-aiysha.jpg";
import User3 from "../../assets/imgs/avatar-arthur.jpg";

export function Testimonials() {
  return (
    <section className="testimonials flex column center">
      <img className="svg top-left" src={HomeSVG4} alt="circle illustration" />
      <img
        className="svg bottom-right"
        src={HomeSVG5}
        alt="circle illustration"
      />
      <h2>
        Delivering real results for top <br /> companies. Some of our{" "}
        <span>success stories.</span>
      </h2>
      <ul className="flex">
        <li className="list-item">
          <img className="svg quotation-mark" src={IconQuotes} alt="quotes" />
          <p className="quote">
            “The team perfectly fit the specialized skill set required. They
            focused on the most essential features helping us launch the
            platform eight months faster than planned.”
          </p>
          <p className="person-name">Kady Baker</p>
          <img src={User1} className="person-img" alt="quoted person" />
        </li>
        <li className="list-item">
          <img className="svg quotation-mark" src={IconQuotes} alt="quotes" />
          <p className="quote">
            “We needed to automate our entire onboarding process. The team came
            in and built out the whole journey. Since going live, user retention
            has gone through the roof!”
          </p>
          <p className="person-name">Aiysha Reese</p>
          <img src={User2} className="person-img" alt="quoted person" />
        </li>
        <li className="list-item">
          <img className="svg quotation-mark" src={IconQuotes} alt="quotes" />
          <p className="quote">
            “Amazing. Our team helped us build an app that delivered a new
            experience for hiring a physio. The launch was an instant success
            with 100k downloads in the first month.”
          </p>
          <p className="person-name">Arthur Clarke</p>
          <img src={User3} className="person-img" alt="quoted person" />
        </li>
      </ul>
    </section>
  );
}
