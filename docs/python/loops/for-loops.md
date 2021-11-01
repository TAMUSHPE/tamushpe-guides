---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A `for` loop is used to iterate over a given sequence like a list, string, or repeat a specific block of code a known number of times.  

### Example - Iterating over a list

<Tabs>
<TabItem value="Code" label="Code" default>

```python
students = ['mary', 'jerry', 'larry']

# prints names in list
for student in students:
    print(student)    
```

</TabItem>
<TabItem value="Output" label="Output">

```
mary
jerry
larry
```
We can quickly print the items in our list instead of having 3 separate print statements!

</TabItem>
</Tabs>

## range()

Remember how it was mentioned that `for` loops can be used to repeat a block of code a certain number of times?  In python there is a neat function called `range()` that allows us to accomplish this!  For now `range(x)` will take in a positive whole number `x` and the function will return a sequence of numbers starting from 0 incrementing by 1 until we reach `x - 1`

### Example - using range()

<Tabs>
<TabItem value="Code" label="Code" default>

```python
for x in range(3):
    print(x)    
```

</TabItem>
<TabItem value="Output" label="Output">

```
0
1
2
```

</TabItem>
</Tabs>