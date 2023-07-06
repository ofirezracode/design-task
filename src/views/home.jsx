import React from "react";
import { Hero } from "../cmps/home/hero";
import { Features } from "../cmps/home/features";
import { Testimonials } from "../cmps/home/testimonials";
import { CTA } from "../cmps/home/cta";
import { AppFooter } from "../cmps/app-footer";

export function Home(props) {
  return (
    <div className="home">
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <AppFooter />
    </div>
  );
}
