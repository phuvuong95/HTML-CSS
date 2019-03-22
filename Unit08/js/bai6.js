var n;
        var sum = 0;
        var giaiThua = 1;
        do {
            n = prompt("Nhập vào số nguyên dương n:");
            n = parseInt(n);
        } while (n <= 0);
        for (var i = 1; i <= n; i++) {
            giaiThua *= i;
            sum += (i / giaiThua);
        }
        document.write("Tổng = " + sum);