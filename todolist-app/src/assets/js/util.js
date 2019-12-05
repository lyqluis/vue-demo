const now = new Date();
const today = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  0, 0, 0
).getTime();
const tomorrow = today + 1000 * 60 * 60 * 24;

const todayDate = function () {
  return new Date().toString().split(' ').splice(0, 4).join(' ');
}

export { today, tomorrow, todayDate }