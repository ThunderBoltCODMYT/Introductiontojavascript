function f1(s1) {

    document.getElementById("i1").innerHTML = "Original String : " + s1;
    var s2 = s1.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    document.getElementById("i2").innerHTML = "String after removing special characters : " + s2;
    var s3 = s2.split("").reverse().join("");
    document.getElementById("i3").innerHTML = "Reversed String : " + s3;
    if (s2 == s3) {
        document.getElementById("i4").innerHTML = "The Original String" + s1 + " is a Palindrome<br>";
    } else {
        document.getElementById("i4").innerHTML = "The Original String" + s1 + " is not a Palindrome<br>";
    }
}