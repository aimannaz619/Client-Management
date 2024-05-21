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
export function formatTime(timeString) {
  
  const date = new Date(timeString);
  console.log(date, "datae")
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

