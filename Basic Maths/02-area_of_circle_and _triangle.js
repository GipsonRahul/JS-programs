
document.getElementById('area_circle-btn').addEventListener('click' ,area_of_circle);
document.getElementById('area_triangle-btn').addEventListener('click' ,area_of_triangle);

function area_of_circle(){
    var r ,area;
    r = document.getElementById('radius').value;
    area = 3.14 * r * r;
    document.getElementById('result_area_circle').innerHTML = "Area of Circle :" + area;
    console.log("area : "+area);
}

function area_of_triangle(){
    var b ,h ,area;
    b = document.getElementById('base').value;
    h = document.getElementById('height').value;
    area =(b * h) / 2;
    document.getElementById('result_area_triangle').innerHTML = "Area of Triangle :" + area;
}
