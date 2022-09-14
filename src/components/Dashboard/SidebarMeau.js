import React from "react";
import "../../assets/css/Dashboard/SidebarMeau.css";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const SidebarMeau = ({ onClick }) => {
  const meaus = [
    { name: "내 정보", path: "/my-cafe", icon: <CgProfile /> },
    { name: "카페 검색", path: "/search-cafe", icon: <BiSearch /> },
    {
      name: "카페 추가",
      path: "/my-cafe",
      icon: <MdOutlineAddCircleOutline />,
    },
  ];

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
