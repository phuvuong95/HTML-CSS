// alert("Hello world");
// var val;
// val = confirm("How are u?")  ---XÁC NHẬN---
// if (val==true){
// 	alert("Good")
// }
// else{
// 	alert("Not good")
// }
// var val;
// val = prompt("Nhập họ và tên:");
// if (val != null)
// 	// alert("Tên của bạn là " +val);
// 	// console.log(val);   ---Hiển thị kết quả vào console---
// 	document.write("<b>"+val+"</b>")
// else alert("Mời bạn nhập tên ");


// ax+b=0
// var a=prompt("Nhập a");
// var b=prompt("Nhập b");

// a = parseFloat(a);
// if(isNaN(a)){     //is not a number
// 	a=prompt("nhập a:")
// }

// b = parseFloat(b);
// if(isNaN(b)){     //is not a number
// 	b=prompt("nhập a:")
// }
// if(a==0 && b==0){
// 	alert("Phương trình vô số nghiệm");
// }
// else if (a==0 && b!=0){
// 	alert("Phương trình vô nghiệm");
// }
// else alert("Phương trình có nghiệm: "+(-b/a));
// parseInt(3) => 3           ---Số nguyên---
// parsefloat("3.1") => 3.1   ---Số thực---

// do{
// 	n = prompt("Nhập n: ");
// 	n = parseInt(n);
// }
// while (isNaN(n) || n <= 0);
// var tong = 0.0;
// for (var i = 0; i < n; i++) {
// 	tong = tong + (i+1)/(i+2);
// }
// alert(tong);

// var mang = [];
// mang.push(3);
// mang.push(4);

// console.log(mang);

// mang = new Array(10);
// mang[i]

function enterNumberic(thongBao){
	var m;
	do{
		m = prompt("Nhập n"+thongBao+":");
		m = parseInt(m);
	}
	while (isNaN(m) || m<=0);
	return m;
}
var n;

n= enterNumberic("n");

var mang = new Array(n);

for (var i = 0; i < n; i++) {
	mang[i] = enterNumberic("Phần tử thứ "+(i+1));
}
