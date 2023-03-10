import React from "react";
import Ring from "./ring.module.scss";

function RingQuest() {
  return (
    <>
      <div className={Ring.body}>
        <div className={`fa-brands fa-sass ${Ring.text}`}>Testing</div>
        <div className={Ring.container}>
          <div className={Ring.flex}>
            <div className={`fa-brands fa-sass ${Ring.testring}`}>Mixins</div>
            <div className={`fa-brands fa-sass ${Ring.testring2}`}>
              Variables
            </div>
          </div>
          <div className={Ring.flex}>
            <div className={`fa-brands fa-sass ${Ring.testring3}`}>
              Extended Class
            </div>
            <div className={`fa-brands fa-sass ${Ring.testring4}`}>Imports</div>
          </div>
          <div className={Ring.testring5}>
            <div className={`fa-brands fa-sass ${Ring.testring6}`}></div>
            <div className={`fa-brands fa-sass ${Ring.testring6}`}></div>
            <div className={`fa-brands fa-sass ${Ring.testring6}`}>Loops</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RingQuest;
