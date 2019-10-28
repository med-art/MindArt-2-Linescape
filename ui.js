let fsBool = 0;
let fsButton;

function calcDimensions() {
  vW = width / 100;

  if (width > height) {
    vMax = width / 100;
    vMin = height / 100;
  } else {
    vMax = height / 100;
    vMin = width / 100;
  }
}

function makeSwatch() {

  button = createImg('assets/eraseOn.png');
  button.remove();
  button = createImg('assets/eraseOff.png');
  button.position(1.5 * vMax, height - (14 * vMax));
  button.size(14 * vMax, 14 * vMax);
  button.mousePressed(invertButton);



  swatch1 = createButton("");
  swatch1.position(15 * vMax, height - (13 * vMax));
  swatch1.size(8 * vMax, 10.5 * vMax);
  swatch1.style("background-color", "White");
  swatch1.class("box");
  swatch1.mousePressed(function() {
    changeBrush(1, 12, 0)
  });

  swatch2 = createButton("");
  swatch2.position(23 * vMax, height - (13 * vMax));
  swatch2.size(8 * vMax, 10.5 * vMax);
  swatch2.style("background-color", "Black");
  swatch2.class("box");
  swatch2.mousePressed(function() {
    changeBrush(5, 15, 1)
  });

  swatch3 = createButton("");
  swatch3.position(31 * vMax, height - (13 * vMax));
  swatch3.size(8 * vMax, 10.5 * vMax);
  swatch3.style('background-color', colArray[(colShift * 4) + 0]);
  swatch3.class("box");
  swatch3.mousePressed(function() {
    changeBrush(4, (colShift * 4) + 0, 2)
  });

  swatch4 = createButton("");
  swatch4.position(39 * vMax, height - (13 * vMax));
  swatch4.size(8 * vMax, 10.5 * vMax);
  swatch4.style("background-color", colArray[(colShift * 4) + 3]);
  swatch4.class("box");
  swatch4.mousePressed(function() {
    changeBrush(2, (colShift * 4) + 3, 3)
  });
  console.log(colArray[(colShift * 4) + 3]);

  fsButton = createImg('assets/enterFS.png');
  fsButton.style('height', '4.5vMax');
  fsButton.position(width-(7.5 * vMax), 1.5 * vMax);
  fsButton.mousePressed(fs);


  selColour = createImg('assets/colSelected.png');
  selColour.position(15 * vMax, height - (16 * vMax));
  selColour.size(8 * vMax, 16 * vMax);
  selColour.mousePressed();

  saveNext();



}

function saveNext() {

  newButton = createButton("Next")
  newButton.class("select");
  newButton.position(width - (15 * vMax), height - (12.5 * vMax));
  newButton.style('font-size', '2.6vmax');
  newButton.style('height', '4.5vmax');
  newButton.mousePressed(gridVStexture);

  saveButton = createButton("Save")
  saveButton.class("select");
  saveButton.style('font-size', '2.6vmax');
  saveButton.style('height', '4.5vmax');
  saveButton.position(width - (15 * vMax), height - (6.5 * vMax));
  saveButton.mousePressed(saveImg);
}

function changeBrush(brushSel, col, order) {

  if (eraseBool === 1) {

    invertButton();
  }
  brushSelected = brushSel;
  colArrayNum = col;
  colSelected = colArray[colArrayNum];

  selColour.remove();
  selColour = createImg('assets/colSelected.png');
  selColour.position((15 + (order * 8)) * vMax, height - (16 * vMax));
  selColour.size(8 * vMax, 16 * vMax);
  selColour.mousePressed();

  orderTemp = order;




}




function invertButton() {





  if (eraseBool === 0) {
    selColour.remove();
    button.remove();
    button = createImg('assets/eraseOn.png')
    button.position(1.5 * vMax, height - (14 * vMax));
    button.size(14 * vMax, 14 * vMax);
    button.mousePressed(invertButton);
    eraseBool = 1;
  } else {
    selColour.remove();
    button.remove();
    button = createImg('assets/eraseOff.png')
    button.position(1.5 * vMax, height - (14 * vMax));
    button.size(14 * vMax, 14 * vMax);
    button.mousePressed(invertButton);
    eraseBool = 0;

    selColour.remove();
    selColour = createImg('assets/colSelected.png');
    selColour.position((15 + (orderTemp * 8)) * vMax, height - (16 * vMax));
    selColour.size(8 * vMax, 16 * vMax);
    selColour.mousePressed();

  }



}

function removeSwatch() {
  button.remove();
  swatch1.remove();
  swatch2.remove();
  swatch3.remove();
  swatch4.remove();
  selColour.remove();
}

function gridVStexture() {

  gridVStextureBool = !gridVStextureBool;


  if (gridVStextureBool) {
    removeSwatch();
    makeSlider(width / 2);
    newButton.html("Next");
  } else {
    newGrid();
    newButton.html("Next");
  }

}

function makeSlider(_mouseX) {


  sliderImg.clear();
  sliderImg.stroke(255);
  sliderImg.strokeWeight(8);
  sliderImg.line(width * 0.04, height - (6 * vMax), width * 0.82, height - (6 * vMax));
  sliderImg.stroke(0,0,0);
  sliderImg.strokeWeight(30);
  sliderImg.line(50, height - (6 * vMax), constrain(_mouseX, width * 0.04, width * 0.82), height - (6 * vMax));
  sliderImg.rectMode(RADIUS);
  sliderImg.fill("#5cf22c");
  sliderImg.noStroke();
  sliderImg.rect(constrain(_mouseX, width * 0.04, width * 0.82), height - (6 * vMax), 1 * vMax, 5 * vMax);


}

function fs(){


 if (!fsBool){
   fullscreen(1);
   fsBool = 1;
 }

 else{

   fullscreen(0);
   fsBool = 0;

 }
}