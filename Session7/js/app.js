$(function() {
    $('#btnBuy').click(function() {
        let reg_name = /^[A-Z\s]+$/;
        let reg_email = /^[a-zA-Z]+[\w\-\.]+@[\w\-\.]+\.[a-z]{2,4}$/;
        let reg_created = /^[\d]{1,2}\-[\d]{1,2}\-[\d]{4}$/;
        if ($("#fullName").val() == "") {
            alert("Vui lòng nhập họ tên!");
            return;
        }
        if (!reg_name.test($("#fullName").val())) {
            alert("Họ tên phải nhập IN HOA!");
            return;
        }
        if ($("#email").val() == "") {
            alert("Vui lòng nhập email!");
            return;
        }
        if (!reg_email.test($("#email").val())) {
            alert("Email sai định dạng!");
            return;
        }
        if ($("#phone").val() == "") {
            alert("Vui lòng nhập số điện thoại!");
            return;
        }
        if ($("#address").val() == "") {
            alert("Vui lòng nhập địa chỉ!");
            return;
        }
        if ($("#created").val() == "") {
            alert("Vui lòng nhập ngày đặt!");
            return;
        }
        if (!reg_created.test($("#created").val())) {
            alert("Ngày đặt sai định dạng! VD: dd-mm-yyyy");
            return;
        }
        if ($("#gateway").val() == "") {
            alert("Vui lòng nhập phương thức thanh toán!");
            return;
        }
        if ($('#sendMail').is(':checked')) {
            alert('Đặt hàng thành công, email đã gửi tới cho quý khách');
        } else {
            alert('Đặt hàng thành công');
        }1
    });
    $('#fullName').blur(function() {
        let reg_name = /^[A-Z\s]+$/;
        if ($(this).val() == "") {
            alert("Vui lòng nhập họ tên!");
            return;
        }
        if (!reg_name.test($(this).val())) {
            alert("Họ tên phải nhập IN HOA!");
            return;
        }
    })
    $('#flag').change(function() {
        let check = $(this).is(':checked');
        if(check) {
            $("#fullNameRev").val($("#fullName").val());
            $("#emailRev").val($("#email").val());
            $("#phoneRev").val($("#phone").val());
            $("#addressRev").val($("#address").val());
        } else {
            $("#fullNameRev").val("");
            $("#emailRev").val("");
            $("#phoneRev").val("");
            $("#addressRev").val("");
        }
        alert(check);
    })
})