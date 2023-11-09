
const GRIDSIZE = 16*16; 


createDrawingGrid(GRIDSIZE);



const gridNodeList = document.querySelectorAll(".grid");
console.log("after");

gridNodeList.forEach(diveNode => diveNode.addEventListener("mousemove", function name(e) {
    
    let nodeElement = e.target.style.backgroundColor = "black"
    

    console.log(e); 
    
}))








function createDrawingGrid(size) 
{
    const containerDiv = document.querySelector(".container");

    for(let i= 1; i < size; i++)
    {
        let gridDiv = document.createElement("div");

        
        gridDiv.classList.add("grid"); 
        containerDiv.appendChild(gridDiv);
    }
}