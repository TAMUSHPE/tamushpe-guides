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
    /* TODO: Define these colors as you like */
    background: linear-gradient(to left, #243B55, #141E30); /* Chose 2 different colors to fade into */

    /* TODO: Use either beginning color or ending color (this is for overscrolling) */
    background-color: #141E30;

    /* TODO: Change the font style you use */
    font-family: 'Montserrat', sans-serif;

    height: 100vh;
    width: 100%;
    
    /* Configures your background color to repeat throughout the website */
    background-position: center;
    background-repeat: repeat;
    background-size: cover;

    /* Use smooth scrolling so that when using "bookmarks" it doesn't instantly teleport you */
    scroll-behavior: smooth;
}

/* -------------------------------- Versatile Classes -------------------------------- */

/* Formats most of our h1 tags with proper color & size */
.h1Format {
    font-size: xxx-large;
    color: var(--text-color);
}

/* Formats most of our h3 tags with proper color & size */
.h3Format {
        font-size: 1.3rem;
        font-weight: bold;
        color: var(--text-color);
}

/* Class for all the dark boxes that text goes in */
.rounded-box {
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.25);
    padding: 3.5vmin 3.5vmin 3.5vmin 3.5vmin;
    margin: 0vmin 4.2vmin 4vmin 4.2vmin;

    box-shadow: 4px 4px 12px 4px rgba(0,0,0,0.2);
    transition: 0.4s;
}

/* Creates light white shadow around box on hover */
.rounded-box:hover {
    box-shadow: 4px 8px 24px 4px rgba(255, 255, 255, 0.4);
}

/* Adds padding around element (image or text box) */
.box-padding {
    padding: 4vmin 2vmin 4vmin 2vmin;
}

/* Formats the images so that they stay within the round-box */
.box-image {
    height: auto;
    width: 100%;
    max-width: 300px;
}

/* Goes after the start of a new section to create seperation/space */
.bottom-space {
    margin-bottom: 4vmin;
}
```
That might've seemed like a lot, but don't worry about all the stuff under __"Versatile Classes"__, most of that is weird formatting for boxes and such that we'll be using!

---

Now that you have both the html and css files set up, let's link the two so that the css actually affects your website. To do this, go back to your **index.html** file and *"PUT THE NAME OF YOUR CSS FILE HERE"* let's type the following code: 
```html
<link rel="stylesheet" href="main.css">
```