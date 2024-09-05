/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(t);
        }, t * 1000);
    })
}

function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(t);
        }, t * 1000);
    })
}

function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(t);
        }, t * 1000);
    })
}

function calculateTime(t1, t2, t3) {
    // const promises = [wait1(t1), wait2(t2), wait3(t3)];
    return Promise.all([wait1(t1), wait2(t2), wait3(t3)])
        .then((values) => {
            return Math.max(...values)*1000;
        })
}

// calculateTime(1,10,3)
// .then((values) => {
//     // console.log(typeof values);
//     // console.log(values);
//     let totalTime = 0;
//     for(const val of values){
//         totalTime += val;
//     }
//     console.log(totalTime);
// })



module.exports = calculateTime;
