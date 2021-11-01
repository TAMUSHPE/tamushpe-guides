---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Strings
Strings are one of the most used and popular data types in Python. Strings are a collection of characters that allow us to communicatr information to the user of a program.

## Creating Strings
You can thin of strings as basic English text such as names, words, and sentances. Strings are represented by wrapping text in a single quotes `'` or  double quotes `"` such as `"Hello"`. 

Here are some examples:

<Tabs>
<TabItem value="Code" label="Code" default>

```python
myStringSingle = 'This is a string with single quotes' # String with single quotes
myStringDouble = "This is a string with double quotes" # String with double quotes

print(myStringSingle)
print(myStringDouble)
```

</TabItem>

<TabItem value="Output" label="Output">

```
This is a string with single quotes
This is a string with double quotes
```

</TabItem>
</Tabs>


## Concatenation

String Concatenation is the process of "adding" strings together. You can achieve this by using the `+` between two Strings. Below is an example to further solidify your understanding. 


<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Creates 2 strings and concatenates them
x = "Erick is"
y = "a Mechanical Engineer"
z = x + y

# Prints the new sentence
print(z)
```

</TabItem>

<TabItem value="Output" label="Output">

```
Erick is a Mechanical Engineer
```

</TabItem>
</Tabs>

## String Multiplication

In Python you can multiply strings by a number using `*`. This operation returns a new string that dublicates the string by the number it's multiplied by.
**Example:**

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Creates a string variable
x = "Example"

# Prints the string multiplied by 3
print(x * 3)
```

</TabItem>

<TabItem value="Output" label="Output">

```
ExampleExampleExample
```

</TabItem>
</Tabs>

## Multiline Strings

They may be a case where you have a really long string such as a paragraph and want it to span multiple lines in your IDE. You can wrap your text in `"""` or `'''` to creat a multiline string.

<Tabs>
<TabItem value="Code" label="Code" default>

```python
# Creates a multiline string variable
longString = """TAMU SHPE Mission Statement: Enhance opportunities 
for personal and professional growth through social and academic 
responsibilities while holding true to the Aggie spirit.""" 

# Prints the multiline string
print(longString)
```

</TabItem>

<TabItem value="Output" label="Output">

```
TAMU SHPE Mission Statement: Enhance opportunities for personal and professional growth through social and academic responsibilities while holding true to the Aggie spirit.
```

</TabItem>
</Tabs>