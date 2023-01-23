"use strict";
for (var i = 1; i <= 5; i++) {
    console.log(i);
}
var reviews = [1, 2, 3, 4, 5];
reviews.forEach(function (value) {
    console.log(value);
});
for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
    var number = reviews_1[_i];
    if (number % 2 == 1) {
        console.log(number + " is odd");
    }
    else {
        console.log(number + " is even");
    }
}
