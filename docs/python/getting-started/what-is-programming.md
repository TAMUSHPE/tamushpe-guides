---
sidebar_position: 1
---

# What is Programming?

This section will provide a high-level understanding of programming is and the issues it solves. This information probably won't be tested in class but is essential for learning how to write code in Python. As you read this section, you should worry more about the ideas discussed and less about vocabulary and code samples.

## Machine Language

export const Highlight = ({children, color}) => (
  <span
    style={{
      color: color,
    }}>
    {children}
  </span>
);

In basic terms, computers are just machines that perform a set of instructions very percisely. The internal circuits of these machines are wired to detect specific signals in the form of high and low voltages which can be interpreted as 1's and 0's, also known as <Highlight color="#25c2a0">Machine Language</Highlight>. Machine Language is the only way to communicate with computers, however there are a few main issues with this method.

Main Issues:
1. Using 1's and 0's is obviously an unnatural way for humans to communicate, so it makes if very difficult to learn.
2. Writing programs in machine language takes a very long time. Below is an example of how "TAMU SHPE" is translated to machine code.

 ```
 01010100 01000001 01001101 01010101 00100000 01010011 01001000 01010000 01000101
 ``` 

 You can see it takes 72 numbers to represent a 9 character message(including the space).
3. If you were to somehow become very good at writing machine code for your computer, you'll have to relearn when you get a new one since every computer uses machine language specific to its hardware. We need something more universal that works for all computers despite what version or operating system you have (e.g. MacOS, Windows, Linux).

## Assembly Language

<Highlight color="#25c2a0">Assembly Language</Highlight> is a solution to the issues explained above. Programmers can write code in a way that is closer to human language, and a program called an "assembler" will convert this assembly code into machine code for the computer to understand. This allows programmers to create software quicker and easier.

Example:
1. The assembly code written below adds three numbers (R1, R2, and R3).

 ```
 ADD R1, R2, R3
 ``` 
2. An Assembler converts the assembly code into binary or machine code which is displayed below.

 ```
 0001 0001 0010 0011
 ``` 

By comparing both code snippets, we can see that assembly is a lot easier to understand and quicker to write.

## High Level Language

As the world continues to integrate new technology into our everyday lives, programs become more advanced and complicated to write. Assembly language is a lot easier to write than machine code; however, it's not sufficient for the complex software needed today and in the future. <Highlight color="#25c2a0">High-level Language</Highlight> languages allow people to write code in a way that is even more similar to human language than assembly language is. Since computers can't understand high-level language syntax, something called a compiler or interpreter converts this code into machine language for better understanding. The example below demonstrates how to add three numbers in machine language, assembly language, and high-level language.

Example:
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
When comparing the three examples, you can see that the high-level language example makes the most intuitive sense. This allows programmers to easily create complex software in a timely manner.

## Summary

Computer Programming is just a way to communicate human ideas into a language that machines can understand (Machine Language). The closer a programming language is to human language, the easier it is for people to write code. High-level programming languages are currently the best way to write complex programs. In the next section, we'll focus on the important role programming plays in today's society.