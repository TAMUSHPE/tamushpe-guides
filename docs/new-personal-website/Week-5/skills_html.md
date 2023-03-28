---
sidebar_position: 2
---

# 🦿 Skills HTML

To begin, we will add a container that will hold all the content. To do this, we do the following:

```html
<!-- Skills -->

<div id="skills">
</div>
```

Next, we will add the header and the container for our blocks.

```html
<div id="skills">

    <h1>Skills</h1>

    <div id="skills-block-container">        
    </div>

</div>
```

The block container will be used to make sure our skills content is in line and centered. This will make the skills easily legible and consistent. Now we need to add the skill blocks. We will use the following format for the blocks:

```html
    <div id="skills-block-container">
        <div class="skills-block">
            <img src="images/html-logo.svg" alt="">
            <h3>HTML</h3>
        </div>
    </div>
```

Where the skills-block will contain the image and name of the skill, the img tag holds the image (don't forget to change the src property to your image), and the h3 tag will hold the name of your skill. To add multiple skills, simply add more "blocks" with the same format like so:

```html
    <div id="skills-block-container">
        <!-- old block starts -->
        <div class="skills-block">
            <img src="images/html-logo.svg" alt="">
            <h3>HTML</h3>
        </div>
        <!-- old block ends, new block begins -->
        <div class="skills-block">
            <img src="images/css-logo.svg" alt="">
            <h3>CSS</h3>
        </div>
        <!-- new block ends -->
    </div>
```

Once you have all your blocks set up, we can move to styling our skills page.