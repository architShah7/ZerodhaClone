import React from "react";

function Team() {
  return (
    <div className="container">
        <div className="row p-3 mt-5 border-top">
        <h1 className="mt-5 text-center">
          People
        </h1>
      </div>

      <div
        className="row p-3 text-muted fs-6"
        style={{ lineHeight: "1.8", fontSize: "1rem" }}
      >
        <div className="col p-3 text-center">
            <img src="media/images/nithinKamath.jpg" alt="" style={{borderRadius:"100%", width:"50%"}} />
            <h4 className="mt-3">Nithin Kamath</h4>
            <p className="text-muted" style={{fontSize:"0.9rem"}}>Founder, CEO</p>
        </div>
        <div className="col p-4" style={{lineHeight:"1.8"}}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
