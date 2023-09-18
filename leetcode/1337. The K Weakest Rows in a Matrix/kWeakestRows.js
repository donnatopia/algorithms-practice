/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

const kWeakestRows = (mat, k) => {
  let soliders = {};

  for (let i = 0; i < mat.length; i++) {
    let count = 0;

    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        count++;
      } else {
        break;
      }
    }

    if (soliders[count]) {
      soliders[count].push(i);
    } else {
      soliders[count] = [i];
    }
  }

  let weakestRows = [];
  let numOfSoliders = 0;

  while (weakestRows.length !== k) {
    if (soliders[numOfSoliders]) {
      weakestRows.push(soliders[numOfSoliders].shift());
      if (soliders[numOfSoliders].length === 0) numOfSoliders++;
    } else {
      numOfSoliders++;
    }
  }

  return weakestRows;
}

module.exports = kWeakestRows;