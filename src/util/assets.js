import { IS_PROD } from "./utils";

const images = IS_PROD ? "assets/images/" : "/docs/assets/images/";

export const Logo = {
  mercedes: images + "logo-merc.png",
  ferrari: images + "logo-fer.png",
  red_bull: images + "logo-rb.png",
  mclaren: images + "logo-mcl.png",
  renault: images + "logo-ren.png",
  alpha_tauri: images + "logo-torr.png",
  racing_point: images + "logo-rp.png",
  haas: images + "logo-haas.png",
  alfa_romeo: images + "logo-alfa.png",
  williams: images + "logo-will.png",
};

export const Car = {
  mercedes: images + "car-merc.jpg",
  ferrari: images + "car-fer.jpg",
  red_bull: images + "car-rb.jpg",
  mclaren: images + "car-mcl.jpg",
  renault: images + "car-ren.jpg",
  alpha_tauri: images + "car-torr.jpg",
  racing_point: images + "car-rp.jpg",
  haas: images + "car-haas.jpg",
  alfa_romeo: images + "car-alfa.jpg",
  williams: images + "car-will.jpg",
};
