export default async function groupByPosition(positions) {
  const grouped = positions.slice(0, 100);

  const countries = new Set();
  const continents = {};

  for (const position of grouped) {
    const { country, continent } = await fetch(
      `/api/location?location=${position.latitude},${position.longitude}`
    );

    countries.add(country);
    if (!continents[continent]) {
      continents[continent] = { count: 0, countries: new Set() };
    }
    continents[continent].count++;
    continents[continent].countries.add(country);
  }
  const totalCountries = countries.size;

  // Create result object
  const result = {
    totalCountries,
    continents: [],
  };

  // Add information about each continent to result object
  for (const [name, data] of Object.entries(continents)) {
    result.continents.push({
      name,
      positions: data.count,
    });
  }

  return result;
}
