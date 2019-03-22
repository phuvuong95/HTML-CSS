 // var i=1;
 // var tongChan=0
 // 	if(i % 2 ==0){
 // 		tongChan=tongChan + i;
 // 		document.write("Tổng của 10 số chẵn đầu tiên là: "+tongChan);
 // 	}
 var dem=1;
 var i = 1;
 var tong = 0;
 while (dem <= 10) {
 	if(i % 2 ==0){
 		tong = tong + i;

 		document.write(i + "\t");
 		dem++;
 	}
 	i++;
 }
 document.write("</br> Tổng của 10 số chẵn đầu tiên là: "+tong);