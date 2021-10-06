var rows, cols;
var w = 10;

var grid = [];

var current;

var stack = [];

function setup() {
  createCanvas(200, 200);
  cols = floor(width / w);
  rows = floor(height / w);

  // frameRate(5);

  for(var j = 0; j < rows; j++) {
    for(var i = 0; i < cols; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  current = grid[0];

}


function draw() {
  background(51);

  for(var i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  current.visited = true;
  current.highlight();
  // Step 1
  var next = current.checkNeighbors();
  if(next) {
    next.visited = true;

    // Step 2
    stack.push(current);
    
    // Step 3
    removeWalls(current, next);


    // Step 4
    current = next;
  }
  else if(stack.length > 0){
    current = stack.pop();
  }

}


function index(i, j) {
  if(i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
     return -1;
  }
  return i + j * cols;
}


