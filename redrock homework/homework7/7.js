const content = `高等数学作为一门具有严密逻辑体系与高度抽象性的学科，其学习过程需要遵守概念奠基-逻辑推演 - 例题内化 - 习题巩固 - 体系构建的渐进式路径，
切不可急于求成、流于形式。学习者首先应立足教材，对极限、积分、导数、级数等核心概念进行追本溯源式的研读，不仅要熟记概念的文字表述和
符号定义，更要深刻理解其产生的数学背景、几何直观和物理意义，明晰概念间的内在联系与逻辑递进关系，比如极限是导数与积分的理论逻辑，导数与
定积分则是微分学与积分学的核心表征，二者通过微积分基本定理实现统一。`;
const printf = document.getElementById('learnMath');
var a = 0;
function print() {
    if (a < content.length) {
        printf.textContent += content.charAt(a);
        a++;
        setTimeout(print, 70);
    }
}
print();
