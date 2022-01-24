document.getElementById('fibonacci-btn').addEventListener('click' ,fibonacci_series);

function fibonacci_series(){
    let num = document.getElementById('num').value;
    let a = 0 , b = 1 ,nxtnum;
    let fibonacci="Fibonacci Series :<br>"+a+"<br>"+b;

    nxtnum = a + b;
    while(nxtnum<=num){
        fibonacci =fibonacci+ "<br>"+nxtnum; 
        a=b;
        b=nxtnum;
        nxtnum = a + b;
    }
    document.getElementById('fibonacci-result').innerHTML = fibonacci;

}