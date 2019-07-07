import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Sidenav = ({ onSidenavToggle, showSidenav }) => {
  return (
    <Fragment>
      <div className={`sidenav ${showSidenav ? "" : "collapse"}`}>
        <div className="sidenav__header w-100 py-12 px-16">
          <img src="./assets/images/logo.png" alt="elepha.io" />
        </div>
        <div className="sidenav__links mt-8">
          <NavLink to="/documents">
            <div>My Documents</div>
          </NavLink>
          <NavLink to="">
            <div>About Elepha</div>
          </NavLink>
          <NavLink to="">
            <div>Refer a Friend</div>
          </NavLink>
          <NavLink to="">
            <div>Job Description</div>
          </NavLink>
          <NavLink to="">
            <div>Why am I being contacted</div>
          </NavLink>
          <NavLink to="">
            <div>FAQ</div>
          </NavLink>
          <NavLink to="">
            <div>Legal</div>
          </NavLink>
        </div>
      </div>
      {showSidenav ? (
        <div className="sidenav__overlay" onClick={onSidenavToggle} />
      ) : null}
    </Fragment>
  );
};

export default Sidenav;
