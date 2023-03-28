export default async function handler(req, res) {
  const { location } = req.query;

  const url = process.env.DATA_LOCATION_URL;

  try {
    const response = await fetch(url + location + "&aqi=no");

    const {
      location: { country, tz_id, localtime },
    } = await response.json();

    const result = {
      country: country,
      continent: tz_id.split("/")[0],
      city: tz_id.split("/")[1],
      date: localtime.split(" ")[0],
      time: localtime.split(" ")[1],
    };

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
