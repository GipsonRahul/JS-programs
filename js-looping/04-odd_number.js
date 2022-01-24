document.getElementById('odd-num-btn').addEventListener('click' ,odd_numbers);

function odd_numbers(){
    let num = parseInt(document.getElementById('num').value);
    let evennum = "Odd numbers : "
    for(i=1;i<=num;i++){
        if(i % 2 != 0){
            evennum = evennum+ +i+ " , ";
        }
    }
    document.getElementById('result').innerHTML=evennum;
}