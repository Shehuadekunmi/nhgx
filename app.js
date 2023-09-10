
const currentUTCTime = document.getElementById("tz");

const generateUTCTime = () => {
  const date = new Date();
  const utcTimeMilliseconds = date.getTime();
  currentUTCTime.textContent = utcTimeMilliseconds;
};

generateUTCTime();
setInterval(generateUTCTime, 1000);


let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]
console.log(weekday);
document.getElementById('day').innerHTML = weekday;
