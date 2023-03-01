---
sidebar_position: 5
---

# 📄 Setting up the Body

For now, we will be setting up the background of the website and we will also be putting your name on it as well. First, we will need to type the following inside the body tag:

``` html
<body>
    <h1>Your name here's Website</h1>
</body>
```

This will make the website display the text inside the h1 tags as the heading. The h1 tag will be used to display your most important header. There are also other tags that are used to place less important headers into the program, those being h2 - h6. To see how it came out, open up your live server (__ALT + L, ALT + O__) and you will now see your text look like the following:

![Original Title](/img/new-pw/title_original.PNG "Original Title")

---

Now we will style the website using CSS. CSS is the language we use to personalize your website. It is responsible for making it look cool while HTML is just to set the elements in a basic form into the screen. For our case, we are going to style the background and the heading for now.

To style the background, we will type the following into main.css:

```CSS
:root {

    --maroon: #5a0000;
    --white: #ffffff;

}

body {

    background-color: var(--maroon);
    display: flex;

}
```

In this code, we use __:root__ as a way to store all information that we may use later on into variables that are easy to read. Then we go into body, which represents the entire canvas of the website. We will set background-color to var(--maroon), which reads our variable from the root and sets the background color to maroon, and display to flex, which will set all the elements inside the body to align into a row until the row gets too long, where it will start a new row.

---

Next, we will format the heading. To do this, we will write the following into __main.css__:

```CSS
h1 {

    margin: auto;
    color: var(--white);
    scale: 2;

}
```

Here, we set margin to auto, which will center the text because of the flex display, color to the white variable from root, and scale to 2, which will make the text twice as big. Now open up your live server, and your website should look like this:

![Week-1-Final](/img/new-pw/website_week1.PNG "Final Product Week 1")

Next, we will push the new code to Github.