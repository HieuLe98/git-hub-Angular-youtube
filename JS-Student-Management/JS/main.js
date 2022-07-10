/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test
function emailIsValid(email) {
    const test = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return test.test(email);
}


function save() {
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;

    let gender = '';
    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    } else if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value;
    }

    if (fullname == '') {
        document.getElementById('fullname-error').innerHTML = 'Vui lòng nhập họ tên';
    } else if (fullname.trim().length <= 2) {
        fullname = '';
        document.getElementById('fullname-error').innerHTML = 'Họ và tên phải lớn hơn 2 ký tự';
    } else if (fullname.trim().length >= 50) {
        fullname = '';
        document.getElementById('fullname-error').innerHTML = 'Họ và tên phải nhỏ hơn 50 ký tự';
    } else {
        document.getElementById('fullname-error').innerHTML = '';
    }

    if (email == '') {
        document.getElementById('email-error').innerHTML = 'Vui lòng nhập email';
    } else if (!emailIsValid(email)) {
        document.getElementById('email-error').innerHTML = 'Vui lòng nhập đúng định dạng email';
        email = '';
    } else {
        document.getElementById('email-error').innerHTML = '';
    }

    if (phone == '') {
        document.getElementById('phone-error').innerHTML = 'Vui lòng nhập số điện thoại';
    } else if (phone.trim().length != 10 ) {
        document.getElementById('phone-error').innerHTML = 'Số điện thoại phải có 10 số';
        phone = '';
    } else {
        document.getElementById('phone-error').innerHTML = '';
    }

    if (address == '') {
        address = '';
        document.getElementById('address-error').innerHTML = 'Vui lòng nhập địa chỉ';
    } else {
        document.getElementById('address-error').innerHTML = '';
    }

    if (gender == '') {
        gender = '';
        document.getElementById('gender-error').innerHTML = 'Vui lòng chọn giới tính';
    } else {
        document.getElementById('gender-error').innerHTML = '';
    }

    if (fullname && email && phone && address && gender) {
        let students = localStorage.getItem('students') ?  JSON.parse(localStorage.getItem('students')) : [];

        students.push({
            fullname: fullname,
            email: email,
            phone: phone,
            address: address,
            gender: gender
        });

        localStorage.setItem('students', JSON.stringify(students));
        console.log(students)

        this.renderListStudent();
    }
}

function renderListStudent() {
    let students = localStorage.getItem('students') ?  JSON.parse(localStorage.getItem('students')) : [];

    if (students.length === 0)
    {
        document.getElementById('list-student').style.display = 'none';
        return false;
    } 
    
    document.getElementById('list-student').style.display = 'block';
    
    let tableContent = 
        `<tr>
        <td>#</td>
        <td>Họ và tên</td>
        <td>Email</td>
        <td>Điện thoại</td>
        <td>Giới tính</td>
        <td>Địa chỉ</td>
        <td>Hành động</td>
        </tr>`;

        students.forEach((student, index) => {
            let studentId = index;
            let genderLabel = parseInt(student.gender) === 1 ? 'Nam' : 'Nữ';
            index++;
            tableContent += `<tr>
            <td>${index}</td>
            <td>${student.fullname}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${genderLabel}</td>
            <td>${student.address}</td>
            <td> <a href='#' onclick='editStudent()'>Edit</a> | <a href='#' onclick='deleteStudent(${studentId})'>Delete</a> </td>
            </tr>`;
        });

        document.getElementById('grid-students').innerHTML = tableContent;
}

function deleteStudent(id) {
    let students = localStorage.getItem('students') ?  JSON.parse(localStorage.getItem('students')) : [];
    students.splice(id, 1);
    console.log(students);
    localStorage.setItem('students', JSON.stringify(students));
    renderListStudent();
}