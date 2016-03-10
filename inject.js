console.log("Keyboard shortcuts for running tests are enabled");
window.addEventListener("keydown", function(e) {
  // Bind to both command (for Mac) and control (for Win/Linux)
  var modifier = e.ctrlKey || e.metaKey;
  var altKey = e.altKey;
  var shiftKey = e.shiftKey;
  
  var clickEvent = document.createEvent("HTMLEvents");
  clickEvent.initEvent("click", true, true);

  // ctrl + s: save
  // ctrl + shift + s: submit
  if (modifier && e.keyCode == 83) {
    e.preventDefault();
    var el = document.getElementById(shiftKey ? "submit" : "save");
    el.dispatchEvent(clickEvent);
  }
  // ctrl | alt + r: Run your test
  // ctrl | alt + shift + r: Run spec-tests
  if((altKey && e.keyCode == 82) || (modifier && e.keyCode == 82)){
  	e.preventDefault();
    var el = document.getElementById(shiftKey ? "specTestBtn" : "userTestBtn");
    el.dispatchEvent(clickEvent);
  }
}, false);
