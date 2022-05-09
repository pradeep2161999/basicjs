function rest(...args) {
    return args;
}
console.log(rest(10,78,77,78));


function sum(...args){
     return args.reduce((a,b) => a+b,0)
};
console.log(sum(1,4,6,78));