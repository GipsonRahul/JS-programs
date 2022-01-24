document.getElementById('rev_seq-btn').addEventListener('click',sequence);

function sequence(){
    let num1 ,num2 ,seq;
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    seq = num2;
    for(let i=(num2-1);i>=num1;i--){
        seq= seq + " , " +i;     
    }
    document.getElementById('result').innerHTML= "Sequence : " +seq;
}