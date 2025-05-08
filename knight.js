function knightMoves(start, end){
  if(!checkCoordinate(start) || !checkCoordinate(end)){
    console.log('Please enter a valid start and end value. All coordinates should be in the range [0,7]');
  }
  let trails = new Graph(start);
  let visited = [];
  visited.push(start);
  let foundNode = false;
  const calculateMoves = (node) => {
    if(node.data === end){
      foundNode = true;
      return node;
    }
    if(foundNode){
      return null;
    }
    move0 = [node.data[0]+2, node.data[1]+1];
    move1 = [node.data[0]+2, node.data[1]-1];
    move2 = [node.data[0]-2, node.data[1]+1];
    move3 = [node.data[0]-2, node.data[1]-1];
    move4 = [node.data[0]+1, node.data[1]+2];
    move5 = [node.data[0]+1, node.data[1]-2];
    move6 = [node.data[0]-1, node.data[1]+2];
    move7 = [node.data[0]-1, node.data[1]-2];
    if(checkCoordinate(move0) && !visited.includes(move0)){ 			
      let newNode = node.addEdge(move0, node);
      visited.push(move0);
      calculateMoves(newNode);
    }
    if(checkCoordinate(move1) && !visited.includes(move1)){ 			
      let newNode = node.addEdge(move1, node);
      visited.push(move1);
      calculateMoves(newNode);
    }
    if(checkCoordinate(move2) && !visited.includes(move2)){ 			
      let newNode = node.addEdge(move2, node);
      visited.push(move2);
      calculateMoves(newNode);
    }
   if(checkCoordinate(move3) && !visited.includes(move3)){ 			
      let newNode = node.addEdge(move3, node);
      visited.push(move3);
     calculateMoves(newNode);
    }
    if(checkCoordinate(move4) && !visited.includes(move4)){ 			
      let newNode = node.addEdge(move4, node);
      visited.push(move4);
      calculateMoves(newNode);
    }
    if(checkCoordinate(move5) && !visited.includes(move5)){ 			
     let newNode = node.addEdge(move5, node);
      visited.push(move5);
      calculateMoves(newNode);
    }
    if(checkCoordinate(move6) && !visited.includes(move6)){ 			
      let newNode = node.addEdge(move6, node);
      visited.push(move6);
      calculateMoves(newNode);
    }
    if(checkCoordinate(move7) && !visited.includes(move7)){ 			
      let newNode = node.addEdge(move7, node);
      visited.push(move7);
      calculateMoves(newNode);
    }
  }
  let endNode = calculateMoves(trails.root);
  let travail = [];
  while(endNode != null){
    travail.unshift(endNode);
    endNode = endNode.parent;
  }
  
  return travail;
}

function checkCoordinate(coord){
  if(coord[0] < 0 || coord[0] > 7 || coord[1] < 0 || coord[1] > 7){
    return false;
  } else{
    return true;
  }
}


class Graph{
  constructor(data){
    this.root = new GraphNode(data);
  }
}

class GraphNode{
  constructor(data, parent = null){
    this.data = data;
    this.parent = parent;
    this.edges = [];
  }
  
  addEdge(data, parent = null){
    let newNode = new GraphNode(data, parent);
    this.edges.push(newNode);
    return newNode;
  }
}

console.log(knightMoves([0,0],[0,0]));
