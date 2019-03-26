// Make sure the document is fully loaded before loading JS.
$(document).ready(function() {
 
  // Make variables to reference audio files
  var cNote = document.getElementById("cAudio");
  var dNote = document.getElementById("dAudio");
  var eNote = document.getElementById("eAudio");
  var fNote = document.getElementById("fAudio");
  var gNote = document.getElementById("gAudio");
  var aNote = document.getElementById("aAudio");
  var bNote = document.getElementById("bAudio");


  // Make the cNote trigger whenever the c music-box is clicked.
  $("#c").mousedown(function() {
    //set the current time, which will be used to cut the playtime short if needed.
    cNote.currentTime = 0;
    //play the audio file
    cNote.play();
  });

  $("#d").mousedown(function() {
    dNote.currentTime = 0;
    dNote.play();
  });

  $("#e").mousedown(function() {
    eNote.currentTime = 0;
    eNote.play();
  });

  $("#f").mousedown(function() {
    fNote.currentTime = 0;
    fNote.play();
  });

  $("#g").mousedown(function() {
    gNote.currentTime = 0;
    gNote.play();
  });

  $("#a").mousedown(function() {
    aNote.currentTime = 0;
    aNote.play();
  });

  $("#b").mousedown(function() {
    bNote.currentTime = 0;
    bNote.play();
  });
});
