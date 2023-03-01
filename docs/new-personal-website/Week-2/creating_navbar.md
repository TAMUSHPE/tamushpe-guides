---
sidebar_position: 2
---

# 🖱️ Creating the Navbar

To create the navbar, we will first remove our current heading and we will also remove everything in the css file that styles h1 tags. We will add it back later, but we can remove it for now as it will make creating the navbar a little easier. We will remove the following code:

__HTML:__

``` html
<h1>Rev's Website</h1>
```

__CSS:__
``` css
h1 {
    text-transform: uppercase;
    font-size: 2.5em;
    font-weight: bold;
    letter-spacing: .5em;  
    text-align: center;
    padding: .4em .6em;
    color: white;
}

h2 {
    font-size: 2.5em;
}
```

In this area of the CSS, most of the values are straightforward except for the padding attribute. This will add spacing between the margins of its container and the text itself. Think of this as if the text came inside of a box, and the padding made the box slightly bigger to give the text more space. It also has two values, the first being the vertical padding and the second being the horizontal padding.

---

To begin, we will separate a section of our code for the navbar and set up our design.

``` html 
<body>

    <!-- Navbar -->

    <nav class="navbar navbar-dark bg-dark">
    </nav>
```

This will generate a navbar with the default dark color and a default dark background. This uses bootstrap to create the navbar, as bootstrap uses keywords inside classes to determine how the elements will look like. Next up, we will create a div that will hold all the buttons inside the navbar.

``` html
<nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid justify-content-center">
    </div>
</nav>
```

This div also uses bootstrap with both of the classes it implements. The container-fluid attribute creates a bootstrap version of a div that takes up the entire width of the screen. The justify-content-center will make all the content inside the div align in the center horizontally. Next up, we will add the buttons that will later on make the navbar work. To do this, add the following inside the div.

``` html
<nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid justify-content-center">
        <button class="btn btn-outline-danger me-4 navButton" type="button">Button</button>
    </div>
</nav>
```

This button also uses bootstrap. The btn attribute declares this to use the bootstrap button design, btn-outline-danger sets up a red outline for the button, me-4 sets up a margin around the button and allows the buttons to be spaced out from each other, and navButton is a class I used to separate these buttons from others we may use later on so we can style them. To add more buttons to the navbar, simply take the button line and copy-paste it below the line as may times as you want buttons. If you want three buttons, it would look like so:

``` html
    <button class="btn btn-outline-danger me-4 navButton" type="button">Button1</button>
    <button class="btn btn-outline-danger me-4 navButton" type="button">Button2</button>
    <button class="btn btn-outline-danger me-4 navButton" type="button">Button3</button>
```

---

Now to style the buttons we will go to the CSS file. Once here, we will use the following code at the end of your file:

``` css
/* Navbar */

.navButton {

    --bs-btn-border-color: var(--white);
    --bs-btn-color: var(--white);
    --bs-btn-hover-bg: var(--maroon);

}
```

To begin, I added a Navbar comment to separate it from everything else. Next, I added three styles. The --bs-btn-border-color changes the color of the outline of the button. The --bs-btn-color changes the text of the button to white. The --bs-btn-hover-bg changes the color of the button when your cursor is over it. These are all bootstrap attributes that we are editing. The navbar is now complete. Feel free to change up the design and color of the navbar! You can learn how to do this by going into the bootstrap website and looking around their documents.