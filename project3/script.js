// Questions Button Event Listener
document.addEventListener("DOMContentLoaded", function() {
  const questionBtn = document.getElementById("question-btn");
  if (questionBtn) {
    questionBtn.addEventListener("click", function() {
      alert("If you have questions, contact me at:\njohare@hawk.illinoistech.edu");
    });
  }

    if (document.getElementById("map")) {
    const map= document.createElement("script");
    map.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&callback=initMap";
    map.async = true;
    map.defer = true;
    document.body.appendChild(map);
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
    title: "Jacob's Location - Chicago, IL"
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Jacob O'Hare</h3><p>Cybersecurity Student at Illinois Tech, Chicago, IL</p>"
  });

  marker.addListener("click", function() {
    infoWindow.open(map, marker);
  });
};