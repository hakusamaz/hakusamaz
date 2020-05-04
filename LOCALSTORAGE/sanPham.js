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

    sanPham.toJson = function () {
        var json = JSON.stringify(this);
        return json;
    }

    /* Từ json chuyển thành 1 đối tượng đầy đủ các phương thức
       input: json
       output: doiTuongDayDu
     */
    sanPham.fromJSON = function () {
        var doiTuongDayDu = new Object();
        /* Chuyển từ josn thành đối tượng */
        var doiTuong = JSON.parse(json);

        /* Bước 2: Chuyển đối tượng thành đối tượng đầy đủ phương thức */
        var doiTuongDayDu = taoDoiTuongSanPham(doiTuong.hinhAnh, doiTuong.ten, doiTuong.giaGoc, doiTuong.phanTramGiamGia, doiTuong.khuVuc);

        return doiTuongDayDu;
    }

    return sanPham;
}