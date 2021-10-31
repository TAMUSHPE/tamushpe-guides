---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Varaibles and Types

Variables are used for the purpose of storing data values. I like to think of variables as a label assigned to a value. In Python you can create a variable using the assignment operator `=`. Below are two examples of creating variables called `x` and `y`.


<Tabs>
<TabItem value="Code" label="Code" default>

```python
# An example showing you how to assign a variable
x = 10
y = "python"
print (x)
print (y)
```

</TabItem>

<TabItem value="Output" label="Output">

```
10
python
```

</TabItem>
</Tabs>

## Dynamic Type
Unlike other languages, in Python a variable is not confined to the value you have assigned it, but rather fluid and can change whenever you want the value of your variable to change. In the example below we assign `x` to the number 10 (float) and then reassign it to "python" (String). We can check its type using the `type` function.

<Tabs>
<TabItem value="Code" label="Code" default>

```python
x = 10
print(type(x))

x = "python"
print(type(x))
```

</TabItem>

<TabItem value="Output" label="Output">

```
<class 'int'>
<class 'str'>
```

</TabItem>
</Tabs>
