// Sonuç 31 çıktığında ekrana "sj" yazdıran hesap makinesi
let s1 = prompt("1. sayıyı giriniz");
let islem = prompt("İşlemi giriniz");
let s2 = prompt("2. sayıyı giriniz");
let sonuc;

if (islem == "+") {
    sonuc = parseInt(s1) + parseInt(s2);
    if (sonuc == 31){
        alert("sj");
    }
    else {
        alert(sonuc);
    }
}
else if (islem == "-") {
    sonuc = parseInt(s1) - parseInt(s2);
    if (sonuc == 31){
        alert("sj");
    }
    else {
        alert(sonuc);
    }
}
else if (islem == "*") {
    sonuc = parseInt(s1) * parseInt(s2);
    if (sonuc == 31){
        alert("sj");
    }
    else {
        alert(sonuc);
    }
}
else if (islem == "/") {
    sonuc = parseInt(s1) / parseInt(s2);
    if (sonuc == 31){
        alert("sj");
    }
    else {
        alert(sonuc);
    }
}
else {
    alert("Hatalı işlem");
}