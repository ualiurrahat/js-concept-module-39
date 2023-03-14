const getData = new Promise((resolve, reject) => {
    // resolve(100)
    const num = Math.floor(Math.random() * 10);
    console.log(num);
    if (num < 5) {
        resolve(100);
    }
    else {
        reject("No data available");
    }

});

getData
    .then(data => console.log(data + 50))
    .catch(err => console.error("ERROR: ", err))
