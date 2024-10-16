# JavaScript Calculator

### Description
Creating a JavaScript Calculator for a freeCodeCamp Project. The purpose of the project is to create a functional calculator using the React.js framework.

### The aim:
* The calculator should be functional
* The calculator should be built using React.js
* The calculator should perform basic mathematical calculations.
* There should also be no errors, for example, 5 + 5 should equal 10, and not 55.

### The calculator should look similar to this:

[![Capture](https://github.com/user-attachments/assets/cce87d62-0e21-41ef-ab0d-25a68c0657f9)](https://javascript-calculator.freecodecamp.rocks/)

> I used React.js as my JavaScript framework to create this project, along with HTML and CSS.

### User stories/tests to pass:

- [x] #1: My calculator should contain a clickable element containing an = (equal sign) with a corresponding id="equals".

- [x] #2: My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine".

- [x] #3: My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id="add", id="subtract", id="multiply", id="divide".

- [x] #4: My calculator should contain a clickable element containing a . (decimal point) symbol with a corresponding id="decimal".

- [x] #5: My calculator should contain a clickable element with an id="clear".

- [x] #6: My calculator should contain an element to display values with a corresponding id="display".

- [x] #7: At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.

- [x] #8: As I input numbers, I should be able to see my input in the element with the id of display.

- [x] #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.

- [x] #10: When inputting numbers, my calculator should not allow a number to begin with multiple zeros.

- [x] #11: When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.

- [x] #12: I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.

- [x] #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 * (-5)).

- [x] #14: Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.

- [x] #15: My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).

#### *Note On Calculator Logic*:
It should be noted that there are two main schools of thought on calculator input logic: immediate execution logic and formula logic. Our example utilizes formula logic and observes order of operation precedence, immediate execution does not. Either is acceptable, but please note that depending on which you choose, your calculator may yield different results than ours for certain equations (see below example). As long as your math can be verified by another production calculator, please do not consider this a bug.

#### EXAMPLE:

```
3 + 5 x 6 - 2 / 4 =
```

Immediate Execution Logic: 11.5
Formula/Expression Logic: 32.5

<br />

## CodePen Project Link
You can view my project on CodePen using this link:
[*JavaScript Calculator* by Kutz](https://codepen.io/kutzz/pen/VwgYOJx)
