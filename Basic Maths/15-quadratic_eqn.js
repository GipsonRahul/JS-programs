document.getElementById('solve-btn').addEventListener('click' ,quadratic_eqn);

function quadratic_eqn(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;

    let root1 ,root2 ,d;

    d = b * b - 4 * a * c;

    if(d > 0){  // real root but not same
        root1 = (-b + Math.sqrt(d)) / (2 * a);
        root2 = (-b - Math.sqrt(d)) / (2 * a); 
        document.getElementById('result').innerHTML = 'The roots are real but not same.<br>The roots of the quadratic equation are '+root1+' and '+root2;  
    }else if(d == 0){ // real root and also same
        root1 = root2 = -b / (2 * a);
        document.getElementById('result').innerHTML = 'The roots are real and also same.<br>The roots of the quadratic equation are '+root1+' and '+root2;  
    }else{
        let real = (-b / (2 * a)).toFixed(2);
        let imag = (Math.sqrt(-d) / (2 * a)).toFixed(2);
        document.getElementById('result').innerHTML = "The roots are imaginary.<br>The roots of the quadratic equation are "+real+" + "+imag+"i and "+real+" - "+imag+"i";  

    }
}