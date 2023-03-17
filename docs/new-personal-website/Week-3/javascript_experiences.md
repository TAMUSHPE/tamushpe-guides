---
sidebar_position: 4
---

# 🏃 The JavaScript

For this section, open up the __index.js__ file that you created at the beginning of the tutorial. This part will be difficult, so make sure you read through the guide slowly and carefully.

First, JavaScript uses variables to store information that will be used later on. These variables are defined by __var__, __const__, and __let__. For this guide, we only need to know what a __const__ does.

A __const__ is defined as a constant variable, meaning that whatever information you put into it will never change. That way we do not need to keep track of what the variable could have as we know it will be the same thing as when we declared it. We declare a __const__ by doing the following:

```javascript
const variable_name = value;
```

Where variable_name is the name we want to give the variable and value is the information we assign to the variable.

---

To begin, we will set a section for our experiences carousel and type the following:

```javascript
// Experiences Carousel
const expTrack = document.querySelector('.exp-carousel__track');
const expSlides = Array.from(expTrack.children);
```

Here, we are taking our track from the HTML file and setting it as a variable named expTrack. We then take an array of the objects inside of expTrack and set them to expSlides (because the slides are the objects inside of our track in the HTML file).

---

Note: an array is a list of objects in JavaScript. Here, expSlides is an array that contains all the slides inside the track.

Note: In JavaScript, functions and variables that belong to another are denoted by a period. For example, document.querySelector('.exp-carousel__track') takes document (a predefined variable), then runs the querySelector function from that variable and passes is '.exp-carousel__track' as its argument. The difference between a function and a variable is whether or not it is followed by parentheses (if it does have parentheses then it is a function).

__Functions in JavaScript:__

Functions can return nothing and just perform a process or they can return a value that can be passed in to a variable. The best way to know if it returns something is to look at your code if you wrote it or look it up if it is predefined.

---

Next, we need to store the buttons that we will use to traverse the carousel. These are the left and right buttons as well as the dots at the bottom of our carousel. The code looks like the following:

```javascript
const expNextButton = document.querySelector('.exp-carousel__button--right');
const expPrevButton = document.querySelector('.exp-carousel__button--left');
const expDotsNav = document.querySelector('.exp-carousel__nav');
const expDots = Array.from(expDotsNav.children);
```

We are setting our left & right buttons to expNextButton and expPrevButton, and we will take the same process as before to get an array of dots to expDots. We took the navigation bar for the carousel and set it to expDotsNav and took the children of it in an array and set it to expDots.

Next, we need the width of our slides so we can know how much to shift them when we click the buttons. To do this, we set a variable to the following:

```javascript
const expSlideWidth = expSlides[0].getBoundingClientRect().width;
```

Here, we get the first slide, get the rectangle that contains it with getBoundingClientRect, and then use its width property and assign it to expSlideWidth. This is possible because we know that the first slide will be the same size as every other slide in the carousel.

Now, we need to set every slide to be next to each other. To do this, we are going to create a function. The format for __arrow functions__, which is what we will be using for this website, looks like the following:

```javascript
const functionName = (arg1, arg2, etc) => {

    <insert steps here>

}
```

Where functionName is the name that we want to give the function, arg1, arg2, etc is the list of arguments we want to pass into the function surrounded by parentheses and inside the brackets we write the code we want for the function.

For the function that will set the position of the slides, we will use the following:

```javascript
// arrange slides next to one another

const expSetSlidePosition = (slide, index) => {

    slide.style.left = expSlideWidth * index + 'px';

}
```

In this function, we will take the slide and the index and we will set the left attribute of the slide to the general slide width multiplied by the index. This will set all slides right next to each other in the desired order. To do this, we need to add 'px' to the end of the value, as when taking in values for styling an attribute it requires it to be a string. To call this function, we do expSetSlidePosition(desiredSlide, slideIndex), where desiredSlide is the slide we want to shift and slideIndex is the index of the slide in the list.

---

Note: A string is characters that are all positioned in a way that makes a 'word'. A 'word' can include any character we want. A string is also denoted by having either single quotes or double quotes around it. 

Examples: 
```javascript
'aaa', "120", "500px", '1.5em', "**7shflakj^"
```

---

Next, we want to set all the slides to the position we want them in. To do this, we will call the function for every slide.

```javascript
expSlides.forEach(expSetSlidePosition);
```

This will call the function for every slide in expSlides. forEach goes through every instance in a list and runs the function desired inside the parentheses. Next, we need a function that will allow us to traverse through the slides. For this, we create a function that will let us move to the desired slide.

```javascript
const expMoveToSlide = (track, currentSlide, targetSlide) => {

    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('exp-current-slide');
    targetSlide.classList.add('exp-current-slide');

}
```

Here, we move the track to the leftmost point of the target slide. To do this, we use the transform attribute and add a translateX function that will move the slides to the left by however much the distance to the right the target slide is. If the target slide is to the left, we will receive a negative value and it will move to the right. Next, we need to set the exp-current-slide class to the new current slide and remove it from the old one. To do this, we take the currentSlide argument, take its classlist, and remove the desired class. For targetSlide, we do the same except we add the class rather than remove it.

Next, we want to be able to update the dots to reflect our current slide. For this, we use the same procedure to add and remove the current status that we did for the slides. It will look like this:

```javascript
const expUpdateDots = (currentDot, targetDot) => {

    currentDot.classList.remove('exp-current-slide');
    targetDot.classList.add('exp-current-slide');

}
```

Once we did this, we now know which our current slide is at all times and we have it guaranteed that the current slide will be the one showing in the carousel. Now we need to be able to traverse it. First, we will decide when the left and right buttons will appear, as it is nice for the buttons that we cannot click to disappear. We use the following function:

```javascript
const expHideShowArrows = (slides, prevButton, nextButton, targetIndex) => {

    if(targetIndex === 0) {

        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');

    } else if(targetIndex === slides.length - 1) {

        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');

    } else {

        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');

    }

}
```

Here, it is important to note that the is-hidden class determines whether or not you can see the button. When an object has the is-hidden class, we will not be able to see the object on the screen. To decide when to add and remove the class, we use if statements. When we are moving into the first index, which is when targetIndex is 0, we will add the is-hidden class to the previous button, as there is no previous slide and remove it from the next button in case it is hidden. When moving into the last index, which is when targetIndex is slides.length - 1, we will add the is-hidden class to the next button and remove it from the previous button. Otherwise, we will remove it from both so that both buttons show up.

Next, we want to add event listeners for the buttons we have. This will make it so that when we click on the buttons we have, it will perform our desired action. First, we will handle the previous button:

```javascript
// when I click left, move slides to the left

expPrevButton.addEventListener('click', e => {

    const currentSlide = expTrack.querySelector('.exp-current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = expDotsNav.querySelector('.exp-current-slide');
    const prevDot = currentDot.previousElementSibling;
    prevIndex = expSlides.findIndex(slide => slide === prevSlide);

    expMoveToSlide(expTrack, currentSlide, prevSlide);

    expUpdateDots(currentDot, prevDot);

    expHideShowArrows(expSlides, expPrevButton, expNextButton, prevIndex);

}) 
```

Here, we take the current and previous slides and dots and place them into variables by using the querySelector function and finding the exp-current-slide class on the slides track and dots track, and then taking the previous sibling element on the current ones. We also need the index that we are going to move to. To get this, we use the findIndex function from the expSlides list we created earlier and traverse the slides until we find prevSlide in the list. Next, we will call the functions that we made with the variables we created. We will use expTrack, currentSlide, and prevSlide to decide what slide to move to, currentDot and prevDot to decide which dot will light up, and we will use expSlides, expPrevButton, expNextButton, and prevIndex to decide what arrows will show.

---

Note: The event listener formatting looks like this:

```javascript
input.addEventListener('<event>', e => {

    <add steps here>

})
```

Where input is the button or input area we want to listen to, event is the type of event we are listening for (e.g. 'click'), and add steps here is where we leave the instructions for what the program should do when said event happens.

---

Next, we will do the same thing but for the next button.

```javascript
// when I click right, move slides to the right

expNextButton.addEventListener('click', e => {

    const currentSlide = expTrack.querySelector('.exp-current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = expDotsNav.querySelector('.exp-current-slide');
    const nextDot = currentDot.nextElementSibling;
    nextIndex = expSlides.findIndex(slide => slide === nextSlide);

    expMoveToSlide(expTrack, currentSlide, nextSlide);

    expUpdateDots(currentDot, nextDot);

    expHideShowArrows(expSlides, expPrevButton, expNextButton, nextIndex);

})
```

Here, the only changes I made are replacing the words prev and previous with next. This will make everything switch from looking for the previous slide to the next slide because of the way we formatted our code. This function does the same as the last function but moves to the next slide rather than the last.

Lastly, we want to be able to navigate the slides with the dots navigation bar. To do this, we use the following function:

```javascript
// when I click the nav indicators, move to selected slide

expDotsNav.addEventListener('click', e => {

    // what indicator did we click
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentSlide = expTrack.querySelector('.exp-current-slide');
    const currentDot = expDotsNav.querySelector('.exp-current-slide');
    const targetIndex = expDots.findIndex(dot => dot === targetDot);
    const targetSlide = expSlides[targetIndex];

    expMoveToSlide(expTrack, currentSlide, targetSlide);

    expUpdateDots(currentDot, targetDot);

    expHideShowArrows(expSlides, expPrevButton, expNextButton, targetIndex);

})
```

First, we get the target dot by checking the nearest button to where the event happened. If the targetDot does not exist, then return to end the function. If not, we need the information to move the slide, update the dots, and decide what arrows are going to show. To do this, we will use the same procedures to get the current slide and dot. Next, we need to get the index for the slide we will change to, which is done by using the findIndex function on expDots and traversing through every dot until it is the same as the targetDot. Then to get the targetSlide, we take our expSlides list and take the slide at the target index. After this, we will call expMoveToSlide, expUpdateDots, and expHideShowArrows the same way we did in the previous and next button listeners.

Once we have this, congratulations! You have finished building the carousel, which is the most difficult part of this guide. Give yourself a pat on the back for that. To see what it looks like, go ahead and run your live server and feel free to play around with it. After this, we can conclude the third week of creating your personal website!