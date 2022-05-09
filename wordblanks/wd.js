function wordBlanks(myNoun , myAdjective , myVerb , myAdverb){
var result = "";
result += "the " + myNoun + "" + myVerb + "" + " in the store " + myAdverb
return result;
}
console.log(wordBlanks("dog" , "big" ,"ran" , "quickly"));
console.log(wordBlanks("bike" , "slow", "flew" ,"slowly"));