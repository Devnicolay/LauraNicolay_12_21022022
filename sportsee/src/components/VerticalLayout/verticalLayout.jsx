import React from "react";
import yoga from "../../assets/yoga.png";
import swimming from "../../assets/swimming.png";
import cycling from "../../assets/cycling.png";
import training from "../../assets/training.png";

/**
 *
 * @returns container for vertical layout
 */

function VerticalLayout() {
  return (
    <div className="vertical-layout">
      <div className="container-img-vertical-layout">
        <img className="img-vertical-layout" src={yoga} alt="yoga" />
        <img className="img-vertical-layout" src={swimming} alt="swimming" />
        <img className="img-vertical-layout" src={cycling} alt="cycling" />
        <img className="img-vertical-layout" src={training} alt="training" />
      </div>
      <div className="copyright">Copyright, SportSee 2020</div>
    </div>
  );
}

export default VerticalLayout;
