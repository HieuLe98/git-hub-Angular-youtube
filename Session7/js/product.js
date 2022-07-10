/*
Viết js thực hiện chức năng cho trang web với các yêu cầu sau:
    - Khi click vào nút Thêm, thêm mới sản phẩm vào bảng bên phải, thông tin sản phẩm nhập từ form bên trái
    - Khi chọn vào 1 sản phẩm trong table, đưa thông tin sản phẩm đó vào form bên trái, cập nhật lại thông tin và bấm nút Sửa để lưu lại
    - Chọn 1 sản phẩm trong table, bấm nút Xóa để xóa sản phẩm khỏi bảng
    - Validation
        + Các thông tin khi nhập không bỏ trống
        + Id không nhập trùng, bắt đầu bằng "SP", 4 kí tự
        + Price tối thiểu 1000
*/

// Định nghĩa class Product
class Product{
    constructor(id, name, price, status) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.status = status;
    }
}
// Khai báo mảng lưu sản phẩm
var products = [];
// Hàm xử lý load sản phẩm
function loadData() {
    let rows = '';
    for (let p of products) {
        rows += `<tr data-id="${p.id}">
                    <td>${p.id}</td>
                    <td>${p.name}</td>
                    <td>${p.price}</td>
                    <td>${p.status}</td>
                </tr>`;
    }
    $('.tblProducts').html(rows);
}
// Hàm xử lý hiển thị chi tiết sản phẩm
function details(id) {
    let p = products.find(x => x.id == id);
    $('#id').val(p.id);
    $('#name').val(p.name);
    $('#price').val(p.price);
    $('#status').prop('checked', p.status);
}
// Hàm thêm mới sản phẩm
function add(product) {
    products.push(product);
}
// Hàm cập nhật sản phẩm
function edit(product) {
    for (let p of products) {
        if (p.id == product.id) {
            p.name = product.name;
            p.price = product.price;
            p.status = product.status;
            break;
        }
    }
}
// Hàm xóa sản phẩm
function remove(id) {
    let idx = products.findIndex(x => x.id == id);
    products.splice(idx, 1);
}
// Hàm lấy thông tin sản phẩm từ form
function getData() {
    let p = new Product();
    p.id = $('#id').val();
    p.name = $('#name').val();
    p.price = $('#price').val();
    p.status = $('#status').is(':checked');
    return p;
}
$(function() {
    loadData();

    $('.btn-add').click(function() {
        // Lấy thông tin trên form
        let p = getData();
        // Thêm vào mảng
        add(p);
        loadData();
    })
    $('.btn-edit').click(function() {
        // Lấy thông tin trên form
        let p = getData();
        // Cập nhật
        edit(p);
        loadData();
    })
    $('.btn-remove').click(function() {
        let id = $('#id').val();
        remove(id);
        loadData();
    })


    $(document).on('dblclick', '.tblProducts > tr', function() {
        let id = $(this).data('id');
        details(id);
    })
})