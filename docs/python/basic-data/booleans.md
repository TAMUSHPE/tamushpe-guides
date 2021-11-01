---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Booleans

Why is the purpose of booleans? In programming you often need to know if an expression is True or False. A boolean is a data type can can only have one of two values `True` and `False`. Creating booleans is pretty straight forward as demonstrated below.


<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Creates 2 boolean variables
bool1 = True
bool2 = False

# Print the boolean variables
print(bool1)
print(bool2)
```

</TabItem>

<TabItem value="Output" label="Output">

```
True
False
```

</TabItem>
</Tabs>

## Comparisons

When using comparison operators such as `==`, `<=`, and `>`, a boolean value will be returned based on the evaluation of the statement.

<Tabs>
<TabItem value="Code" label="Code" default>

```python
print(20 > 3)
print(20 == 3)
print(20 < 3)
```

</TabItem>

<TabItem value="Output" label="Output">

```
True
False
False
```

</TabItem>
</Tabs>

## If statements & booleans

If statment conditions evaluate if a boolean value or expression is True of False. If a True value is returned, the if block is evaluated; however, if the value is False and an else block exists, then the else block is evaluated.

**Example:**

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Creates 2 numberic variables 
a = 100
b = 17

# Conditional Statement
if b > a:
    print("b is greater than a")
else:
    print("b is not gretaer than a")
```

</TabItem>

<TabItem value="Output" label="Output">

```
b is not gretaer than a
```

</TabItem>
</Tabs>
