function myMap(width, height) {
document.getw = parseInt(width);
document.globepause = false;
var width = parseInt(width) + "px";
var height = parseInt(height) + "px";
var date = new Date;
var time = date.getTime();
t('mapme').style.background = "url(images/render.php?l="+width.toString().replace("px","")+"&a="+height.toString().replace("px","")+"&time="+time+")";
t('mapme').style.backgroundRepeat = "repeat-x";
t('mapme').style.backgroundSize = "100% 100%";
t('mapme').style.backgroundPosition = "0px 0px";
t('map').style.width = width;
t('map').style.minWidth = width;
t('map').style.maxWidth = width;
t('map').style.height = height;
t('map').style.minHeight = height;
t('map').style.maxHeight = height;
t('mapme').style.width = width;
t('mapme').style.minWidth = width;
t('mapme').style.maxWidth = width;
t('mapme').style.height = height;
t('mapme').style.minHeight = height;
t('mapme').style.maxHeight = height;
t('reverse').style.width = width;
t('reverse').style.minWidth = width;
t('reverse').style.maxWidth = width;
t('reverse').style.height = height;
t('reverse').style.minHeight = height;
t('reverse').style.maxHeight = height;
}
function showme() {
if(!document.globepause) {
document.globepause = true;
} else {
document.globepause = false;
}
}
function t(i) {
return (document.getElementById) ? ((document.getElementById(i)) ? document.getElementById(i) : false) : ((document.all[i]) ? document.all[i] : false);
}
window.onload = function () {
if(navigator.geolocation) {
navigator.geolocation.getCurrentPosition(
   gotPosition,
   errorGettingPosition,
   {'enableHighAccuracy':true,'timeout':10000,'maximumAge':0}
);
} else {
alert("Your browser does not support geo location");
}
};
function gotPosition(pos) {
document.latitude = pos.coords.latitude;
document.longitude = pos.coords.longitude;
     save(pos.coords.latitude, pos.coords.longitude);
}
function errorGettingPosition(err) {
if(err.code == 1) {
alert("We are sorry you do not have authorized the geolocation");
} else if(err.code == 2) {
alert("Position not available");
} else if(err.code == 3) {
alert("Timeout");
} else {
alert("Unknown error:" + err.message);
}
}
function newXML() {
var xml = null;
if(typeof(XMLHttpRequest) === "function" || typeof(XMLHttpRequest) === "object") {
xml = new XMLHttpRequest();
} else if(window.ActiveXObject && navigator.userAgent.toUpperCase().indexOf("MSIE 4") < 0) {
if(navigator.userAgent.toUpperCase().indexOf("MSIE 5") < 0) {
xml = new ActiveXObject("Msxml2.XMLHTTP");
} else {
xml = new ActiveXObject("Microsoft.XMLHTTP");
}
}
return xml;
}
function save(lat, long) {
var xml = newXML();
if(xml) {
var sended = "latitude=" + escape(lat) + "&longitude=" + escape(long);
xml.open("post", "save.php", true);
xml.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xml.send(sended);
return true;
} else {
return false;
}
}
function sposta(ogg) {
var obj = t(ogg);
var pos;
if(obj.style.backgroundPosition) {
var posm = obj.style.backgroundPosition.split(" ");
pos = parseFloat(posm[0].replace("px",""));
} else {
pos = 0;
}
var n = 2;
if(ogg == "map" || ogg == "mapme") {
pos += n;
} else {
pos -= n;
}
var forced = false;
var opos;
if(ogg == "map" || ogg == "mapme") {
opos = pos - n;
} else {
opos = pos + n;	
}
var getw = document.getw;
if(pos < (getw*-1) || pos > getw) {
pos = 0;
forced = true;
}
if(!document.globepause) {
obj.style.backgroundPosition = pos + "px 0px";
}
setTimeout('sposta("'+ogg+'")', 50);
}
window.setTimeout('sposta("map")', 1000);
window.setTimeout('sposta("mapme")', 1000);
window.setTimeout('sposta("reverse")', 1000);