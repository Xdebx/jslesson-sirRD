               //============ same output ===============

//  function textChange(){
//     var inElement = document.getElementById('textIn');
//     var outElements = document.getElementsByTagName('p');
//     var headingElements = document.getElementsByClassName('heading');
//     for(var i=0; i<outElements.length; i++){
//     var outItem = outElements[i];
//     headingElements[i].innerHTML = 'Updating ' + (i+1) + ' to ' + inElement.value;
//     outItem.innerHTML = inElement.value;
//     }
// }


                  //============ for undefined output ============

// function textChange(){
//     var inElement = $("#textIn").val(); 
//     // var inElement = document.getElementById('textIn');
//     var outElements = document.getElementsByTagName('p');
//     var headingElements = document.getElementsByClassName('heading');
//     for(var i=0; i<outElements.length; i++){
//     var outItem = outElements[i];
//     headingElements[i].innerHTML = 'Updating ' + (i+1) +
//     ' to ' + inElement.value;
//     outItem.innerHTML = inElement.value;
//     }
// }


                  //================= No output/value ====================

// function textChange(){
//   var inElement = $("#textIn").val(); 
//   var outElements = $("#p").val();
//   var headingElements = document.getElementsByClassName('heading');
//   for(var i=0; i<outElements.length; i++){
//       var outItem = outElements[i];
//       headingElements[i].innerHTML = 'Updating ' + (i+1) +' to ' + inElement.value;
//       outItem.html(inElement);
//                   }
//               }
              
              //================== output updating 1 ================== 
              
// function textChange(){
//     var inElement = $("#textIn").val();
//     // var inElement = document.getElementById('textIn');
//     var outElements = document.getElementsByTagName('p');
//     // var outElements = $("#p").val();
//     console.log(outElements);
//     var headingElements = document.getElementsByClassName('heading');
//     for(var i=0; i<outElements.length; i++){
//     var outItem = outElements[i];
//     headingElements[i].innerHTML = 'Updating ' + (i+1) +
//     ' to ' + inElement;
//     outItem.html(inElement);
//     }
//     }