module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let result = [];

  matrix.forEach( (element, index) => {
    if ( index % 2 ) {
      result = [...result, ...element.reverse()];
    } else {
      result = [...result, ...element];
    }
  });
  return result;
}