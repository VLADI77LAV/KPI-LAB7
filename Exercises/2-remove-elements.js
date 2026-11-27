'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    let i;
    while ((i = array.indexOf(item)) !== -1) {
      array.splice(i, 1);
    }
  }
  return array;
};

module.exports = { removeElements };
