
function findname() {
var input = document.getElementById("Birthdate").value;

  var d = new Date( input );

  year = d.getFullYear();
 month = d.getMonth();
 month = month+1;
 //dayi = ("0" + d.getDate()).slice(-2);
 dayi = d.getDate();
//    if(document.getElementbyId("gender").checked)
// {
//   var gender = document.getElementById("gender").checked;
// }    else{
//     var gender = document.getElementById("genderi").checked;
// }
 
var gender=document.querySelector('input[name="gender"]:checked').value;
console.log(gender);
 var a = (year-1)/100+1 ;
 var cc = parseFloat(a);
 var day =   parseFloat(( ( (cc/4) -2*cc-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayi ) % 7);
  day = day.toFixed(0);
  if(day == 0 && gender == 'female') {
    document.getElementById("AkhanName").innerHTML ="Akosua";
  }
  else if(day == 1 && gender == 'female') {
    document.getElementById("AkhanName").innerHTML ="Adwoa";
  }
  else if(day == 2 && gender == 'female') {
  document.getElementById("AkhanName").innerHTML ="Abenaa";
  }
  else if(day == 3 && gender == 'female') {
    document.getElementById("AkhanName").innerHTML ="Akua";
  }
  else if(day == 4 && gender == 'female') {
    document.getElementById("AkhanName").innerHTML ="yaa";
  }
  else if(day == 5 && gender == 'female') {
    document.getElementById("AkhanName").innerHTML ="Afua";
  }
  else if(day == 6 && gender == 'female') {
    document.getElementById("AkhanName").innerHTML ="Ama";
  }else if(day == 0 && gender == 'male'){
   document.getElementById("AkhanName").innerHTML ="kwasi";
 } 
 else if(day == 4 && gender == 'female') {
   document.getElementById("AkhanName").value ="yaa";}
 else if(day == 1 && gender == 'male') {
   document.getElementById("AkhanName").innerHTML ="kwadwo";

 }
 else if(day == 2 && gender == 'male') {
 document.getElementById("AkhanName").innerHTML ="kwabena";

 }
 else if(day == 3 && gender == 'male') {
 document.getElementById("AkhanName").innerHTML ="kwaku";

 }
  else if(day == 4 && gender == 'male') {
 document.getElementById("AkhanName").innerHTML ="yao";

  }
  else if(day == 5 && gender == 'male') {
 document.getElementById("AkhanName").innerHTML ="kofi";

  }
  else if(day == 6 && gender == 'male') {
 document.getElementById("AkhanName").innerHTML ="kwame";
  }

  
 }


