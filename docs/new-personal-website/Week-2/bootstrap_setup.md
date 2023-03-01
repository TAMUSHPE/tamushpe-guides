---
sidebar_position: 1
---

# 🥾 Setting Up Boostrap

Bootstrap is a tool that makes creating an interactive interface a lot more simple, so we are going to use it to make a navbar and many other times later on. To include it in your website, we must first import all the code from the website. To do this, go to the [Bootstrap Website](https://getbootstrap.com/docs/5.2/getting-started/download/) and navigate to the Docs link in the navbar, and after that find Download under the Getting Started tab on the left side. If you clicked the link on this document, you __DO NOT__ need to go to another website as it will direct you to the Download website. Once here, find the following area in the page:

![Bootstrap Website](/img/new-pw/bootstrap-area.png)

Once here, there will be four lines of code. We will be using the first, third, and fourth lines. We will be copy/pasting them into these areas of your code. Do not copy the lines of code from this document as they may have changed and may no longer work.

The first line will go inside the head tag of your html file. It will look like this:

``` html
<head>
        <meta charset="UTF-8">
        <title>My Website</title>

        <!-- The line goes here -->

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

        <!-- The line ends here -->

        <link rel="stylesheet" href="main.css">
    </head>
```

The third and fourth lines will go at the end of your body tag. I added a comment that says do not code past this point as it will cause problems if you do. Your code should look like this after pasting the line:

``` html
<body>

        <!-- All your website code -->

        <!-- DO NOT CODE AFTER HERE -->

        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>

    </body>
```

Now Bootstrap is ready and you are able to use it in your code!