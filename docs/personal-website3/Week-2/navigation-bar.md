---
sidebar_position: 4
---

# 💻 Navigation Bar

Now that we've gotten the setup and some learning out the way, how about we get started with our websites?

![rumble](https://y.yarn.co/4d7265d0-8a71-4cd3-b6bf-7fc31c7de0ef_text.gif)

With every good website, there is one element that without question is there... **a navigation bar 🧭**. So that is precisely what we are going to start off with!

An important aspect of coding is commenting your code. In this section, we are going to begin to implement some comments that we think your code should have as examples of commenting. Comments help you navigate through your code with more ease and can be helpful when asking for help since the other person can read the comments to get an idea of what is happening in sections of your code.

To comment in HTML, you use the following syntax to comment:

``` html
<!--Example of a comment--> 
```

Go to your index.html and let's go into the section titled **body**.  

Since we are going to be doing the navbar right now, let's put right down a comment to separate this line of code. Something like this:

``` html
<!---------------------------------- Navigation Bar Section ---------------------------------->
```

Below this, we are going create the object nav and use a class given to us by Bootstrap and make an ID for us to be able to change aspects of the navbar. Let's add the following below our comment:

``` html
<nav class="navbar navbar-default fixed-top navbar-expand-lg navbar-dark" id="navbar-hide">
```

Notice that an object can belong to a class and have its own ID, the class will automatically give any object that is a part of it certain characteristics. The ID can only be used once, so it is unique to this navbar.

Inside of the nav object we are now going to add the following code:

``` html
        <!-- Creating a flex box that makes "flex items" -->
		<div class="navbar-header d-flex col">

			<!-- Logo now takes you to your name/introduction via bookmark -->
			<a class="navbar-brand" href="#introduction">
				<!-- TODO: Create and add your logo here! -->
				<img src="assets/YOUR_LOGO.png" style= width:45px style= height:30px alt="Logo">
			</a>

			<!-- ml-auto creates margins on the left and pushes dropdown toggle to the far right -->
			<button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" 
			data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" 
			aria-label="Toggle navigation">

				<span class="navbar-toggler-icon"></span>

			</button>
		</div>
```

This is a large chunk of code so let's break it down. Similarly to when we created the nav object, we are now creating a smaller section with:

``` html
<div class="navbar-header d-flex col>
``` 

Let's move down a little further now:

``` html
<!-- Logo now takes you to your name/introduction via bookmark -->
<a class="navbar-brand" href="#introduction">
	<!-- TODO: Create and add your logo here! -->
    <img src="assets/YOUR_LOGO.png" style= width:45px style= height:30px alt="Logo">
</a>
```

These lines of code are linking the image that is your "logo" to the introduction section. <**a href=**> is HTML's way of linking. So the top line says, this object is part of Bootstrap's navbar-brand class since we want it to look like a logo, and then links this item to our introduction using our ID *#introduction* that we are going to create here in a moment. 

Now let's focus on what's going on inside this section. <**img src=**> is how we can add images to our website. We use style, to do just that style the image how we want. In this case we are saying that we want our logo to have a width of 45 pixels and a height of 30 pixels. The **alt="Logo"** is just in case the image doesn't load for some reason or you don't have an image that matches the image name you put it in the code, an image icon will appear and it will say "Logo" next to it.

### Assets Folder Creation

Now, let's go ahead and create a folder within our personal-website folder for images and our resume. I would title it something like "assets" but it is up to you. Remember, you can create a folder by hovering over your main folder and clicking that new folder icon.

### Let's dive back into our navbar now

``` html
<!-- ml-auto creates margins on the left and pushes dropdown toggle to the far right -->
			<button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" 
			data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" 
			aria-label="Toggle navigation">

				<span class="navbar-toggler-icon"></span>

			</button>
```

This last part is just making the dropdown toggle to the far right, this is just a great example of why comments are so important. Without the comment at the top, it makes it more confusing to know what this piece of code actually accomplishes.

This next part of the code you're going to write is the rest of the navigation bar in your index.html:

``` html
	<div class="collapse navbar-collapse" id="navbarNavDropdown">
		<div class="navbar-nav">

			<!-- Update so href ("link") takes users to bookmarked location (FIXME) -->
			<a class="nav-item nav-link" href="#about-me">About Me</a>
			<a class="nav-item nav-link" href="#experience">Experience</a></li>
			<a class="nav-item nav-link" href="#projects">Projects</a></li>
			<a class="nav-item nav-link" href="#contact-me">Contact Me</a></li>
		</div>

		<!-- No longer part of list in nav bar, ml-auto pushes it to the right of the navbar, it's now also a button with an outline -->
		<!-- TODO: UPDATE RESUME LINK -->
		<a href="assets/xyz-resume.pdf" class="ml-auto" target="_blank"><button type="button" 
			class="btn btn-sm btn-outline-dark" style="color: #ffffff">Resume</button></a>
	</div>
</nav>
```

Now that we have some more of an idea, this part of the navbar should make the most sense. The top is just creating the drop down menu which we have put in the classes **collapse** and **navbar-collapse**. Moving further down we are just linking each title to its respective place in our website. 

As you can see, we want to link our navbar to each section of our website. I know we haven't made each section yet, but when we do we have to make sure to create the same IDs as the ones listed in this **navbar-nav** object or nothing will happen when we click **About Me** or **Projects** for example.

Lastly, let's talk about that last part of the code. This is where we are creating a button to the right of the navbar that will link to our resume. But Diego, how will we link our resume? That's a good question voice in my head, we first have to copy and paste our resume into the **assets** folder we created earlier. Once we do that, we can access in our HTML... which means we can put it in our website! 🤭

After that, we just close our large nav object with <**/nav**>. 

#### Okay okay I know this has been a lot, butttttt we are almost there! 

![Kevin Saying thank.](https://media.tenor.com/rskeqG9jhawAAAAC/kevin-office.gif)

### CSS

Let's now transition into our main.css file and add the following code to it.

``` css
/* FIXME: Implementing shadow and parallax effect for landing page image */

/* .background-img {
    background-image: url(./assets/background-image.jpg);

    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.48);

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
} */

/* -------------------------------- Navigation Bar Section -------------------------------- */

/* Defining the font size for the Navigation Bar Text */
nav {
    font-size: 17px;
}

/* Modifying the size of the button for your "Resume" link */
.btn-sm {
    font-size: 17px;
}

/* Changes the color of your Navigation Bar Text */
.navbar-dark .navbar-nav .nav-link {
    color: var(--text-color);
}

/* Cool blur effect to your Navigation Bar Background */
.navbar {
    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(5px);
    padding-right: 16px;
    margin: 10px;
    border-radius: 10px;
}

/* Changes color of button when you hover over it */
.btn:hover {
    background: rgba(255, 255, 255, 0.275);
}

```

The nice thing about css is that it is a lot easier to see what it does. Another reason why this code is so easy is... COMMENTS! They are awesome, they make it very easy to follow along so don't be afraid to add comments when you change something because it will only make it easier when you're looking back at your code!

All done with the navbar now. 😅



