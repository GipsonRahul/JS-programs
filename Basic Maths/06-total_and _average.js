document.getElementById('total-btn').addEventListener('click' ,total_and_average);

function total_and_average(){
    var total =0 ,count=5;
    var num1 =parseInt(document.getElementById('num1').value);
    var num2 =parseInt(document.getElementById('num2').value);
    var num3 =parseInt(document.getElementById('num3').value);
    var num4 =parseInt(document.getElementById('num4').value);
    var num5 =parseInt(document.getElementById('num5').value);

    total = num1 + num2 + num3 + num4 +num5;

    document.getElementById('total-res').innerHTML ="Total : " +total;
    document.getElementById('average-res').innerHTML ="Average : " +(total/count);
}