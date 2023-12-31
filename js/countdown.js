// 1. create a function to get the current date and time
function getCurrentDate() {
  const currentDate = new Date();
  return currentDate;
}

// 2. create a function to get the future date and time
function getFutureDate() {
  const futureDate = new Date("January 7, 2024 08:00:00");
  return futureDate;
}

// 3. create a function to get the difference between the future and current date and time
function getDifference() {
  const difference = getFutureDate() - getCurrentDate();
  return difference;
}

// 4. create a function to format the time
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// convert english number to bangla number
function convertEnglishNumberToBanglaNumber(number) {
  const banglaNumbers = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };

  return number.toString().replace(/\d/g, (match) => banglaNumbers[match]);
}

// 5. create a function to display the time
function displayTime() {
  const days = formatTime(Math.floor(getDifference() / (1000 * 60 * 60 * 24)));
  const hours = formatTime(
    Math.floor((getDifference() / (1000 * 60 * 60)) % 24)
  );
  const mins = formatTime(Math.floor((getDifference() / (1000 * 60)) % 60));
  const secs = formatTime(Math.floor((getDifference() / 1000) % 60));

  document.querySelector(".days").innerHTML =
    convertEnglishNumberToBanglaNumber(days);
  document.querySelector(".hours").innerHTML =
    convertEnglishNumberToBanglaNumber(hours);
  document.querySelector(".mins").innerHTML =
    convertEnglishNumberToBanglaNumber(mins);
  document.querySelector(".secs").innerHTML =
    convertEnglishNumberToBanglaNumber(secs);
}

// call the displayTime function every second
setInterval(displayTime, 1000);
