---
sidebar_position: 2
---

# 😁 HTML Setup

Now the fun begins, please create a file under your website folder titled **index.html**. You can do this by going to your folder on the left hand side, right clicking on the name, and pressing "New file...". Here is where we list out all the components that we want to put on our website. 

The template of code below is one that most websites will follow and it also includes links that import bootstrap, JQuery, and other tools to help with the display of the actual website. You can simply copy paste this into your index.html file and then we are going to add a few more things to the head before moving onto the body.

``` html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- INSERT YOUR WEBSITE TITLE/NAME HERE -->
	

	<!-- Importing bootstrap css -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

	<!-- JQuery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>

	<!-- Works in pair with bootstrap and font awesome -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

	<!-- Font awesome (Github/Linkedin/Instagram icons etc.) -->
	<script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>

	<!-- Imports AOS (Animate on Scroll) library (CSS) -->
	<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
	<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

    <!-- PUT THE NAME OF YOUR CSS FILE HERE -->


    <!-- CAN ADD KEYWORDS AND DESCRIPTION - When your website pops up, the description will be shown -->
	<meta name="keywords" content="Name, Portfolio, Student, Texas A&M, Class">
    <meta name="description" content="This a Portfolio Website used to showcase my experience and projects.">
</head>

<body>
    <!-- Most if not all of your content will go here -->
</body>

<!-- Closing tag, ignore this -->
</html>
```

Now that you have that pasted into your index.html file, lets add the title of the website. 
Under *"INSERT YOUR WEBSITE TITLE/NAME HERE"* write the following code with the title of your personal website. This title is what will show up on the tab of the website. It can be something as simple as "Diego Landaeta's Personal Website".  
```html
<title>Sample Title</title>
```

Let's take a slight side quest and then come back to the header after. 😛 