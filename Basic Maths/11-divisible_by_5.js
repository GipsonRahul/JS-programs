document.getElementById('check-btn').addEventListener('click' ,check_divisible_by_5_or_not);

function check_divisible_by_5_or_not(){
    var num1;
    num1 = parseInt(document.getElementById('num1').value);
    console.log(num1);
    if(num1 % 5 == 0){
        document.getElementById('result').innerHTML = "The number " +num1+ " is a divisible by 5";
    }else{
        document.getElementById('result').innerHTML = "The number " +num1+ " is not divisible by 5";
    }
}

