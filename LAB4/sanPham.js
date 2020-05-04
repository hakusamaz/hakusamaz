function khaiBaoSanPham(hinhAnh, ten, giaGoc, phanTramGiamGia, khuVuc, id) {
    var khaiBaoSanPham = new Object();
    khaiBaoSanPham.hinhAnh = hinhAnh;
    khaiBaoSanPham.ten = ten;
    khaiBaoSanPham.giaGoc = giaGoc;
    khaiBaoSanPham.phanTramGiamGia = phanTramGiamGia;
    khaiBaoSanPham.khuVuc = khuVuc;
    /* Thêm thuộc tính để định danh */
    if (id == null)
        khaiBaoSanPham.id = taoId();
    else
        khaiBaoSanPham.id = id;

    khaiBaoSanPham.tinhGiaSauKhiGiam = function () {
        var giaSauKhiGiam = this.giaGoc * (100 - this.phanTramGiamGia) / 100;
        return giaSauKhiGiam;

    }
    return khaiBaoSanPham;
}
function chuyenDoiTuongSanPhamThanhHTML(sanPham) {
    sanPham = khaiBaoSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc, sanPham.id);
    var HTML = '';
    // TODO: chuyển đổi sang html 
    HTML += "<div class = 'san-pham'>";
    HTML += "<div class = 'hinh-anh-san-pham'>";
    HTML += "<img src='" + sanPham.hinhAnh + "'>";
    HTML += "</div>";
    HTML += "<h1 class = 'ten-san-pham'> " + sanPham.ten + "</h1>";
    HTML += "<p class = 'giam-gia'> " + sanPham.phanTramGiamGia + "% </p>";
    HTML += "<p class = 'gia-goc-san-pham'> " + sanPham.giaGoc + "Đ </p>";
    HTML += "<p class = 'khu-vuc-san-pham'> " + sanPham.khuVuc + "</p>";
    HTML += "<button class='tbn' onClick='onClickDuaVaoGioHang(" + sanPham.id + ")'>Thêm vào giỏ hàng</button>";
    HTML += "</div>";
    return HTML;

}
function chuyenDoiDanhSachSanPhamThanhHTML(danhSachSanPham) {
    /* Bước1: Tạo vòng lặp duyệt tất cả các phần tử trong mảng */
    /* Bước2: tạo ra đoạn html cho mỗi phần tử  */
    /* Bước3: Cộng chuỗi các đoạn html để tạo thành 1 đoạn html lớn gồm các html nhỏ hơn */
    var HTMLTong = '';
    for (var i = 0; i < danhSachSanPham.length; i++) {
        var sanPham = danhSachSanPham[i];
        var HTML = chuyenDoiTuongSanPhamThanhHTML(sanPham);
        HTMLTong = HTMLTong + HTML;
    }
    return HTMLTong;


}