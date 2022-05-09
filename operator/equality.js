//Non strictly operator
/*function testequal(val){
    if(val == 12){
        return "Equal";
    }
    else{
        return "not equal"
    }
}
console.log(testequal(10));
console.log(testequal('12'));
// Strictly Operator:
function testequal(val){
    if(val === 12){
        return "Equal";
    }
    else{
        return "not equal"
    }
}
console.log(testequal(12));
console.log(testequal('12'));

function testequal(val1,val2){
    if(val1 === val2){
        return "Equal";
    }
    else{
        return "not equal"
    }
}
console.log(testequal(12,13));
// comparison with inequality operator:
function testequal(val1,val2){
    if(val1 != val2){
        return "not Equal";
    }
    else{
        return "equal"
    }
}
console.log(testequal(12,13));
//comparison with strictly inequality operator:
function testequal(val1,val2){
    if(val1 !== val2){
        return "not Equal";
    }
    else{
        return "equal"
    }
}
console.log(testequal(12,13));
//Comparison with logical and operator:
function and(val){
    if(val <= 50 && val >= 25){
        return "yes";
    }
    return "No" ;
}
and(40);
console.log(and());*/
// comparison with logical or operator:
function or(val){
    if(val < 10 || val > 20){
        return "outside";
    }
    return "inside";
}
or(21);
console.log(or());
