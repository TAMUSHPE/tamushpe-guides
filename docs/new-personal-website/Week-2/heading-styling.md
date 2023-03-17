---
sidebar_position: 4
---

# 🖊️ Heading Styling

As of right now, all the elements for the header are set up but they are not yet decorated. To do this, we will open up the __main.css__ file and set a section apart for the heading.

To do this, we will simply set up a comment to denote it. It will look like this:

``` css
/* Navbar */

.navButton {

    --bs-btn-border-color: var(--white);
    --bs-btn-color: var(--white);
    --bs-btn-hover-bg: var(--maroon);

}

/* Header */

```
---

We will write out all the styling under the comment. We will begin by styling all the text in the header. To do this, type in the following:

``` css
/* Header */

#header {

    color: var(--white);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    height: 100vmin;
    border-top: solid 1px white;
    border-bottom: solid 1px white;

}
```

This will set all the text inside the header div to white. The next three properties will position the elements to be side by side, in the horizontal center, and spaced evenly horizontally. After this, I set the flex-wrap attribute to wrap, which will make the objects that overflow get placed below the objects that would be to the left of them. This is done so that whenever we have a smaller screen, we do not tightly pack the objects and it is more visually appealing. The height attribute is used to make the div larger vertically, I set it to 50vmin, which takes the smaller length of the viewport. I used the vh units as they scale themselves when changing size of screens. This takes care of text color and positioning. The border-top and border-bottom attributes will set the border of the div to have a solid white line on its top and bottom edges.

---

Note: vmin takes the width as a reference if it is smaller than the height, or the height as a reference if it is smaller than the width. Also, vmax does the opposite. These units will be useful when displaying your website on a smaller device, as screens are not always the same size.

---

Next, we will set up the background image in the header. To do this, we will use the following css code:

``` css
#header::after {

    content: ' ';
    position: absolute;
    z-index: -1;
    inset: 0;
    isolation: isolate;
    background-image: url("images/tamu.jpg");
    background-size: cover;
    opacity: .3;
    height: 100vmin;
    transform: translateY(53.6px);

}
```

Here, we use #header::after as a way to insert content into the header div after the content in the html file has been inserted. This allows us to control what happens to the background image without messing with the other attributes in the div. We will then set the position to absolute, z-index to -1, and inset to 0 to place the image in the top-left corner of the div and make it appear under all the elements in the div. We will then use the isolation property to make sure it doesn't blend with the background when it isn't supposed to. After this, we will set the background image with the background-image, background-size, and opacity properties. This will insert the image to cover the area of the div and the opacity property will make it blend in with the background in a way where it is easier to read the text on top of it. Lastly, the height attribute will let you set how large you want the image to be. I also added a transform attribute with a translateY value to move the image above the border. I used 53.6px because this value worked for me, but feel free to play with it until it looks nice on your computer.

---

Next, we will change the size of the text within the header to make the text section look cleaner.

``` css
#text {

    text-align: center;

}


#header p {

    width: 40vh;
    font-size: 1.5vmax;

}

#header h2 {

    font-size: 3vmax;

}

#header h3 {

    font-size: 2vmax;

}
```

For the text div, we set the text-align to center, which will center all the text within its respective container. Next, we edit the p, h2, and h3 font sizes within the header div. This is to make it fit nicely into the header. Lastly, we set the width of the p attribute to 40vh. This will make it so that when we switch to a smaller screen, the text aligns itself below the headshot.

---

To finish, we are going to style the headshot. To do this, we will set the height and width to the same value and we will change the shape to make it look like a circle.

``` css
#headshot {

    height: 30vmin;
    width: 30vmin;
    border-radius: 100%;
    border: solid white 2px;

}
```

We set the height and width to the same because it will create a circle when using the border radius property. I also added a white border that is 2 pixels thick for a nice aesthetic. If we have different lengths, it will show up as an oval.

---

Once we are done with this, the header is now complete and styled. Congratulations, you are now finished with week 2 of making your own website!