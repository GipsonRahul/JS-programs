document.getElementById('arm-btn').addEventListener('click' ,armstong);

function armstong(){
    var num ,num1 ,arm_num=0,temp;
    num = document.getElementById('num').value;
    num1 = num;
    while(num!=0){
        temp=0;
        temp = num % 10 ;
        temp = temp * temp * temp;
        arm_num = arm_num + temp;
        num=Math.floor(num / 10) ;
    }
    if(num1==arm_num){
        document.getElementById('arm-res').innerHTML="Armstrong";
    }else{
        document.getElementById('arm-res').innerHTML="Not-Armstrong";
    }
}