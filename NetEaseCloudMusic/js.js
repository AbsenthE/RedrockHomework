// 这里轮播图实现学习的是b站码农魔盒的JavaScript轮播图教程
window.onload = function () {
    let imglist = document.querySelectorAll('.autoPlayList>a')
    let leftBtn = document.getElementById('turnLeftButton')
    let rightBtn = document.getElementById('turnRightButton')
    let timing;
    let onDisplay = 0;
    function autoPlay() {
        timing = setInterval(() => {
            for (let i = 0; i < imglist.length; i++) {
                imglist[i].classList.remove('show');

            }
            onDisplay == imglist.length - 1 ? onDisplay = 0 : onDisplay++;

            imglist[onDisplay].classList.add('show')
        }, 2500)
    }
    autoPlay();
    leftBtn.onclick = function () {
        onDisplay = onDisplay == 0 ? imglist.length - 1 : onDisplay - 1;
        for (let i = 0; i < imglist.length; i++) {
            imglist[i].classList.remove('show');
        }
        imglist[onDisplay].classList.add('show');
    }
    rightBtn.onclick = function () {
        onDisplay = onDisplay == imglist.length - 1 ? 0 : onDisplay + 1;
        for (let i = 0; i < imglist.length; i++) {
            imglist[i].classList.remove('show');
        }
        imglist[onDisplay].classList.add('show');

    }










}