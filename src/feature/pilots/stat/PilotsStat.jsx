import * as React from "react";
import { NavLink } from "react-router-dom";
import { getPilots } from "./pilots-data";

export const PilotsStat = (props) => {
  const {year} = props.match.params;
  
  if (!year) location.hash = '/drivers/2020';
  const activeStyle = { color: "rgb(71, 61, 61)", textShadow: "3px 2px 1px rgb(71, 61, 61)" };
  // color: "black", textShadow: "2px 2px 0px rgb(219, 28, 3)" };

  const pilotView = (pilot) => {
    return (
      <div className="stat-p-row" key={pilot.number}>
        <div>{pilot.number}</div>
        <div className="stat-p-wider">
          <a href={'#/drivers/driver/' + pilot.number}>{pilot.name}</a>
        </div>
        <div>{pilot.season}</div>
        <div className="stat-p-wider">{pilot.team}</div>
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
            <NavLink to="/drivers/2020" activeStyle={activeStyle}>
              2020
            </NavLink>
          </div>
          <div className="year-pilots">
            <NavLink to="/drivers/2019" activeStyle={activeStyle}>
              2019
            </NavLink>
          </div>
          <div className="year-pilots">
            <NavLink to="/drivers/2018" activeStyle={activeStyle}>
             2018
            </NavLink>
          </div>
        </div>

        <div id="stat-p">
          <div>№</div>
          <div className="stat-p-wider">Пилот</div>
          <div>Сезонов</div>
          <div className="stat-p-wider">Команда</div>
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
