---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Syntax

> **Syntax** - The arrangement of words and phrases to create well-formed sentences in a language.

For those who want the more computer science-y definition -  the syntax of a computer language is the set of rules that defines the combinations of symbols that are considered to be correctly structured statements or expressions in that language.

Essentially syntax is the rules that govern a programming language or any language for that matter.  The sentences in a spoken language is like lines of code and we want to make sure that it follows the given rules so we can run our code!

## First Program!

Once you've got your Python environment set up in the [previous section](../getting-started/install), we can start executing some code!

1. First, open up PyCharm or your favorite IDE, and create a new file called `hello.py`

2. In your new Python file, type this line of code:
	```python title="hello.py"
	print("Hello, World!")
	```

3. Next, run your code by clicking "Run". You should be greeted with this output:
	```test
	Hello, World!
	```

## Indentation

In other popular programming languages such as Java and C++, a block of code is defined by `{ }`; however, Python uses indentations. 

**Example:**

<Tabs>
<TabItem value="C++" label="C++" default>

```cpp
if (16 > 2){
	cout << "16 is greater than 2";
}
```

</TabItem>
<TabItem value="Python" label="Python">

```python
if 16 > 2:
	print("16 is greater than 2")
```

</TabItem>
</Tabs>

How you indent is up to you but at minimum there has to be one space. I personally just use the `tab` key.