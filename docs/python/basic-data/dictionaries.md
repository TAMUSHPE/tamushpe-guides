---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Dictionaries
In Python dictionary are an unordered collection of items. Each item of a dictionary has a key/value pair. And these Dictionaries can be optimized to retrieve values when the key is known. But if the key is unkown it will output an error message.

## Creating Strings
Creating a dictionary is as simple as placing items inside curly braces `{}` separated by commas. An item has a `key` and a corresponding `value` that is expressed as a pair (key: value).

Here are some examples:

<Tabs>
<TabItem value="Code" label="Code" default>

```python
dict = {'Name': 'Erick', 'Age': 20, 'Class': 'fourteenth'}
print "dict['Name']: ", dict['Name']
print "dict['Age']: ", dict['Age']
```

</TabItem>

<TabItem value="Output" label="Output">

```
dict['Name']:  Erick
dict['Age']:  20
```

</TabItem>
</Tabs>


## Updating a Dictionary
Wanna change a value in your dictionary? Lucky for you can update a dictionary by adding a new entry or a key-value pair, modifying an existing entry, or deleting an existing entry as shown below in the example 


<Tabs>
<TabItem value="Code" label="Code" default>

```python
dict = {'Name': 'Erick', 'Age': 20, 'Class': 'fourteenth'}
dict['Age'] = 21; # update existing entry
dict['School'] = "Texas A&M"; # Add new entry

print "dict['Age']: ", dict['Age']
print "dict['School']: ", dict['School']
```

</TabItem>

<TabItem value="Output" label="Output">

```
dict['Age']:  21
dict['School']:  Texas A&M
```

</TabItem>
</Tabs>

## Delteting Dictionary Elements
You can either remove individual dictionary elements or clear the entire contents of a dictionary. You can also delete entire dictionary in a single operation. To do this you can just use the `del` statment as shown down below in the
**Example:**

This output is given because after your `del dict` you have essetntially delted the whole dictionary and it no linger exists

<Tabs>
<TabItem value="Code" label="Code" default>

```python
dict = {'Name': 'Erick', 'Age': 20, 'Class': 'Fourteenth'}
del dict['Name']; # remove entry with key 'Name'
dict.clear();     # remove all entries in dict
del dict ;        # delete entire dictionary

print "dict['Age']: ", dict['Age']
print "dict['School']: ", dict['School']
```

</TabItem>

<TabItem value="Output" label="Output">

```
dict['Age']:
Traceback (most recent call last):
   File "test.py", line 8, in <module>
      print "dict['Age']: ", dict['Age'];
TypeError: 'type' object is unsubscriptable
```
This output is given because after your `del dict` you have essetntially delted the whole dictionary and it no linger exists

</TabItem>
</Tabs>


<Tabs>
<TabItem value="Code" label="Code" default>



</TabItem>

<TabItem value="Output" label="Output">


</TabItem>
</Tabs>