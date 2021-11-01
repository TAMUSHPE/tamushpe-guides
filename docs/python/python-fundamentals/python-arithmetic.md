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

## New Operators

### Modulo (%)

Modulo is similar to division; however, it ONLY returns the remainder. For example, if I divide 11 by 4 I get 2 with a remainder of 3, so in this case, 3 would be returned. 

```python
# Modulo example
print(11 % 4) # 3 since the remainder is 3
print(7 % 2)  # 1 since the remainder is 1
print(6 % 3)  # 0 since there is no remainder
```

One of the most common uses for modulo is determining if a number is even or odd. An even number is a number that can be exactly divided by 2. To do this, you can simply modulo any number by 2. If you get 0, it is an even number since there is no remainder. If you get 1 it is an odd number since it didn't divide evenly into 2. 

### Integer Division (//)
Integer division also performs division; however, it rounds the results down to the nearest whole number (ignores the remainder. For example, 11 divided by 4 is 2 with a remainder of 3, so in this case the 3 is ignored and our answer is just 2.

```python
print(11 // 4) # 2 since 4 goes into 11 twice
print(7 // 2)  # 3 since 2 goes into 7 three times
print(6 // 3)  # 2 since 3 goes into 6 twice
```

## Precedence Rules

Python follows PEMDAS( Parentheses, Exponents, Multiplication, Division, Subtraction)! Multiplication and division have the same precedence, and the same goes for addition and subtraction. When a division operator appears before multiplication, division goes first. Modulo and Integer division share the same precednece as Multiplication and Division.

```
# Order of operations - PEMDAS
1. Parentheses ()
2. Exponent **
3. Multiplication *
4. Division / // %
5. Addition +
6. Subtraction - 
```
