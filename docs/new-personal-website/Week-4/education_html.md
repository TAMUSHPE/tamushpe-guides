---
sidebar_position: 2
---

# ✏️ Education HTML

For the HTML of the education tab, we will need a container for everything, an image, and a container that will hold all the text for the description. To begin, we will create a div that will hold the entire section.

```html
<div id="education">
</div>
```

Next, we need a container that will hold all the objects, we add another div inside the education div:

```html
<div id="education">
    <div class="education-container">
    </div>
</div>
```

After this, we will add a heading text and a div that contains all the contents of the tab:

```html
<div id="education">
    <div class="education-container">
        <h1>Education</h1>

        <div class="edu-content">
        </div>
    </div>
</div>
```

Next, we will add an image and another container for the text description. We are adding this container so we can hold all the text to position it to the right of the image. Otherwise, it will be difficult to group all the text that we will write.

```html

        <div class="edu-content">
            <img src="images/tamu-logo.png" alt="">

            <div class="right-column">
            </div>
        </div>

```

Remember that the src section in the image will be different for you. Make sure you input the source to the image that you would like to put.

After this, we will place all our text inside of the right column div:

```html
                    <div class="right-column">

                        <h2>School: Texas A&M University</h2>

                        <h3>Major: Computer Science</h3>
                        <h4>Minor: Treatology</h4>
                        <h5>Expected Graduation: May 2024</h5>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores soluta earum vel nostrum? 
                            Repellat quasi, dolorem eaque et neque veritatis eum molestias. Expedita quod temporibus enim quae 
                            repudiandae alias voluptatem quasi est? At vitae inventore quaerat illo omnis repellat.
                        </p>
        
                    </div>
```

Once we have this, the HTML for the education section is complete. You will find that it is very similar to that of the header section. When we finish styling it.