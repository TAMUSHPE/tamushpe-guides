---
sidebar_position: 5
---

# 🏠 Home / Landing Page

I know after all the linking and objects you probably think this next section is going to be the same. Let me tell you this next section is very short! However, if you want to add more of your creativity this is a great place to start.

Under your navbar section let's write the following (remember to add your information instead of writing mine):

![Identity theft](https://i.pinimg.com/originals/9d/95/7a/9d957a73ff343b15ff674ee2c6d3a4b1.gif)

``` html
	<!---------------------------------- Introduction Section ---------------------------------->

	<!-- TODO: Name, A&M class, major, intro-content makes the original background image darker -->
	<div class="container-fluid background-img" id="introduction">
		<div class="row justify-content-center">
			<div class="name">Diego Landaeta Torres</div>
		</div>

		<div class="row justify-content-center">
			<div class="background-text">Texas A&M '26 | Computer Science</div>
		</div>
	</div>
```
This is going to be it for html, but if you want to add your own flare to your landing page that is great! 

### If we want to change our website aesthetically where should we go?

### ...

### main.css! 🤭 (I want to believe you said that with me, but this isn't Dora the Explorer so we can move on.)

In your main.css file let's add the following to the bottom:

``` css
/* -------------------------------- Introduction Section -------------------------------- */

/* This is an "ID" which is used as a bookmark - Here we add padding to the top
   and make it take up the entire vertical screen with 100vh */
#introduction {
    padding-top: 38vh; 
    height: 100vh;
    line-height: 1.2 !important; /* Changes line-height from 1.5 since there was too much space in-between lines */
}

/* Styles name for landing page */
.name {
    font-size: 12vmin; /* Uses vmin to keep consistency */
    color: var(--text-color);
    padding-bottom: 0%; /* 0% */
    margin-bottom: auto;
}

/* Styles text under name on landing page */
.background-text {
    font-size: 5.6vmin; /* 50px (4.8vmin orig) */
    color: var(--text-color);
    padding-bottom: 0%;
    margin: 0;
}
```

Where it says **--text--color** feel free to put whichever makes you happiest. If you decide to use --text-color though, note that it's the variable we defined up top which is the color **white**. Remember, the goal of this website is to use to represent you professionally. So don't be afraid to show your personality, but keep that in mind moving forward.


### Cool Background

Let's say you don't want to be held to the constraints of just having one color on your landing page, well we can add a background image. 🤯

Inside, of your **main.css**, you can uncomment these lines of code and add an image to your assets folder and have that as your background image!

``` css
/* Replace "background-image.jpg" with whatever name your image has inside of the "assets" folder */
.background-img {
    background-image: url(./assets/background-image.jpg);

    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.48);

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
```

This is of course if you saved your image as **background** and as a **jpg**. If it's named something else or in a different form, make sure to change the name and extension! 
