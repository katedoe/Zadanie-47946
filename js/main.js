let zdanie1 = "Uwielbiam JavaScript";

let zdanie2 = "Jestem świetnym programistą";

function dluzszy(str1, str2) {
    if (str1.length > str2.length) {
        return str1;
    } else {
        return str2;
    }
}

let wynik = dluzszy(zdanie1, zdanie2);
console.log(wynik);