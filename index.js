function receivesAFunction(cb){
    cb()
}

function returnsANamedFunction(){
    return function hi (){

    }
}

function returnsAnAnonymousFunction(){
    return  function(){

    }
}