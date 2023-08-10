---
sidebar_position: 2
---

# 🤿 Let's dive deeper into HTML and CSS

In our **index.html** and **main.css** we are going to create ID's and classes. Now, what do each of them do and when should I use one or the other? That's a great question Diego, let's talk about it.

![Oprah](https://media4.giphy.com/media/As7dzE5IDlM3ygg61X/giphy.gif?cid=6c09b9523lr2i0qvtxxx9adw2chrgktes3cm4hpk291rp41y&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g)

You use classes and IDs for the same purpose: you create something in your HTML file and then can change the appearance of that certain object with its class or ID. However, classes can be used multiple times while IDs can only be used once. Therefore, if you are creating something that you are only going to use once on your website, you should probably add the ID attribute rather than the class one. Classes are great for when you create a tile that you want to duplicate over and over again, let's say for your experience section. 

Let's see an example of this would look both in your HTML and your css file.

Your **index.html** is where you create/assign classes and IDs. For instance, let's take a look at some of the code will be writing in a second:

``` html
<nav class="navbar navbar-default fixed-top navbar-expand-lg navbar-dark" id="navbar-hide">
```

The first thing I want you to notice from the code above, is that the **nav** object is going to be a part of the classes: **navbar, navbar-default, fixed-top, navbar-expand-lg,** and **navbar-dark**. These are the classes that we are accessing from Bootstrap! 🔥

Secondly, we are creating an ID for this same **nav** object: **navbar-hide**. 

You might be wondering woahhhhh Sir Diego, there's both classes and an ID is that okay? This is a totally valid question, but yes, it is completely fine to do this. What would make no sense was if you created two IDs for the same thing. That's like you having two first names, I can call you by either one but does it really make sense for you to tell me both? Not really right? Well, it's the same thing for IDs.

Now, to change certain parts of said classes and IDs we go into our **main.css** file.

To access a class, you do .className{}. For example let's say we have a class called **mainPage** and that contains everything inside the main part of the website. We can change the background color for this section by doing the following:

``` css
.mainPage{
    background-color: black;
}
```

To access IDs, it almost the same thing but now we put a # in front instead of a period. So we can say we gave an ID for the title of our website where we are going to put our name called **titleName**. What if we want to change the font? Well, let's take a look:

```css
#titleName{
    font-family: 'Times New Roman';
    color: #07575b /* Cool blue */;
}
```
### Summary:
Classes - Great for items that you want to use the format again for.

IDs - Great for specific items that will only be needed once.