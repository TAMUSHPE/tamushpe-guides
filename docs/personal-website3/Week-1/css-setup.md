---
sidebar_position: 3
---

# 🐒 CSS Setup

Now it is time to setup the styling sheet. This of this css file like the aesthetics for your website, as css literally stands for Cascading Styling Sheets. The index.html file tells the computer what you want to place on the screen and the **main.css** file is how you actually want it to look. It is good practice to keep these two separate and not put any css in your html. 

Make the **main.css** file by going to your folder on the left hand side, right clicking on the name, and pressing "New file...". 

You can copy and paste the following template to get your css file started, and we will be adding more to it as we go.

```css
/* Creates global color variables (accessed via: var(--text-color) etc.) */

:root{
    --text-color: #ffffff;
}

body, html {
    /* Define these as you like */

    /* background-color: ; */
    /* font-family: ; */

    height: 100vh;
    width: 100%;
    
    /* Adjust depending on how you want to implement your background */

    /* background-position: center; */
    /* background-repeat: repeat; */
    /* background-size: cover; */

    /* Use smooth scrolling so that when using "bookmarks" it doesn't instantly teleport you */
    scroll-behavior: smooth;
}

/* Example on how you would use the global "--text-color" variable */

/* h1 {
    color: var(--text-color);
} */
```

Now that you have both the html and css files set up, let's link the two so that the css actually affects your website. To do this, go back to your **index.html** file and *"PUT THE NAME OF YOUR CSS FILE HERE"* let's type the following code: 
```html
<link rel="stylesheet" href="main.css">
```