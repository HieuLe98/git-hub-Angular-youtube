// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all : chạy song song

// var promise = new Promise(
//     function (resolve, reject) {
//         // resolve('Success!');
//         reject('Error!');
//     }
// );

// Thư viện: output luôn luôn là một promise

//     var promise = Promise.resolve('Success!');

// promise
//     .then(function (result) {
//         console.log('result: ', result)
//     })
//     .catch(function (err) {
//         console.log('err: ', err);
//     });

var promise1 = new Promise(
    function (resolve) {
        setTimeout(function() {
            resolve([1]);
        }, 2000)
    }
);

var promise2 = new Promise(
    function (resolve) {
        setTimeout(function() {
            resolve([2, 3]);
        }, 5000)
    }
);

// var promise2 = Promise.reject();

Promise.all([promise1, promise2])
    .then(function(result) {
        var result1 = result[0];
        var result2 = result[1];
        
         console.log(result1.concat(result2));
    })
    .catch(function(err) {
        console.log(err)
    });