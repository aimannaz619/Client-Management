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

  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function isCurrentWeek(meeting) {
  const now = new Date();
  const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
  const endOfWeek = new Date(now.setDate(startOfWeek.getDate() + 5));

  const meetingDate = meeting.date;

  const formattedStartOfWeek = formattedDate(startOfWeek);

  const formattedEndOfWeek = formattedDate(endOfWeek);

  const isValidMeetingDate =
    meetingDate >= formattedStartOfWeek && meetingDate <= formattedEndOfWeek;

  return isValidMeetingDate;
}
