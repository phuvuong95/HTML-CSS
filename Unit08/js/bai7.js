  var n;
        var sum = 0;
        do {
            n = prompt("Nhập n = ");
            n = parseInt(n);
        } while (n <= 0);
        for (var i = 1; i <= n; i++) {
            sum +=  i;
        }
        document.write("Tổng s = " + sum);