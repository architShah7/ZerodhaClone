import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>Universe</h1>
        <p>Explore the Zerodha universe of products and services</p>

    
        <div className="col-4 p-3">
          <img src="media/images/smallcaseLogo.png" alt="" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
          <div className="col-4 p-3">
          <img src="media/images/streakLogo.png" alt="" style={{width:"40%"}} />
          <p className="text-small text-muted">Algo & Strategy platform</p>
        </div>
          <div className="col-4 p-3">
          <img src="media/images/sensibullLogo.svg" alt="" style={{width:"40%"}} />
          <p className="text-small text-muted">Options Trading Platform</p>
        </div>  
        <div className="col-4 p-3">
          <img src="media/images/zerodhaFundhouse.png" alt="" style={{width:"40%"}} />
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/goldenpiLogo.png" alt="" />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/dittoLogo.png" alt="" style={{width:"40%"}} />
          <p className="text-small text-muted">Insurance</p>
        </div>
   
      </div>
    </div>
  );
}

export default Universe;
