import React from 'react';

function Hero() {
    return ( 

        <section className='container-fluid p-4' id="support-hero">

            <div className="p-3" id="support-hero-content">
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>

            <div className=" row p-3 m-3">
                <div className="col-6">
                    <h4 className='fs-5'>Search for an answer or browse help topics to create a ticket</h4>
                    <input type="text" placeholder='how do I activate F&O?'/>
                    <br />
                    <div className='p-2'>
                    <a href="" style={{ paddingRight: "10px"}}>Track Account Opening</a>
                    <a href="" style={{ paddingRight: "10px"}}>Track Segment Activation</a>
                    <a href="" style={{ paddingRight: "10px"}}>Intraday Margins</a> <br />
                    <a href="" style={{ paddingRight: "10px"}}>Kite User Manual</a>
                    <a href="" style={{ paddingRight: "10px"}}>Track Tickets</a>

                    </div>

                </div>

                <div className="col-6 p-3">
                    <h1 className='fs-3'>Featured</h1>
                    <ol> 
                        <li> <a href="">Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href="">Latest Intraday Leverages - MIS & CO</a></li>
                        
                    </ol>
                   
                </div>
                
            </div>
        </section>
       
     );
}

export default Hero;