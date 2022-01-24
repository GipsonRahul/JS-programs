document.getElementById('check-prime-btn').addEventListener('click' ,prime_or_not);

function prime_or_not(){
    let num = document.getElementById('num').value;
    flag=0;
    for (i=2; i<=(num/2); i++) {
        if(num % i == 0){
            flag=1;
        }
    }
    if(num ==0 || num==1){
        document.getElementById('result').innerHTML = num + " is neither prime or composite";
    }else{
        if(flag==0){
            document.getElementById('result').innerHTML = num + " is a prime number";
        }else if(flag==1){
            document.getElementById('result').innerHTML = num + " is not a prime number"
        }
    }
}   
