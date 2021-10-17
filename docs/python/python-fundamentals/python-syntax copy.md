---
sidebar_position: 1
---

# Syntax

Syntax (noun) - The pattern of formation of sentence or phrases in a language

For those who want the more computer science-y definition -  the syntax of a computer language is the set of rules that defines the combinations of symbols that are considered to be correctly structured statements or expressions in that language.

Essentially syntax is the rules that govern a programming language or any language for that matter.  The sentences in a spoken language is like lines of code and we want to make sure that it follows the given rules so we can run our code!

## Executing Python Syntax

Once you have got your python environemt all set-up in the previous section, we can start executing some python code!

Here open up pycharm or your favorite text editor and we will make a file called hello.py

In that file, we will put this line of code 

```python
print("hello world")
```

Once we run our code in our terminal by typing

```ps1
python file.py
```

We will be greeted with

```python
hello world
```

## Python Indentation

Indentation refers to the spaces at the beginnig of a line of code.  In other programming languages, indentation is for readability and cleanliness

In python indentations are used to indicate a block of code 

An example of indentation vs an example of bad indentation

```python
if 16 > 2:
	print("16 is greater than 2")
```

```python
if 16 > 2:
print("16 is greater than 2")

# This will give you a syntax error and not run properly
```

How you indent is up to you but at minimum there has to be one space