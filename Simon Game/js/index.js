var audiored = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var audioblu = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var audioylw = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var audiogrn = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

var memory = [], counter = 0, player = [], playercounter = 0, mode = 'basic';

// sleep function for waiting
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function wrongButton () {
  $('.playbutton').css('border', '3px solid red');
  setTimeout(function(){ $('.playbutton').css('border', '1px solid #0d0d0d'); }, 750);
}

function checkFinish() {
  for (var x = 0; x < counter; x ++) {
    if (player[x] !== memory[x])
      return false;
  }
  return true;
}

// check if button press is correct
async function checkButton (btnNumber) {

  playercounter++;
  player.push(btnNumber);
  playButtonAudio(btnNumber);

  for (var x = 0; x < playercounter; x ++) {
    if (memory[x] !== player[x]) {
      player = [];
      playercounter = 0;
      wrongButton();
        if (mode === 'strict')
          initGame();
      showOrder();
      return;
    }
  }

  if (checkFinish() === true) {
    $('.playbutton').css('border', '3px solid green');
    setTimeout(function(){ $('.playbutton').css('border', '1px solid #0d0d0d'); }, 750);
      if (counter === 20)
        $('#winModal').modal('show');
    player = [];
    playercounter = 0;
    counter++;
    $('#display').text(counter);
    await sleep(1000);
    showOrder();
  }

}

// play a random button
function playButtonAudio (variable) {
  if (variable === 1) {
    audiored.play();
    $('#red').css('box-shadow', 'inset 0 0 100px 100px rgba(255, 255, 255, 0.4)');
    setTimeout(function(){ $('#red').css('box-shadow', '3px 3px 1px #888888'); }, 750);
  }
  else if (variable === 2) {
    audioblu.play();
    $('#blue').css('box-shadow', 'inset 0 0 100px 100px rgba(255, 255, 255, 0.4)');
    setTimeout(function(){ $('#blue').css('box-shadow', '3px 3px 1px #888888'); }, 750);
  }
  else if (variable === 3) {
    audioylw.play();
    $('#yellow').css('box-shadow', 'inset 0 0 100px 100px rgba(255, 255, 255, 0.4)');
    setTimeout(function(){ $('#yellow').css('box-shadow', '3px 3px 1px #888888'); }, 750);
  }
  else if (variable === 4) {
    audiogrn.play();
    $('#green').css('box-shadow', 'inset 0 0 100px 100px rgba(255, 255, 255, 0.4)');
    setTimeout(function(){ $('#green').css('box-shadow', '3px 3px 1px #888888'); }, 750);
  }
}

// show the correct order of buttons to player
async function showOrder () {
  for (var x = 0; x < counter; x ++) {
    await sleep(1000);
    playButtonAudio(memory[x]);
  }
}

// start a new game
function initGame () {

  if (counter > 0) {
    counter = 0;
    memory = [];
  }

  for (var x = 0; x < 20; x ++) {
    memory.push(Math.floor((Math.random() * 4) + 1));
  }

  counter++;
  $('#display').text(counter);
  showOrder();

}

window.onload = async function main () {

  $('#start').on('click', function () {
    if (counter === 0)
      initGame();
    else
      $('#myModal').modal('show');
  });

  // advanced buttons
  $('#game_restart').on('click', function () {
    initGame();
  });
  $('#game_restart2').on('click', function () {
    initGame();
  });
  $('#strict').on('click', function () {
    mode = 'strict';
    initGame();
  });

  // keyboard buttons
  $('#red').on('click', function () {
    checkButton(1);
  });
  $('#blue').on('click', function () {
    checkButton(2);
  });
  $('#yellow').on('click', function () {
    checkButton(3);
  });
  $('#green').on('click', function () {
    checkButton(4);
  });

};
