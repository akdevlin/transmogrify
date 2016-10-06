$(document).ready(function () {
    var allSections = $('.row input');
    console.log(allSections);
    var inputClassesAY = ['basic-slide', 'clean-slide', 'gate', 'skinny', 'slide-up', 'card-slide', 'swing', 'balloon'];
    for (var i = 0, k = 0; i < allSections.length; i++, k++) {
        if (k >= inputClassesAY.length) {
            k = 0;
            console.log("k is greater than the number of classes. k is " + k);
        }
        else {
            console.log("k should be within range. k is " + k);
        }
        $(allSections[i]).attr('class', inputClassesAY[k]);
    }
});
//var speechSpanAY = $('.speech span');
//var Word = function (originalClass) {
//  this.class = originalClass;
//var wordObjectAY =[];
//};
//for (var i = 0; i< speechSpanAY.length; i++){
//    var currentClass = $(speechSpanAY[i]).attr('class');
//    wordObjectAY[i] = new Word(currentClass);
//    wordObjectAY[i].title = ;
//}
//takes input value and replaces the text within matching span tags
$('input').blur(function () {
    var inputAY = $('input'), speechSpanAY = $('.speech span'), currentInputValue, currentInputClass;
    console.log("input blur");
    for (var i = 0; i < inputAY.length; i++) {
        console.log("the loop has begun");
        currentInputClass = $(inputAY[i]).attr('data-spanClass');
        currentInputValue = $(inputAY[i]).val();
        console.log("this is the current value of the data-SpanClass: " + currentInputClass);
        console.log("this is the current value of the input: " + currentInputValue);
        for (var j = 0; j < speechSpanAY.length; j++) {
            if ($(speechSpanAY[j]).attr('class') == currentInputClass) {
                console.log("We made it to the final part of the program!");
                $(speechSpanAY[j]).text(currentInputValue);
            }
            else {
            }
        }
    }
});
