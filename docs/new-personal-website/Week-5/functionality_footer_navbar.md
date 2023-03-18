---
sidebar_position: 5
---

# 🚀 Footer & Navbar Functionality

To complete your personal website, we just need to make sure our buttons on the footer and navbar work. For this to happen, we need to add an attribute to our buttons that will make it take us to another part of the page when we click it. We do this by adding an onclick attribute that looks like the following:

```javascript
onclick="window.location='#header';"
```

We will add this line to our buttons like so:

```html
<button class="btn btn-outline-danger me-4 navButton" type="button" onclick="window.location='#header';">About</button>
```

This is how it would look like for the about button in the navbar. We will follow the same format for the other buttons, except we will replace #header with the name of the div that we want to traverse to. Here is an example of how we would do so with the experiences footer button:

```html
<li class="nav-item"><button class="btn me-4 footerBtn" type="button" onclick="window.location='#experiences';">Experiences</button></li>
```

We will do this for all the buttons except the resume button. This is because we want the resume button to take us to the file of our resume rather than to a specific part of our website. To do this, we will add this onclick line to our resume buttons:

```javascript
onclick="window.open('files/RevResume.pdf')"
```

On this line, make sure you change files/RevResume.pdf to the file that you are looking to put into your button. To add this line to your buttons, add the line to the html code for the resume button like so:

```html
<li class="nav-item"><button class="btn me-4 footerBtn" type="button" onclick="window.open('files/RevResume.pdf')">Resume</button></li>
```

Once you add the respective onclick attributes to all the buttons on your webpage, go into live server and test them out. Once they work, congratulations! You have officially completed your personal website! Give yourself a pat on the back, add this to your resume, and go show this to recruiters for bonus points when applying to internships.