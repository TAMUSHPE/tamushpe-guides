---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🗃 File Basics

One of the most common uses of Python is to read and write data to a file. Whether you're collecting sensor data in an engineering lab or , you will probably find yourself using Python to make this process easier. In this section, we'll be diving into the details of how to analyze and manipulate files using Python.

## High Level Overview

When using files in Python there is a systematic process you'll always follow to achieve your goal.
```
1. Open your file
2. Do something to the file:
    (a) Read whats in the file
    (b) Write something to the file
    (c) Or a combination of both
3. Close the file!
```

## Opening a file
Before we open a file, we need to ensure that it exists in our directory, so download this file and make sure you copy it to your project folder. Next, we can use Python to open the file using the following code: 

<Tabs groupId="operating-systems">
<TabItem value="Mac" label="Mac" default>

```py
# This opens a file called "testFile.txt"
myFile = open("testFile.txt")
```

</TabItem>
<TabItem value="Windows" label="Windows">

```py
# This opens a file called "testFile.txt"
myFile = open("::testFile.txt")
```

</TabItem>
</Tabs>

After this line of code, `myFile` is assigned to a file object that can be used to read and write to the test file.


### Permissions
The default permissions only include the ability to read a file; however, we can change this by adding a second parameter to our open function. The most common permissions are `r` for read, `w` for write, and `a` for append. The difference between `w` and `a` is that with `w` you can edit anything in the file and `a` is stricty for adding to the end of a file. You may also combine permissions by including multiple letters.
```python
# These are the different permissions
myFile = open("testFile.txt", "r")  # allows reading from a file
myFile = open("testFile.txt", "w")  # allows reading to a file
myFile = open("testFile.txt", "a")  # allows appending to a file
myFile = open("testFile.txt", "rw") # allows reading and writing
```

## Closing a file
When writing to a file, we can use the `close` method to tell Python we're done using a file object. Python can then
decide to stop tracking resources related to the file object. Below is an example of how to close a file.

```python
# Closes the file related to the myFile object
myFile.close()
```