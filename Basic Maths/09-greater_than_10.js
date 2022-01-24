document.getElementById('check-btn').addEventListener('click' ,greater_than_10);


function greater_than_10(){
    var num = document.getElementById('num').value;
    if(num>10){
        document.getElementById('result').innerHTML = num + " is larger than 10";
    }else if(num<10){
        document.getElementById('result').innerHTML = num + " is smaller than 10";
    }else{
        document.getElementById('result').innerHTML = "The number is 10";
    }
}