---
sidebar_position: 3
---

# 🎨 The CSS

In this section, we will be implementing the styling for the carousel. For this, go into your __main.css__ file to begin styling the carousel.

Once in it, we will begin by defining the dimensions and color of the main container:

```css
/* Experiences */

#experiences {

    height: 80vmin;
    justify-content: center;
    color: var(--white);
    padding: 10px;
}
```

For this section, we only set the dimensions of the main container to 80% of the minimum viewport length, made sure all the content is centered horizontally, made the text inside of it white, and added padding to create space between the content and the edges of the container. Next, we will edit the first visible container.

---

Note: the main container is where the carousel will be shown, but we cannot see the main container. If you want to see a visual of it open developer tools (Ctrl + Shift + I for Windows, Command + Option + J for Mac) and you can hover over it for it to highlight.

---

For the first visible container, we want it to contain all the items of the carousel while also having it be organized and have space between the items. This is what the styling will look like:

``` css
#expContainer {

    background-color: var(--light_maroon);
    border-radius: 25%;
    height: 65vmin;
    width: 65vmin;
    text-align: center;
    border: solid 1px white;
    margin: auto;

}
```

Here, we set border-radius to 25% to give the container curved edges, set the height and width to our desried dimensions, we set text-align to center to have all the text inside this container be centered in their respective parent containers, the border property gives it a solid, 1 px wide white border, and margin: auto centers the container with respect to its parent container.

---

Note: a parent container is the container that directly holds the content at hand. A good way to look at this is if you are looking at a container or text, it is the container that surrounds the content.

---

Next, we will begin to edit the classes we have. These are objects that have been grouped together as they will need similar styling. We will begin with the following:

```css
.exp-carousel {

    position: relative;
    height: 65vmin;
    width: 65vmin;
    margin: auto;

}
```

Here, we set position to relative to have it always be positioned within the parent container. Then margin: auto will center it horizontally and vertically.

Next, we will style the slide content:

```css
.exp-carousel__slide-content {

    height: 75%;
    width: 80%;
    margin: auto;

}

.exp-carousel__slide-content h3 {

    padding: 1vh;

}

.exp-carousel__slide-content p {

    padding: 1vh 0 0 0;
    font-size: small;
    /* Go back to this property and make the font bigger or smaller as needed */

}
```

Here, all we are doing is making the content slightly smaller than the carousel and centering it within the parent container. We also add padding to the h3 and p attributes of the slide content. The difference between the two is that in h3, the padding is added to the top, left, right, and bottom of the text; while in p, we only add it to the left of it. This was done to better the aesthetic of the carousel. We also set the font size to be smaller in the p section to make sure the description fits in our carousel, however you can adjust the size as needed for your website.

Next, we will edit the images in the slides:

```css
.exp-carousel__image {

    width: 100%;
    height: 100%;
    border-radius: 25%;
    object-fit: cover;
    border: solid 2px white;

}
```

Most of it is stuff we have already covered, the only new property is the object-fit: cover property. This will make the image stretch to cover the entirety of the parent container. With this property, we do not need to worry about whether or not the image will fit the container properly as it will adjust it for us.

Next, we will style the track container, which is the container where all of the main content of the slide will be.

```css
.exp-carousel__track-container {

    border-radius: 25%;
    height: 90%;
    position: relative;
    overflow: hidden;

}
```

The only new property here is the overflow property. Since our slides will be to the left or right of the carousel when they are not the current one, we want to make sure that they are not visible when they are not the current slide. To do this, we set the overflow to be hidden. A good visualization of how our carousel will work is in the following picture:

![Carousel Slides Visualization](/img/new-pw/carousel-explanation.jpeg "Carousel Slides Visualization")

We only want whatever is in the black box to show, which in these cases is the green slide. But when pressing the button, the slides will shift over and a red one will be inside the black box. Being able to decide which one shows is automated by the overflow: hidden property, as it declares everything outisde the box as overflow and makes it invisible.

Next, we will style the track itself, which will be done with the following.

```css
.exp-carousel__track {

    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
    height: 100%;
    transition: 250ms ease-in-out;

}

.exp-carousel__slide {

    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;

}
```

Here, the only two new things are the transition property and the absolute positioning. The transition property will give it an ease in and ease out transition whenever the slides change that takes 250 milliseconds. Feel free to play around with this feature after finishing the JavaScript portion of the guide and customize how your slides move. The absolute positioning will place the slides in a position that we can modify using top, bottom, left, and right attributes. This position will not change whatsoever unless we manually change the 4 deciding attributes.

Next, we will style the buttons in the carousel. This is the css we use:

```css
.exp-carousel__button {

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: 0;
    cursor: pointer;

}

.exp-carousel__button--left {

    left: -50px;


}

.exp-carousel__button--right {

    right: -50px;

}

.exp-carousel__button img {

    width: 20px;

}
```

The new property here is the cursor: pointer property. This will make the cursor appear as a pointer when hovering over this object. It will make it more obvious that it is meant to be clicked on. Another one I feel is worth mentioning again is the transform attribute. This can create many different types of transformations, from moving the object to changing its size and shape. Here, I used it to move the object 50% of its size upward.

Finally, we will do the navbar, which is the dots at the bottom of our carousel that determine which slide we are currently on. These dots are also able to be clicked to travel to the desired slide.

```css
.exp-carousel__nav {

    display: flex;
    justify-content: center;

}

.exp-carousel__indicator {

    border: 0;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background: rgba(255, 255, 255, 0.3);
    margin: 0 12px;

}

.exp-carousel__indicator.exp-current-slide {

    background: rgba(255, 255, 255, 0.9);

}

.is-hidden {

    display: none;

}
```

All the properties have been covered before except for the opacity setting in the background. In the rgba function we have 4 values, the first decides how red the color will be, the second decides how green it will be, the third decided how blue, and the final one decides the opacity of the object. The opacity is essentially how transparent the object is. We will set the current slide to have 0.9 opacity while the others will have 0.3, which will show which slide we are on.

Also, the .is-hidden class will apply to the slides that are not the current slide. It will make those slides invisible, but to decide which slides should have this property we need to use JavaScript so we can change the attributes of certain elements.

---

Next, we will go over the JavaScript needed to make the carousel work.