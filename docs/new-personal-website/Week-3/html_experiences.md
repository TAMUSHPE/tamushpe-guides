---
sidebar_position: 2
---

# 💀 The HTML

For this section, we will be implementing a carousel. A carousel is a list like structure that displays one item and can change the item based on a left and right button. We will use this to display the different experiences you have that you can talk about in a professional setting.

To begin, we will set apart a section in __index.html__ for this. It will look like the following:

```html
<!-- Heading code here -->

<!-- Experiences -->
<section id="experiences">
    <h1>Experiences<h1>
</section>
```

Next, we are going to create a div that will hold the carousel. 

``` html
<section id="experiences">

    <h1>Experiences</h1>

    <div id="expContainer"></div>

</section>
```

Next, we will create the actual carousel. For this, we need a div that will be the size of the carousel. Make sure the names from here on out are the same as mine, if they are not the JavaScript portion of this will be very difficult.

``` html
<section id="experiences">

    <h1>Experiences</h1>

    <div id="expContainer">

        <div class="expCarousel"></div>

    </div>

</section>
```

Next, we need the container for the track (which is where the experiences will go), the two buttons, and the indicators that will let the user know which project they are on.

```html
<section id="experiences">

    <h1>Experiences</h1>

    <div id="expContainer">

        <div class="expCarousel">
            <button class="exp-carousel__button exp-carousel__button--left is-hidden"></button>
            <div class="exp-carousel__track-container"></div>
            <button class="exp-carousel__button exp-carousel__button--right"></button>
            <div class="exp-carousel__nav">
                <button class="exp-carousel__indicator exp-current-slide"></button>
                <button class="exp-carousel__indicator"></button>
                <button class="exp-carousel__indicator"></button>
            </div>
        </div>

    </div>

</section>
```

Here, you may notice that the left button has a class named __is-hidden__. We will use this to hide the left and right buttons when they are not applicable. Also, the section named __exp-carousel__nav__ will hold the indicators. We can also see a class in the indicator that says __exp-current-slide__. This class will tell the CSS which indicator to light up with each current slide when we are rotating through our experiences.

Next, we will create the actual track.

``` html
<section id="experiences">

    <h1>Experiences</h1>

    <div id="expContainer">

        <div class="expCarousel">
            <button class="exp-carousel__button exp-carousel__button--left is-hidden"></button>
            <div class="exp-carousel__track-container">
                <!-- Added code here -->
                <ul class="exp-carousel__track"></ul> 
            </div>
            <button class="exp-carousel__button exp-carousel__button--right"></button>
            <div class="exp-carousel__nav">
                <button class="exp-carousel__indicator exp-current-slide"></button>
                <button class="exp-carousel__indicator"></button>
                <button class="exp-carousel__indicator"></button>
            </div>
        </div>

    </div>

</section>
```

Here, all I added was an unordered list. These structures can take many elements, such as divs, links, photos, and much more and turn them into a list. This structure makes the carousel possible as it uses the list as a way to know which element to show when clicking the next button and previous button. Now, we need to add elements to the list. We do so by using a __li__ tag, which represents a list element.

``` html
<section id="experiences">

    <h1>Experiences</h1>

    <div id="expContainer">

        <div class="expCarousel">
            <button class="exp-carousel__button exp-carousel__button--left is-hidden"></button>
            <div class="exp-carousel__track-container">
                <ul class="exp-carousel__track">
                    <!-- New code starts here -->
                    <li class="exp-carousel__slide exp-current-slide">
                        <div class="exp-carousel__slide-content">

                            <h3>Played Frisbee</h3>

                            <img class="exp-carousel__image" src="images/catch.jpg" alt="">

                            <p>I played frisbee at Aggie Park. I love being around my fellow ags!</p>

                        </div>
                    </li>
                    <li class="exp-carousel__slide">
                        <div class="exp-carousel__slide-content">

                            <h3>Ate Treats</h3>

                            <img class="exp-carousel__image" src="images/treats.jpg" alt="">

                            <p>I ate treats that my owner gave me. They tasted amazing! 10/10 recommend treats.</p>
                        </div>
                    </li>
                    <li class="exp-carousel__slide">
                        <div class="exp-carousel__slide-content">

                            <h3>Went on a Walk</h3>

                            <img class="exp-carousel__image" src="images/walkRev.jpg" alt="">

                            <p>I went on a walk around campus and enjoyed the beautiful scenery. Shoutout to the engineers at Zachry!</p>
                        </div>
                    </li>
                    <!-- New code ends here -->
                </ul> 
            </div>
            <button class="exp-carousel__button exp-carousel__button--right"></button>
            <div class="exp-carousel__nav">
                <button class="exp-carousel__indicator exp-current-slide"></button>
                <button class="exp-carousel__indicator"></button>
                <button class="exp-carousel__indicator"></button>
            </div>
        </div>

    </div>

</section>
```

This new code may look intimidating, but it is not too bad once you see the pattern. Our first list element will contain a class different to the other ones. It will have __exp-carousel__slide__ and __exp-current__slide__. Here, the first one is not too important as it only denotes that it is a slide. However, the second class denotes that it is the __current__ slide that we are working with. There should only be one slide at a time with this attribute. Next, we have a div inside the list element to hold all the content that the element will have. Inside this div, we will have an __h3__ header that will hold the heading of our experience, an image that will showcase what we did, and a __p__ section that will give a description of what we did. Do this with as many list elements as you would like, but make sure they match the amount of indicators you have. This is why my code was so long, I needed 3 to match the indicators. But don't be intimidated by the length of it as it all follows the same pattern.