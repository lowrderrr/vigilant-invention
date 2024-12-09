const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});


 
var $button = jQuery('<button>Click me!</button>') 
	.appendTo('body') 
	.click(function() { 
		if(fns.length > 0) { 
			var fn = fns.shift(); 
			fn(); 
		} 
	}) ; 

const myInput = document.getElementById('myInput');
const enterButton = document.getElementById('enterButton');

enterButton.addEventListener('click', function() {
  myInput.focus(); // Ensure the input has focus
  myInput.dispatchEvent(event); // Dispatch the event on the input
});

document.addEventListener('DOMContentLoaded', function() {


    // Initialize map
    var map = L.map('mapContainer').setView([37.7749, -122.4194], 5); // Set initial position to San Francisco for example

    // Add a tile layer to the map (OpenStreetMap tiles)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var marker = L.marker([37.7749, -122.4194]).addTo(map);
    marker.bindPopup("<b>Missing Person</b><br>Location info here.").openPopup();
     });

     function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    
    en_btn.addEventListener("click", translateToEnglish);
home_btn.addEventListener// [2] add event listener
("click", home);


     