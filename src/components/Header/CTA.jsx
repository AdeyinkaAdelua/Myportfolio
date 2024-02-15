import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        data-aos="fade-right"
        target="_blank"
        href="https://docs.google.com/document/d/1_b7SNIa1UklF0ytGdkdGDeziESI2XXLz/edit?usp=sharing&ouid=112708169749841269044&rtpof=true&sd=true"
        className="btn"
        rel="noreferrer"
      >
        Resume
      </a>
      <a data-aos="fade-left" href="#contact" className="btn btn-primary">
        Let's Connect
      </a>
    </div>
  );
};

export default CTA;
