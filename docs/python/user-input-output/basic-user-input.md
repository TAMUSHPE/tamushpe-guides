---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# User Input

This section covers the basics of how to collect user input, provides coding examples, and reveals some useful tips to help you out when programming.

## Input Function

In Python, you can collect input from the user by using the `input` function. Although it is unnecessary, you always want to provide a message including what you want to collect from the user. The example below shows me collecting a user's name and printing it.

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Stores user input in a variable called name
name = input("Enter your first name: ")

# Prints the users name
print("Your name is:", name)
```

</TabItem>
<TabItem value="Output" label="Output">

If our input is `Jonathan`, then our output would be:

```
Your name is: Jonathan
```

</TabItem>
</Tabs>

:::caution

Input collected from the user will always be a String!!

:::

## Working With Numbers

In engineering, it's pretty common to collect numbers from users; however, since the input is a string, we must cast it to an `int` or `float` (usually float) if we want to do math with it.

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Collects 2 numbers from a user and casts them to floats
num1 = float(input("Enter a number: "))
num2 = float(input("Enter a number: "))

# Prints the sum of num1 and num2
print("num1 + num2 = ", num1 + num2)
```

</TabItem>
<TabItem value="Output" label="Output">

If our inputs are `12` and `343`, then our output would be:

```
num1 + num2 = 355.0
```

</TabItem>
</Tabs>
