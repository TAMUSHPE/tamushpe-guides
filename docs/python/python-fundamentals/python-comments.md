---
sidebar_position: 2
---

# Comments

![Python Comments](/img/python-comments.jpeg)

Have you ever had that moment where you want to provide additional clarification or comments (wink wink) on something but never get the chance?  Thankfully with Python and any other programming language, you get that opportunity!

**Comments** are used to explain what your code is doing.  This helps peers who are viewing your code understand what it is you are trying to accomplish.  They are very important in group projects; you're gonna have to use them in ENGR 102, so start using comments!  Additionally, they help you understand your code in the case when you come back to it several months later and may have forgot what you've done.

Comments also can make code more readable for newcomers (They are really simple to make in Python!)

## Creating Comments

Here is one way to make comments in python by using `#` (and no it not a hash-tag)

```python
# Hello this is how you make a comment in Python

# This prints a motivational statment
print("You'll get an A in this class!")
```

## Multi Line Comments

When you try to use `#` to comment multiple lines, it becomes very tedious.

```python
# Hi this is my 
# comment block
# but there is 
# a better way
```

There is an easier way to make block comments. You can wrap your text in `"""` to make a multi-line comment.

```python
"""
Here is my super nice and 
awesome comment block.  Now
I don't have to use multiple #!
Hooray :)
"""
```