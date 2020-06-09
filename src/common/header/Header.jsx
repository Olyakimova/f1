import * as React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export const Header = () => {
  const activeStyle = { color: "darkgrey" };
  return (
    <>
      <div id="cap">
        <p className="cap-logo">
          <a href="#/">Formula 1</a>
        </p>
      </div>
      <div id="nav">
        <div className="nav-item">
          <NavLink to="/" activeStyle={activeStyle} exact>
            May be some NEWS
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/drivers" activeStyle={activeStyle}>
            Пилоты
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/teams" activeStyle={activeStyle}>
            Команды
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/tracks" activeStyle={activeStyle}>
            Трассы
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/grand-prix" activeStyle={activeStyle}>
            Гран-При
          </NavLink>
        </div>
      </div>
    </>
  );
};
