var streamers = [
  "freecodecamp",
  "athenelive",
  "ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas",
  "comster404"
];

window.onload = function() {
  streamers;

  for (var x = 0; x < streamers.length; x++) {
    var isvalid = true;

    // checking if user is valid
    function validateUser() {
      $.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + streamers[x] + '?callback=?', function(subdata) {
        isvalid;

        console.log(subdata);

        if (subdata.error) {
          isvalid = false;
        } else
          isvalid = true;

        }
      );
    }

    function showChannel() {
      // getting user data and displaying them
      $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + streamers[x] + '?callback=?', function(data) {
        isvalid;

        var Name = data._links.channel.split('/');
        Name = Name[Name.length - 1];

        streamers,
        isvalid;

        var streamCard = document.createElement("div");
        streamCard.style.padding = "2em";

        if (isvalid === false) {
          var streamStatus = document.createTextNode('Status: account not found');
          var streamStatusSpan = document.createElement('span');

          streamStatusSpan.appendChild(streamStatus);
          streamCard.appendChild(streamStatusSpan);
        } else if (data.stream === null && isvalid === true) {
          var streamStatus = document.createTextNode('Status: offline');
          var streamStatusSpan = document.createElement('span');

          streamStatusSpan.appendChild(streamStatus);
          streamCard.appendChild(streamStatusSpan);
          streamCard.style.backgroundColor = '#e6e6e6';
        } else {
          var streamStatus = document.createTextNode('Status: online');
          var streamStatusSpan = document.createElement('span');
          var streamGameText = document.createTextNode('Game: ' + data.stream.game);
          var streamGame = document.createElement('p');

          streamGame.appendChild(streamGameText);
          streamStatusSpan.appendChild(streamStatus);
          streamCard.appendChild(streamGame);
          streamCard.appendChild(streamStatusSpan);
          streamCard.style.backgroundColor = '#c8e6c9';
        }

        var streamLink = document.createElement('a');

        var Name = data._links.channel.split('/');
        Name = Name[Name.length - 1];
        streamLink.href = "https://www.twitch.tv/" + Name;
        streamLink.target = "_blank";

        var Name = data._links.channel.split('/');
        Name = Name[Name.length - 1];

        var streamName = document.createTextNode(Name);
        streamCard.appendChild(streamName);
        streamLink.appendChild(streamCard);
        document.getElementById("streamlist").appendChild(streamLink);

      });

    }

    $.when(validateUser()).done(showChannel());

  }

}
