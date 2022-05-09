/*// write reusable code with function
function OurReusableFunction(){
    console.log("hi!!!","hello","ji");
    console.log("pradeep","paveen","partha");
}
OurReusableFunction();
OurReusableFunction();
OurReusableFunction();
OurReusableFunction();

// Passing Value to the argument
function jn(a,b) {
    console.log(a - b);
}
jn(2,4);
function pl(a,b) {
    console.log(a + b);
}
pl(1,3);
function ly(a,b) {
    console.log(a * b);
}
ly(2,6);
// Global scope with function:
var myglobal = 10;
function fun1(){
    oopsglobal=5;
}
function fun2(){
    var output="";
    if(typeof myglobal != "undefined"){
        output = "myglobal:" + myglobal;
    }
    console.log(output);
    if(typeof oopsglobal != "undefined"){
        output = "oopsglobal:" + oopsglobal;
    }
    console.log(output);
}
fun1();
fun2();

// Global scope with function:
var myglobal = 10;
function fun1(){
    oopsglobal=5;
}
function fun2(){
    var output="";
    if(typeof myglobal != "undefined"){
        output += "myglobal:" + myglobal;
    }
    if(typeof oopsglobal != "undefined"){
        output += "oopsglobal:" + oopsglobal;
    }
    console.log(output);
}
fun1();
fun2();

//Local scope with function
function mylocalscope(){
    var myvar =44;
    console.log(myvar);
}
mylocalscope();
console.log(myvar);*/

//Global vs local scope in function:
var outerwear = "T-shirt";
function myoutfit(){
    var outerwear = "sweater"
    return outerwear;
}
console.log(myoutfit());
console.log(outerwear);