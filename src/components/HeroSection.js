import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mov" autoPlay loop muted />
      <h1>Здравјето пред сè</h1>
      <p>Чувстуваш нешто? Провери се!</p>
      <div className="hero-btns">
        <Button
          link="/covid-test"
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Тестирај се
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
