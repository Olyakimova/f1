import * as React from "react";
import "./team.css";
import { getTeamByKey } from "../team-data";
import { CarouselWrapper } from "../../../common/carousel/CarouselWrapper";

export const Team = (props) => {
  const { key } = props.match.params;
  const team = getTeamByKey(key);
  const [carWidth, setCarWidth] = React.useState("0");

  React.useEffect(() => {
    setTimeout(() => {
      setCarWidth("31%");
    }, 1000);
  }, []);

  const carClick = () => {
    setCarWidth("100%");
    setTimeout(() => {
      setCarWidth("31%");
    }, 1000);
  };

  return (
    <div id="team" className={key}>
      <div className="team-top">
        <div id="team-header">
          <div>
            <img className="logo" src={team.logo} />
          </div>
          <div className="name">{team.fullname}</div>
        </div>
        <div id="line">
          <div className="colorline" style={{ width: carWidth }}>
            {" "}
          </div>
          <img className="carline" src={team.line} onClick={carClick} />
        </div>
        <div id="driver-photo">
          {team.drivers.map((driver) => (
            <img key={driver.imgUrl} className="photo" src={driver.imgUrl} />
          ))}
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
