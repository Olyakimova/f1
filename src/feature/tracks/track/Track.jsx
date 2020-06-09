import * as React from "react";
import "./track.css";
import { getTrackByCountry } from "../tracks-data";

export const Track = (props) => {
  const { key } = props.match.params;
  const track = getTrackByCountry(key);

  return (
    <div className={key}>
      <div className="track-name">{track.name}</div>
      <div className="track-info" style={{ marginLeft: 15, marginTop: 15 }}>
        <table style={{ border: 1 }}>
          <tr>
            <td>Официальное название трассы:</td>
            <td>{track.officialName}</td>
          </tr>
          <tr>
            <td>Расположение:</td>
            <td>{track.location}</td>
          </tr>
          <tr>
            <td>Дата создания:</td>
            <td>{track.date}</td>
          </tr>
          <tr>
            <td>Продолжительность гонки:</td>
            <td>{track.duration}</td>
          </tr>
          <tr>
            <td>Протяженность трассы:</td>
            <td>{track.length}</td>
          </tr>
          <tr>
            <td>Количество кругов:</td>
            <td>{track.laps}</td>
          </tr>
          <tr>
            <td>Гоночная дистанция:</td>
            <td>{track.distance}</td>
          </tr>
          <tr>
            <td>Количество поворотов:</td>
            <td>{track.turns}</td>
          </tr>
          <tr>
            <td>Максимальная скорость:</td>
            <td>{track.topSpeed}</td>
          </tr>
          <tr>
            <td>Официальный сайт:</td>
            <td>{track.site}</td>
          </tr>
          <tr>
            <td>Рекорд трассы</td>
            <td>{track.record}</td>
          </tr>
        </table>

        <div>Официальное название трассы: {track.officialName}</div>
        <div>Расположение: {track.location}</div>
        <div>Дата создания: {track.date}</div>
        <div>Продолжительность гонки: {track.duration}</div>
        <div>Протяженность трассы: {track.length}</div>
        <div>Количество кругов: {track.laps}</div>
        <div>Гоночная дистанция: {track.distance}</div>
        {/* добавить функцию кот убирает див если информации нет */}
        <div>Количество поворотов: {track.turns}</div>
        <div>Максимальная скорость: {track.topSpeed}</div>
        <div>Официальный сайт: {track.site}</div>
        <div>Рекорд круга в квалификации: {track.qualificationRecord}</div>
        <div>Рекорд круга в гонке: {track.raceRecord}</div>
      </div>
    </div>
  );
};
