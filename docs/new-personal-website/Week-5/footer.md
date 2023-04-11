---
sidebar_position: 4
---

# 👞 Footer

For this footer, we will be using Bootstrap again as it makes it easier to create it. Our goal is to have it work similar to the navbar, only that it appears at the bottom of the page rather than the top.

To begin, we will create a container for the footer:

```html
<!-- Footer -->

<div id="footer-container">
</div>
```

Next, we will add the Bootstrap footer inside of this container:

```html
<div id="footer-container">
    <footer class="py-3">

        <ul id="footerLine" class="nav justify-content-center border-bottom pb-3 mb-3">
        </ul>
        <p id="bottomFooter" class="text-center">Email: <a href="mailto:reveille@gmail.com">reveille@gmail.com</a></p>
    
    </footer>
</div>
```

Here, we use the class py-3 on the footer to add vertical padding of value 3 (p = padding, y = y-axis). In ul tag, we have many classes, where nav makes it act like a navbar, justify-content-center centers the content horizontally, border-bottom gives it a border in the bottom of the container, pb-3 gives padding at the bottom of value 3, and mb-3 gives it a margin at the bottom of value 3. In the p tag, we also use a class text-center to center the text within the container. These are all classes that act this way because we added Bootstrap to our __index.html__ file, without it these classes would not do anything.

Next up, we want to add the buttons to the footer. We will add all the same buttons we added to the navbar.

```html
        <ul id="footerLine" class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
                <button class="btn me-4 footerBtn" type="button">About</button></li>
                    <li class="nav-item"><button class="btn me-4 footerBtn" type="button">Experiences</button></li>
                    <li class="nav-item"><button class="btn me-4 footerBtn" type="button">Education</button></li>
                    <li class="nav-item"><button class="btn me-4 footerBtn" type="button">Projects</button></li>
                    <li class="nav-item"><button class="btn me-4 footerBtn" type="button">Skills</button></li>
                    <li class="nav-item"><button class="btn me-4 footerBtn" type="button">Resume</button></li>
        </ul>
```

Here, we use Bootstrap to style the buttons differently than we did in the navbar. Here, we only use the classes btn and me-4, as footerBtn is a class that we create so we can add our own custom styling. The btn class defines it as a Bootstrap button, and me-4 gives a value of 4 to the sides of the button.

Once we have this, we can go ahead and add CSS to the footer and change the colors to our needs. Since we are only editing the colors, the CSS is not going to be very long. The following is what we used to style our footer:

```css
/* Footer */

#footer-container {

    background-color: var(--dark-gray);

}

.footerBtn {

    color: var(--gray);

}

.footerBtn:hover {

    color: var(--red);

}

#bottomFooter {

    color: var(--gray);

}
```

All we did was make our footer container dark gray, made our buttons light gray when left alone and red when the cursor hovers over them, and made the text at the bottom of the footer gray. Once done, go ahead and open up live server and your website should look complete! However, we are missing one crucial step to make your website start working: we need to make our navbar and footer buttons work. If you try clicking them right now, they will not do anything. We still need to add functionality to these buttons.