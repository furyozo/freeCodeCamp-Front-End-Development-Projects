var player = 'x', computer = 'o';
var playerturn = true;

function checkTie () {

  for (var a = 0; a < 3; a ++) {
    for (var b = 0; b < 3; b ++) {
        if ($('#'+a+b).text() === '')
          return false;
    }
  }

  return true
}

function restartGame () {

  for (var a = 0; a < 3; a ++) {
    for (var b = 0; b < 3; b ++) {
        $('#'+a+b).empty();
    }
  }

  $('#result-display').empty();
  $('#myModal').modal('show');

}


function pcTurn () {

  if ($('#11').text() === '') {
    $('#11').text(computer);
    playerturn = true;
    return;
  }

  for (var i = 0; i < 3; i ++) {

    // check rows for winning
    if ($('#'+i+'0').text() === $('#'+i+'1').text() && $('#'+i+'0').text() !== '' && $('#'+i+'2').text() === '') {
      $('#'+i+'2').text(computer);
      playerturn = true;
      return;
    }
    else if ($('#'+i+'0').text() === $('#'+i+'2').text() && $('#'+i+'0').text() !== '' && $('#'+i+'1').text() === '') {
      $('#'+i+'1').text(computer);
      playerturn = true;
      return;
    }
    else if ($('#'+i+'1').text() === $('#'+i+'2').text() && $('#'+i+'1').text() !== '' && $('#'+i+'0').text() === '') {
      $('#'+i+'0').text(computer);
      playerturn = true;
      return;
    }

    // check cols for winning
    else if ($('#0'+i).text() === $('#1'+i).text() && $('#0'+i).text() !== '' && $('#2'+i).text() === '') {
      $('#2'+i).text(computer);
      playerturn = true;
      return;
    }
    else if ($('#0'+i).text() === $('#2'+i).text() && $('#0'+i).text() !== '' && $('#1'+i).text() === '') {
      $('#1'+i).text(computer);
      playerturn = true;
      return;
    }
    else if ($('#1'+i).text() === $('#2'+i).text() && $('#1'+i).text() !== '' && $('#0'+i).text() === '') {
      $('#0'+i).text(computer);
      playerturn = true;
      return;
    }

  }

  // checking diagonals
  if ($('#00').text() === $('#11').text() && $('#00').text() !== '' && $('#22').text() === '') {
    $('#22').text(computer);
    playerturn = true;
    return;
  }
  if ($('#00').text() === $('#22').text() && $('#00').text() !== '' && $('#11').text() === '') {
    $('#11').text(computer);
    playerturn = true;
    return;
  }
  if ($('#11').text() === $('#22').text() && $('#11').text() !== '' && $('#00').text() === '') {
    $('#00').text(computer);
    playerturn = true;
    return;
  }

  if ($('#02').text() === $('#11').text() && $('#02').text() !== '' && $('#20').text() === '') {
    $('#20').text(computer);
    playerturn = true;
    return;
  }
  if ($('#02').text() === $('#20').text() && $('#02').text() !== '' && $('#11').text() === '') {
    $('#11').text(computer);
    playerturn = true;
    return;
  }
  if ($('#20').text() === $('#11').text() && $('#20').text() !== '' && $('#02').text() === '') {
    $('#02').text(computer);
    playerturn = true;
    return;
  }

  for (var a = 0; a < 3; a ++) {
    for (var b = 0; b < 3; b ++) {
      if ($('#'+a+b).text() === '') {
        $('#'+a+b).text(computer);
        playerturn = true;
        return;
      }
    }
  }

  playerturn = true;
}

// function that checks if game is over
function checkFinish () {
  // check rows and collums for winner
  for (var x = 0; x < 3; x ++) {
    // rows
    if ($('#'+x+'0').text() === $('#'+x+'1').text() && $('#'+x+'1').text() === $('#'+x+'2').text() && $('#'+x+'0').text() !== '')
      $('#result-display').text($('#' + x + '0').text() + ' won !');
    // cols
    if ($('#0'+x).text() === $('#1'+x).text() && $('#1'+x).text() === $('#2'+x).text() && $('#0'+x).text() !== '')
      $('#result-display').text($('#0' + x).text() + ' won !');
  }
  // diagonals
  if ($('#00').text() === $('#11').text() && $('#00').text() === $('#22').text() && $('#00').text() !== '')
    $('#result-display').text($('#00').text() + ' won !');
  if ($('#02').text() === $('#11').text() && $('#02').text() === $('#20').text() && $('#02').text() !== '')
    $('#result-display').text($('#02').text() + ' won !');

  return false;
}

window.onload = function() {

  $('#myModal').modal('show');

  $('#cross').on('click', function() {
    player = 'x';
    computer = 'o';
  });
  $('#circle').on('click', function() {
    player = 'o';
    computer = 'x';
  });

  $('.public-board-button').on('click', function() {
    if ($(this).text() === '' && playerturn === true) {
      $(this).text(player);
      playerturn = false;

      checkFinish();
      pcTurn();
      checkFinish();

      if (checkTie() === true && $('#result-display').text() === '')
        $('#result-display').text('It\'s a tie!');
    }

  });

  $('#restart-btn').on('click', function() {
    restartGame();
  });
}
