# Javascript

- It is a single thread synchronous light weight interpreted language.
- Designed for creating a network centric application.
- Easy to implement because it is integrated by html.
- It is open and cross platform.
- If we not known js we are not web developers.
- It is used to write webapps.
- ECMA-European computer Manufacturer Association.
- It is not directly access the memory devices.first js is only used for validation &alert box.

## Comment

- Comments are the lines of code that javascript will intentionally ignored.
- They don't do anything.
- They used to create the notes for yourself and others about what the code does.
- There are two types of comment.thy are,
  - Inline Comment
  - Multiline comment

## Inline Comment:

    This is a single line Comment.It is used to give the reference for other coders and after a long time we see the code to identify it easily.if we type the comment the line can't be visible in the output.

```Javascript
console.log("Hello World"); //This is used to print
```

Output: <br>
PS F:\Yavar\basicjs\commenting> node inlinecmnt.js
Hello World

## Multiline comment:

    Multiline comments starts with /* and end with */.Any text between /* and end with */ will be ignored by javascript.

```Javascript
/* this is
multi line
comment */
```

## Datatypes and variables:

    There are 7 different types of datatypes.They are,
     - undefined
     - null
     - boolean
     - string
     - symbol
     - number
     - object

### undefined

        If it not defined a variable so the output can be shown in the undefined.null and undefied value can't be same so don't collapse the two words.

```Javascript
var myVar;

if (myVar)
    alert("myVar evaluates to true");
else
    alert("myVar evaluates to false");
```

Output:<br>
undefined

### Null

    If you can assign the value null to the variable.It denote that the value currently haven't a variable.

```Javascript

let a = null;
alert(a);

```

Output:<br>
// to display the alert message.

### Boolean:

    This can be say about true or false.It will be used in the conditional statement.

```Javascript
let a=10;
let b=20;
if(a>b){
    console.log('true');
}
else{
    console.log('false');
}
```

Output:<br>
PS F:\Yavar\basicjs> cd datatypes<br>
PS F:\Yavar\basicjs\datatypes> node boolean.js<br>
true<br>
PS F:\Yavar\basicjs\datatypes> node boolean.js<br>
false<br>

### String:

    It is used for storing and manipulating the text.it is written inside a two or more words inside the quotes.

```Javascript
let carName1 = "Volvo XC60"; // Double quotes
let carName2 = 'Volvo XC60'; // Single quotes

document.getElementById("demo").innerHTML =
carName1 + " " + carName2;
```

Output:<br>
'Volvo XC60 Volvo XC60'

### Symbol:

    Symbols are immutable and are unique.ES6 introduced a new datatype called symbol.Symbol() method always return a unique value.

```Javascript
console.log(Symbol()) //Symbol()
console.log(Symbol('Some Test')) //Symbol(Some Test)
```

Output:<br>
PS F:\Yavar\basicjs\datatypes> node symbol.js
Symbol()
Symbol(Some Test)

### Storing Values With Assignment Operator:

    There are the difference between the assigning variable and declaring variable.In javascript all line ends with the semicolon.we declare a variable like "vara;"and the assigning value is "var = a;"

```Javascript<br>
var a;
var b = 10;
console.log(a);
a = 12;
console.log(a);
console.log(b);
```

Output:<br>
PS F:\Yavar\basicjs\datatypes> node assigning.js
undefined
12
10

### Initializing variables with an assignment operator:

    "Var a = 9; " - Var a = declaring variable,and 9 is the assigning value.

### Uninitialized Variables

```Javascript
// initialize these three variable
var a = 20;
var b = 9;
var c = "I am a ";
// don't change the code below these line
a = a + 10;
b = b + 5;
c = c + "string";
```

### Case sensitivity

    Javascript is a case sensitive.it can be written in upper case it can be give the error and we give the lowercase it can be run and output can be produced.

## Basic Math:

### Adding Numbers:

    we give the value and add into it to get the addition value.

```Javascript
var sum = 10 +30;
console.log(sum);
```

Output:<br>
PS F:\Yavar\basicjs\add> node adding.js
40

### Subtracting numbers:

    We give the value and subtract init to get the difference value.

```Javascript
var difference = 99 - 80;
console.log(difference);
```

Output:<br>
PS F:\Yavar\basicjs\basicmath> node sub.js
19

### Multiplying Numbers:

    we give the value and multiply in it to get the product value it can be used as the symbol of asterik is used.

```Javascript
var product = 10 * 8;
console.log(product);
```

Output:<br>
PS F:\Yavar\basicjs\basicmath> node multiply.js
80

### Divide number:

    We give the two values and divide in it to get the divide value.

```Javascript
var divide = 66 / 33;
console.log(divide);
```

Output:<br>
PS F:\Yavar\basicjs\basicmath> node divide.js  
2

## Increement and Decreement:

### Increement the value:

```Javascript
var a = 10;
a++;
console.log(a);
```

Output:<br>
PS F:\Yavar\basicjs\increementanddecreement> node increement.js
11

### Decreement the value:

```Javascript
var a = 22;
a--;
console.log(a);
```

Output:<br>
PS F:\Yavar\basicjs\increementanddecreement> node decreement.js
21

## Decimal number:

### Multiply decimals:

    Multiplying the decimal point number and floating point number is same as the integer.

```Javascript
var product = 2.5 * 2.5;
console.log(product);
```

Output:<br>
PS F:\Yavar\basicjs\decimalnumber> node multideci.js
6.25

## Divide decimal

### Finding Quotient:

```Javascript
var quotient = 4.4 / 2.0;
console.log(quotient);
```

Output:<br>
PS F:\Yavar\basicjs\decimalnumber> node findquotient.js
2.2

### Finding Remainder:

```Javascript
var remainder = 2 % 2;
console.log(remainder);
```

Output:<br>
PS F:\Yavar\basicjs\decimalnumber> node findremainder.js
0

## Augmented Math Operation:

### Compound assignment with augmented addition:

```Javascript
var a = 10;
var b = 20;
var c = 30;
a += 10;
b += 100;
c += 32;
console.log(a);
console.log(b);
console.log(c);
```

Output:<br>
PS F:\Yavar\basicjs\augmentmath> node augmentadd.js
20
120
62

### Compound assignment with augmented subtraction:

```Javascript
var a = 10;
var b = 20;
var c = 30;
a -= 30;
b -= 40;
c -= 10;
console.log(a);
console.log(b);
console.log(c);
```

Output:<br>
PS F:\Yavar\basicjs\augmentmath> node augmentsub.js  
-20
-20
20

### Compound assignment with augmented multiply:

```Javascript
var a = 10;
var b = 20;
var c = 30;
a *= 10;
b *= 100;
c *= 32;
console.log(a);
console.log(b);
console.log(c);
```

Output:<br>
PS F:\Yavar\basicjs\augmentmath> node augmentmult.js  
100
2000
960

### Compound assignment with augmented Division:

```Javascript
var a = 10;
var b = 20;
var c = 30;
a /= 10;
b /= 2;
c /= 15;
console.log(a);
console.log(b);
console.log(c);
```

Output:<br>
PS F:\Yavar\basicjs\augmentmath> node augmentdiv.js
1
10
2

### Declare String Variables:

```Javascript
//Examples
var firstname = "Pradeep";
var lastname = "Raja";


// only change code below these line
var myfirstname ="Ram";
var mylastname ="kumar";
```

### Escaping literal quotes:

```Javascript
var mystr = "I am \"double quoted\" string inside \"double quotes\"";
console.log(mystr);
var mystr ="<a href=\"http:www.example.com\" target = \"blank\">link</a>";
console.log(mystr);


var mystr ='<a href="http:www.example.com" target = "blank">link</a>';
console.log(mystr);

var mystr =`<a href="http:www.example.com" target = "blank">link</a>`;
console.log(mystr);
```

Output:<br>
PS F:\Yavar\basicjs\esclitquot> node esclitquot.js
I am "double quoted" string inside "double quotes"
<a href="http:www.example.com" target = "blank">link</a>
<a href="http:www.example.com" target = "blank">link</a>
<a href="http:www.example.com" target = "blank">link</a>

### Escaping sequence in string:

```Javascript
var mystr = "First line\n\t\ Second line\nThird line"
console.log(mystr);

```

Output:<br>
PS F:\Yavar\basicjs\escseq> node esc.js
First line
Second line
Third line

### Plus operator:

```Javascript
var mystr = "This is a new string."  +   "This is a old string.";
console.log(mystr);
```

Output:<br>
PS F:\Yavar\basicjs\plusoperator> node constringwithplus.js
This is a new string.This is a old string.

### Plus equal operator:

```Javascript
var ourstr = "This is the first string."
ourstr += "This is the second string."
console.log(ourstr);
```

Output:<br>
This is the first string.This is the second string.

### Constructing string with variable:

```Javascript
var myname = "Pradeep";
var ourname = "My name is" + myname + "I am very well";
console.log(ourname);
```

Output:<br>
PS F:\Yavar\basicjs\consstringwitvaria> node vrai.js
My name isPradeepI am very well

### Appending variables to string:

```Javascript
var mystr = "cricket player";
var ourstr = "Dhoni is a ";
ourstr += mystr
console.log(ourstr);
```

Output:<br>
PS F:\Yavar\basicjs\appending> node hi.js
Dhoni is a cricket player

### Length of a string:

```Javascript
var firstnameLength =0;
var firstname = "Pradeep";
firstnameLength = firstname.length;
console.log(firstnameLength);
```

Output:<br>
PS F:\Yavar\basicjs\lengthofstring> node leng.js
7

### Bracket Notation:

```Javascript
var a = "pradeeep";
console.log(a[4]);
```

Output:<br>
PS F:\Yavar\basicjs\bracketnotation> node brac.js
e

### String immutability:

    Strings are immutable that cann't be altered once created.that can't be change only the individualcharacter

```Javascript
var mystr = "jelloworld";
mystr ="helloworld";
console.log(mystr);
```

Output:
PS F:\Yavar\basicjs\stringimmutability> node us.js
helloworld

### Find the nth character:

```Javascript
var firstname = "happy";
var fl = firstname[3];
console.log(fl);


var lastname = "lastfight";
var ln = lastname[lastname.length-4];
console.log(ln);
```

Output:
PS F:\Yavar\basicjs\nthcharacter> node cd.js
p
i

### Word blanks:

```Javascript
function wordBlanks(myNoun , myAdjective , myVerb , myAdverb){
var result = "";
result += "the " + myNoun + "" + myVerb + "" + " in the store " + myAdverb
return result;
}
console.log(wordBlanks("dog" , "big" ,"ran" , "quickly"));
console.log(wordBlanks("bike" , "slow", "flew" ,"slowly"));
```

Output:
PS F:\Yavar\basicjs\wordblanks> node wd.js
the dogran in the store quickly
the bikeflew in the store slowly

### Array:

    An array is a special variable which can hold more than one value.

```Javascript
// Create an array
var ourarr = ["Pradeep" , 23];
var myarr = ["Prathap", 24];
console.log(ourarr);
console.log(myarr);

// Nested array
var ourarr = [["pradee" , 24],["prakas" , 23]];
console.log(ourarr);

// Access Array Data
var ourarr = [50 , 60 , 70];
var ourdata = ourarr[2];
console.log(ourdata);

// Modify Array Data
var ourarr = [50 , 60 , 70];
ourarr[2] = 30;
console.log(ourarr);

// Access Multi Dimensional Array with indexes
var myarr = [[2,3,5],[3,4,5],[5,7,8],[[1,3,5],6,8]];
var mydata = myarr[3][0][1];
console.log(mydata);
```

Output:<br>
PS F:\Yavar\basicjs\array> node ar.js
[ 'Pradeep', 23 ]
[ 'Prathap', 24 ]
[ [ 'pradee', 24 ], [ 'prakas', 23 ] ]
70
[ 50, 60, 30 ]
3

### Manipulate array with push()

    To add array in last

```Javascript
//manipulate array with push()
var ourarr = [["pradeep",23],["kumar",25]];
ourarr.push(["pradee",24]);
console.log(ourarr);
```

Output:<br>
[ [ 'pradeep', 23 ], [ 'kumar', 25 ], [ 'pradee', 24 ] ]

### Manipulate array with pop()

    To remove array from last

```Javascript
//manipulate array with pop()
var ourarr = [["pradeep",23],["kumar",25]];
ourarr.pop();
console.log(ourarr);
```

Output:<br>
[ [ 'pradeep', 23 ] ]

### Manipulate array with shift()

    To remove the first element of an array

```Javascript
//manipulate array with shift()
var ourarr = [["pradeep",23],["kumar",25],["pradee",24]];
ourarr.shift();
console.log(ourarr);
```

Output:<br>
[ [ 'kumar', 25 ], [ 'pradee', 24 ] ]

### Manipulate array with unshift()

    To add an array in first

```Javascript
// Manipulate array with unshift()
var myarr = [["pradeep",23],["kumar",25],["pradee",24]];
myarr.unshift(["kumar",21]);
console.log(myarr);
```

Output:<br>
[
[ 'kumar', 21 ],
[ 'pradeep', 23 ],
[ 'kumar', 25 ],
[ 'pradee', 24 ]
]

### Shopping List:

```Javascript
var list = [["dhall",3],["spices",3],["mustard",2],["cashew",5]];
console.log(list);
```

Output:<br>
PS F:\Yavar\basicjs\array> node shop.js
[ [ 'dhall', 3 ], [ 'spices', 3 ], [ 'mustard', 2 ], [ 'cashew', 5 ] ]

### Write Reusable with functions:

```Javascript
function OurReusableFunction(){
    console.log("hi!!!","hello","ji");
    console.log("pradeep","paveen","partha");
}
OurReusableFunction();
OurReusableFunction();
OurReusableFunction();
OurReusableFunction();
```

Output:<br>
PS F:\Yavar\basicjs\function> node reusabl.js
hi!!! hello ji
pradeep paveen partha
hi!!! hello ji
pradeep paveen partha
hi!!! hello ji
pradeep paveen partha
hi!!! hello ji
pradeep paveen partha

### Passing value to the argument

```Javascript
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
```

Output:<br>
-2
4
12

### Global scope with function:

```Javascript
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
```

Output:<br>
myglobal:10
oopsglobal:5

```Javascript
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
```

Output:<br>
myglobal:10oopsglobal:5

### Local Scope with function:

```Javascript
//Local scope with function
function mylocalscope(){
    var myvar =44;
    console.log(myvar);
}
mylocalscope();
console.log(myvar);
```

Output:<br>
F:\Yavar\basicjs\function\reusabl.js:67
console.log(myvar);
^
ReferenceError: myvar is not defined
at Object.<anonymous> (F:\Yavar\basicjs\function\reusabl.js:67:13)
at Module.\_compile (node:internal/modules/cjs/loader:1099:14)
at Object.Module.\_extensions..js (node:internal/modules/cjs/loader:1153:10)
at Module.load (node:internal/modules/cjs/loader:975:32)
at Function.Module.\_load (node:internal/modules/cjs/loader:822:12)
at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
at node:internal/main/run_main_module:17:47

Node.js v17.9.0

### Global vs local scope in function:

```Javascript
var outerwear = "T-shirt";
function myoutfit(){
    var outerwear = "sweater"
    return outerwear;
}
console.log(myoutfit());
console.log(outerwear);
```

Output:<br>
PS F:\Yavar\basicjs\function> node reusabl.js
sweater
T-shirt

### Return a value from a function

```Javascript
function timesfive(num){
    return num*5;
}
console.log(timesfive(9));
console.log(timesfive(10));
```

Output:
PS F:\Yavar\basicjs\return> node sam.js
45
50

### Undefined value from a function return:

```Javascript
var sum = 8;
function addthree(){
    sum = sum + 3;

}
console.log(addthree());
```

Output:
PS F:\Yavar\basicjs\return> node sam.js
undefined

### If statement:

```Javascript
var i =11;
if(i<10){
    console.log(true);

}
else{
    console.log(false);
}
```

Output:
PS F:\Yavar\basicjs\if> node if.js
false
PS F:\Yavar\basicjs\if> node if.js
true
PS F:\Yavar\basicjs\if> node if.js
false

### Equality Operator:

#### Not strictly Operator:

    It is the operator that can be used to give the string value number it can be acceptable in this method.

```Javascript
function testequal(val){
    if(val == 12){
        return "Equal";
    }
    else{
        return "not equal"
    }
}
console.log(testequal(10));
console.log(testequal('12'));
```

Output:<br>
PS F:\Yavar\basicjs\operator> node equality.js
not equal
Equal

### Strict equality operator:

    The strictly operator is used to give only number value not accept the string value.

```Javascript
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
```

Output:
PS F:\Yavar\basicjs\operator> node equality.js
Equal
not equal

### comparison with different equality operator:

```Javascript
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
```

Output:
PS F:\Yavar\basicjs\operator> node equality.js
not equal

### Comparison with inequality operator:

    it gives the two different value and give the inquality operator

```Javascript
 function testequal(val1,val2){
    if(val1 != val2){
        return "not Equal";
    }
    else{
        return "equal"
    }
}
console.log(testequal(12,13));
```

Output:
PS F:\Yavar\basicjs\operator> node equality.js
not Equal

### comparison with strictly inequality operator:

    It is the operator that can be used the strictly

```Javascript
    function testequal(val1,val2){
    if(val1 !== val2){
        return "not Equal";
    }
    else{
        return "equal"
    }
}
console.log(testequal(12,13));
```

Output:<br>
PS F:\Yavar\basicjs\operator> node equality.js
not Equal

### Comparison with logical and operator:

```Javascript
function and(val){
    if(val <= 50 && val >= 25){
        return "yes";
    }
    return "No" ;
}
and(40);
console.log(and());
```

Output:
PS F:\Yavar\basicjs\operator> node equality.js
No

### comparison with or operator:

```Javascript
function or(val){
    if(val < 10 || val > 20){
        return "outside";
    }
    return "inside";
}
or(21);
console.log(or());
```

Output:
PS F:\Yavar\basicjs\operator> node equality.js
inside

### golf code:

```Javascript
var names = ["Hole-in-one!","Eagle","Birdie","par","Bogey","Double Bogey","Go home"];
function golfscores(par,stroke){
    if(stroke == 1 ){
        return names[0];
    }else if(stroke <= par -2){
        return names[1];
    }
    else if(stroke == par -1){
        return names[2];
    }else if(stroke == par){
        return names[3];
    }else if(stroke == par +1){
        return names[4];
    }
    else if(stroke == par +2){
        return names[5];
    }
    else if(stroke >=  par +3){
        return names[6];
    }
    return "change me";
}
console.log(golfscores(4,5));
```

Output:
PS F:\Yavar\basicjs\golf> node golfcode.js
Bogey

### Switch statement:

```Javascript
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
```

Output:

PS F:\Yavar\basicjs\switch> node swi.js
alpha
PS F:\Yavar\basicjs\switch> node swi.js
gamma

### Default option in switch statement

```Javascript
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
        }
    return answer;
}
console.log(swi("b"));
```

Output:
PS F:\Yavar\basicjs\switch> node swi.js
bird

### Default opertor in switch case:

The default operator is like a else statement.

```Javascript
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
```

Output:
PS F:\Yavar\basicjs\switch> node swi.js
bird
PS F:\Yavar\basicjs\switch> node swi.js
jncindcjn

### multiple Identical option in switch statement:

```Javascript
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
```

Output:
PS F:\Yavar\basicjs\switch> node swi.js
low
PS F:\Yavar\basicjs\switch> node swi.js
hiigh

### Returning boolean values from function:

```Javascript
function hi(a,b){
    if (a>b){
        return true;
    }
    else{
        return false;
    }
}
console.log(hi(5,2));
console.log(hi(3,5));
```

Output:
PS F:\Yavar\basicjs\returningbooleanfunc> node return.js
true
false

### build object

```Javascript
var ourdog ={
    "name": "johnhy",
    "age" : 2,
    "tail" : 1,
    "friends" : ["everything"]
};
console.log(ourdog);
```

Output:
PS F:\Yavar\basicjs\objects> node build.js
{ name: 'johnhy', age: 2, tail: 1, friends: [ 'everything' ] }

### Dot Operator:

```Javascript
var ourdog ={
    "name": "johnhy",
    "age" : 2,
    "tail" : 1,
    "friends" : ["everything"]
};
var namevalue =ourdog.name;
var agevalue = ourdog.age;
var tailvalue = ourdog.tail;
var friendsvalue = ourdog.friends;
console.log(namevalue);
console.log(agevalue);
console.log(tailvalue);
console.log(friendsvalue);
```

Output:
PS F:\Yavar\basicjs\objects> node dot.js
johnhy
2
1
[ 'everything' ]

### Nested Object:

```Javascript
var mystorage ={
    "car": {
        "inside" : {
            "glove box" : "maps",
            "passenger seat" : "crumbs"
        },
        "outside" : {
            "trunk" : "jack"
        }
    }
};
var gloveBoxcontents =mystorage.car.inside["glove box"];
console.log(gloveBoxcontents);
```

Output:
PS F:\Yavar\basicjs\nested> node nest.js
maps

### Nested array:

```Javascript
var myplants =[
    {
        type :"flowers",
        list :[
            "rose",
            "tulip",
            "jasmine"
        ]
    },
    {
        type : "tree",
        list :[
            "neem",
            "banyan",
            "blossom"
        ]
    }
];
console.log(myplants[0]["list"][0]);
```

Output:
PS F:\Yavar\basicjs\nested> node array.js
{ type: 'flowers', list: [ 'rose', 'tulip', 'jasmine' ] }
PS F:\Yavar\basicjs\nested> node array.js
undefined
PS F:\Yavar\basicjs\nested> node array.js
rose

### REcord collection

```Javascript
var collection = {
    "2548": {
        "album": "slippery when wet",
        "artist": "Bon Chovi",
        "tracks":[
            "Let rocks",
            "poongatrile"
        ]
    },
    "1990":{
        "album" : "akko",
        "artist" : "anirudh",
        "tracks" : [
            "enakkena",
            "aaluma doluma"
        ]
    },
    "1998":{
        "album" : "sagiye",
        "artist" : "stephen",
        "tracks": []
    }
};
var collectioncopy = JSON.parse(JSON.stringify(collection));
function updateRec(id,prop,value){
    if (value === ""){
        delete collection[id][prop];

    }else if(prop ==="tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);

        }else{
            collection[id][prop] = value;
        }
    return collection;
}
console.log(updateRec(2548 ,"artist","dhduhuhd"));
console.log(updateRec(1990 ,"artist",""));
console.log(updateRec(1998 ,"tracks","cvjneunefiuniuni"));
```

Output:
PS F:\Yavar\basicjs\nested> node record.js
{
'1990': {
album: 'akko',
artist: 'anirudh',
tracks: [ 'enakkena', 'aaluma doluma' ]
},
'1998': { album: 'sagiye', artist: 'stephen', tracks: [] },
'2548': {
album: 'slippery when wet',
artist: 'dhduhuhd',
tracks: [ 'Let rocks', 'poongatrile' ]
}
}
{
'1990': { album: 'akko', tracks: [ 'enakkena', 'aaluma doluma' ] },
'1998': { album: 'sagiye', artist: 'stephen', tracks: [] },
'2548': {
album: 'slippery when wet',
artist: 'dhduhuhd',
tracks: [ 'Let rocks', 'poongatrile' ]
}
}
{
'1990': { album: 'akko', tracks: [ 'enakkena', 'aaluma doluma' ] },
'1998': {
album: 'sagiye',
artist: 'stephen',
tracks: [ 'cvjneunefiuniuni' ]
},
'2548': {
album: 'slippery when wet',
artist: 'dhduhuhd',
tracks: [ 'Let rocks', 'poongatrile' ]
}
}

### While loop:

```Javascript
var myArray = [];
var i = 0;
while(i < 5){
    myArray.push(i);
    i++;
}
console.log(myArray);
```

Output:
PS F:\Yavar\basicjs\loop> node while.js
[ 0, 1, 2, 3, 4 ]

### For loop

```Javascript
var myArray = [];
for (i = 1; i<6; i++){
    myArray.push(i);
}
console.log(myArray);
```

Output:
PS F:\Yavar\basicjs\loop> node for.js
[ 1, 2, 3, 4, 5 ]

### Iterate odd number with a for loop:

```Javascript
var ourarray = [];
for (var i = 1; i <10; i +=2 ){
    ourarray.push(i);
    // if(i % 2 !=0){
    //     ourarray.push(i);
    // }
}
console.log(ourarray);
```

Output:
PS F:\Yavar\basicjs\loop> node fo.js
[ 1, 3, 5, 7, 9 ]

### count backward with a for loop:

```javascript
var ourArray = [];
for (i = 9; i > 0; i -= 2) {
  ourArray.push(i);
}
console.log(ourArray);
```

Output:
PS F:\Yavar\basicjs\nested> node backward.js
[ 9, 7, 5, 3, 1 ]

### Iterate through an array with for loop:

```Javascript
let a = [1,2,3,4,5,100,1000];
let t=0;
for(let i=0;i<a.length;i++){
    t=t+a[i];
}
console.log(t);
```

Output:
PS F:\Yavar\basicjs\nested> node iteratearraywithfor.js
1115

### Nesting Array Multiplication:

```Javascript

function mul(arr){
    let res=1;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
        res *= arr[i][j];
        }
      }
console.log(res);
}
mul([[1,1,36],[1,7],[10,78]]);
```

Output:
PS F:\Yavar\basicjs\nested> node multiply.js
196560

### Do while:

```Javascript
//do-while
let a = [];
var i=0;
do{

    a.push(i);
    i++;

}while(i>5)    // condition false but executed one time
console.log(a);


// while
let b=[];
var j=0;
while(j>5){     // condition false so not executed
    b.push(j);
    j++;

}
console.log(b);
```

Output:
PS F:\Yavar\basicjs\nested> node dowhile.js
[ 0 ]
[]

### Profile Lookup:

```Javascript
var contacts = [
    {
        "name" : "A",
        "Number" : "1234567890",
        "Likes" : ["book","food"]
    },
    {
        "name" : "B",
        "Number" : "4563782903",
        "Likes" : ["swim"]
    },
    {
        "name" : "C",
        "Number" : "6428105424",

    },
]

function pro(name,prop){
    for(let i=0;i<contacts.length;i++){
        if(contacts[i].name===name){
        return contacts[i][prop] || "No such property"
    }
}
  return "No such contact";
}

console.log(pro("A","Number"));
console.log(pro("B","Likes"));
console.log(pro("D"));
console.log(pro("C","Likes"));
```

Output:
PS F:\Yavar\basicjs\nested> node profile.js
1234567890
[ 'swim' ]  
No such contact
No such property

### ParselInt function:

```Javascript
function chech(a){
    return parseInt(a);
}
console.log(89);
console.log("89");
console.log("^");
console.log("k");
```

Output:
PS F:\Yavar\basicjs\nested> node parsel.js
89
89
^
k

### Parseint with radix

Radix specifies the base of number or string such as base 2 , base 10.parseInt("string",2);The parseInt method parses a value as a string and returns the first integer.A radix parameter specifies the number system to use:2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.If radix is omitted, JavaScript assumes radix 10. If the value begins with "0x", JavaScript assumes radix 16

```Javascript
function fun(a){
    console.log(parseInt(a,2));
console.log(parseInt(a,10));
console.log(parseInt(a,16));
console.log(parseInt(a,8));

}

fun("1010");
fun("76");
```

Output:
PS F:\Yavar\basicjs\nested> node parseradix.js
10
1010
4112
520
NaN
76
118
62

### Ternary operator:

```Javascript
function checkEqual(a,b){
    return a === b ? true : false;
    return a === b;
}
checkEqual(1,2);
console.log(checkEqual);
```

Output:
PS F:\Yavar\basicjs\operator> node ternaryoperator.js
[Function: checkEqual]

### Multiple Ternary Operator:

```Javascript
function check(num){
    return num>0 ? "positive" : num<0 ? "Negatie" : "Zero";
}
console.log(check(0));
```

Output:
PS F:\Yavar\basicjs\operator> node ternarymultiple.js
Zero

### Difference between var and let

    Var is the old keyword assign in olden days but not we have let and const keyword is used

```Javascript
var variable =10;
console.log(variable);

var variable ="Pradeep";      //it accepts and overwrite the old value
console.log(variable);

var sum =0;
sum += variable;
console.log(sum);
```

Output:
PS F:\Yavar\basicjs\varletconst> node var.js
10
Pradeep
0Pradeep

### let

```Javascript
let variable = 36;
console.log(variable);

let variable = "Pradeep";   // We cant use like this
console.log(variable);
```

Output:
PS F:\Yavar\basicjs\varletconst> node let.js
F:\Yavar\basicjs\varletconst\let.js:4
let variable = "Pradeep"; // We cant use like this
^

SyntaxError: Identifier 'variable' has already been declared
at Object.compileFunction (node:vm:352:18)
at wrapSafe (node:internal/modules/cjs/loader:1027:15)
at Module.\_compile (node:internal/modules/cjs/loader:1063:27)
at Object.Module.\_extensions..js (node:internal/modules/cjs/loader:1153:10)
at Module.load (node:internal/modules/cjs/loader:975:32)
at Function.Module.\_load (node:internal/modules/cjs/loader:822:12)
at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
at node:internal/main/run_main_module:17:47

Node.js v17.9.0

### Check scope program to find a difference between var and let:

```Javascript
let same="I am global variable of let";    //declared in gobal
console.log(same);                          //Using in global  produce global value

if(1){
    let same = "I am block variable of let";    //declared and reassign in block
    console.log(same);                           //Using inside block will only utilize the reassigned value
}

function check(){
    let same = "I am function variable of let";    //declared and reassign in function
    console.log(same);                             //Using inside function will only utilize the reassigned value
}
check();
```

Output:
PS F:\Yavar\basicjs\varletconst> node chkvarandlet.js
I am global variable of let
I am block variable of let
I am function variable of let

### Const keyword:

It cannot be reassign the value.

```Javascript
const VARIABLE = 19;    //declaring using const keyword
console.log(VARIABLE);

 VARIABLE =49;                   // We can't reassign
 console.log(VARIABLE);
```

Output:
PS F:\Yavar\basicjs\varletconst> node const.js
19
F:\Yavar\basicjs\varletconst\const.js:4
VARIABLE =49; // We can't reassign
^

TypeError: Assignment to constant variable.
at Object.<anonymous> (F:\Yavar\basicjs\varletconst\const.js:4:11)
at Module.\_compile (node:internal/modules/cjs/loader:1099:14)
at Object.Module.\_extensions..js (node:internal/modules/cjs/loader:1153:10)
at Module.load (node:internal/modules/cjs/loader:975:32)
at Function.Module.\_load (node:internal/modules/cjs/loader:822:12)
at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
at node:internal/main/run_main_module:17:47

Node.js v17.9.0

### Mutate Array declared with const keyword:

#### wrong Method:

```Javascript
const ARRAY =[1,56,789];
 function edit(){
     ARRAY = [3,78,654];
     return ARRAY;
 }
 console.log(edit());
```

Output:
PS F:\Yavar\basicjs\varletconst> node mut.js
F:\Yavar\basicjs\varletconst\mut.js:3
ARRAY = [3,78,654];
^

TypeError: Assignment to constant variable.
at edit (F:\Yavar\basicjs\varletconst\mut.js:3:12)
at Object.<anonymous> (F:\Yavar\basicjs\varletconst\mut.js:6:14)
at Module.\_compile (node:internal/modules/cjs/loader:1099:14)
at Object.Module.\_extensions..js (node:internal/modules/cjs/loader:1153:10)
at Module.load (node:internal/modules/cjs/loader:975:32)
at Function.Module.\_load (node:internal/modules/cjs/loader:822:12)
at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
at node:internal/main/run_main_module:17:47

Node.js v17.9.0

### Correct Method:

```Javascript
const ARRAY  = [1,3,5];

function edit(){
    "use strict";
    ARRAY[0]=2;
    ARRAY[1]=4;
    ARRAY[2]=6;
    ARRAY[3]=8;

    return ARRAY;
}
console.log(edit());
```

Output:
PS F:\Yavar\basicjs\varletconst> node correct.js
[ 2, 4, 6, 8 ]

### Object freeze method:

we have a object we dont waNT to change any property in that object.we should use object.freeze function.

```Javascript
function demo(){
    "use strict";
    const MATH_CONST ={
        PI : 3.14
    };
    Object.freeze(MATH_CONST);


     try{
         MATH_CONST.Pi = 66;

     }catch( ex )
     {
         console.log(ex);
     }
    return MATH_CONST.Pi;
}

console.log(demo());
```

Output:
PS F:\Yavar\basicjs\varletconst> node freeze.js
TypeError: Cannot add property Pi, object is not extensible
at demo (F:\Yavar\basicjs\varletconst\freeze.js:10:24)
at Object.<anonymous> (F:\Yavar\basicjs\varletconst\freeze.js:19:13)
at Module.\_compile (node:internal/modules/cjs/loader:1099:14)
at Object.Module.\_extensions..js (node:internal/modules/cjs/loader:1153:10)
at Module.load (node:internal/modules/cjs/loader:975:32)
at Function.Module.\_load (node:internal/modules/cjs/loader:822:12)
at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
at node:internal/main/run_main_module:17:47
undefined

### Rest operator:

The rest operator allows us to create a function that takes a variable number of argumets.

... --> indicates rest operator.

```Javascript
function rest(...args) {
    return args;
}
console.log(rest(10,78,77,78));


function sum(...args){
     return args.reduce((a,b) => a+b,0)
};
console.log(sum(1,4,6,78));
```

Output:
PS F:\Yavar\basicjs\varletconst> node rest.js
[ 10, 78, 77, 78 ]
89

### Spread Operator:

The spread operator expands the already existing array.

It also denoted with ...

````Javascript
const arr1=['Jan','Feb','Mar'];

arr2=[];

function get(arr2)
{
   return arr2=[arr2,...arr1];
}
console.log(get("ji"));
console.log(get(78));
```
Output:
PS F:\Yavar\basicjs\varletconst> node spread.js
[ 'ji', 'Jan', 'Feb', 'Mar' ]
[ 78, 'Jan', 'Feb', 'Mar' ]

### getters and setters

Getters are used to access the property of an object.setters are used to change the value of an object.

```Javascript
function makeclass(){
    class thermostate{
        constructor(temp){
            this._temp = 5/9 * (temp-32);


         }
         get temperature(){
            return this._temp;

        }

        set temperature(updatedTemp){
            return this._temp = updatedTemp;

        }
    }



    return thermostate;
}

const thermostate = makeclass();

const thermos = new thermostate(76);

let temp = thermos.temperature;

thermos.temperature=26;

temp = thermos.temperature;
console.log(temp);
````

Output:
PS F:\Yavar\basicjs\varletconst> node getters.js
26

### Import and Export

Require method
Consider 2 .js files
1 .html file
Write your functions in any one .js files to export them
In another .js file just get the function using require keyword
Just link the .js file which is getting to .html file.
Kindly refer the following process.

#### Html file:

```Javascript
<!DOCTYPE html>
<head>
   <title> JAVA SCRIPT </title>
   <script src="./vijay.js">   //just link the .js file

   </script>
</head>

<body></body>
</html>
```

### Js file to execute:

```Javascript

const { add } = require("./math.js");  //use require keyword ,call a
                                       //.js file which contains functions

console.log(add(100,48));              //call the function here
console.log(add(12,56));
```

### Js file to export:

```Javascript
function add(a,b){
    return a+b;
 }


 module.exports={          //use module.exports to export functions
    add
 }
```

# Advanced javascript Tutorial:

## Agenda

- Overview of javascript
- Advanced working with functions
- javascript Name Spaces
- Prototypes
- Error handling
- Modules in Javascript
- changing Javascript methods
- Generators

### Javascript:

- It is a high level interpreted programing language used to make webpages more interactive.
- It is very powerful clientside scripting language that makes your webpage more lively and interactive.

### Features of Javascript:

- Scripting language
- object based programing language that supports polymorphism,encapsulation,and inheritance.

### Basics & Fundaments:

- Variables
- Constants
- Datatypes
- Objects
- Arrays
- Functions
- conditional statements
- Loops
- Switch case

### Advanced Working With Functions:

- Recursion
- Closure
- The new function
- Arrow function
- Rest & Spread Parameters
- Global object
- Function Object
- Set timeout & set interval
- function binding

### Recursion:

    Recursion is a programing pattern that helps in situations where a task can be naturally split into several tasks of the samekind but simpler

```Javascript
function powerOfNumber(x,n){
    if(n==1){
        return x;
    }
    else{
        return x * Math.pow(x,n-1);
    }

}
console.log(powerOfNumber(2,4));
```

Output:
PS F:\Yavar\basicjs\advancevideo> node recursion.js
16

### Closure:

    Function   +     Environment      =     closure
    A closure is a function that remembers its outer variable and can access them.in some language it is not possible or a function should be written in a specialway to make it happen.

```Javascript
let add =  ( function (){
console.log("hi");
var count=0;
return  function () { count+=1;  return  count ; }
} )  ();
console.log(add());
console.log(add());
console.log(add());
```

Output:
PS F:\Yavar\basicjs\advancevideo> node closure.js  
hi
1
2
3

### the new function:

- It is the another way to create the function.
- it is rarely used but at the sametime its is alternative.

#### Syntax:

```Javascript
let sum =  new Function ([arg1 , arg2, ...argN] , functionBody);
```

```Javascript
let sub = new Function('a','b','return a+b;' );
console.log(sub(2,2));
```

Output:
PS F:\Yavar\basicjs\advancevideo> node function.js
4

### Set Timeout &SEt time interval

#### Set timeout

    It allows to run a function once after the interval of time.

#### Syntax

```Javascript
let timerId = set TimeOut(func | cod, [delay],[arg 1],[arg 2],...)
```

#### Set interval

It allows us to run a function repeatedly starting after the interval of time then repeating continuously at that interval.

```Javascript
let timer = setInterval( () => console.log("hi")  , 2000 );
setTimeout( () => { clearInterval(timer); } , 2000 );
```

### Function Binding:

    when passing object method as callbacks for instance to set timeout,theres a known problem of losing this function provide a built in method bind that allows fixing this.

```Javascript
let display = {
    name : "pradeep"
}

function showName(){
    console.log(this.name);
}

let functionBind = showName.bind(display);
functionBind();
```

Output:
PS F:\Yavar\basicjs\advancevideo> node functionbind.js
pradeep

### Error handling:

    The try statement allows you to define a block of code to be tested for errors while it is being executed.
    Thr catch statement allows you to define a block of code to be executed.if an error occurs in the try block.

```Javascript
try {
    alert('Begin try runs')
    alert('end try runs')
}catch(err){
    alert('catch is ignored there are no errors')
}
```

### Modules:

A module is a self contained piece of code that groups semantically declared variables and functions.Modules are not built in constructs in javascripts.But the javascript module pattern provides a way to create modules that have well defined interfaces that are exposed to the client of the module

```Javascript
var MODULE = (function( ){
   var MODULE : {
       moduleProperty: number;
       moduleMethod(): void;
   }
}
module.moduleProperty = 1;
module.moduleMethod= function(){
};
return module;
}());
```

### Chaining Javascript Method:

Javascript allows you to invoke multiple methods on an object in a single expression.To invoke multiple methods we have chaining.chaining is a process stringing a method calls together with dots between them.

#### Syntax:

```Javascript
object.method1().method2().method3();
```

### Generators:

    Generators are special class of function that simplify the task of writing iterators.so this function produces a sequence of results instead of a single value  and generates a series of value.

#### Example:

```Javascript
{
    value: Any,
    done : true |false
}
```

sdgl
