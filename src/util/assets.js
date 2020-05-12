import { IS_PROD } from "./utils";

const images = IS_PROD ? "assets/images/" : "/docs/assets/images/";

export const Logo = {
  mercedes: images + "teams.logo/logo-merc.png",
  ferrari: images + "teams.logo/logo-fer.png",
  red_bull: images + "teams.logo/logo-rb.png",
  mclaren: images + "teams.logo/logo-mcl.png",
  renault: images + "teams.logo/logo-ren.png",
  alpha_tauri: images + "teams.logo/logo-torr.png",
  racing_point: images + "teams.logo/logo-rp.png",
  haas: images + "teams.logo/logo-haas.png",
  alfa_romeo: images + "teams.logo/logo-alfa.png",
  williams: images + "teams.logo/logo-will.png",
};

export const Car = {
  mercedes: images + "teams.car/car-merc.jpg",
  ferrari: images + "teams.car/car-fer.jpg",
  red_bull: images + "teams.car/car-rb.jpg",
  mclaren: images + "teams.car/car-mcl.jpg",
  renault: images + "teams.car/car-ren.jpg",
  alpha_tauri: images + "teams.car/car-torr.jpg",
  racing_point: images + "teams.car/car-rp.jpg",
  haas: images + "teams.car/car-haas.jpg",
  alfa_romeo: images + "teams.car/car-alfa.png",
  williams: images + "teams.car/car-will.jpg",
};
