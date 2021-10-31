---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# User Output

This section covers the basics of how to display output for a user to see, provides coding examples, and reveals some useful tips to help you out when programming.

## Print Function

You should already be very familiar with the `print` function in Python. There are a few new details we can discuss to control output better. By default the `print` statment ends with a newline ("\n"), however you can control this by providing an `end` argument as shown below.

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Prints messages with differnt end arguments
print("First Statment", end="--")
print("Second Statment")
print("Third Statment", end="**")
```

</TabItem>
<TabItem value="Output" label="Output">

```
First Statment--Second Statment
Third Statment**
```

</TabItem>
</Tabs>

## Output Formatting

We can make out output very nice by utilizing the `format` function for Strings. Once key feature is to use `{}` as a place holder in text.

<Tabs>
<TabItem value="Code" label="Code" default>

```python
name = "Jonathan"
age = 21
print("My name is {} and I'm {} years old.".format(name,age))
```

</TabItem>
<TabItem value="Output" label="Output">

```
My name is Jonathan and I'm 21 years old.
```

</TabItem>
</Tabs>

In Python, floats can sometimes be VERY long, so another common use case is to control the number of decimals when printing a number. The example below shows how to display only 3 decimal places.

<Tabs>
<TabItem value="Code" label="Code" default>

```python
longNumber = 8/7
print("The number {.3f} has 3 decimal places.".format(longNumber))
```

</TabItem>
<TabItem value="Output" label="Output">

```
The number 1.143 has 3 decimal places.
```

</TabItem>
</Tabs>


