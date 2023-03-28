export default function getDate(unixTimeStamp) {
  const date = new Date();
  date.setTime(unixTimeStamp);
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getTime(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();

  return hours + ":" + minutes.substr(-2);
}
