/**
 * @param {object} apple
 * @param {object} orange
 * @return {boolean}
 */

const deepEquals = (apple, orange) => {
  const appleType = typeof apple;
  const orangeType = typeof orange;

  if (appleType !== orangeType) return false;
  if (appleType === 'string' || appleType === 'number' || appleType === 'boolean') return apple === orange;

  if (appleType === 'object') {
    if (Object.keys(apple).length !== Object.keys(orange).length) return false;

    for (let key in apple) {
      if (!deepEquals(apple[key], orange[key])) return false;
    }

    return true;
  }
}

module.exports = deepEquals;
