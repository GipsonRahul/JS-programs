document.getElementById('cal-btn').addEventListener('click' ,marks);

function marks(){
    sub1 =parseInt(document.getElementById('sub1').value );
    sub2 =parseInt(document.getElementById('sub2').value );
    sub3 =parseInt(document.getElementById('sub3').value );
    sub4 =parseInt(document.getElementById('sub4').value );
    sub5 =parseInt(document.getElementById('sub5').value );

    total = sub1 + sub2 + sub3 + sub4 + sub5;
    document.getElementById('total').innerHTML = "Total : " +total;

    percentage = (total/500)*100;
    document.getElementById('percentage').innerHTML = "percentage : " +percentage;
    
    if(percentage>=90){ //100 - 90
        document.getElementById('grade').innerHTML = "Grade : A";
    }else if(percentage<90 && percentage>=80){ //91 - 80
        document.getElementById('grade').innerHTML = "Grade : B";
    }else if(percentage<80 && percentage>=70){ //81 - 70
        document.getElementById('grade').innerHTML = "Grade : C";
    }else if(percentage<70 && percentage>=60){ //71 - 60
        document.getElementById('grade').innerHTML = "Grade : D";
    }else if(percentage<60 && percentage>=50){ //61 - 50
        document.getElementById('grade').innerHTML = "Grade : E";
    }else if(percentage<50 && percentage>=40){ //51 - 40
        document.getElementById('grade').innerHTML = "Grade : F";
    }else if(percentage<40){ // Below 40
        document.getElementById('grade').innerHTML = "Grade : Fail";
    }
}