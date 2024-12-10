const container = document.querySelector("grid-container");

const createGrid=(rows, columns) => {
    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-cols',columns);

    for(let i=0; i < (rows* columns); i++) {
        let item = document.createElement("div");
        item.classList.add('grid-item');
        item.innerText = i + 1
        container.appendChild(item)
    }
}

createGrid(8,8)

const fillGrid=(x, y, blockSize, color) =>
    { 
        let items = document.querySelectorAll(".grid-item");

        for (let i=0; <items.length;i++){
            let markup = '<div class="card" 
                style= "grid-container: $(Math.floor(Math.random() *y) +1} /span ${blockSize};
                grid-row:${Math.floor(Math.random() * x) +1} /span ${blockSize};
                background: ${color};">${i} </div>'
    container.innerHTML += markup
        }
    }
fillGrid(1,1,2 "green")







// JavaScript to add interactivity (Optional, for future enhancements)
document.addEventListener("DOMContentLoaded", function() {
    // Example: Add an event listener to make the flower "bloom" or animate
    const flowerCenter = document.querySelector('.flower-center');
    flowerCenter.addEventListener('click', function() {
        alert("The flower bloomed!");
    });
});

const container = document.querySelector(".grid-container");

const createGrid = (rows, columns) => {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', columns);
  
  for(let i = 0; i < (rows * columns); i++) {
    let item = document.createElement("div");
    item.classList.add('grid-item');
    item.innerText = i + 1
    container.appendChild(item)
  }
}
createGrid(8, 8)

/*
  x and y define the starting axes of each block
  blockSize determines how many spaces in the grid each block will occupy
  
  pick a random block size from an array, size = [1, 2, 3] 
  
  .item {
    grid-column: 2 / span 3;
    grid-row: 1 / span 2;
  }
*/

const fillGrid = (x, y, blockSize, color) => {
  let items = document.querySelectorAll(".grid-item");
  
  // console.log('==>', Math.floor(Math.random() * y) + 1)
  
  for(let i = 0; i < items.length; i++){
     let markup = `<div class="card" 
                        style="grid-column: ${Math.floor(Math.random() * y) + 1} / span ${blockSize}; 
                        grid-row: ${Math.floor(Math.random() * x) + 1} / span ${blockSize};
                        background: ${color};">${i}</div>`
     container.innerHTML += markup
  }

}
fillGrid(1, 1, 2, "tomato")

<script>
var input = document.getElementById("myInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
</script>




 
 
 
