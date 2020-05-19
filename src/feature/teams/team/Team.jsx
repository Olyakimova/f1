import * as React from "react";
import "./team.css";
import { getTeamByKey } from "../team-data";
import { CarouselWrapper } from "../../../common/carousel/CarouselWrapper";

export const Team = (props) => {
  const { key } = props.match.params;
  const team = getTeamByKey(key);

  return (
    <div id="team">
      <div className="team-top">
        <div id="team-header">
            <div><img className="logo" src={team.logo} />
            </div>
            <div className="name">{team.fullname}
            </div>
        </div>
        <div id="line">
          <div className="colorline"> </div>
          <img className="carline" src={team.line} />
        </div>
        
        <div className="short-info" style={{ marginLeft: 20, marginTop: -25 }}>
          <div>База: {team.base}</div>
          <div>Руководитель: {team.teamChief}</div>
          <div>Силовая установка: {team.powerUnit}</div>
          <div>Шасси: {team.chassis}</div>
          <div>Первый вход в команду: {team.firstTeamEntry}</div>
          <div>Победы в личном зачете: {team.worldChampionships}</div>
          <div>Победы в кубке конструкторов: {team.constructorsСup}</div>
          {/* добавить функцию кот убирает див если информации нет */}
          <div>Лучший финиш: {team.highestRaceFinish}</div>
          <div>Поулы: {team.polePositions}</div>
          <div>Лучший круг: {team.fastestLaps}</div>
        </div>
      </div>
      <div>
        <CarouselWrapper images={team.images} />
      </div>
      <div className="team-mid">
        <div dangerouslySetInnerHTML={{ __html: team.info2019 }}></div>
      </div>
      <div className="team-mid">
        <div dangerouslySetInnerHTML={{ __html: team.info2019 }}></div>
      </div>
      <div className="team-mid">
        <div dangerouslySetInnerHTML={{ __html: team.info2018 }}></div>
      </div>
      <div className="team-mid">
        <div dangerouslySetInnerHTML={{ __html: team.info2017 }}></div>
      </div>
    </div>
  );
};
