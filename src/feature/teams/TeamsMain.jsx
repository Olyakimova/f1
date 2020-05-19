import * as React from "react";
import { Logo } from "../../util/assets";
import { Car } from "../../util/assets";
import { Line } from "../../util/assets";
import "./teams.css";
import { TeamKeys, Teams } from "./team-data";

export const TeamsMain = (props) => {
  const teamView = (teamKey) => {
    const team = Teams[teamKey];
    const mainClassName = "team-container " + teamKey.toLowerCase();
    return (
      <div key={teamKey} className={mainClassName}>
        <div className="team-list-item">
          <a href={"#/teams/" + teamKey.toLowerCase()}>
            <div className="team-header">
              <div className="team-logo">
                <img src={team.logo}></img>
              </div>
              <div className="team-name">{team.name}</div>
            </div>
            <div className="team-car">
              <img src={team.car}></img>
            </div>
          </a>
          <div className="team-drivers">
            {team.drivers
              ? team.drivers.map((driver) => (
                  <div key={driver.number} className="team-driver">
                    <a href={driver.link}>{driver.name}</a>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container listing team-listing">
        {TeamKeys.map((key) => teamView(key))}
      </div>
    </>
  );
};
