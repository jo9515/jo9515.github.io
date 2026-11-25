// Wait for the DOM to load before attaching event listeners
document.addEventListener("DOMContentLoaded", function() {
  const questionBtn = document.getElementById("question-btn");
  if (questionBtn) {
    questionBtn.addEventListener("click", function() {
      alert("If you have questions, contact me at:\njohare@hawk.iit.edu");
    });
  }
});

// Google Maps Initialization Function with 3 Added Features beyond base code
function initMap() {
  // IIT Area
  const center = { lat: 41.8781, lng: -87.6298 };
  
  // Feature 2: Enhanced Map Options (custom map type and enabled controls)
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: center,
    mapTypeId: 'roadmap', // Added Feature: Specific map type
    zoomControl: true,    // Added Feature: Explicit zoom control UI
  });

  // Feature 3: Marker placed on the map with an InfoWindow
  const marker = new google.maps.Marker({
    position: center,
    map: map,
    title: "Jacob's Location - Chicago, IL"
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Jacob O'Hare</h3><p>Cybersecurity Student at Illinois Tech, Chicago, IL</p>"
  });

  marker.addListener("click", function() {
    infoWindow.open(map, marker);
  });
}