## Etch-a-Sketch
This is a simple application that allows you to create a grid field and change the color of the grid squares by moving the mouse over them. You can also adjust the size of the grid field and reset the entire grid.

#### How to use

Open the index.html file.

The grid field will be displayed, and you can move the mouse over the grid squares to change their color.

Use the "Reset" button to clear all grid squares and reset their color.

Use the "Change Size" button to enter a new size for the grid field. Enter a number from 1 to 100 and confirm the input. The grid field will be updated.

### JS code explaination

zeichenfeld, loeschenButton, and groesseButton store references to specific HTML elements.

farben is an array containing color options for the grid squares.

rasterFeld(groesse) function creates the grid field based on the input size.

Each grid square has the class feld and an event listener for the mouseover event, which changes its class to include a random selected color from the farben array.

Event Listeners:

The loeschenButton is a function when clicked, which resets the colors of all grid squares.
The groesseButton iss a function when clicked, which allows the user to enter a new grid size. It checks if it's a valid input.

zahlEingabe(string) function checks if a given string contains only numbers as characters.
