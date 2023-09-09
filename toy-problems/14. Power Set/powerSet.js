/**
 * @param {string} str
 * @return {string[]}
 */

const createPowerSet = (str) => {
  let powerSet = [''];
  if (str.length === 0) return powerSet;

  let letters = new Set(str.split(''));
  let sorted = [];
  for (const letter of letters) {
    sorted.push(letter)
  }
  sorted = sorted.sort().join('');

  for (let i = 0; i < sorted.length; i++) {
    let letter = sorted[i];
    let generatedPowerSet = createPowerSet(sorted.slice(i + 1));

    generatedPowerSet.forEach((set) => powerSet.push(letter + set));
  }

  return powerSet;
}

module.exports = createPowerSet;
