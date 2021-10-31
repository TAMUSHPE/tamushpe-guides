---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🤓 Reading from Files

In this section, we'll be demonstrating different ways to read information from files.

## Basic Reading

In your project directory create a text file with the name "testFile.txt" and include the following content.

```text title="testFile.txt"
Howdy!
This is a test file!
You're doing great! :)
```

We can read and print this information using the `read` function as shown below. The `read` function  by default will return all the contents of a file.


<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Opening a file
myFile = open("testFile.txt", "r")  # allows reading from a file

# Reading from a file
print(myFile.read())
```

</TabItem>
<TabItem value="Output" label="Output">

```
Howdy!
This is a test file!
You're doing great! :)
```

</TabItem>
</Tabs>

:::caution

If a file with the given filename doesn't exist, an error will be thrown since you can't read from a file that doesn't exist.

:::

You can also read a specific amount of characters by specifying a number in the `read` function as shown below: 

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Opening a file
myFile = open("testFile.txt", "r")  # allows reading from a file

# Reading 11 characters from a file
print(myFile.read(11))
```

</TabItem>
<TabItem value="Output" label="Output">

```
Howdy!
This
```

</TabItem>
</Tabs>

## Reading line by line

Using the same test file, we can manually read the file line by line using the `readline` function.

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Opening a file
myFile = open("testFile.txt", "r")  # allows reading from a file

# Reads the first line
print("Line 1:\n", myFile.readline())

# Reads the second line
print("Line 2:\n", myFile.readline())

# Reads the third line
print("Line 13:\n", myFile.readline())
```

</TabItem>
<TabItem value="Output" label="Output">

```
Line 1:
Howdy!
Line 2:
This is a test file!
Line 3:
You're doing great! :)
```

</TabItem>
</Tabs>

There is a much better way of doing this that is very handy for reading large files. We can use a special version of a `for` loop that reads a file line by line until it reaches the end.

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Opening a file
myFile = open("testFile.txt", "r")  # allows reading from a file

# Reading line by line
for line in myFile:
    print(line)
```

</TabItem>
<TabItem value="Output" label="Output">

```
Howdy!

This is a test file!

You're doing great! :)

```
:::note

There is additional empty lines between each line due to the default "\n" produced my the print statment. You can removed this by using this print statment: `print(line, end="")`

:::

</TabItem>
</Tabs>