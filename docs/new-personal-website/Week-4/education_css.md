---
sidebar_position: 3
---

# 🖌️ Education CSS

Now, we will style the education tab that we created. To begin, we will customize our margins to make it better fit the page:

```css
#education {
    margin: 1em 0;
}
```

Here, we add a small margin to the sides of the section container and none to the top and bottom. Next, we will style the visible container:

```css
.education-container {
    background: var(--light_maroon);
    color: white;
    height: 70vmin;
    width: auto;
    padding: 1em;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
}
```

Here we are not doing anything new on the container styling other than declaring our width as auto. This will make the container fill up the width of the parent container. Next, we will style the content div and the image of the school:

```css
.edu-content {
    display: flex;
    justify-content: center;
    margin-top: 2em;
}

 .edu-content img {
    width: 20em;
    height: 20em;
    border-radius: 50%;
    border: 5px solid white;
}
```

Here, we set display to flex to be able to have our objects line up horizontally. This will be crucial to getting the text on the right of the image. We also set justify-content to center to have the objects center themselves horizontally. Another thing we added was the border-radius: 50%. This turned the image into a circle rather than giving it curved edges. Next, we will style the right column and all the text inside of it.

```css
.right-column {
    margin-left: 2.5em;
    margin-top: 1em;
} 

.right-column h2 {
    text-decoration: underline;
    letter-spacing: .05em;
    margin-bottom: 1em;
}

.right-column p {
    width: 30em;
    height: 11em;
    margin-top: .5em;
    margin-left: 1em;
    letter-spacing: .01em;
}
```

Here, we set the margins for the right column to help center the text, we add an underline to the h2 headings and add letter spacing to make it look clean, and do a similar thing to the p paragraph without the underline.

Now, we are done with the education tab. To see it, run your live server. It is very similar in formatting to the header tab but it is a bit more minimalistic. If you would like to add a background image to the tab, you can use the #header::after section of the header as a reference to create the same effect.