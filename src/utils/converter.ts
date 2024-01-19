export function convertNumberToClockFormat(time: number): string {
  return `${Math.floor(time / 60)
    .toString()
    .padStart(2, '0')}
    :${(time % 60).toString().padStart(2, '0')}`;
}

export function convertStringToDate(date: string) {
  const dateTime = new Date(date);
  const year = dateTime.getFullYear();
  const month = String(dateTime.getMonth() + 1).padStart(2, '0');
  const day = String(dateTime.getDay()).padStart(2, '0');

  return `${year}.${month}.${day}`;
}

export function convertStringToClockTime(date: string) {
  const dateTime = new Date(date);
  const hour = String(dateTime.getHours()).padStart(2, '0');
  const minute = String(dateTime.getMinutes()).padStart(2, '0');

  return `${hour}:${minute}`;
}
