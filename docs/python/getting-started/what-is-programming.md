---
sidebar_position: 2
---

# What is Programming?

This section will provide a high-level understanding of what programming is and the issues it solves. This information probably won't be tested in class but is essential for learning how to write code in Python. As you read this section, you should worry more about the ideas discussed and less about the vocabulary and code samples.

## Machine Language

export const Highlight = ({children, color}) => (
  <span
    style={{
      color: color,
    }}>
    {children}
  </span>
);

In basic terms, computers are just machines that perform a set of instructions very precisely. The internal circuits of these machines are wired to detect specific signals in the form of high and low voltages which can be interpreted as 1's and 0's, also known as <Highlight color="var(--ifm-color-primary)">Machine Language</Highlight>. Machine Language is the only way to communicate with computers; however, there are a few main issues with this method.

**Main Issues:**
1. Using 1's and 0's to code is an unnatural and difficult way for humans to communicate.
2. Writing programs in machine language takes a very long time. Below is an example of how "TAMU SHPE" is translated to machine code.

 ```
 01010100 01000001 01001101 01010101 00100000 01010011 01001000 01010000 01000101
 ``` 

 You can see it takes 72 numbers to represent a 9 character message(including the space). This is very inefficient.


## Assembly Language

<Highlight color="var(--ifm-color-primary)">Assembly Language</Highlight> is a solution to the issues explained above. Programmers can write code in a way that's closer to human language, and a program called an "assembler" converts this code into 1's and 0's for the computer to understand. This allows programmers to create software quicker and easier. 


## High-Level Language

As technology becomes more advanced every year, programs become more and more complicated to write. Assembly language is much easier to write than machine code; however, it's insufficient for the complex software needed today and in the future. <Highlight color="var(--ifm-color-primary)">High-Level Language</Highlight> languages allow people to write code in a way that is even more similar to human language than assembly. The example below demonstrates how to add three numbers in machine language, assembly language, and high-level language. Luckily for you, Python is a high-level language that makes your life much easier! 

<!-- Example:
1. Machine Language

 ```
 0001 0001 0010 0011
 ``` 
2. Assembly Language

 ```
 ADD R1, R2, R3
 ``` 
3. High-level Language

 ```
 R1 + R2 + R3
 ```
When comparing the three examples, you can see that the high-level language example makes the most intuitive sense. This allows programmers to easily create complex software in a timely manner. -->

## Summary

Computer Programming is just a way to communicate human ideas into a language that machines can understand (Machine Language). The closer a programming language is to human language, the easier it is for people to write code. High-level programming languages are currently the best way to write complex programs. In the next section, we'll focus on the important role programming plays in today's society.