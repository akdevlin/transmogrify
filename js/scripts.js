$(document).ready(function () {

//remove text from .extra spans
$('.speech .extra').text('');

    //create an array of unique spans
var spanAY = $('.speech span'),
    apanAttribute = 'class',
    spanAYnoDuplicates = $('.speech span');
//$originalArray is the array with duplicates, $empty array is an empty array you have already instanced outside the scope of this function;
//edit this function to determine what will be the check
 function removeDuplicatesFromAY(){
      
    //loop through the objects and remove duplicate classnames
    //loop i goes through all of the modifiable field objects we created from the index of 0
    for (var i = 0; i < spanAYnoDuplicates.length; i++ ){
        //loop j goes through all of the modifiable field objects we created starting at the last one
        for (var j = spanAY.length-1; j > 0; j--)  {
            //as long as the loops aren't referencing the same index
            if((i!= j) && $(spanAY[j]).attr('class') == $(spanAYnoDuplicates[i]).attr('class') ) {
                //remove objects that have the same class
                console.log("we are splicing now!");
                spanAYnoDuplicates.splice(j, 1);
            }
        }
    }
  }  
removeDuplicatesFromAY();
console.log("Skinny AY " + spanAYnoDuplicates[3]);

//create input fields based on spans
function createInputz(){
    //initial loop of the original array
    var allGeneratedHTML = ``;
    for (var i = 0; i < spanAYnoDuplicates.length; i++){
        var inputHTMLspan = `<span>
                    <input class="${$(spanAYnoDuplicates[i]).attr('class')}" id="${"ID" + $(spanAYnoDuplicates[i]).attr('class')}" type="text" placeholder="${$(spanAYnoDuplicates[i]).attr('data-hint')}"/><label for="${"ID" + $(spanAYnoDuplicates[i]).attr('class')}">${$(spanAYnoDuplicates[i]).attr('title')}</label>
                  </span>`;
        var inputHTMldiv = `<div class="row">${inputHTMLspan}</div>`;
        allGeneratedHTML += `${inputHTMldiv}`;
        
    }
    $('#charlie').html(allGeneratedHTML);    
}

createInputz();

    //assigning random clases to input spans
    var allSections = $('.row input');
    console.log(allSections);
    var inputClassesAY = ['basic-slide', 'clean-slide', 'gate', 'skinny', 'slide-up', 'card-slide', 'swing', 'balloon'];
    for (var i = 0, k = 0; i < allSections.length; i++, k++) {

        if (k >= inputClassesAY.length){
            k = 0;
            console.log("k is greater than the number of classes. k is " + k);
        }
        else{
            console.log("k should be within range. k is " + k);
        }
        $(allSections[i]).attr('class', inputClassesAY[k]);
    }

});

//click function for transferring text data
$('#allDone').click(function(){
    var inputAY = $('input'),
        speechSpanAY = $('.speech span'),
        currentInputValue,
        currentInputClass;
    console.log("input blur");
    for(var i =0; i < inputAY.length; i++){
        console.log("the loop has begun");
        currentInputClass = $(inputAY[i]).attr('data-spanClass');
        currentInputValue = $(inputAY[i]).val();
        console.log("this is the current value of the data-SpanClass: " + currentInputClass);
        console.log("this is the current value of the input: " + currentInputValue);
       for (var j = 0; j < speechSpanAY.length; j++) {
           if($(speechSpanAY[j]).attr('class') == currentInputClass){
               console.log("We made it to the final part of the program!");
              $(speechSpanAY[j]).text(currentInputValue)
              }
              else{
                  //console.log(currentInputClass + "didn't match");
              }
       }
    }
});
