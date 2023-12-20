function validateName() {
    var name = document.getElementById("nm").value;
    if (name.trim().length < 3) {
        document.getElementById("nmerr").innerHTML = "cannot have blank space";
        return false;
    }
    return true;
}
function validateAge(){
    var age= document.getElementById("age").value;
    if(age<18){
        document.getElementById("ageerr").innerHTML="MINOR,cant apply.";
        return false;
    }
    else if(age>60){
        document.getElementById("ageerr").innerHTML="Senior Citizen cant apply.";
        return false;
    }
    return true;
}
function validateGender(){
    var gender= document.getElementById("sex").value;
    if(gender==Female){
        document.getElementById("sexerr").innerHTML="Only Gents Allowed";
        return false;
    }
    return true;
}
function validateData() {
    var flag1 = validateName();
    var flag2= validateAge();
    var flag3= validateGender();
    return flag1,flag2,flag3;
}