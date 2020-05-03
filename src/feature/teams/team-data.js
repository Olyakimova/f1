import { Logo, Car } from "../../util/assets";
import { getDriverByNum } from "../pilots/driver/drivers-data";

export const Teams = {
  MERCEDES: {
    logo: Logo.mercedes,
    name: "Mercedes AMG Petronas",
    fullname: "Mercedes AMG Petronas",
    car: Car.mercedes,
    drivers: [getDriverByNum(44), getDriverByNum(77)],
  },
  FERRARI: {
    logo: Logo.ferrari,
    name: "Scuderia Ferrari",
    fullname: "Scuderia Ferrari",
    car: Car.ferrari,
    drivers: [getDriverByNum(5), getDriverByNum(16)],
  },
  RED_BULL: {
    logo: Logo.red_bull,
    name: "Red Bull Racing",
    fullname: "Aston Martin Red Bull Racing",
    car: Car.red_bull,
    drivers: [getDriverByNum(33), getDriverByNum(23)],
  },
  RENAULT: {
    logo: Logo.renault,
    name: "Renault DP World F1 Team",
    fullname: "Renault DP World F1 Team",
    car: Car.renault,
    drivers: [getDriverByNum(3), getDriverByNum(31)],
  },
  McLAREN: {
    logo: Logo.mclaren,
    name: "McLaren F1 Team",
    fullname: "McLaren F1 Team",
    car: Car.mclaren,
    drivers: [getDriverByNum(55), getDriverByNum(4)],
  },
  ALPHA_TAURI: {
    logo: Logo.alpha_tauri,
    name: "Scuderia Alpha Tauri",
    fullname: "Scuderia Alpha Tauri",
    car: Car.alpha_tauri,
    drivers: [getDriverByNum(26), getDriverByNum(10)],
  },
  RACING_POINT: {
    logo: Logo.racing_point,
    name: "Racing Point",
    fullname: "BWT Racing Point Formula Team",
    car: Car.racing_point,
    drivers: [getDriverByNum(18), getDriverByNum(11)],
  },
  HAAS: {
    logo: Logo.haas,
    name: "Haas F1 Team",
    fullname: "Haas F1 Team",
    car: Car.haas,
    drivers: [getDriverByNum(8), getDriverByNum(20)],
  },
  ALFA_ROMEO: {
    logo: Logo.alfa_romeo,
    name: "Alfa Romeo Racing",
    fullname: "Alfa Romeo Racing",
    car: Car.alfa_romeo,
    drivers: [getDriverByNum(99), getDriverByNum(7)],
  },
  WILLIAMS: {
    logo: Logo.williams,
    name: "Williams Racing",
    fullname: "Williams Racing",
    car: Car.williams,
    drivers: [getDriverByNum(63), getDriverByNum(6)],
  },
};

export const TeamKeys = Object.keys(Teams);
