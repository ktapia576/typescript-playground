var font = "bold";
var person = {
    first: 'Jeff',
    last: 'Delaney'
};
var person2 = {
    first: 'Jeff',
    last: 'Delaney',
    fast: true
};
function pow(x, y) {
    var font = "italic";
    console.log(font);
    Math.pow(x, y).toString();
}
pow(5, 10);
var arr = [];
var arr2 = [12, "test"];
arr.push(12);
// arr.push("23")
// arr.push(true)
// Generics
var Observable = /** @class */ (function () {
    function Observable(value) {
        this.value = value;
    }
    return Observable;
}());
var x;
var y;
var z = new Observable(23);
