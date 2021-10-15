---
sidebar-position: 4
---

# 🎠 Image Carousel

![Sample carousel](http://csshint.com/wp-content/uploads/2020/08/Simple-Bootstrap-Carousel.gif)

Use [this link](https://getbootstrap.com/docs/4.0/components/carousel/) to explore the different options for carousels and how to make them work

Keep the following in mind

- use padding to minimize picture distortion
- add a caption to each picture
- add a gradient to the pictures to highlight the caption
- format the carousel so all pictures fit inside a certain dimension (minimize the resizing of carousel while changing pictures)
- Google different bootstrap carousels to get inspired of the several available

## 🖼 Adding images

We currently have our images folder ``img`` where we will store the pictures you want on your carousel.

Either drag & drop your selected images to the img folder or download them to that file.

Once you view the code below, replace the ```"..."``` in source (src) in ```<img class="d-block w-100" src="..." alt="First slide">``` with the name of the file, such as ```src="img/shpe-convention.jpeg"```

***make sure you put ```img/``` before the name of the image***

## Code carousel

Below is a plain carousel example with indicators. Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content.

This code will go **below** your short bio, which is below your navbar, and **above** the footer.

```
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
```

### 💬 Carousel with captions

Add captions to your slides easily with the ``.carousel-caption`` element within any ```.carousel-item```. They can be easily hidden on smaller viewports, as shown below, with optional display utilities. We hide them initially with ```.d-none``` and bring them back on medium-sized devices with ```.d-md-block```.

Code below is an example of how you could replace each carousel item to a carousel item **WITH** a caption.

```
<div class="carousel-item">
  <img src="..." alt="...">
  <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
</div>
```

Now, commit + push [if you need a refresher](https://tamushpe.github.io/tamushpe-guides/docs/personal-website/Week%203/pushing#:~:text=live%20website%20already!-,%23,-Calmados!%20We%20get)

### 🎉 Congratulations! You have completed this section 🥳

## 🎈 Thank you for joining us this week! We look forward to you continuing.🤓
💡*[Feedback HERE](https://forms.gle/szkqVAN2Cb31KDAE6)*🤔