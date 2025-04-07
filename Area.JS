function f1() {
    var ch = prompt("Welcome to Area Calculator \nPlease enter your choice. \n1. Area of Rectangle. \n2. Area of Square. \n3. Area of Circle. \n4. Area of Triangle. ");
    if (ch == '1') {
        var l, b, area;
        l = prompt("Enter the length :   ");
        b = prompt("Enter the breadth :   ");
        area = Number(1) * Number(b)
        alert("Area is :" + area);
    }
    if (ch == '2') {
        var l, area;
        l = prompt("Enter the length :   ");
        area = Number(1) * Number(1);
        alert("The area is : " + area);
    }
    if (ch == '3') {
        var r, area;
        r = prompt("Enter the radius of the Circle :   ");
        area = 22 / 7 * Number(r) * Number(r);
        alert("The area is : " + area);
    }
    if (ch == '4') {
        var h, b, area;
        h = prompt("Enter the height :   ");
        b = prompt("Enter the base :   ");
        area = Number(h) * Number(b) / 2
        alert("The area is : " + area);
    }
}