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
  ferrari: images + "lines/ferline.png",
  red_bull: images + "lines/rbline.png",
  mclaren: images + "lines/mclline.png",
  renault: images + "lines/renline.png",
  alpha_tauri: images + "lines/atline.png",
  racing_point: images + "lines/rpline.png",
  haas: images + "lines/haasline.png",
  alfa_romeo: images + "lines/arline.png",
  williams: images + "lines/willine.png",
};

export const Scheme = {
  AUSTRALIA: images + "",
  BAHRAIN: images + "",
  VIETNAM: images + "",
  CHINA: images + "",
  NETHERLANDS: images + "",
  SPAIN: images + "",
  MONACO: images + "",
  AZERBAIJAN: images + "",
  CANADA: images + "",
  FRANCE: images + "",
  AUSTRIA: images + "",
  BRITANNIA: images + "",
  HUNGARY: images + "",
  BELGIUM: images + "",
  ITALY: images + "",
  SINGAPORE: images + "",
  RUSSIA: images + "",
  JAPAN: images + "",
  USA: images + "",
  MEXICO: images + "",
  BRAZIL: images + "",
  ABU_DHABI: images + "",
};
