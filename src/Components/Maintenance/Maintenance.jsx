import React from "react";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const Maintenance = () => {
  return (
    <section className="maintenance">
      <div className="maintenance-box">
        <div className="maintenance-text">
          <div className="txt-q3">
            <div className="txt-q4">
              <div className="txt-q5">
                <div className="alert-txt">
                  <h1 className="txt-q">Under Maintenance</h1>
                  <FontAwesomeIcon className="alt-tet" icon={faCircleExclamation}/>
                </div>
                <p className="txt-q2">please come back in a few minutes.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="circularG">
          <div id="circularG_1" className="circularG"></div>
          <div id="circularG_2" className="circularG"></div>
          <div id="circularG_3" className="circularG"></div>
          <div id="circularG_4" className="circularG"></div>
          <div id="circularG_5" className="circularG"></div>
          <div id="circularG_6" className="circularG"></div>
          <div id="circularG_7" className="circularG"></div>
          <div id="circularG_8" className="circularG"></div>
        </div>
      </div>
    </section>
  );
};

export default Maintenance;
