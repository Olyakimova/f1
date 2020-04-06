import * as React from "react";
import "./pilots.css";

export const Pilots = (props) => {
  return (
    <div id="pilots">
      <h3>Pilots</h3>
      <div>
        <table cellSpacing="3" cellPadding="4">
          <thead>
            <tr>
              <th colSpan="4" style={{ color: "black" }}>
                Статистика по пилотам
              </th>
              <th>2018</th>
              <th>2019</th>
              <th>2020</th>
            </tr>

            <tr>
              <th>№</th>
              <th>Пилот</th>
              <th>Команда</th>
              <th>Очки</th>
              <th>Поулы</th>
              <th>Лучший круг</th>
              <th>Подиумы</th>
              <th>Кругов</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};
