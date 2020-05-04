var viTriSliderItemHienThiHienTai = 0;
var danhSachSliderItem = document.getElementsByName('slider-item');
console.log(danhSachSliderItem);
hienThiSliderItem(viTriSliderItemHienThiHienTai);

function onClickXemAnhSau() {
    viTriSliderItemHienThiHienTai = viTriSliderItemHienThiHienTai + 1;
    if (viTriSliderItemHienThiHienTai == danhSachSliderItem.length)
        viTriSliderItemHienThiHienTai = 0;
    hienThiSliderItem(viTriSliderItemHienThiHienTai);

}
function onClickXemAnhTruoc() {
    viTriSliderItemHienThiHienTai = viTriSliderItemHienThiHienTai + 1;
    if (viTriSliderItemHienThiHienTai == danhSachSliderItem.length)
        viTriSliderItemHienThiHienTai = 0;

    hienThiSliderItem(viTriSliderItemHienThiHienTai);

}

function hienThiSliderItem(viTri) {
    for (var i = 0; i < danhSachSliderItem.length; i++) {
        danhSachSliderItem[i].style.display = 'none';
    }
    danhSachSliderItem[viTri].style.display = 'block';



}