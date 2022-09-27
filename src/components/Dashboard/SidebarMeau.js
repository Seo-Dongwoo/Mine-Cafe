import React from "react";
import "../../assets/css/Dashboard/SidebarMeau.css";
import { NavLink } from "react-router-dom";

const SidebarMeau = ({ onClick, meaus }) => {
  return (
    <div className="sidebar-meau">
      {meaus.map((meau, index) => {
        return (
          <NavLink
            style={{ color: "gray", textDecoration: "none" }}
            to={meau.path}
            key={index}
            className="sidebar-item"
            onClick={onClick}
          >
            <div className="item-box">
              {meau.icon}
              <span>{meau.name}</span>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SidebarMeau;
