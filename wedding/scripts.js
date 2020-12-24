var today = new Date();
var weddingDate = new Date("02/16/2021");

var TimeDiff = Math.ceil(Math.max(weddingDate - today, 0) / (1000 * 3600 * 24));

document.getElementById("days-left").innerHTML = TimeDiff + ((TimeDiff == 1) ? " day" : " days") + " left";
