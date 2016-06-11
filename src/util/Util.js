/**
 *
 * Created by erfangchen on 5/28/16.
 */

/**
 * credit http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
 * @param value
 * @param roundTo
 * @param usePrefix
 * @returns {string}
 */
export function formatAsMoney(value, roundTo = 2, usePrefix = false) {
  const d = '.';
  const t = ',';
  var n = value,
    s = n < 0 ? '-' : '',
    i = parseInt(n = Math.abs(+n || 0).toFixed(roundTo)) + '',
    j = (j = i.length) > 3 ? j % 3 : 0;
  return (usePrefix ? '$' : '') + s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) + (roundTo ? d + Math.abs(n - i).toFixed(roundTo).slice(2) : '');
}

export function isFormattedAsMoney(value) {
  return value.search(/^\$?(\d{1,3})?(,\d{3})+(\.\d*)?$/) >= 0;
}


/**
 * return the value with % appended and multiply by 100
 * @param value
 * @param precision number of decimal places
 * @returns {string}
 */
export function formatAsPercent(value, precision = 2) {
  return `${(value * 100).toFixed(precision)}%`;
}
