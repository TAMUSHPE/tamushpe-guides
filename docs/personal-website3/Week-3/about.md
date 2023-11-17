---
sidebar_position: 1
---

# 🤵🏽 About Me 

Now we have gotten to the section where you are really going to make this website your own. The about me section is a place where you can express yourself in a way that you probably are unable to do in your resume. However, please keep in mind to still keep it *appropriate* as you want to show this website to recruiters and/or future employers! This next section of your website will include a picture of you **(preferably a nice headshot)** and also a small blurb of who you are!

You can see the id="about-me" in the first div, this is what is linking the navbar to this section. Once you implement the following code you can go ahead and click on the navbar and it will slide down to your About Me section! This is where the id that you put in the navbar section really matters, so make sure **they are the same**.

Similarly, try and click that logo that we have the very left of the navbar. Now that we can scroll down, this logo will go up your website and take you back to your landing page! *This is because of the id="introduction" that we have at the beginning of the landing page section*. I just wanted to surprise you with it this week! 🤯🤭

```html
 <!---------------------------------- About Me Section ---------------------------------->

	<!-- Title for starting "About Me" page -->
	<div class="container-fluid" id="about-me">
		<div class="row justify-content-center">
			<div class="row justify-content-center bottom-space h1Format">
				<h1>About Me</h1>
			</div>
		</div>

		<div class="row justify-content-center">
			<div class="col-lg-6 my-auto" style="padding-bottom: 6vmin;">
				
				<!-- Creates circle with glowing halo behind it (and your headshot in the middle) -->
				<!-- TODO: Add your headshot here! -->
				<div class="row justify-content-center about-circle mx-auto">
					<img src="assets/Headshot.jpg" alt="Headshot">
				</div>
			</div>

			<div class="col-lg-6 text-left about-text my-auto" style="padding-bottom: 6vmin;">
				<div class="row aboutMe-box">

					<div class="about-spacing">

						<!-- TODO: Change or adjust about me description! -->
						<!-- Added cool effects to parts of the "text" by using links and css -->
						<!-- If you want to remove them, delete everything between the <a> to </a> tags -->
						<p>My name is Diego Landaeta Torres and I’m a sophomore majoring in Computer Science at 
							<a href="https://engineering.tamu.edu/" target="_blank" class="aboutMe-link">Texas A&M University</a>.
                             I currently serve as the Web Development Lead for
							<a href="https://www.tamushpe.org/index.html" target="_blank" class="aboutMe-link">TAMU SHPE</a>.
						</p>
						<br>
						<p>I enjoy playing basketball, going to the gym, and doing anything music related! 
							I played percussion for 6 years of my life and piano for 2. I also know how to play the Venezuelan Cuatro which you should search up 
							if you don't know what it is!</p>
					</div>
				</div>
			</div>
		</div>
	</div>

```

## Once you like your picture and your text section, let's hop on over to the main.css!


Add the following to the bottom:

```css
/* -------------------------------- About Me Section -------------------------------- */

/* Makes the "About Me" section take up at minimum the entire height of the screen */
#about-me {
    padding: 85px 12vmin 0vmin 12vmin; 
    min-height: 100vmin;
}

#about-me p {
    margin-bottom: 0%;
}

/* Adds a color and weight to links in "About Me" */
.aboutMe-link {
    color: rgb(70, 170, 224);
    font-size: 1.2rem;
    font-weight: 600 !important;
}

/* Part of aboutMe-link, defines transformation type and timing */
#about-me a {
    text-decoration: none;
    display: inline-block;
    transition: transform 0.2s ease-in-out;
}

/* Gives a "popping" effect when hovering on links in "About Me" description */
#about-me a:hover {
    color: rgb(70, 170, 224);
    text-decoration: none;
    transform: scale(1.04);
}

/* Creates round-box with "About Me" description */
.aboutMe-box {
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.25);
    
    box-shadow: 4px 4px 12px 4px rgba(0,0,0,0.2);
    transition: 0.4s;
}

/* Creates light white shadow around box on hover */
.aboutMe-box:hover {
    box-shadow: 4px 8px 24px 4px rgba(255, 255, 255, 0.4);
}

/* Creates space inside of "About Me" box for description */
.about-spacing {
    padding: 3.5vmin 3.5vmin 3.5vmin 3.5vmin;
}

/* Formats text inside round-box */
.about-text {
    font-size: 1.1rem; /* 50px */
    color: var(--text-color);
    padding-bottom: 0%;
}

/* Puts a nice shadow around circular headshot */
.about-circle {
    height: 24vmax;
    width: 24vmax;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.25);    
    box-shadow: 4px 4px 12px 4px rgba(0,0,0,0.2);
    transition: 0.4s;
}

/* Adds cool hover effect (creates halo/light shadow) */
.about-circle:hover {
    box-shadow: 4px 8px 24px 4px rgba(255, 255, 255, 0.4);
}

/* Styles/sizes the headshot */
.about-circle img {
    height: 24vmax; /* Orig 28vmin */
    width: auto;
    border-radius: 50%;
    margin: auto;
}
```

Feel free to read each of the comments and try things out, you can always change as much or as little as you feel!


