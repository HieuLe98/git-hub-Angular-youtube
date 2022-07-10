document.getElementById('btn_external').onclick = function() {
    alert('JS External');
}

//Khai báo biến

var ten_bien; //Biến toàn cục
let bien_cuc_bo; //Biến cục bộ
const hang_so = "ABC";

ten_bien = 5;
console.log(typeof(ten_bien));
ten_bien = "5";
console.log(typeof(ten_bien));

var a = 5;
var b = "5";
console.log("a == b: " + (a == b)); //true
console.log("a != b: " + (a != b)); //false
console.log("a === b: " + (a === b)); //false
console.log("a !== b: " + (a !== b)); //true

//Khai báo mảng
var arr = new Array(5); //Không thông dụng
console.log(arr);

var numbers = [];
console.log(numbers); // Thông dụng
numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 3;
numbers[3] = 4;
numbers[4] = 5;
numbers[5] = 6;
numbers[6] = 7;
numbers[7] = 8;

//Duyệt mảng
for (let i = 0; i < numbers.length; i++) {

}

// for . . . in
console.log("for . . . in");
for (let index in numbers) {
    console.log(numbers[index]);
}


// for . . . of
console.log("for . . . of");
for (let item of numbers) {
    console.log(item);
}

// Mảng đa chiều

var matrix = [];
matrix[0] = [1,2,3];
matrix[1] = [4,5,6];
matrix[2] = [7,8,9];

// Duyệt mảng đa chiều
console.log("Duyệt mảng đa chiều")
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}