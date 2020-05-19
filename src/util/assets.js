import { IS_PROD } from "./utils";

const images = IS_PROD ? "assets/images/" : "/docs/assets/images/";

export const Logo = {
  mercedes: images + "logo/logo-merc.png",
  ferrari: images + "logo/logo-fer.png",
  red_bull: images + "logo/logo-rb.png",
  mclaren: images + "logo/logo-mcl.png",
  renault: images + "logo/logo-ren.png",
  alpha_tauri: images + "logo/logo-torr.png",
  racing_point: images + "logo/logo-rp.png",
  haas: images + "logo/logo-haas.png",
  alfa_romeo: images + "logo/logo-alfa.png",
  williams: images + "logo/logo-will.png",
};

export const Car = {
  mercedes: images + "cars/car-merc.jpg",
  ferrari: images + "cars/car-fer.jpg",
  red_bull: images + "cars/car-rb.jpg",
  mclaren: images + "cars/car-mcl.jpg",
  renault: images + "cars/car-ren.jpg",
  alpha_tauri: images + "cars/car-torr.jpg",
  racing_point: images + "cars/car-rp.jpg",
  haas: images + "cars/car-haas.jpg",
  alfa_romeo: images + "cars/car-alfa.png",
  williams: images + "cars/car-will.jpg",
};

export const Line = {
  mercedes: images + "lines/merline.png",
  // ferrari: images + "lines/car-fer.jpg",
  // red_bull: images + "lines/car-rb.jpg",
  // mclaren: images + "lines/car-mcl.jpg",
  // renault: images + "lines/car-ren.jpg",
  // alpha_tauri: images + "lines/car-torr.jpg",
  // racing_point: images + "lines/car-rp.jpg",
  // haas: images + "lines/car-haas.jpg",
  // alfa_romeo: images + "lines/car-alfa.png",
  // williams: images + "lines/car-will.jpg",
};
