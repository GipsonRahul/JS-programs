document.getElementById('submit').addEventListener('click' ,tables);

function tables(){
    let prod=0;
    let num =document.getElementById('num').value;
    document.getElementById('res-header').innerHTML = "Table of "+num;
    for (i = 1; i <= 10; i++) {
        prod= prod + +i+" x "+num+" = "+(i*num)+ "<br>";
    }

    document.getElementById('res').innerHTML = prod;
}