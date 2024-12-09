

let cursor = gsap
  .to(".cursor", {
    opacity: 0,
    ease: "power2.inOut",
    repeat: -1,
  })
  .pause(1);

let text = gsap
  .timeline({ autoRemoveChildren: true, repeat: -1 })
  .pause();
function updateText(inputText) {
  if (cursor.paused()) {
    cursor.play();
  }
  if (text.paused()) {
    text.play();
  }
  text.add(
    gsap
      .timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })
      .to(".text", {
        duration: 2,
        text: {value: inputText, rtl: true},
        onComplete: () => {
          if (text.getChildren().length === 2) {
            cursor.pause(1);
            text.pause();
          }
        },
      })
  );
}
for(i=0;i<10;i++) {
  updateText('Superswag Magazine ' + i);
}

TextPlugin.splitInnerHTML = splitInnerHTML;
TextPlugin.emojiSafeSplit = emojiSafeSplit;
TextPlugin.getText = getText;

_getGSAP() && gsap.registerPlugin(TextPlugin);

export { TextPlugin as default };


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


     
