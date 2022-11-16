---
sidebar_position: 3
---

# 👨‍💻 Beginning to Code

To begin, you will need to create a repository within Github Desktop. To do this, click file on the top left and click create repository. Once you do this, type the name you will use for your repository (preferrably something like "personal_website") and click __Create Repository__. Make sure you __do not__ put spaces in your repository's name as it will complicate things later on. Once you have your repository made, click __"Open in Visual Studio Code"__ to begin working.

Once here, you will need to create three files: __index.html, main.css, and index.js__. You can create new files by either pressing __Ctrl + N (Command + N for MacOS users)__ or by clicking __File__ on the top left corner and pressing __New File__ and typing the name of your file. Once you have created these three files and you can see them in your repository, open up __index.html__.

First, we will type the following code into our index.html file:

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>

    <body>

    </body>
</html>
```

This code will set up your index.html file so you can write html in it. Now you might be wondering, what does all this do? To help you remember, you can write comments in your code explaining what it does. To write a comment in HTML, do the following:

`<!-- insert comment here -->`

When writing a comment down in your code, whatever is written down in the file will be ignored by the computer. They are designed so that you and any others who are working with you can write notes in a program and understand better what it does. Here is an example of how to comment your code using the code you just wrote in your index.html file:

``` html
<!DOCTYPE html>
<!-- lets computer know that the code is written in html -->

<html lang="en">
<!-- tells computer that this is where the code starts and also sets language to english -->

    <head>
    <!-- between the two head tags is where the code that will set the title of the website and other information that will be useful for the program -->

        <meta charset="UTF-8">  
        <!-- tells computer to use the UTF-8 character set -->
        <!-- this allows the user to use most characters, including international ones and symbols -->

    </head>
    <!-- closes head section -->

    <body>
    <!-- opens body section, which is where most of your important code will go -->

    </body>
    <!-- closes body section -->

</html>
<!-- ends html file -->
```

For this example, I used a lot of comments. You do not have to write them all down, only keep the ones that will be useful for you. You can also format your comments differently from the example, what matters is that the code makes sense to you.

For the next part, we will be setting up the head section of your website. 