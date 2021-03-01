var containerEle = document.body.querySelector(".container");

num1 = prompt("Enter a Number");

var checkee=isNaN(num1);

if(checkee){
  containerEle.innerHTML="error";
}else{
  checker=prompt("Enter an operator");
  
if(checker='+','-','*','/'){num2 = prompt("Enter a Number");

var check=isNaN(num2);

if(check){
  containerEle.innerHTML="error";
  
}else{var sum=(num1*num2);
      
containerEle.innerHTML = sum;}}
  
else{
  
  containerEle.innerHTML="error";
 }}