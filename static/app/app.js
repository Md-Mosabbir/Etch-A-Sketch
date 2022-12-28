let color = "black";
let click = true;

let colouringStatus = document.getElementById("colouring-status");

//-----------Drawing and Not Drawing-------------------------------------\\


document.querySelector('body').addEventListener('click', (e) =>{

    if(e.target.tagName != 'INPUT' && e.target.tagName != 'BUTTON'){
        click = !click;
        
        if(!click){
            colouringStatus.textContent = "Colouring"
            document.querySelector('body').style.cursor = "pointer"
            colouringStatus.style.backgroundColor = "green";


        }
        else{
            colouringStatus.textContent = "Not Colouring"
            colouringStatus.style.backgroundColor = "red";
            document.querySelector('body').style.cursor = "default"
        }
        
    }
    
    
})


//---------------------Making the Board------------------



function BoardFormation(size){
    
    
    let Container = document.querySelector(".container");
    let cellsExistance = Container.querySelectorAll("div");
    cellsExistance.forEach((div) => div.remove()); 


    Container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    Container.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    let amount = size * size;
    

    for (let i = 0; i<amount; i++){

        let Cell = document.createElement("div");
        Cell.addEventListener('mouseenter', PickedColour);
        Cell.classList.add("grid-border-show");
        Container.appendChild(Cell);



    
    }



}
//----------Colour Picker--------------------\\







function PickedColour(){
    if(!click){



        if(color == 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50% )`
    
        }
        else if(color == 'white'){
            this.style.backgroundColor = "white";
        }
        else if(color == 'draw'){
            let ColourPicker =  document.querySelector('input[type=color]')
            this.style.backgroundColor = ColourPicker.value;
            
            
        }
        else if(color == 'gray'){
            let RandomNumber = Math.floor(Math.random()* 255);
            this.style.backgroundColor = `rgb(${RandomNumber},${RandomNumber},${RandomNumber})`;

        }
        else if(color == 'black'){
            this.style.backgroundColor = "black";
        }


    }




}

function changeColor(choice){
    color = choice;
}



    

//--------Reset BUtton----------------------------\\


function reset(){
    let Container = document.querySelector(".container");
    let cellsExistance = Container.querySelectorAll("div");
    cellsExistance.forEach((div) => div.style.backgroundColor = "white"); 
}

//------------------------------------------------------\\




BoardFormation(5);





// Toggling grid border ------------------------------\\





function ShowGridBorder(){
    let Container = document.querySelector(".container");
    let cellsExistance = Container.querySelectorAll("div");
    cellsExistance.forEach((div) => div.classList.toggle("grid-border-show"));

}




//------------------------------------------------------------\\

//------Slider-------------------------------------------\\


const sliderValue = document.querySelector(".max");
const inputSldier = document.querySelector("input[type=range]");



inputSldier.oninput = (() => {
    let value = inputSldier.value;
    sliderValue.textContent = value;
    sliderValue.style.left = (value/2) + "%";
    BoardFormation(value);
});


//-----------------------------------------------------------\\















