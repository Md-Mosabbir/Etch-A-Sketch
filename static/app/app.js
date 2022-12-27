//Getting Container, fixed and random button---------
let Container = document.querySelector(".container")
let fixedColours = document.querySelector(".fixed-colour")
let RandomColours = document.querySelector(".random-colour")

//Forming the grid*------------------------------
for(x=0; x<256;x++) {
    let board = document.createElement('div');
    board.className = "grid";

    Container.appendChild(board);
}

//------------------------------------------------------


//Random Colour---------------------
let randomWarmColour = ["#FD841F","#E14D2A","#CD104D","#9C2C77","#9A1663","#FF5858"]

function randomisingColour(randomWarmColour){
    return randomWarmColour[Math.floor(Math.random()*randomWarmColour.length)];
    
}
//----------------------------------------------


//--------------------------------------------- Activating random colour---------------
let gridEvent = document.querySelectorAll(".grid");



RandomColours.addEventListener('click', function activateRandomColours(){

  gridEvent.forEach(grid => {
    grid.addEventListener('mouseover', () => grid.style.backgroundColor = randomisingColour(randomWarmColour));
  });
  
});
//-------------------------------------------------------------