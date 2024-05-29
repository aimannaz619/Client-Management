import moment from "moment";
export function formattedDate(date) {
  const dateValue = new Date(date);
  const day = dateValue?.getDate();
  const month = dateValue?.getMonth() + 1;
  const year = dateValue?.getFullYear();

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

  const day = now.getDay();
  const diff = day === 0 ? -6 : 1 - day; // Adjust if day is Sunday (0), start week from Monday
  const startOfWeek = new Date(now.setDate(now.getDate() + diff));

  const endOfWeek = new Date(now.setDate(startOfWeek.getDate() + 5));

  const meetingDate = new Date(meeting.date);
 

  const formattedStartOfWeek = startOfWeek;

  const formattedEndOfWeek = endOfWeek;
 
  const isValidMeetingDate =
    meetingDate >= formattedStartOfWeek && meetingDate <= formattedEndOfWeek;


  return isValidMeetingDate;
}
