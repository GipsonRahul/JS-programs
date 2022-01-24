document.getElementById('check-btn').addEventListener('click' ,check_positive_or_negative);

function check_positive_or_negative(){
    var num = document.getElementById('num').value;
    if(num>0){
        document.getElementById('result').innerHTML = "The number is Positive";
    }else if(num<0){
        document.getElementById('result').innerHTML = "The number is Negative";
    }else if(num==0){
        document.getElementById('result').innerHTML = "The number is Zero";
    }
}