// jshint esversion:6

let grid; 
let radio;
let div1;




function setup() {
    createCanvas(700,700); 
    background(0);
    grid = new Grid(width, height, 5,5);

    grid.make();
    radio = createRadio("1");
    radio.option('residential',"red");
    radio.option('commercial',"blue");
    radio.option('industrial', "yellow");
    radio.option('bulldozer', "255");
    radio.style('width', '350px');
    radio.value("red");
    
    textAlign(CENTER);
    fill(255, 0, 0);

    div1 = createDiv('Properties').size(100, 100);
}


function draw() {
 //   fill(0);
 //   stroke(0);
    strokeWeight(8);
    line(10, 10, 100, 100);
    
  

 //   translate(100, 100);
 //   rotate(100);
}


function mousePressed() {
    //console.log(mouseX,mouseY)
    if (grid.clicked(mouseX, mouseY, radio)) { updateSummary(); }
}

function updateSummary() {
    let countProperties = 0;
    for (let a = 0; a < grid.cols; a++) {
        
     //    result = grid.filter(g => g.build == true);

          for (let b = 0; b < grid.rows; b++) {
              if (grid.grid[a][b].build) {
                  countProperties++;
                   div1.html("Properties:" + countProperties, false);
              }
             
          }
      }
}