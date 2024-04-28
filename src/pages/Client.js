import React from 'react';
import img2 from "../img/clients/client-1.png"
import img3 from "../img/clients/client-2.png"
import img4 from "../img/clients/client-3.png"
import img5 from "../img/clients/client-4.png"
import img6 from "../img/clients/client-5.png"
import img7 from "../img/clients/client-6.png"


const Clients = () => {
  return (
    <section id="clients" className="clients section-bg">
      <div className="container">
        <div className="row" data-aos="zoom-in">
          {/* Repeat this block for each client */}
          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={img2} className="img-fluid" alt="" />
          </div>
          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={img3} class="img-fluid" alt="" />
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={img4} class="img-fluid" alt="" />
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={img5} class="img-fluid" alt="" />
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={img6} class="img-fluid" alt="" />
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={img7} class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
