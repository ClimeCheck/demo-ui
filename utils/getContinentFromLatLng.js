export default function getContinentFromLatLng(lat, lng) {
  const continents = [
    {
      name: "Africa",
      bounds: [
        [-35.81, -25.36],
        [37.33, 63.39],
      ],
    },
    {
      name: "Antarctica",
      bounds: [
        [-85.06, -180],
        [-60.52, 180],
      ],
    },
    {
      name: "Asia",
      bounds: [
        [0.17, 26.7],
        [77.81, 180],
      ],
    },
    {
      name: "Australia",
      bounds: [
        [-54.75, 112.92],
        [-10.06, 159.11],
      ],
    },
    {
      name: "Europe",
      bounds: [
        [34.54, -31.29],
        [71.18, 39.2],
      ],
    },
    {
      name: "North America",
      bounds: [
        [7.19, -170],
        [83, -50],
      ],
    },
    {
      name: "South America",
      bounds: [
        [-56, -94],
        [13, -34],
      ],
    },
  ];

  for (const continent of continents) {
    if (
      lat >= continent.bounds[0][0] &&
      lat <= continent.bounds[1][0] &&
      lng >= continent.bounds[0][1] &&
      lng <= continent.bounds[1][1]
    ) {
      return continent.name;
    }
  }

  return null;
}
