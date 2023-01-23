for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let reviews: number[] = [1, 2, 3, 4, 5]

reviews.forEach(value => {
    console.log(value);
})

for (let number of reviews) {
    if (number % 2 == 1) {
        console.log(number + " is odd");
    } else {
        console.log(number + " is even");
    }
}

