// order the numbers
function asc(){
    var num1, num2, num3;
    num1 = parseInt(document.getElementById('num1').value);        
    num2 = parseInt(document.getElementById('num2').value);        
    num3 = parseInt(document.getElementById('num3').value);
    const num = [num1, num2 ,num3];
    num.sort(function(a, b){return a-b});
    document.getElementById('order').innerHTML = "Acending order of given numbers are :" +num;

}
function dec(){
    var num1, num2, num3;
    num1 = parseInt(document.getElementById('num1').value);    
    num2 = parseInt(document.getElementById('num2').value);    
    num3 = parseInt(document.getElementById('num3').value);   
    const num =[num1, num2 ,num3];
    num.sort(function(a, b){return b-a});
    document.getElementById('rev-order').innerHTML = "decending order of given numbers are :" +num;
}
document.getElementById('asc-btn').addEventListener('click', asc);
document.getElementById('dec-btn').addEventListener('click', dec);