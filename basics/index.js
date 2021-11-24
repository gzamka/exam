// 1. 0 - ээс 100 хүртэлх тоог хэвлэ.
for (let i = 0; i <= 100; i ++) {
    console.log(i);
}


// 2. 60 - с 30 хүртэлх бүх СОНДГОЙ тоог хэвлэ.
for (let i = 60; i >= 30; i --) {
    if (i%2!=0) {
        console.log(i);
    }
}

// 3. Чагтаас бүрдсэн квадрат зурах ба баруун тийшээ налсан диагональ нь нэмэх тэмдэг байна:
// ######+
// #####+#
// ####+##
// ###+###
// ##+####
// #+#####
// +######
console.log('######+')

// 4. Регистрийн дугаар өгөхөд төрсөн он, сар, өдөр (YYYY-MM-DD) хүйсийг хэвлэдэг convertRegNum функц бич.
//      РД - гийн сүүлийн орон сондгой бол эрэгтэй, тэгш бол эмэгтэй байна.
// Жишээ нь:
//      convertRegNum('АБ90020321')
//      >> 1990-02-03 онд төрсөн эрэгтэй

function ConvertRegNum(a) {
    let x = [];
for (let i = 0; i < a.lenght; i ++) {
    x.push(a[i]);
}
}
console.log(ConvertRegNum('АБ90020321'));

// 5. Бүх .red-boxes гэсэн класстай элемэнтийг улаан болго;
const $red = document.querySelector(".red-boxes");
console.log($red)
$red.style.backgroundColor = "red";



// 6. blue-box гэсэн ID-тай элемэнтийг цэнхэр болго;
const $blue = document.querySelector('#blue-box');
$blue.style.backgroundColor = "blue";

// 7. Бүх div - ийг бор болго;
const $div = document.getElementsByTagName('div');
console.log($div);
$div.style.backgroundColor = "brown";

// 8. Шинээр box гэсэн класстай section tag үүсгээд, хар өнгөтэй болгоно.
//    Дотор нь box гэсэн класстай article tag үүсгэнэ.
//    article tag - ыг улаан өнгөтэй бөөрөнхий болгоно (JS - ээр)
//    section tag - ыг body руу append хийнэ.
//    улаан бөөрөнхий дээр дарахад бөөрөнхийг ногоон болгоно.

let $section = document.createElement('section').classList.add("box");
document.body.append($section);
$section.
// let $article = document.createElement('article').classList.add("box");
document.$section.append($article);
