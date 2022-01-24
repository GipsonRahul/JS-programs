// Addition 
function add(){
  var num1, num2, sum;
  num1 = parseInt(document.getElementById('num1').value);
  num2 = parseInt(document.getElementById('num2').value);
  sum = num1 + num2;
  document.getElementById('add').innerHTML = "Sum of Numbers :" + sum;
} 
function sub(){
  var num1, num2, diff;
  num1 = parseInt(document.getElementById('num1').value);
  num2 = parseInt(document.getElementById('num2').value);
  diff = num1 - num2;
  document.getElementById('sub').innerHTML = "Difference between Numbers :" + diff;
} 
function mul(){
  var num1, num2, prod;
  num1 = parseInt(document.getElementById('num1').value);
  num2 = parseInt(document.getElementById('num2').value);
  prod = num1 * num2;
  document.getElementById('mul').innerHTML = "Product of Numbers :" + prod;
} 
function div(){
  var num1, num2, divi;
  num1 = parseInt(document.getElementById('num1').value);
  num2 = parseInt(document.getElementById('num2').value);
  divi = num1 + num2;
  document.getElementById('div').innerHTML = "Division between Numbers :" + divi;
} 

document.getElementById('add-btn').addEventListener('click', add);
document.getElementById('sub-btn').addEventListener('click', sub);
document.getElementById('mul-btn').addEventListener('click', mul);
document.getElementById('div-btn').addEventListener('click', div);
