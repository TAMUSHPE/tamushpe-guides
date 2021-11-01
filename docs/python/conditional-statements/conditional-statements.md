---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Conditional Statments

![Conditional Statements](/img/if-statement.jpg)

## If statement

There are many cases in programming when we might want to run a block of code if a condition is true and a different one if the condition is false. By using the `if` keyword in Python we can provide a logical condition. If the condition evaluates to true, the corresponding code block is run; however, if the condition is false the code block is ignored.

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Basic if Statement
if 5 > 1:
    print("5 is greater than 1")

if 1 > 5:
    print("1 is greater than 5")
```

</TabItem>

<TabItem value="Output" label="Output">

```
5 is greater than 1
```

</TabItem>
</Tabs>

You can examine that only the first print statement is run since the second if statement was evaluated to false.

## Else Clause

When using the `else` keyword, this code block is evaluated when the if condition is false

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Basic if-else Statement
if 1 > 5:
    print("1 is greater than 5")
else:
    print("5 is greater than 1")

```

</TabItem>

<TabItem value="Output" label="Output">

```
5 is greater than 1
```

</TabItem>
</Tabs>

## Elif Clause

You can use `elif` statements to provide an additional condition aside from the `if` statement. You can use as many `elif` statemetns as you wish.

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Basic if-elif-else Statement
if 4 > 4::
    print("4 is greater than 4")
elif 4 == 4:
    print("4 is equal to 4")
else:
    print("4 is greater than 4")
```

</TabItem>

<TabItem value="Output" label="Output">

```
4 is equal to 4
```

</TabItem>
</Tabs>