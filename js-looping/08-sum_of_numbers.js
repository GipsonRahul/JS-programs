document.getElementById('sum-btn').addEventListener('click' ,sum_of_numbers);

function sum_of_numbers(){
    let sum=0;
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    for(i=num1;i<=num2;i++){
        sum=sum + i;
    }
    document.getElementById('result').innerHTML = "The sum of numbers between "+num1+" and "+num2+" is "+sum;
}   
