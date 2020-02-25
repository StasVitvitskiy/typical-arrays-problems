
exports.min = function min (array) {
    return (array || []).reduce((acc, cur) => {
        return Math.min(acc,cur);
    }, 0);
}

exports.max = function max (array) {
  return (array || []).reduce((acc, cur) => {
      return Math.max(acc,cur);
  }, 0);
}

exports.avg = function avg (array) {
  return (array || []).reduce((acc, cur) => {
      return (acc + cur);
  }, 0)/ (array || []).length || 0 ;
}
