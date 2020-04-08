import * as React from "react";
import { NavLink } from "react-router-dom";
import { getPilots } from "./pilots-data";

export const PilotsStat = (props) => {
  const {year} = props.match.params;
  
  if (!year) location.hash = '/pilots/2020';
  const activeStyle = { color: "green" };

  const pilotView = (pilot) => {
    return (
      <div className="stat-p-row" key={pilot.number}>
        <div>{pilot.number}</div>
        <div>{pilot.name}</div>
        <div>{pilot.team}</div>
        <div>{pilot.score}</div>
        <div>{pilot.poles}</div>
        <div>{pilot.bestLap}</div>
        <div>{pilot.podiums}</div>
        <div>{pilot.laps}</div>
      </div>
    );
  };

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
          <div>№</div>
          <div>Пилот</div>
          <div>Команда</div>
          <div>Очки</div>
          <div>Поулы</div>
          <div>Лучший круг</div>
          <div>Подиумы</div>
          <div>Кругов</div>
        </div>

        {getPilots(year).map(pilot => pilotView(pilot))}
    </div>
  );
};
