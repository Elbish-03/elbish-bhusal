// create map
var mymap = L.map("map").setView([26.4544, 87.2725], 3.5);

// add tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 18,
}).addTo(mymap);

// create markers
var city1 = L.marker([27.7172, 85.324]).addTo(mymap);
var city2 = L.marker([47.3863, 8.2066]).addTo(mymap);
var city3 = L.marker([47.3928, 8.0447]).addTo(mymap);

// create popups
city1
  .bindPopup("<b>San Francisco</b><br>My primary school was located here.")
  .openPopup();
city2.bindPopup("<b>London</b><br>I currently work here.").openPopup();
city3
  .bindPopup("<b>New York City</b><br>I lived here for a few years.")
  .openPopup();

// add event listeners to buttons
document
  .getElementById("city1-btn")
  .addEventListener("mouseenter", function () {
    city1.setLatLng([37.7749, -122.4194]).setZIndexOffset(1000).openPopup();
  });
document
  .getElementById("city1-btn")
  .addEventListener("mouseleave", function () {
    city1.setLatLng([37.7749, -122.4194]).setZIndexOffset(0).closePopup();
  });
document
  .getElementById("city2-btn")
  .addEventListener("mouseenter", function () {
    city2.setLatLng([51.5074, -0.1278]).setZIndexOffset(1000).openPopup();
  });
document
  .getElementById("city2-btn")
  .addEventListener("mouseleave", function () {
    city2.setLatLng([51.5074, -0.1278]).setZIndexOffset(0).closePopup();
  });
document
  .getElementById("city3-btn")
  .addEventListener("mouseenter", function () {
    city3.setLatLng([40.7128, -74.006]).setZIndexOffset(1000).openPopup();
  });
document
  .getElementById("city3-btn")
  .addEventListener("mouseleave", function () {
    city3.setLatLng([40.7128, -74.006]).setZIndexOffset(0).closePopup();
  });
