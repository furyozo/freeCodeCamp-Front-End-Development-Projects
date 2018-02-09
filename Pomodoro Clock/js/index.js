var sessiontime = 0, worktime = 0, breaktime = 0, current = "session";

window.onload = function () {

  var running = false;

  function checkTime(i) {
    if (i < 10) {i = "0" + i};
      return i;
  }

  function displaytime(m, s) {
    m = checkTime(m);
    s = checkTime(s);
    var display = document.getElementById('displaytext');
    display.innerHTML = m + ':' + s;
  }

  document.getElementById('display').onclick = function createTimer() {

    var display = document.getElementById('displaytext');
    var value = document.getElementById('session');

    var m = Math.floor(sessiontime / 60);
    var s = sessiontime % 60;

    displaytime(m, s);

    sessiontime--;

    if (sessiontime < 0) {

      if (current === "session") {
        current = "break";
        displayheader = breaktime;
        document.getElementById('displayheader').innerHTML = "Break";
        var display = document.getElementById('display');
        display.style.backgroundColor = "#c8e6c9";
        display.style.border = "3px solid #81c784";
        sessiontime = breaktime;
      }

      else {
        current = "session";
        displayheader = sessiontime;
        document.getElementById('displayheader').innerHTML = "Session";
        var display = document.getElementById('display');
        display.style.backgroundColor = "#fce4ec";
        display.style.border = "3px solid #ec407a";
        sessiontime = worktime;
      }

    }

    window.pomodorotimer = setTimeout(createTimer, 1000);

  };

  function initPomodoro(arg1, arg2) {
    sessiontime = arg1 * 60;
    breaktime = arg2 * 60;
    var sessionvar = document.getElementById('session');
    var breakvar = document.getElementById('break');
    sessionvar.innerHTML = arg1;
    breakvar.innerHTML = arg2;

    var monitor = document.createElement('div');
    var headertext = document.createTextNode('Session');
    var header = document.createElement('div');
    header.appendChild(headertext);
    header.setAttribute('id', 'displayheader');
    monitor.appendChild(header);

    var timer = document.createElement('h1');
    var timertext = document.createTextNode(arg1);
    timer.setAttribute('id', 'displaytext');
    timer.style.marginTop = "2.5em";
    timer.appendChild(timertext);

    var display = document.getElementById('display').appendChild(monitor);
    display.appendChild(timer);
  }

  function changePomodoro(atr, val) {

    var changed = document.getElementById(atr).value + val;

  }

  initPomodoro(25, 5);

  // break time
  document.getElementById('break-left').onclick = function () {
    var element = document.getElementById('break');
    if (element.innerHTML > 1) {
      element.innerHTML -= 1;
      breaktime = element.innerHTML * 60;
      clearInterval(window.pomodorotimer);
    }
  }
  document.getElementById('break-right').onclick = function () {
    var value = parseInt(document.getElementById('break').innerHTML, 10);
    value++;
    document.getElementById('break').innerHTML = value;
    breaktime = value * 60;
    clearInterval(window.pomodorotimer);
  }
  // work time
  document.getElementById('session-left').onclick = function () {
    var session = document.getElementById('session');
      if (session.innerHTML > 1) {
        session.innerHTML -= 1;
        document.getElementById('displaytext').innerHTML = session.innerHTML;
        sessiontime = session.innerHTML * 60;
        worktime = sessiontime;
        clearInterval(window.pomodorotimer);
      }
  }
  document.getElementById('session-right').onclick = function () {
    var value = parseInt(document.getElementById('session').innerHTML, 10);
    value++;
    document.getElementById('session').innerHTML = value;
    document.getElementById('displaytext').innerHTML = value;
    sessiontime = value * 60;
    worktime = sessiontime;
    clearInterval(window.pomodorotimer);
  }

};
