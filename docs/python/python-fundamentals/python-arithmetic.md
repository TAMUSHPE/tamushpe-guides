---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Arithmetic

![Math](/img/math.jpeg)

This section will cover basic athrimetic in Python and introduce some new operators. 

## Basic Operators

Python supports all basic operations such as addition, subtraction, multiplication, and division. Below is an example of what each looks like: 

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Basic operations in Python
print(12 + 12) # Addition (+)
print(12 - 12) # Subtraction (-)
print(12 * 12) # Multiplication (*)
print(12 / 12) # Division (/)
```

</TabItem>

<TabItem value="Output" label="Output">

```
24
0
144
1.0
```

</TabItem>
</Tabs>

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
