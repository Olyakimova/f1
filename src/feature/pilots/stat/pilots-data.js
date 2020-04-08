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
      team: "Red Bull",
      score: 10,
      poles: 1,
      bestLap: "1:22",
      podiums: 1,
      laps: 100
    },
    {
      number: 2,
      name: "Lecler",
      team: "Ferrari",
      score: 10,
      poles: 1,
      bestLap: "1:22",
      podiums: 1,
      laps: 100
    }
  ];