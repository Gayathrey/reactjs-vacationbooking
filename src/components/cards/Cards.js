import React, { Fragment } from "react";
import vietnam from "../../assets/images/vietnam.jpg";
import thailand from "../../assets/images/thailand.jpg";
import indonesia from "../../assets/images/indonesia.jpg";
import phillipines from "../../assets/images/phillipines.jpg";
const Cards = () => {
  return (
    <Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src={vietnam} alt="" className="img-fluid" />
              <div className="card-body">
                <h4 className="card-title">Vietnam</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                  ipsam fuga aperiam hic nesciunt alias cumque natus esse illum
                  possimus.
                </p>
                <button className="btn btn-dark">Book Now</button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src={thailand} alt="" className="img-fluid" />
              <div className="card-body">
                <h4 className="card-title">Thailand</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                  ipsam fuga aperiam hic nesciunt alias cumque natus esse illum
                  possimus.
                </p>
                <button className="btn btn-dark">Book Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={indonesia} alt="" className="img-fluid" />
              <div className="card-body">
                <h4 className="card-title">Indonesia</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                  ipsam fuga aperiam hic nesciunt alias cumque natus esse illum
                  possimus.
                </p>
                <button className="btn btn-dark">Book Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={phillipines} alt="" className="img-fluid" />
              <div className="card-body">
                <h4 className="card-title">Phillipines</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                  ipsam fuga aperiam hic nesciunt alias cumque natus esse illum
                  possimus.
                </p>
                <button className="btn btn-dark">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cards;
