// 1. new Promise
// 2. Executor
// resolve được gọi thì callback của then() được gọi
// reject được gọi thì callback của catch() được gọi
// 1 trong 2 được gọi thì callback của finally được gọi

// Promise sinh ra để xử lý bất đồng bộ, khắc phục tình trạng callback hell






//Promise có 3 trạng thái
//1. Pendding
//2. Fulfilled
//3. Rejected


//Trong Javascript thì promise khi mới tạo sẽ có trạng thái là pending. Nếu kết quả là đã hoàn thành thì sẽ có trạng thái fulfilled hoặc xảy ra lỗi thì nó sẽ có trạng thái rejected.


var promise = new Promise(
    //Executor: function sẽ dc thực thi khi được gọi đến promise
    function(resolve, reject) {
        //Logic
        // Thành công: resolve
        // Thất bại: reject   
        
        //Fake call API
        resolve([
            {
                id: 1,
                name: 'Javascript'
            }
        ]);     
    }
);


promise 
    .then(function(courses) {
        console.log(courses);

    })

    .catch(function() {
        console.log('Failure!');

    })

    .finally(function() {
        console.log('Done!');

    });
