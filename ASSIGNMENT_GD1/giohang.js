
var keyLocalStorageItemGioHang = 'danhSachItemGioHang';

function taoDoiTuongItemGioHang(idSanPham, soLuong) {
    var itemGioHang = new Object();
    itemGioHang.idSanPham = idSanPham;
    itemGioHang.soLuong = soLuong;


    return itemGioHang;

}

function layGioHangTuLocalStorage() {
    var danhSachItemGioHang = new Array();
    var jsonDanhSachItemGioHang = localStorage.getItem('giohang');

    if (jsonDanhSachItemGioHang != null)
        danhSachItemGioHang = JSON.parse(jsonDanhSachItemGioHang);

    return danhSachItemGioHang;
}


function themVaoGioHang(idSanPham, danhSachItemGioHang) {
    var danhSachItemGioHangSauKhiDuocThem = new Array();

    var itemGioHang = taoDoiTuongItemGioHang(idSanPham, 1);

    danhSachItemGioHangSauKhiDuocThem.push(itemGioHang)

    return danhSachItemGioHangSauKhiDuocThem;

}


function luuGioHangXuongLocalStorage(danhSachItemGioHang) {

    var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang)

    localStorage.setItem('giohang', jsonDanhSachItemGioHang);

}
