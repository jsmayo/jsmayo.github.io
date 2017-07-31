var quotes = [
'Reality is a lovely place, but I wouldn\'t want to live there.  - Owl City'
, 'I\'ll watch the night turn light blue, it\'s not the same without you cause it takes two to whisper quietly.  - Owl City'
, 'Dear God, I was terribly lost when the galaxies crossed and the sun went dark. Dear God, you\'re the only North Star, I would follow this far.  - Owl City'
, 'You make my frown turn upside down and now my worries are gone.  - Owl City'
, 'Chills run down my spine as our fingers intwine and your sighs harmonize with mine unmistakably I can still feel your heart beat fast when you dance with me.  - Owl City'
, 'Tell me again was it love at first sight When I walked by and you caught my eye Didn\'t you know love could shine this bright? Well, smile because you\'re the deer in the headlights.  - Owl City'
, 'When the sky fell in When the hurricanes came for me I could finally crash again And that\'s how I became the sea.  - Owl City'
, 'The silence isn\'t so bad Till I look at my hands and feel sad Cause the spaces between my fingers Are right where yours fit perfectly.  - Owl City'
, 'I forget the last time I felt brave, I just recall insecurity Cause it came down like a tidal wave, and sorrow swept over me Then I was given grace and love, I was blind but now I can see Cause I found a new hope from above, and courage swept over me.  - Owl City'
, 'Circle me and the needle moves gracefully Back and forth, if my heart was a compass you\'d be North Risk it all cause I\'ll catch you if you fall Wherever you go, if my heart was a house you\'d be home.  - Owl City'
, 'I\'ll watch the night turn light blue But it\'s not the same without you Because it takes two to whisper quietly.  - Owl City'
, 'I am the black in the book the letters on the pages that you memorize.  - Owl City'
, 'I wish I had covered all my tracks completely cause I\'m so afraid Is that the light at the far end of the tunnel or just the train?  - Owl City'
, 'Peer over the edge Can you see me? Rivulets flow from your eyes Paint runs from your mouth Like a waterfall And your lungs crystalize.  - Owl City'
, 'Boy I need a hug (boy I need a hug) \'Cause my heart stops without you there\'s something about you.  - Owl City'
, 'Where was I when the rockets came to life And carried you away into the alligator sky Even though, I\'ll never know what\'s up ahead I\'m never lettin\' go, I\'m never lettin\' go.  - Owl City'
, 'It makes me smile because you said it best I would clearly feel blessed if the sun rose up from the west.  - Owl City'
, 'Home is a boxcar and it\'s so far out of reach Hidden under umbrella beach.  - Owl City'
, 'If I look back when I begin to leave, will they remember me?.  - Owl City'
, 'Where was I when the rockets came to life, and carried you away into the alligator sky?.  - Owl City'
];

$(document).ready(newQuote());


function newQuote() {
	var rand = Math.floor(Math.random() * quotes.length);
	document.getElementById('quoteContainer').innerHTML = quotes[rand];
	this.data = quotes[rand];
}


function tweetQuote() {
 //get inner text and replace inside the share
  var phrase = document.getElementById('quoteContainer').innerText;
  var tweetUrl = 'https://twitter.com/share?text=' +
    encodeURIComponent(phrase) +
    ' - QuoteGenerator By:' +
    '&via=' +
    'stevenmayo_';
  window.open(tweetUrl);
}

function tumblrPost() {
	var phrase = document.getElementById('quoteContainer').innerText;
	var tumblrURL = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&content=' + encodeURIComponent(phrase) + '&buttons&tags=tumblelog%2C+blog%2C+tumblog%2C+tumbler%2C+tumblr%2C+tlog%2C+microblog&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button&_format=html'; 
		
		alert(tumblrURL);
	window.open(tumblrURL);
}





