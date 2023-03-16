console.log(1);
console.log(2);
setTimeout(() => {
    console.log(3);
}, 2000);
// after 2000 mili second === 2s, funciton inside setTimeOut will work
console.log(4);
console.log(5);

// we can use clearTimeOut() to stop setTimeout function if we need
const timelog= setTimeout(() => {
    console.log("lazy logged");
}, 4000);

clearTimeout(timelog);
// lazy logged is not showing now
// since we stopped timelog using clearTiemOut function