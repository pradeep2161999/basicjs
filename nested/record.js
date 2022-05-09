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
