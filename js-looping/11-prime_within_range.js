document.getElementById('prime-btn').addEventListener('click' ,prime_range);

function prime_range(){
    let prime="Prime Numbers are ",not_prime="Non-Prime Numbers are ", flag =0;
    let from = parseInt(document.getElementById('from-num').value);
    let to = parseInt(document.getElementById('to-num').value);
    for (let i = from; i <= to; i++) {
        flag = 0;
        for (let j = 2; j <=i/2; j++) {
            if(i % j == 0){
                flag = 1;
                break;
            }
        }
        if(i>1 && flag ==0){
            console.log(i);
            prime = prime + "<br>"+i;
        }else if(i>1 &&flag == 1){
            not_prime = not_prime + "<br>"+i;
        }
    }
    document.getElementById('prime-result').innerHTML= prime;
    document.getElementById('not-prime-result').innerHTML= not_prime;
}   