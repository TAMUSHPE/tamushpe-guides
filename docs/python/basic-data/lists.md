---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lists
In Python, Lists allow you to work with mutiple elemnts at once. A list is a collection of objects and allows you to store multiple items in a single variable.

**Basic Example:**

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Creates a list of names and prints it
names = ["Josh","Eddie","Jonathan, Adolio"]
print("names = ", names)
```

</TabItem>

<TabItem value="Output" label="Output">

```
names = ['Josh','Eddie','Jonathan','Adolio']
```

</TabItem>
</Tabs>


## Append

Here we'll explore and learn about the Python list `append` method and provide some examples to further your understanding.
The `append` method allows you to add items to the end of the list.

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Creates a list of groceries
groceries = ['apples','bacon','spinach']

# adds grapes to the end of the list
groceries.append('grapes')

# Prints the grocery list
print("groceries = ", groceries)
```

</TabItem>

<TabItem value="Output" label="Output">

```
groceries = ['apples','bacon','spinach','grapes']
```

</TabItem>
</Tabs>


## Indexing

Indexing in Python is a way to refer the individual items within an list by it's postion. Positions in lists start with index `0`!! You can use square brackets `[]` to index an element in a specific position. The example below shows how to index different elements in a list.

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Creates a list of animals
animals = ['snake','fish','bear','eagle']

# Prints items at different positions
print("First Item: ", animals[0])
print("Second Item: ", animals[1])
print("Third Item: ", animals[2])
print("Fourth Item: ", animals[3])
```

</TabItem>

<TabItem value="Output" label="Output">

```
snake
fish
bear
eagle
```

</TabItem>
</Tabs>

You can also use the `index` function to find the position of a specific item in a list.

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Creates a list of animals
animals = ['snake','fish','bear','eagle']

# Prints position of 'bear'
print("Position of bear:", animals.index('bear'))
```

</TabItem>

<TabItem value="Output" label="Output">

```
Position of bear: 2
```

</TabItem>
</Tabs>
