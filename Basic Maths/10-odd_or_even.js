document.getElementById('check-btn').addEventListener('click' ,check_odd_or_even);

function check_odd_or_even(){
    var num1;
    num1 = parseInt(document.getElementById('num1').value);
    if(num1 % 2 ==0){
        document.getElementById("result").innerHTML = num1 + " is a even number";
    }else{
        document.getElementById("result").innerHTML = num1 + " is a odd number";
    }
}