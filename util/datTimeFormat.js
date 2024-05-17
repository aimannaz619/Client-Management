import moment from "moment";
export function formattedDate(date) {
  const day = date?.getDate();
  const month = date?.getMonth() + 1;
  const year = date?.getFullYear();

  const formatDate = `${day}/${month}/${year}`;
  return formatDate;
}

export function formattedTime(time) {
  return moment(time)?.format("hh:mm:ss A");
}

export function timeFormate2(time) {
  return time.toISOString().split("T")[1];
}
