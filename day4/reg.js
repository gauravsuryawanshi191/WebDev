function validateName() {
    var name = document.getElementById("nm").value;
    if (name.trim().length < 3) {
        document.getElementById("errnm").innerHTML = "cannot have blank space";
        return false;
    }
    return true;
}
function validateData() {
    var flag1 = validateName();
    return flag1;
}