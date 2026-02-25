import React from "react";

function Hero() {
  return (
    <div className="container pt-5 border-bottom mb-5">
      <div className="row text-center">
        <h1 className="fs-2 mb-4">Technology</h1>
        <h3 className="text-muted mb-4" style={{fontSize:"1rem"}}>Sleek, modern and intuitive trading platforms</h3>
        <p style={{fontSize:"0.8rem"}}>Check out our <a href="" style={{textDecoration:"None"}}>investment offerings <i className="fa fa-long-arrow-right"></i></a></p>
      </div>
    </div>
  );
}

export default Hero;
