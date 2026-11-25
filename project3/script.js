// Questions Button Event Listener
document.addEventListener("DOMContentLoaded", function() {
  const questionBtn = document.getElementById("question-btn");
  if (questionBtn) {
    questionBtn.addEventListener("click", function() {
      alert("If you have questions, contact me at:\njohare@hawk.illinoistech.edu");
    });
  }

    if (document.getElementById("map")) {
    const mapAPI = document.createElement("script");
    mapAPI.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&callback=initMap";
    mapAPI.async = true;
    mapAPI.defer = true;
    document.body.appendChild(mapAPI);
  }
});

// Attach initMap to window so the external script callback can find it
window.initMap = function() {
  // Feature 1: Center coordinates for Chicago
  const center = { lat: 41.8781, lng: -87.6298 };
  
  // Feature 2: Map options with custom zoom and controls
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: center,
    mapTypeId: 'roadmap',
    zoomControl: true,
  });

  // Feature 3: Marker with an InfoWindow
  const marker = new google.maps.Marker({
    position: center,
    map: map,
    title: "Location"
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Jacob O'Hare</h3><p>Cybersecurity Student at Illinois Tech, Chicago, IL</p>"
  });

  marker.addListener("click", function() {
    infoWindow.open(map, marker);
  });
};