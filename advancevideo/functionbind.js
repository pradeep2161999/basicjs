let display = {
    name : "pradeep"
}

function showName(){
    console.log(this.name);
}

let functionBind = showName.bind(display);
functionBind();