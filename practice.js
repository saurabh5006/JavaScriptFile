function multiple_value(fun,count){
        for(let i = 1; i<=10; i++){
            fun();
        }
}

// Name less function.
let greet = function(){
console.log("hello saurabh");
};

multiple_value(greet, 10);




