function perimeterCalculator() {
    var choice = prompt(
        "Welcome to Perimeter Calculator! \nChoose an option: \n1. Rectangle \n2. Square \n3. Triangle"
    );

    switch (choice) {
        case '1': // Rectangle
            var length = parseFloat(prompt("Enter the length of the rectangle:"));
            var breadth = parseFloat(prompt("Enter the breadth of the rectangle:"));
            if (isNaN(length) || isNaN(breadth)) {
                alert("Please enter valid numbers.");
            } else {
                alert("The Perimeter of the Rectangle is: " + (2 * (length + breadth)));
            }
            break;

        case '2': // Square
            var side = parseFloat(prompt("Enter the side length of the square:"));
            if (isNaN(side)) {
                alert("Please enter a valid number.");
            } else {
                alert("The Perimeter of the Square is: " + (4 * side));
            }
            break;

        case '3': // Triangle
            var side1 = parseFloat(prompt("Enter the first side of the triangle:"));
            var side2 = parseFloat(prompt("Enter the second side of the triangle:"));
            var side3 = parseFloat(prompt("Enter the third side of the triangle:"));
            if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
                alert("Please enter valid numbers.");
            } else {
                alert("The Perimeter of the Triangle is: " + (side1 + side2 + side3));
            }
            break;

        default: // Invalid input
            alert("Invalid choice. Please select 1, 2, or 3.");
    }
}