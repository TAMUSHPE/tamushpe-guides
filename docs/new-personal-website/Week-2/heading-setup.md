---
sidebar_position: 4
---

# 👨 Heading Setup

In this section, we will be creating the elements that will be used to make the heading of our website. To begin, we will need a professional headshot. To put it into the website, we will need the photo to be in the same directory as our html file. A good way to organize ourselves is to create a folder named images and use this to store all the images we will use for the website. To create a folder, go to your file explorer (left side of VSCode) and go to the margin above your html, css, and javascript files. When you do this, a folder with a plus should appear on the margin. Press it and name your folder. Next, we will grab the headshot and place it inside the images folder. Make sure your photo is using a .png or a .jpeg file extension as these work most of the time. Now that we have this, we will go ahead and add it to our html file.

Add the following code to your html file:

``` html

        <button class="btn btn-outline-danger me-4 navButton" type="button">Resume</button>
    </div>
</nav>

<!-- Above this is code you already did -->

<!-- Heading -->
<div class="container-fluid" id="header">
    <img id="headshot" src="images/your_img_name.png" alt="Your Name Here">
</div>
```

In the div class, we use the container-fluid attribute again to stretch the div across the entire screen and we declare the div to have an id of header for styling purposes. Inside this div, we add the img tag that will place your image into the website. We use an id of headshot to style it later and in the src, make sure you put images/ before the name of your photo file, as the computer needs to know that it is in the images folder. The alt area will show up if your image cannot load, so type your name in there!

---

Next up we will add our name and biography. To do this, we are going to create a new div and place all our text tags inside of it. It will look like this:

``` html
<!-- Heading -->
<div class="container-fluid" id="header">
    <img id="headshot" src="images/reveille.png" alt="Queen Rev in All her Glory">

    <div id="text">

        <h2>Queen Reveille</h2>
        <h3>Computer Science '24</h3>

        <p>
            Howdy! My name is Reveille, I am a Computer Science Student at Texas A&M. 
            I am involved with the Corps of Cadets as the highest-ranked member. I 
            also love to code and play fetch. Check out my accomplishments below!
        </p>

    </div>
</div>
```

In this segment, we created the div with the id text, which we will use as a way to style all the text inside it at the same time. Inside the div, I placed an h1 tag with Rev's name, an h3 tag with her major, and a p tag with her biography. In HTML, an h3 tag is for headers that are not as important as h1 or h2. This rule applies for h1-h6, where as the number is higher, the less emphasized it will be. The p tag is used to type paragraphs into your website.

---

Next, we will link our email into the website. To do this, we will use a p tag to write out the description of what the link is for and an a tag to link our email. An a tag is used to reference a link to another page in your website. To add it, add the following code:

``` html
    <div id="text">

        <h2>Queen Reveille</h2>
        <h3>Computer Science '24</h3>

        <p>
            Howdy! My name is Reveille, I am a Computer Science Student at Texas A&M. 
            I am involved with the Corps of Cadets as the highest-ranked member. I 
            also love to code and play fetch. Check out my accomplishments below!
        </p>

        <!-- Add this line -->

        <p>Email: <a href="mailto:reveille@gmail.com">reveille@gmail.com</a></p>

    </div>
```

In this line, we use the mailto:youremailhere@gmail.com so that when the user clicks on the email, it redirects the user to an email prompt where they can begin writing an email to you.