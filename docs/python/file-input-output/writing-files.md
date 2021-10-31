---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ✍️ Writing to Files

Knowing how to write to files with Python can be a very useful skill to have in your engineering career. This section covers the basics of writing to files.

## Writing basics
We can write and print information to a new file using the `write` function as shown below. In this example, we're overwriting the old content of testFile.txt with a new message. The Python code prints the old content of the file, writes a new message, and then prints the new content of the file. 

**Old Content of** `testFile.txt`
```
Howdy!
This is a test file!
You're doing great! :)
```

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Opening a file
myFile = open("testFile.txt", "r+")  # allows reading and writing to a file

# Writing to a file
myFile.write("Tech Affairs is awesome!!")

# Reading our new text
print('\nNew content:\n', myFile.read())
```

</TabItem>
<TabItem value="Output" label="Output">

```
New content:
Tech Affairs is awesome!!
```

</TabItem>
</Tabs>

:::note

If a file with the given filename doesn't exist, a new file with that name will be created.

:::

## Append to a file

We can see that the `w` permission causes Python to overwrite old content from a file, however, if we want to keep the old information and add on to it, we can use the `a` permission instead of the `w` as shown below.

**Old Content of** `testFile.txt`
```
Howdy!
This is a test file!
You're doing great! :)
```

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Opening a file
myFile = open("testFile.txt", "a+")  # allows appending and reading a file

# Writing to the end of a file
myFile.write("This is new content!")

# Reading our new text
print('New content:\n', myFile.read())
```

</TabItem>
<TabItem value="Output" label="Output">

```
New content:
Howdy!
This is a test file!
You're doing great! :)
This is new content!
```

</TabItem>
</Tabs>
