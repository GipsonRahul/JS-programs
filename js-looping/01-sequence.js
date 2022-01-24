document.getElementById('seq-btn').addEventListener('click',sequence);

function sequence(){
    let num1 ,num2 ,seq;
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    seq = num1;
    for(let i=(num1+1);i<=num2;i++){
        seq= seq + " , " +i;     
    }
    document.getElementById('result').innerHTML= "Sequence : " +seq;
}