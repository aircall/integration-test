(function() {
  'use strict';

var input = document.querySelectorAll(".input input")[0];
var reset = document.querySelectorAll(".reset i")[0];
var number = document.querySelectorAll(".dial .number button");


for(var i = 0; i < number.length; i++){
  number[i].addEventListener('click', function(){

    var num1 = input.value;
    var num2 = this.childNodes[0].nodeValue.trim();

    var num = num1+num2
    
    if (num.length < 15) {
    input.value = num;}
      
  });
}


reset.addEventListener('click', function(){
  input.value = "";
});

})();


