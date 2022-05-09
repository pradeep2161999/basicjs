let timer = setInterval( () => console.log("hi")  , 2000 ); 
setTimeout( () => { clearInterval(timer); } , 2000 ); 