function formDangNhapHopLe() {
    var hopLe = true;
    var nodeHoTen = document.getElementById('hoTen');
    var nodeSoDienThoai = document.getElementById('soDienThoai');
    var hoTen = nodeHoTen.value;
    var soDienThoai = nodeSoDienThoai.value;

    var nodeHienThiLoiHoTen = document.getElementById('hienThiLoiHoTen');
    var nodeHienThiLoiSoDienThoai = document.getElementById('hienThiLoiSoDienThoai');
    nodeHienThiLoiHoTen.innerHTML = '';
    nodeHienThiLoiSoDienThoai.innerHTML = '';


    console.log('Họ tên là: ' + hoTen);
    console.log('Số điện thoại: ' + soDienThoai);

    if (hoTen == null || hoTen.length <= 0) {
        nodeHienThiLoiHoTen.innerHTML = 'Họ tên không được để trống';
        hopLe = false;
    }

    if (soDienThoai == null || soDienThoai.length <= 0) {
        nodeHienThiLoiSoDienThoai.innerHTML = 'Số điện thoại không được bỏ trống';
        hopLe = false;
    }

    return hopLe;

}