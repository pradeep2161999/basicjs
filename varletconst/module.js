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