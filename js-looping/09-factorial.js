document.getElementById('fact-btn').addEventListener('click' ,factorial);

function factorial(){
    let fact=1;
    let num = parseInt(document.getElementById('num').value);
    for(i=num;i>0;i--){
        fact=fact*i;
    }
    document.getElementById('result').innerHTML = "Factorial of "+num+" is "+fact;
}   
