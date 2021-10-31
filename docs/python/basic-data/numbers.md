---
sidebar_position: 4
---

# Numbers
-There are three numeric types in python: int, float, and complex. And down below we will show you what differentiates them.

```
x = 1 # int
y = 2.6 # float
z = 1d # complex

```

-you can also verigy thr type of any object in python, to do this you use the type() function.
```
print(type(x))
print(type(y))
print(type(z))

#Output: <class 'int'>
         <class 'float'>
         <class 'complex'>   
```

# Floats
-The float() method return a floating point number from a number or a string
```
int_number = 22

#convert int to float
float_number = float(int_number)
print(float_number)

#Output: 22.0
```

# Ints
-The int() method returns a integer object from any number or string.
-before we show you an example here are a few things to keep in mind

# Int() parameters
x- Number or string to be converted to integer object. The default argument is zero

base - Base of the number in x. Can be 0 (code literal) or 2-36.

# return value from int()
-an integer object from the given number or string treats default base as 10
-No parameters) returns 0
-(If base given) treats the string in the given base (0, 2, 8, 10, 16)

```
# integer
print("int(123) is:", int(123))

# float
print("int(123.23) is:", int(123.23))

# string
print("int('123') is:", int('123'))

#output: int(123) is: 123
         int(123.23) is: 123
         int('123') is: 123
```

