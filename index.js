const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
  console.log(data);
  speed.textContent = data.coords.speed;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  // var date = new Date(data.timestamp);
  // console.log(date.toString("MMM dd"));
}, (err) => {
  console.error(err);
});
