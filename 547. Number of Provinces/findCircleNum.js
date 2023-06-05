/**
 * @param {number[][]} isConnected
 * @return {number}
 */

module.exports = (isConnected) => {
  let connections = [];

  const addConnection = (i, j) => {
    var addedConnection = false;
    var addedIndex = 0;

    if (connections.length) {
      for (var k = 0; k < connections.length; k++) {
        var connection = connections[k];

        if(connection.has(i) || connection.has(j)) {

          if (addedConnection === false) {
            connection.add(j);
            connection.add(i);
            addedIndex = k;
            addedConnection = true;
          } else {
            connection.forEach((element) => {
              connections[addedIndex].add(element);
            })
            connections.splice(k, 1);
          }
        }
      }
    }

    if (addedConnection === false) {
      connections.push(new Set([i, j]));
    }
  }

  const checkToAddCity = (i) => {
    if (connections.length) {
      for (var connection of connections) {
        if(connection.has(i)) {
          return;
        }
      }
    }

    connections.push(new Set([i]));
  }

  for (let i = 0; i < isConnected.length; i++) {
    for (let j = i + 1; j < isConnected[i].length; j++) {
      if (isConnected[i][j] === 1) {
        addConnection(i, j);
      }
    }

    checkToAddCity(i);
  }

  return connections.length;
}