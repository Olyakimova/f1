import * as React from "react";
import { NavLink } from "react-router-dom";

export const PilotsStat = (props) => {
  const {year} = props.match.params;
  
  if (!year) location.hash = '/pilots/2020';
  const activeStyle = { color: "green" };

  return (
    <div id="pilots">
        <div id="year-p">
          <div className="year-stats">
          Статистика по пилотам
          </div>
          <div className="year-pilots">
            <NavLink to="/pilots/2020" activeStyle={activeStyle}>
              2020
            </NavLink>
          </div>
          <div className="year-pilots">
            <NavLink to="/pilots/2019" activeStyle={activeStyle}>
              2019
            </NavLink>
          </div>
          <div className="year-pilots">
            <NavLink to="/pilots/2018" activeStyle={activeStyle}>
             2018
            </NavLink>
          </div>
        </div>
        <div id="stat-p">
          <div className="stat-pilots">
            №
          </div>
          <div className="stat-pilots">
            Пилот
          </div>
          <div className="stat-pilots">
            Команда
          </div>
          <div className="stat-pilots">
            Очки
          </div>
          <div className="stat-pilots">
            Поулы
          </div>
          <div className="stat-pilots">
            Лучший круг
          </div>
          <div className="stat-pilots">
            Подиумы
          </div>
          <div className="stat-pilots">
            Кругов
          </div>
        </div>
    </div>
  );
};
