export const getPilots = (year) => {
    if (2019 == year) {
        return [];
    } else if (2018 == year) {
        return [];
    } else {
        return pilots2020;
    }
}

const pilots2020 = [
    {
      number: 1,
      name: "fio",
      team: "Red Bull"
    },
    {
      number: 2,
      fio: "Lecler",
      team: "Ferrari"
    }
  ];