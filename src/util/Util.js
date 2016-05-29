/**
 *
 * Created by erfangchen on 5/28/16.
 */

/**
 * credit http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
 * @param value
 * @param roundTo
 * @returns {string}
 */
export function formatMoney(value, roundTo = 2){
  const d = '.';
  const t = ',';
  var n = value,
    s = n < 0 ? '-' : '',
    i = parseInt(n = Math.abs(+n || 0).toFixed(roundTo)) + '',
    j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) + (roundTo ? d + Math.abs(n - i).toFixed(roundTo).slice(2) : '');
}
