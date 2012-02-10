var sheet = document.createElement('style')
sheet.innerHTML = "div.question {height:350px !important; overflow:auto;}";
document.body.appendChild(sheet);

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
	  var element = document.getElementById("save");
	  element.dispatchEvent(e);
  }
  // press alt + r to test your code.
  else if((altKey && event.keyCode == 82) || (modifier && event.keyCode == 82){
  	event.preventDefault();
  	var element = document.getElementById("compilerOutput").firstChild;
  	testElement = (shiftKey) ? element.nextSibling.nextSibling : element;
  	console.log(element);
  	console.log(testElement);
    testElement.dispatchEvent(e);
  }

}, false);

window.addEventListener("resize", function(event){
	console.log(parseInt(window.innerHeight));
	window.innerHeight; //316
	sheet.innerHTML = "div.question {height:"+(parseInt(window.innerHeight)-356)+"px !important; overflow:auto;";

})
