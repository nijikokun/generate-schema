exports.isDate = function (date) {
  return ((new Date(date).toString() !== "Invalid Date" && !isNaN(new Date(date))))
}