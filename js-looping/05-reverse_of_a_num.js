document.getElementById('rev-btn').addEventListener('click' ,reverse_num);

function reverse_num(){
    var num ,rev=0 ,rem;
    num =parseInt(document.getElementById('num').value);
    while(num !=0){
        rem = num % 10;
        rev = (rev * 10) + rem;
        num =Math.floor(num / 10);
    }
    document.getElementById('rev-num').innerHTML = +rev;
}

