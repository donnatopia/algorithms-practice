/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */

module.exports = (a, b, c) => {
  var bitA = a.toString(2);
  var bitB = b.toString(2);
  var bitC = c.toString(2);

  const paddingLength = Math.max(bitA.length, bitB.length, bitC.length);

  const addPadding = (bit) => {
    while(bit.length < paddingLength) {
      bit = '0' + bit;
    }
    return bit;
  }

  bitA = addPadding(bitA);
  bitB = addPadding(bitB);
  bitC = addPadding(bitC);

  let counter = 0;

  for(let i = 0; i < bitC.length; i++) {
    if (bitC[i] === "1" && bitA[i] === "0" && bitB[i] === "0") {
      counter++;
    }

    if (bitC[i] === "0") {
      if (bitA[i] === "1") {
        counter++;
      }
      if (bitB[i] === "1") {
        counter++;
      }
    }
  }

  return counter;
}