//Switch Case
function swi(val){
    var answer =" ";
    switch (val){
        case 1:
        answer = "alpha";
        break;
        case 2:
        answer ="beta";
        break;
        case 3:
        answer ="gamma";
        break;
        case 4:
        answer ="delta" ;
        break;
    }
    return answer;   
}
console.log(swi(3));
//Default option in switch statement:
function swi(val){
var answer = "";
switch (val){
        case "a":
        answer = "aniimal";
        break;
        case "b":
        answer = "bird";
        break;
        case "c":
        answer = "cat";
        break;
        default:
        answer = "jncindcjn";
        break;
        }
    return answer;
}
console.log(swi("p"));

//Multiple identical option in switch statement:
function swi(val){
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "med";
            break;
        case 7:
        case 8:
        case 9:
            answer = "hiigh";
            break;
    }
    return answer;
}
console.log(swi(7));