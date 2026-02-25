import React from "react";

function RightSection({  
  imageUrl,
  productName,
  productDescription,
  learnMore
 }) {
  return (
    <div className="container mt-5">
      <div className="row">


        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p style={{ lineHeight: "1.8" }}>{productDescription}</p>

          <div>
            <a
              href={learnMore}
              style={{ textDecoration: "none" }}
            >
              Learn More <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>

         
        </div>

        <div className="col-6">
          <img src={imageUrl} alt="" />
        </div>

        
      </div>
    </div>
  );
}

export default RightSection;