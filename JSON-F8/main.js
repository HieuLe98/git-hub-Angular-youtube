
// JSON là 1 định dạng dữ liệu (chuỗi)
// JSON là viết tắt của JavaScript Object Notation
// JSON có thể thể hiện: Number, Boolean, Null, Array, Object
// Stringify / Parse : Chuyển đổi sang 1 dữ liệu khác, bộ mã khác và Parse để chuyển lại về kiểu dữ liệu ban đầu

// Stringify: Từ JavaScript types -> JSON
// Parse: Từ JSON -> JavaScript types

// var json = '["JavaScript", "PHP"]'; // 1 chuỗi JSON thể hiện Array
// var json = '{"name": "Hieu AC", "age": 18}';

var a = '1';
console.log(JSON.parse(a));