---
sidebar_position: 3
---

# Arithmetic

-Operators include addition, subtraction, multiplication, division down below I will show you examples of what each looks like 

```
# Assume x holds 10 and y holds 30
x + y = 40 # addition (+)
x - y = -20 # subtraction (-)
x * y = 300 # Multiplication (*)
x / y = 1/3 # Division (/)

```

-Introduce modulo(%) and integer division( // ) 

-Now since you have an understanding of operators we can now introduce modulo(%) and integer division(//) I will give an example and follow with an explanation as to what is happening

-Modulo returns ONLY a remainder in this example our remainder is 4 (7 goes into 25 three times leaving us with a remainder of "4")

-Integer division  rounds the results down to nearest whole number (in our example 25 // 7 = 3.571, but since we round down we get "3" )

```
# x holds 25 and y holds 7
x % y = 4 # Modulous (%)
x // y = 3  # Integer division (//)
```
-Python follows PEMDAS( Parentheses, exponents, multiplication, division, subtraction)! multiplication and division have the same precedence, and the same goes for addition and subtraction. When a division operator appears before multiplication, division goes first.

-The order Python operators are executed in is governed by the operator precedence, and follows the same rules. Operators with higher precedence are executed before those with lower precedence, but operators have matching precedence when they are in the same group.

```
#Order of operations - PEMDAS
1. Parentheses ()
2. Exponent **
3. Multiplication *
4. Division / // %
5. Addition +
6. Subtraction - 
```
