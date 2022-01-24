document.getElementById('verify-btn').addEventListener('click' ,marriage_eligibility);

function marriage_eligibility(){
    let gender = document.getElementById('gender').value;
    let age = parseInt(document.getElementById('age').value);
    console.log(gender);
    console.log(age);
    if(gender == "M" || gender=="m"){
        if(age>=21){
            document.getElementById('result').innerHTML = "Eligible for Marriage";
        }else{
            document.getElementById('result').innerHTML = "Male Eligibility age for Marriage is 21";
        }
    }else if(gender == "F" || gender=="f"){
        if(age>=21){
            document.getElementById('result').innerHTML = "Eligible for Marriage";
        }else{
            document.getElementById('result').innerHTML = "Female Eligibility age for Marriage is 21";
        }
    }else{
        document.getElementById('result').innerHTML = "Enter your gender correctly [M / F]!!!";
    }
}