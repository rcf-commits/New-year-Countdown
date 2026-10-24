const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYearTime = new Date("Jan 1, 2027 00:00:00").getTime();

updateCountdown();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = newYearTime - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const D = Math.floor(gap / day);
  const H = Math.floor((gap % day) / hour);
  const M = Math.floor((gap % hour) / minute);
  const S = Math.floor((gap % minute) / second);

  dayEl.innerHTML = D;
  hourEl.innerHTML = H;
  minuteEl.innerHTML = M;
  secondEl.innerHTML = S;

  setTimeout(updateCountdown, 1000);
}
