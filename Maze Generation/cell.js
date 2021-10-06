function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];    // top right bottom left
    this.visited = false;
  
    this.checkNeighbors = function() {
      var neighbors = [];
  
      var top = grid[index(i, j - 1)];
      var right = grid[index(i + 1, j)];
      var bottom = grid[index(i, j + 1)];
      var left = grid[index(i - 1, j)];
  
      if(top && !top.visited) {
        neighbors.push(top);
      }
      if(right && !right.visited) {
        neighbors.push(right);
      }
      if(bottom && !bottom.visited) {
        neighbors.push(bottom);
      }
      if(left && !left.visited) {
        neighbors.push(left);
      }
  
      if(neighbors.length > 0) {
        var r = floor(random(0, neighbors.length));
        return neighbors[r];
      }
      else {
        return undefined;
      }
  
    }
  
    this.highlight = function() {
      var x = this.i * w;
      var y = this.j * w;
      noStroke();
      fill(0, 0, 255, 100);
      rect(x, y, w, w);
    }
  
    this.show = function() {
      var x = this.i * w;
      var y = this.j * w;
      
      stroke(255);
  
      if(this.walls[0]) {
        line(x     , y     , x + w , y);          // top
      }
      if(this.walls[1]) {
        line(x + w , y     , x + w , y + w);      // right
      }
      if(this.walls[2]) {
        line(x + w , y + w , x     , y + w);      // bottom 
      }
      if(this.walls[3]) {
        line(x     , y + w , x     , y);          // left
      }
      
      if(this.visited) {
        noStroke();
        fill(255, 0, 255, 100);
        rect(x, y, w, w);
      }
    }
  }
  
  
  function removeWalls(a, b) {
    var x = a.i - b.i;
    if(x === 1) {
      // b is the left of a
      a.walls[3] = false;
      b.walls[1] = false;
    }
    else if(x === -1) {
      // b is the right of a;
      a.walls[1] = false;
      b.walls[3] = false;
    }
    
    var y = a.j - b.j;
    if(y === 1) {
      // b is the top of a
      a.walls[0] = false;
      b.walls[2] = false;
    }
    else if(y === -1) {
      // b is the bottom of a;
      a.walls[2] = false;
      b.walls[0] = false;
    }
    
  }