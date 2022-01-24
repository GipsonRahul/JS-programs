document.getElementById('square-btn').addEventListener('click' ,findsquare);
document.getElementById('cube-btn').addEventListener('click' ,findcube);

function findsquare(){
    var num ,square;
    num = document.getElementById('num').value;
    square = num * num;
    document.getElementById('square-res').innerHTML= "Square of " + num + " is " +square;
}

function findcube(){
    var num ,cube;
    num = document.getElementById('num').value;
    cube = num* num *num;
    console.log(cube);
    document.getElementById('cube-res').innerHTML= "cube of " + num + " is " +cube
}