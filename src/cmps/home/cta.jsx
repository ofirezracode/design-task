import React from "react";
import HomeSVG6 from "../../assets/svgs/bg-pattern-home-6-about-5.svg";

export function CTA() {
  return (
    <section className="cta flex center">
      <p>Ready to get started?</p>
      <button className="contact-btn">contact us</button>
      <img className="svg" src={HomeSVG6} alt="circle illustration" />
    </section>
  );
}
