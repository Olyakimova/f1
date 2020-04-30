import { Logo, Car } from "../../util/assets";
import { getDriverByNum } from "../pilots/driver/drivers-data";

export const Teams = {
  MERCEDES: {
    logo: Logo.mercedes,
    name: "Mercedes AMG Petronas",
    car: Car.mercedes,
    drivers: [getDriverByNum(44), getDriverByNum(77)],
  },
  FERRARI: {
    logo: Logo.ferrari,
    name: "Scuderia Ferrari",
    car: Car.ferrari,
    drivers: [getDriverByNum(5), getDriverByNum(16)],
  },
  RED_BULL: {
    logo: Logo.red_bull,
    name: "Aston Martin Red Bull Racing",
    car: Car.red_bull,
    drivers: [getDriverByNum(33), getDriverByNum(23)],
  },
  RENAULT: {
    logo: Logo.renault,
    name: "Renault DP World F1 Team",
    car: Car.renault,
    drivers: [getDriverByNum(3), getDriverByNum(31)],
  },
};

export const TeamKeys = Object.keys(Teams);
