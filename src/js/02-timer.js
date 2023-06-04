import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';

const inputEl = document.getElementById('datetime-picker');
const btnStartEl = document.querySelector('[data-start]');
const markDaysEl = document.querySelector('[data-days]');
const markHoursEl = document.querySelector('[data-hours]');
const markMinutesEl = document.querySelector('[data-minutes]');
const markSecondsEl = document.querySelector('[data-seconds]');

btnStartEl.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Need to set a future date');
    } else {
      Notiflix.Notify.success('Date set correctly');
      btnStartEl.removeAttribute('disabled');
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const timing = flatpickr(inputEl, options);

const timer = {
  start() {
    setInterval(() => {
      const deltaTime = timing.selectedDates[0] - Date.now();
      const { days, hours, minutes, seconds } = convertMs(deltaTime);

      markDaysEl.textContent = addLeadingZero(days);
      markHoursEl.textContent = addLeadingZero(hours);
      markMinutesEl.textContent = addLeadingZero(minutes);
      markSecondsEl.textContent = addLeadingZero(seconds);
    }, 1000);
  },
};

btnStartEl.addEventListener('click', () => {
  timer.start();
  markDaysEl.style.color = 'Crimson';
  markHoursEl.style.color = 'IndianRed';
  markMinutesEl.style.color = 'LightCoral';
  markSecondsEl.style.color = 'DarkSalmon';
});
