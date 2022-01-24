document.getElementById('calculate_si').addEventListener('click' ,simple_interest);

function simple_interest(){
    var p,r,t,si;
    p = parseInt(document.getElementById('principal').value);
    t = parseInt(document.getElementById('time_period').value);
    r = parseInt(document.getElementById('rate_of_interest').value);
    si = ((p*r*t)/100);
    document.getElementById('si').innerHTML="Simple Interest : " +si;
}