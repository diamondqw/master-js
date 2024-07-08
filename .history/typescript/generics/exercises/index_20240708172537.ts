function identity<T>(arg:T):T{
    return arg

}
console.log(identity<string>("pawan"))
console.log(identity<number)(10)