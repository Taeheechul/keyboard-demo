/* global $ */ // turn off jslint warning for $ (jQuery)

// Tell jQuery to execute the onReady function when the
// document is ready
$(function onReady() {
  
  // select the code element by id
  var testOutputContainer = $('#test');
  // max time button press
   var well= 50;
   
  // select the td by class
  var keyupCell = $('.up');
  
  // variable to count number of keypress events
  var keyupCounter = 0;
  
  // array to store all the key presses
  var keyup = [];
  var starttime = new Date().getTime();
  
  // attach a keypress listener to the window object 
  $(window).keyup(function(eventArgument) {
     if (keyupCounter===well){ 
    return;
    }
    // get the key from the event arguemnt
    var x = eventArgument.keyCode;              
    var key = String.fromCharCode(x); 
    
    // add the key to the end of the keypresses array
    keyup.push(key);
    
    // increment the keypressCounter by 1
    keyupCounter = keyupCounter + 1;
    
    // set the text of the keydownCell
    keyupCell.text(keyupCounter);
      if (keyupCounter===well){ 
    var endtime= new Date().getTime();
    alert(endtime-starttime);
    }
    
    // set the text of the test output container
    testOutputContainer.text(keyup.join(' '));
 
  });
  

 });