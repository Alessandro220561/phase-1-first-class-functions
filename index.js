function receivesAFunction(callBack) {
    return callBack();
}

function returnsANamedFunction(aNamedFunction) {
    return function ANamedFunction(){};
}

function returnsAnAnonymousFunction() {
    return function(){};
}