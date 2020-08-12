import React from "react";
import "../Css/s-sidebaroption.css";

const SidebarOption = ({title, Icon}) => {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__Icon" />}
      {Icon ? <h4>{title} </h4> : <h5> {title}</h5>}
    </div>
  );
};

export default SidebarOption;
