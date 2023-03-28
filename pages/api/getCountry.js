export default async function handler(req, res) {
  const { query } = req;
  const key = process.env.ACCESS_KEY;
  const url = process.env.CONTINENT_URL;
  const result = url + key + "&query=" + query["e"];

  try {
    const data = await (await fetch(result)).json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}
