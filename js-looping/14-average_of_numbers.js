document.getElementById('average-btn').addEventListener('click' ,average_of_numbers);

function average_of_numbers(){
    let sum=0 ,count=0;
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    for(i=num1;i<=num2;i++){
        sum=sum + i;
        count++;
    }
    console.log(sum);
   let  average = sum / count;
    document.getElementById('result').innerHTML = "The average of numbers between "+num1+" and "+num2+" is "+(average);
}   
