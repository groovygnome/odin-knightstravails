knightMoves(start, end){
  if(start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7 || end[0] < 0 || end[0] > 7 || end[1] < 0 || end[1] > 7 ){
    console.log('Please enter a valid start and end value. All coordinates should be in the range [0,7]');
  }
  
  
  
}

class Graph(){
  constructor(data){
    this.root = new GraphNode(data);
  }
}

class GraphNode(){
  constructor(data){
    this.data = data;
    this.edges = [];
  }
}
