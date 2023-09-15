export function ConvertDate(date) {
  const month = [
    "January",
    "February",
    " March",
    "April",
    "May",
    "Jun",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const correctDate = date.split("-").reverse().join(",");
  const newDate = new Date(correctDate);
  const string = [];
  string.push(month[newDate.getMonth()]);
  string.push(newDate.getDate() + ",");
  string.push(newDate.getFullYear());
  return string.join(" ");
}

