import * as React from "react";
import { getDriverByKey } from "./drivers-data";
import "./driver.css";

export const Driver = (props) => {
  const { key } = props.match.params;
  const driver = getDriverByKey(key);

  return (
    <div id="driver">
      <div className="driver-top">
        <img className="photo" src={driver.imgUrl} />
        <div className="short-info" style={{ marginLeft: 20 }}>
          <div id="driver-header">
            <div className="num">{driver.number}</div>
            <div className="name">
              <div>{driver.fullname}</div>
            </div>
            <img className="flag" src={driver.flag} height="67"></img>
          </div>

          <div>Страна: {driver.country}</div>
          <div>Дата рождения: {driver.databirth}</div>
          <div>Сезонов в Ф1: {driver.season}</div>
          <div>Чемпион мира: {driver.champion}</div>
          <div>Дебют: {driver.debut}</div>
          <div>Гран При: {driver.granprix}</div>
          <div>Победы: {driver.victory}</div>
          <div>Первый победный Гран При: {driver.first}</div>
          <div>Поулы: {driver.pouls}</div>
          <div>Лучшие круги: {driver.bestlap}</div>
          <div>Подиумы: {driver.podiums}</div>
          <div>Старты с первого ряда: {driver.startfirst}</div>
          <div>Лучший финиш: {driver.bestfinish}</div>
          <div>Лучший старт: {driver.beststart}</div>
          <div>Дубли (поб+поул): {driver.take}</div>
          <div>Хэт-трики (поб+поул+л.круг): {driver.hattricks}</div>
          <div>Очки: {driver.scores}</div>
          <div>Гран-при в очках: {driver.granprixinscore}</div>
          <div>Кругов в гран-при: {driver.totallaps}</div>
        </div>
      </div>
      <div className="driver-mid">
        <div dangerouslySetInnerHTML={{ __html: driver.info }}></div>
      </div>
    </div>
  );
};
