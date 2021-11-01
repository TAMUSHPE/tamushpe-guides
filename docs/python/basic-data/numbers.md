---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Numbers
There are two main numeric types in python that you'll see very often throughout this course: int and float. The main difference between these two types is that int acts as a whole number and floats can have decimals. Below is an example of how to initilize each type (very simple).

```python
# Creates an int and float variable
x = 1   # int
y = 2.6 # float
```

## Type Verification

In Python you can verify the type of any object using the `type` function.

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Creates an int and float variable
x = 1
y = 3.13

# Prints the type of x and y
print(type(x))
print(type(y))
```

</TabItem>

<TabItem value="Output" label="Output">

```
<class 'int'>
<class 'float'>
```

</TabItem>
</Tabs>

## Floats

You can use the `float` method to explicitly cast a string or number to a float. Any int can become a float, however only strings containing numberic characters can be casted to floats. The word `Hello` cant be casted to a float, however the string `"123"` can be casted to a float.

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Creates string variable and prints its type
y = "3.13"
print(y, type(y))

# Casts y to a float and prints its type
y = float(y)
print(y, type(y))
```

</TabItem>

<TabItem value="Output" label="Output">

```
3.13 <class 'str'>
3.13 <class 'float'>
```

</TabItem>
</Tabs>

# Integers
Sinilar to a float, you can use the `int` method to explicitly cast a string or number to an integer. Any number can become an int, however only strings containing numberic characters can be casted to ints. The word `Hello` can't be casted to a int, however the string `"123"` can be casted to a int.

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Creates string variable and prints its type
y = "3.13"
print(type(y))

# Casts y to an int and prints its type
y = int(y)
print(type(y))
```

</TabItem>

<TabItem value="Output" label="Output">

```
3.13 <class 'str'>
3 <class 'int'>
```

</TabItem>
</Tabs>

:::note
Note that when casting a number to an int, any existing decimals will be dropped since an integer is a whole number.
:::