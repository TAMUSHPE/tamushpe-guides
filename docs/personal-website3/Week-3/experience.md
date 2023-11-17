---
sidebar_position: 2
---

# 🏢 Experience

Alright this next section is for you to demonstrate any experience you have. This can be leadership positions, internships, summer jobs, etc. **Make it your own!**

I have below three blocks, for three different experience. Feel free to add or delete any. I really want this website to represent *you*. You can make it similar to what you have on your resume or elaborate more **(encouraged)**. You can see that I elaborate more on the first one and the difference from the 2nd and 3rd one. Have fun and demonstrate that passion and personality of yours!

Similar to the About Me, notice the id="experience" at the top of the code. Again, this links that navbar we made in Week 2 to this new section of your website!

```html
<!---------------------------------- Experience Section ---------------------------------->

	<div class="container-fluid" id="experience">
		<div class="row">
			<div class="col-md-9 mx-auto text-center">
					<h1 class="bottom-space h1Format">Experience</h1>
			</div>

			<div class="col-md-9 mx-auto" style="padding-bottom: 4vmin;">

				<!------------------- Start of Experience #1 ------------------->
				<div class="row rounded-box">
					<div class="col-lg-5 my-auto">
						<div class="row box-padding justify-content-center">

							<!-- TODO: Add an image of your experience here! 
								P.S. -> Change the alt text to something that describes the image -->
							<img src="assets/shpe-logo.jpg" class="box-image" alt="SHPE Logo">
						</div>
					</div>

					<div class="col-lg-7 box-padding">
						<div class="row justify-content-center">

							<!-- TODO: Change the name of your experience -->
							<h3 class="text-center h3Format" style="margin-bottom: 2vmin;">Society of Hispanic Professional Engineers</h3>
						</div>

						<div class="row justify-content-center" style="margin: auto !important;">

							<!-- TODO: Add your description of the experience! -->
							<p>Teach workshops of 30+ members on how to create a personal portfolio website by utilizing HTML5, CSS, and Bootstrap. Lead meetings with the Web Development Committee
								where we maintain and improve the currrent TAMU SHPE website. I have a had a lot of fun working more with members and learning through both of the experiences,
								whether it be a technical or soft skill.
							</p>
						</div>
					</div>	
				</div>
				<!------------------- End of #1 ------------------->


				<!------------------- Start of Experience #2 ------------------->
				<div class="row rounded-box">
					<div class="col-lg-5 my-auto">
						<div class="row box-padding justify-content-center">

							<!-- TODO: Add an image of your experience here! 
								P.S. -> Change the alt text to something that describes the image -->
							<img src="assets/sec.png" class="box-image" alt="SEC Logo">
						</div>
					</div>

					<div class="col-lg-7 box-padding">
						<div class="row justify-content-center">

							<!-- TODO: Change the name of your experience -->
							<h3 class="text-center h3Format" style="margin-bottom: 2vmin;">SEC Directed Internship</h3>
						</div>

						<div class="row justify-content-center" style="margin: auto !important;">

							<!-- TODO: Add your description of the experience! -->
							<p>Conducted extensive workspace mapping for Arkysis' robotic arm using CoppeliaSim, Blender, and MATLAB
								Collaborated in a multidisciplinary team and advised the CEO to use a shorter arm that decreased costs by 60%
							</p>
						</div>
					</div>
				</div>
				<!------------------- End of #2 ------------------->


				<!------------------- Start of Experience #3 ------------------->
				<div class="row rounded-box">
					<div class="col-lg-5 my-auto">
						<div class="row box-padding justify-content-center">

							<!-- TODO: Add an image of your experience here! 
								P.S. -> Change the alt text to something that describes the image -->
							<img src="assets/texas-tennis.png" class="box-image" alt="SHPE Logo">
						</div>
					</div>

					<div class="col-lg-7 box-padding">
						<div class="row justify-content-center">

							<!-- TODO: Change the name of your experience -->
							<h3 class="text-center h3Format" style="margin-bottom: 2vmin;">Texas Tennis Academy</h3>
						</div>

						<div class="row justify-content-center" style="margin: auto !important;">

							<!-- TODO: Add your description of the experience! -->
							<p>Incorporated technical drills and games into lesson plans for players aged 4 to 17. Kept players active while ensuring their well-being 
                                when temperatures were too high. Tailored lessons based on level of experience and the area of growth each player needed to improve. 
							</p>
						</div>
					</div>	
				</div>
				<!------------------- End of #3 ------------------->


			</div>
		</div>
	</div>
```

After this we just have to add a little bit more to the **main.css**.

```css
/* -------------------------------- Experience Section -------------------------------- */

/* Makes the "Experience" section take up at minimum the entire height of the screen */
#experience {
    padding-top: 85px; /* Changed 48vmin to 85px - 85px 12vmin 0vmin 12vmin */
    min-height: 100vmin;
}

/* Sets default styling for every <p> element in the "Experience" Section */
#experience p {
    font-size: 1.1rem; /* 50px */
    color: var(--text-color);
    padding-bottom: 0%;
    margin-bottom: 0%;
}
```

Now we are done with your experience section!!! 🥳



