function taoDoiTuongSanPham(hinhAnh, ten, giaGoc, phanTramGiamGia, khuVuc) {
    var sanPham = new Object();
    /* Bước 1: Gắn các thuộc tính cho đối tượng */
    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    sanPham.phanTramGiamGia = phanTramGiamGia;
    sanPham.khuVuc = khuVuc;

    /* Bước 2: viết phương thức cho đối tượng */
    sanPham.tinhGiaBan = function () {
        // Logic xử lý của phương thức 
        var giaBan = this.giaGoc * (1 - this.phanTramGiamGia);
        return giaBan;

    }
    return sanPham;


}