   var count=0;
        for (var i = 1; i < 100; i++) {
            if(i%3==0||i%7==0){
                count++;
            }
        }
        document.write("Số lượng các số chia hết cho 3 hoặc 7 trong khoảng 1 đến 100 là: "+count);