function check_multiple_of_7_or_not(){
    var num1;
    num1 = parseInt(document.getElementById('num1').value);
    if(num1 % 7 == 0){
        document.getElementById('result').innerHTML = "The number " +num1+ " is a multiple of 7";
    }else{
        document.getElementById('result').innerHTML = "The number " +num1+ " is not a multiple of 7";
    }
}
document.getElementById('check-btn').addEventListener('click' ,check_multiple_of_7_or_not);