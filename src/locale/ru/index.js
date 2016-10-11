var buildDistanceInWordsLocale = require('./build_distance_in_words_locale.js')
var buildFormatLocale = require('./build_format_locale/index.js')

module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}
