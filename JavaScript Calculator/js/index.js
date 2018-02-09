// calculator states
var operator = false, hasdot = false;


function resolve(str) {

  var arr = str.split('');
  var tmp = '';
  var result = [];

  for (var x in arr) {

    // if first value is negative, change it
    if (arr[0] === '-' && operator === true) {
      arr[0] = 0 - arr[1];
      arr.splice([1], 1);
    }

    // get all values into an array
    if ((arr[x] >= '0' && arr[x] <= '9') || arr[x] == '.')
      tmp += arr[x];
    else {
      result.push(tmp);
      result.push(arr[x]);
      tmp = '';
    }

    if (x == arr.length-1)
      result.push(tmp);
  }

  // checking if first number is negative
  if (result[0] === '')
    result[0] = '0';

  console.log(result);

  var tmp2 = 0;

  while (result.length !== 1) {
    // * /
    for (var i in result) {
      if (result[i] === 'x') {
        result[i] = parseFloat(result[i-1]) * parseFloat(result[i-1+2]);
        result.splice([i-1], 1); result.splice([i], 1);
      }
      if (result[i] === '%') {
        result[i] = parseFloat(result[i-1]) / parseFloat(result[i-1+2]);
        result.splice([i-1], 1); result.splice([i], 1);
      }
    }
    // + -
    for (var j in result) {
      if (result[j] === '+') {
        result[j] = parseFloat(result[j-1]) + parseFloat(result[j-1+2]);
        result.splice([j-1], 1); result.splice([j], 1);
      }
      if (result[j] === '-') {
        result[j] = parseFloat(result[j-1]) - parseFloat(result[j-1+2]);
        result.splice([j-1], 1); result.splice([j], 1);
      }
    }
  }

  console.log(result);
  return result;

}


window.onload = function () {

  var display = document.getElementById('display');

  $('.public-calc-button').on('click', function() {

    // get C and clear the display
    if ($(this).text() === 'C')
      $('#display').empty();

    // dot
    else if ($(this).text() === '.') {
      if ($('#display').text() === '' || document.getElementById('display').innerHTML.substr(-1) === '.')
        console.log('invalid operation');
      else if (operator === false)
        $('#display').append($(this).text());
    }

    // operators
    else if ($(this).text() === '+' || $(this).text() === '-' || $(this).text() === 'x' || $(this).text() === '%') {

      if (document.getElementById('display').innerHTML.substr(-1) === '.')
        console.log('invalid operation');

      else if (operator === true) {
        $('#display').text($('#display').text().slice(0, -1));
        $('#display').append($(this).text());
      }
      else
        $('#display').append($(this).text());

      operator = true;

    }

    // resolve calculation
    else if ($(this).text() === '=') {
      var tmp = resolve($('#display').text());
      $('#display').empty();
      $('#display').text(tmp);
    }
    else {
      $('#display').append($(this).text());
      operator = false;
    }

  });

};
