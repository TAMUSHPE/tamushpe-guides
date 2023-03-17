---
sidebar_position: 4
---

# 📐 Projects Section

For this section, you will need to copy/paste the entirety of the experiences section in __index.html, main.css, and index.js__ and replace every time it says exp with proj. The easiest way to do this is to find a section where you can place the code (right after the education section in __index.hmtl__ and at the bottom for the other two files) and paste it there. After this, you will use the find/replace feature in VSCode (Ctrl + F in Windows, Command + F in Mac). Then, next to find you will have an arrow that you can press to bring down the replace tab. Here, you will type exp into find and proj into replace. Make sure you only get the code you pasted when you are pressing replace. __DO NOT__ click replace all as that will cause the experiences tab to change as well. Press the icon directly to the right of the replace bar as this one only replaces one word at a time. The rightmost icon is designed to replace all instances of the word.

Once we have the code set up, we have a fully functional carousel, but we want it to be able to send us to the projects we created when we press on the image. This will require some changes to the HTML and CSS. First, we will edit the images and descriptions to have the information we want them to have. We can do this by going into the images in the slides, the h3 tags, and the p tags in the slides to change the images and descriptions. After this, we will begin to add functionality to the links.

To add the link, we simply must add an a tag around the image. This is what one of our slides should look like after we add this feature:

```html
<div class="proj-carousel__slide-content">

    <h3>Howdy Portal</h3>

    <a href="https://howdy.tamu.edu/"><img class="proj-carousel__image" src="images/howdy-portal.jpg" alt=""></a>

    <p>Website where Aggies can see their grades, schedule, register, and much more!</p>

</div>
```

Once we have this, when we press the image, it will take us to the link desired. Make sure to replace the href link with the link to your project as that is the link it will follow when you press it.

Next, we want to add an effect when we hover over it so people know that it will take them to a page if you press on it. To do this, we will edit the CSS. To achieve that, we will add one property to the CSS:

```css
.proj-carousel__image:hover {

    opacity: 0.7;

}
```

This will make the image slightly transparent when we hover over it with the cursor, giving the user the idea that they can press on it when hovering it since the experiences carousel does not do that.

After this, your carousel should be fully functional and we can conclude the fourth week of creating your personal website!