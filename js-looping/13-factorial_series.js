document.getElementById('fact-btn').addEventListener('click' ,factorial_series);

function factorial_series(){
    let fact_series = "Factorial Series is <br>";
    let num = parseInt(document.getElementById('num').value);
    for(i=1;i<=num;i++){
        let fact =1;
        for(j=i;j>0;j--){
            fact=fact*j;
        }
        fact_series = fact_series +"<br> Factorial of " +i+" : "+fact;
    }
    document.getElementById('result').innerHTML = fact_series;

}