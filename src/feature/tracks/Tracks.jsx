import * as React from "react";
import "./tracks.css";
// import { Scheme } from "../../util/assets";
import { CountryTrack, Countries } from "./tracks-data";

export const Tracks = (props) => {
  const trackView = (country) => {
    const track = CountryTrack[country];
    const mainClassName = "track-container" + country.toLowerCase();

    return (
      <div key={country} className={mainClassName}>
        <div className="track-map">
          <a href={"#/tracks/" + country.toLowerCase()}>Трек в {country}</a>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container listing team-listing map">
        {Countries.map((key) => trackView(key))}
      </div>
    </>
  );
};
