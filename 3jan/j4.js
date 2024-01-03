// function f1(){
//     console.log("Hello from oldfashion finction")
// }
// var f2=function(){
//     console.log("Hello from function expression")
// }
// var f3= () => console.log("Hello from Lambda")

function f1(str) {
    console.log(str);
    console.log(str.length);
    console.log(str.toUpperCase());
    console.log(str.charAt(0));
}
var f2 = function (str) {
    console.log(str);
    console.log(str.length);
    console.log(str.toUpperCase());
    console.log(str.charAt(0));
}
var f3 = (str) => {
    console.log(str);
    console.log(str.length);
    console.log(str.toUpperCase());
    console.log(str.charAt(0));
}
f1("Surya");
f2("Shubham");
f3("Saurabh");
