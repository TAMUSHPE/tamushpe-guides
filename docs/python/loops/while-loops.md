---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A `while` loop is used to iterate over a given sequence like a list, string, or repeat a specific block of code.  This is the catch though; we do not know upfront how many times we want to keep looping!  We keep on executing as long as the condition in our `while` loop is true.

![While](/img/while.jpg)

## Example

<Tabs>
<TabItem value="Code" label="Code" default>

```python
i = 0

# print i as long as i is less than 5
while i < 5:
    print(i)
    i += 1 
```

</TabItem>
<TabItem value="Output" label="Output">

```
0
1
2
3
4
```
Here we see that we stop at 4 because the value stored in `i` no longer holds true making our `while` condition to be false thus ending that loop.
</TabItem>
</Tabs>

# Infinite Loops
You might be feeling pretty confident right now with while loops... "It's easy!  I just keep going as long my looping condition is true."  Yes you are right about that but what would happen if your condition always stayed true?  This is where we run into the infinite loop

When using a `while` loop, we want to make sure we have a condition that will eventually evaluate to false so we can exit our `while` loop.  However if we do not do this, our program will be stuck in that loop until you close your program or your program consumes all available processor time before being booted out.

## Bad Example

<Tabs>
<TabItem value="Code" label="Code" default>

```python
i = 0

# print i as long as i is greater than -1
while i > -1:
    print(i)
    i += 1 
```

</TabItem>
<TabItem value="Output" label="Output">

```
0
1
2
3
4
.
.
.
```
Our program never ends because `i` is always greater than -1 so the condition is always satisfied!  When using a `while` loops, make sure your looping will be met so that our program can stop running without our intervention.
</TabItem>
</Tabs>