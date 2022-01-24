document.getElementById('compare-btn').addEventListener('click' ,compare_numbers);


function compare_numbers(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    if(num1>num2){
        document.getElementById('result').innerHTML = num1 + " is greater than " +num2;
    }else if(num1<num2){
        document.getElementById('result').innerHTML = num2 + " is greater than " +num1;
    }else{
        document.getElementById('result').innerHTML = "Both are  Equal";
    }
}