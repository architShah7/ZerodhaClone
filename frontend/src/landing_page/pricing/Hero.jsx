import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1 className="fs-1 mb-3">Pricing</h1>
        <p className="fs-5" style={{ color: "#9b9b9b" }}>
          List of all charges and taxes
        </p>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col text-center">
          <img src="media/images/pricing0.svg"
          className="p-3" alt="pricing 0" />
          <h2 className="fs-2 mb-4">Free equity delivery</h2>
          <p className="fs-6" style={{ color: "#666" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.{" "}
          </p>
        </div>
        <div className="col text-center">
          <img
            src="media/images/intradayTrades.svg"
            className="p-3"
            alt="pricing 0"
          />
          <h2 className="fs-2 mb-4">Intraday and F&O trades</h2>
          <p className="fs-6" style={{ color: "#666" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.{" "}
          </p>
        </div>
        <div className="col text-center">
          <img src="media/images/pricing0.svg" className="p-3"alt="pricing 0" />
          <h2 className="fs-2 mb-4">Free direct MF</h2>
          <p className="fs-6" style={{ color: "#666" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
