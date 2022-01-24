document.getElementById('check-btn').addEventListener('click' ,findlargernumber);

function findlargernumber(){
    let num1 ,num2 ,num3 ,max;
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    num3 = parseInt(document.getElementById('num3').value);
    
    let num = [num1 ,num2 ,num3];

    max = Math.max(...num);
    document.getElementById('result-max').innerHTML = max + " is larger number";

    max = Math.min(...num);
    document.getElementById('result-min').innerHTML = max + " is smaller number";
}