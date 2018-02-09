// quotes list
var quotes = [
  {
    author: '- Coco Chanel',
    text: "\"Success is most often achieved by those who don't know that failure is inevitable.\""
  }, {
    author: '- John Wooden',
    text: "\"Things work out best for those who make the best of how things work out.\""
  }, {
    author: '- Ernest Hemingway',
    text: "\"Courage is grace under pressure.\""
  }, {
    author: '- Jim Rohn',
    text: "\"If you are not willing to risk the usual, you will have to settle for the ordinary.\""
  }, {
    author: '- Albert Einstein',
    text: "\"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.\""
  }
];
// /quotes list

window.twttr = (function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id))
    return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

window.onload = function() {

  function getRandomQuote() {

    num = Math.floor((Math.random() * 5));
    var quotetext = document.getElementById('quote-text');
    var quoteauthor = document.getElementById('quote-author');

    $('#quote-text').hide();
    $('#quote-author').hide();

    quotetext.innerHTML = quotes[num].text;
    $('#quote-text').fadeIn(1000);
    quoteauthor.innerHTML = quotes[num].author;
    $('#quote-author').fadeIn(1000);

  }

  getRandomQuote();

  document.getElementById('getquote').onclick = function() {
    getRandomQuote();
  };

  twttr.widgets.createShareButton('/', document.getElementById('tweet-container'), {
    text: quotes[num].text + ' ' + quotes[num].author + ' #randomquote'
  });

};
