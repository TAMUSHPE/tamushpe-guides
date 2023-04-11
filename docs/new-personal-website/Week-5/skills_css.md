---
sidebar_position: 3
---

# ⚡️ Skills CSS

To style the skills tab, we want to make sure that we can have our blocks be evenly spaced, decorated, and make them adjust to different screen sizes (in case they do not fit within the container). First, we want to style the main container:

```css
#skills {

    height: 70vmin;
    margin: 10vmin 0 auto auto;
    width: auto;
    background-color: var(--light_maroon);  
    border-top: solid 2px white;
    border-bottom: solid 2px white;
    color: white;
    text-align: center;

}
```

Everything here has been covered before, but I want to note that the margin is styled in a specific way so that we place it right above the footer. If we had added the 10vmin margin that we added to the top of the container, we would have a gap between the container and the footer, and it is something we are not looking for.

After this, we want to style the blocks container.

```css
#skills-block-container {

    display: flex;
    height: 70%;
    align-items: center;
    flex-wrap: wrap;
    
}
```

This is designed to have the items align themselves to the center of the page and have them create a new row of blocks if the blocks are too big for the container. We do this with the display: flex and flex-wrap: wrap properties. The display: flex will make items inside the container line up horizontally and pack themselves against each other, and flex-wrap: wrap will create a new row of items if said items overflow the container.

Now, we want to decorate the blocks and make sure they are spaced evenly.

```css
.skills-block {

    margin: auto;
    padding: 15px;
    border: solid 2px white;
    border-radius: 25%;
    background-color: var(--maroon);

}

.skills-block img {

    height: 20vmin;
    width: 20vmin;
    object-fit: fill;
    border-radius: 25%;

}
```

Here, we add margin: auto to create the equal spacing between the blocks, and we add everything else to decorate the blocks. We also add the object-fill: fill property to the images so that the image will fill up the area in the container, that way we do not have any awkward-fitting images in our blocks.

After this, we are finished styling our skills page, feel free to look at it with your live server. Next up, we will be implementing the footer of our website.