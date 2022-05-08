setInterval(() => {
  document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}, 1000);
  
setInterval(() => {
  document.getElementById("title").style.color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}, 1000);

setInterval(() => {
  document.getElementById("gif").style.borderColor = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}, 1000);

setInterval(() => {
  document.getElementById("text").style.color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}, 1000);
