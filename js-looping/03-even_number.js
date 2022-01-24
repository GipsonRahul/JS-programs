document.getElementById('even-num-btn').addEventListener('click' ,even_numbers);

function even_numbers(){
    let num = parseInt(document.getElementById('num').value);
    let evennum = "Even numbers : "
    for(i=1;i<=num;i++){
        if(i % 2 ==0){
            evennum = evennum+ +i+ " , ";
            console.log("even : " +evennum);
            console.log("i : " +i);
        }
    }
    document.getElementById('result').innerHTML=evennum;
}