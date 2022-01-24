document.getElementById('swap-btn').addEventListener('click', swap);

function swap(){
    var num1 ,num2 ,swap;
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
    document.getElementById("input-data").innerHTML = "Before Swapping <br>First Number : " + num1 + "<br> Second Number : " + num2;
    swap=0;
    swap=num1;
    num1=num2;
    num2=swap;
    document.getElementById("output-data").innerHTML = "After Swapping <br>First Number : " + num1 + "<br> Second Number : " + num2;
}