var DATE_REGEXP = /\d{4}-\d{2}-\d{2}/

exports.isDate = function (date) {
  return ((new Date(date).toString() !== 'Invalid Date' && !isNaN(new Date(date))))
}

exports.isTimestamp = function (string) {
  return string.length > 18 && !isNaN((new Date(string)).getTime())
}

exports.isDateString = function (string) {
  return string.match(DATE_REGEXP)
}
