var mainDiv = document.getElementById("main"),
    shapes = mainDiv.getElementsByTagName("div"),
    color = "",
    radiusArray = ["0px","0px","60px"],
    clickedTime,
    createdTime,
    reactionTime;

function shapeStyles () {
  var colorsArray = ["red","blue","green","yellow","black","orange","purple","white"];

  // Loop through each div inside the div with id "main".
  for (var i = 0; i < shapes.length; i++){
        // Get random indices for the color and radius arrays.
        var colorsIndex = Math.floor(Math.random()*colorsArray.length),
            radiusIndex = Math.floor(Math.random()*radiusArray.length),
        // Then get the style of each i-th div element with, wait for it, class "shape".
            styleObj = shapes[i].style;
        // Set the styles
        styleObj.backgroundColor = colorsArray[colorsIndex];
        styleObj.borderRadius = radiusArray[radiusIndex];
        styleObj.display = "block";
        // Remove the color just used so it doesn't repeat. Things won't be fun that way.
        colorsArray.splice(colorsIndex,1);
  }

  // Pick the index of the correct answer.
  var correct = Math.floor(Math.random()*shapes.length);
  // Get the color of the correct answer.
  color = shapes[correct].style.backgroundColor;
  // Tell user to pick that color.
  document.getElementById("color").innerHTML=color;
  // Start the reaction timer after all div styles are set
  createdTime = Date.now();
}

function displayShapes(){
  var time = 5000*Math.random();
  // Run the shapeStyles function after a random time.
  setTimeout(function(){ shapeStyles(); }, time );
}
    
for (var i = 0; i < shapes.length; i++){
  shapes[i].onclick = clickShape;
}

function clickShape() {
  if (this.style.backgroundColor == color) {
    clickedTime = Date.now();
    reactionTime = (clickedTime-createdTime)/1000;
    document.getElementById("time").innerHTML=reactionTime;

    for (var i=0; i<shapes.length; i++){
      shapes[i].style.display="none";
    }
    displayShapes();
  }
}

displayShapes();