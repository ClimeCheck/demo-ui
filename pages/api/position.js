export default async function handler(req, res) {
  const key = process.env.XAPI_KEY;
  const device = process.env.DEVICE_URL;

  try {
    const response = await fetch(device, {
      headers: {
        "X-API-Key": key,
      },
    });
    const { data } = await response.json();

    const result = data.slice(0, 8000).map((item) => ({
      latitude: item[2],
      longitude: item[3],
    }));

    res.status(200).json(result.slice(0, 11000));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
