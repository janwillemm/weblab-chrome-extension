//alert("Injected javascript successfully!");
window.addEventListener("keydown", function(event) {
  // Bind to both command (for Mac) and control (for Win/Linux)
  var modifier = event.ctrlKey || event.metaKey;
  var altKey = event.altKey;
  var shiftKey = event.shiftKey;
  
	var e = document.createEvent("HTMLEvents");
    e.initEvent("click", true, true);

  // press ctrl + s to save and compile!
  if (modifier && event.keyCode == 83) {
	  event.preventDefault();
      if(shiftKey)
        var element = document.getElementById("submit");
      else
	      var element = document.getElementById("save");
	  element.dispatchEvent(e);
  }
  // press alt + r to test your code.
  else if((altKey && event.keyCode == 82) || (modifier && event.keyCode == 82)){
  	event.preventDefault();
  	var element = document.getElementById("compilerOutput").firstChild;
  	testElement = (shiftKey) ? element.nextSibling.nextSibling : element;
    testElement.dispatchEvent(e);
  }

}, false);

window.fCopyToClipboard = function(rSource){
  rSource.select()
  if(window.clipboardData){ var r=clipboardData.setData('Text',rSource.value); return 1; }
  else return 0
}