console.log(1);
console.log(2);
console.log(3);
let num = 0;
const intervalId = setInterval(() => {
    console.log(num++);
}, 1000);

// clearInterval(intervalId);
// this will stop intervalId to work
console.log(4);
console.log(5);
