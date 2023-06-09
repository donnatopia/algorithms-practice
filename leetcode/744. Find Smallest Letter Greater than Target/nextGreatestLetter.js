/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

module.exports = (letters, target) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const targetOrder = alphabet.indexOf(target);

  for(let letter of letters) {
    if (alphabet.indexOf(letter) > targetOrder) {
      return letter;
    }
  }

  return letters[0];
}