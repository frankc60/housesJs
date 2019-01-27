// jshint esversion:6
class Grid {
    constructor(wdth = 100,hght = 200, cols=5, rows=5) {
        this.width = wdth;
        this.cols = cols;
        this.rows = rows;
        this.height = hght;  
        this.type = null;
        this.red = 0;
        this.yellow = 0;
        this.blue = 0;
        this.color;

        console.log(`GRID constructor
        width: ${this.width}
        height: ${this.height}
        cols: ${this.cols}
        rows: ${this.rows}`);
   
    }

    async buildAnim(a, b, rval) {
        let cellWidth = this.width / this.cols / 2;
        let cellHeight = this.height / this.rows / 2;
        
        console.log("building...");
        fill(rval);
        stroke("black");
        
        ellipse(this.grid[a][b].locx + cellWidth, this.grid[a][b].locy + cellHeight, 20, 20);

        await setTimeout(() => {
            console.log("built");
            fill(rval);
            stroke(rval);
            ellipse(this.grid[a][b].locx + cellWidth, this.grid[a][b].locy + cellHeight, 20, 20);
        }, 3000);

     

    }


    build(a, b, rval) {
        if(!this.grid[a][b].build || rval == 255) {
           
            
            //ellipse(this.grid[a][b].locx + cellWidth, this.grid[a][b].locy + cellHeight, 20, 20);
            if (rval == 255) {
                this.grid[a][b].build = false;
                this[this.grid[a][b].type]--;
                console.log(`BULLDOZED type: ${this.grid[a][b].type} ${this[this.grid[a][b].type]}`);
                this.grid[a][b].type = null;
            } else {
                this.grid[a][b].build = true;
                this.grid[a][b].type = rval;
                this[rval]++; //increment counter of property type.
                console.log(`BUILT type: ${rval} ${this[rval]}`);
            }
            this.buildAnim(a, b, rval);
            // console.log("clicked:", this.grid[a][b].locx, this.grid[a][b].locy, "[" + a + "]", "[" + b + "]" + rval);
        }
    }

    
    make() {

           // create multi dimensional array of grid
        this.grid = new Array(this.cols);
        for (let a = 0; a < this.cols; a++) {
            this.grid[a] = new Array(this.rows);
        }
     

        let x = 0, y = 0;

        for (let a = 0; a < this.cols; a++) {
            for (let b = 0; b < this.rows; b++) {
    
                this.grid[a][b] = {
                    locx: x,
                    locy: y,
                    width: (this.width / this.cols),
                    height: (this.height / this.rows),
                    build: false
                };
                fill(255);
                stroke(233);
                //console.log(x, y, (this.width / this.cols), (this.height / this.rows));

                rect(x, y, (this.width / this.cols), (this.height / this.rows));
              
                x = x + (this.width / this.cols);
            }
            y = y + (this.height / this.rows);
            x = 0;
        }
    }

    clicked(x, y, radio) {
        let rval = radio.value();
        // console.log(x, y);
        for (let a = 0; a < this.grid.length; a++) {
            for (let b = 0; b < this.grid[a].length; b++) {
          
                if (x > this.grid[a][b].locx && x < this.grid[a][b].locx + (this.width / this.cols)) {
                    if (y > this.grid[a][b].locy && y < this.grid[a][b].locy + (this.height / this.rows) ) {
                        console.log("clicked:", this.grid[a][b].locx, this.grid[a][b].locy, "[" + a + "]", "[" + b + "]" + rval);
                     
                        //stroke(rval);
                      
                        this.build(a, b, rval);
                       return true;
                    }
                    
                }
            }
        }
        return false;
    }
}
