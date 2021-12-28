"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[9176],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3210:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i={"sidebar-position":4},s="\ud83c\udfa0 Image Carousel",l={unversionedId:"personal-website/Week 4/carousel",id:"personal-website/Week 4/carousel",isDocsHomePage:!1,title:"\ud83c\udfa0 Image Carousel",description:"Sample carousel",source:"@site/docs/personal-website/Week 4/carousel.md",sourceDirName:"personal-website/Week 4",slug:"/personal-website/Week 4/carousel",permalink:"/docs/personal-website/Week 4/carousel",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/personal-website/Week 4/carousel.md",tags:[],version:"current",frontMatter:{"sidebar-position":4},sidebar:"personalWebsiteSidebar",previous:{title:"\ud83d\udc64 About",permalink:"/docs/personal-website/Week 4/about"},next:{title:"\ud83d\udc7e GitHub",permalink:"/docs/personal-website/Resources/github"}},c=[{value:"\ud83d\uddbc Adding images",id:"-adding-images",children:[]},{value:"Code carousel",id:"code-carousel",children:[{value:"\ud83d\udcac Carousel with captions",id:"-carousel-with-captions",children:[]},{value:"\ud83c\udf89 Congratulations! You have completed this section \ud83e\udd73",id:"-congratulations-you-have-completed-this-section-\ud83e\udd73",children:[]}]},{value:"\ud83c\udf88 Thank you for joining us this week! We look forward to you continuing.\ud83e\udd13",id:"-thank-you-for-joining-us-this-week-we-look-forward-to-you-continuing",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-image-carousel"},"\ud83c\udfa0 Image Carousel"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://csshint.com/wp-content/uploads/2020/08/Simple-Bootstrap-Carousel.gif",alt:"Sample carousel"})),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.0/components/carousel/"},"this link")," to explore the different options for carousels and how to make them work"),(0,r.kt)("p",null,"Keep the following in mind"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use padding to minimize picture distortion"),(0,r.kt)("li",{parentName:"ul"},"add a caption to each picture"),(0,r.kt)("li",{parentName:"ul"},"add a gradient to the pictures to highlight the caption"),(0,r.kt)("li",{parentName:"ul"},"format the carousel so all pictures fit inside a certain dimension (minimize the resizing of carousel while changing pictures)"),(0,r.kt)("li",{parentName:"ul"},"Google different bootstrap carousels to get inspired of the several available")),(0,r.kt)("h2",{id:"-adding-images"},"\ud83d\uddbc Adding images"),(0,r.kt)("p",null,"We currently have our images folder ",(0,r.kt)("inlineCode",{parentName:"p"},"img")," where we will store the pictures you want on your carousel."),(0,r.kt)("p",null,"Either drag & drop your selected images to the img folder or download them to that file."),(0,r.kt)("p",null,"Once you view the code below, replace the ",(0,r.kt)("inlineCode",{parentName:"p"},'"..."')," in source (src) in ",(0,r.kt)("inlineCode",{parentName:"p"},'<img class="d-block w-100" src="..." alt="First slide">')," with the name of the file, such as ",(0,r.kt)("inlineCode",{parentName:"p"},'src="img/shpe-convention.jpeg"')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"make sure you put ",(0,r.kt)("inlineCode",{parentName:"em"},"img/")," before the name of the image"))),(0,r.kt)("h2",{id:"code-carousel"},"Code carousel"),(0,r.kt)("p",null,"Below is a plain carousel example with indicators. Carousels don\u2019t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content."),(0,r.kt)("p",null,"This code will go ",(0,r.kt)("strong",{parentName:"p"},"below")," your short bio, which is below your navbar, and ",(0,r.kt)("strong",{parentName:"p"},"above")," the footer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">\n  <ol class="carousel-indicators">\n    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>\n    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>\n    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>\n  </ol>\n  <div class="carousel-inner">\n    <div class="carousel-item active">\n      <img class="d-block w-100" src="..." alt="First slide">\n    </div>\n    <div class="carousel-item">\n      <img class="d-block w-100" src="..." alt="Second slide">\n    </div>\n    <div class="carousel-item">\n      <img class="d-block w-100" src="..." alt="Third slide">\n    </div>\n  </div>\n  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">\n    <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n    <span class="sr-only">Previous</span>\n  </a>\n  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">\n    <span class="carousel-control-next-icon" aria-hidden="true"></span>\n    <span class="sr-only">Next</span>\n  </a>\n</div>\n')),(0,r.kt)("h3",{id:"-carousel-with-captions"},"\ud83d\udcac Carousel with captions"),(0,r.kt)("p",null,"Add captions to your slides easily with the ",(0,r.kt)("inlineCode",{parentName:"p"},".carousel-caption")," element within any ",(0,r.kt)("inlineCode",{parentName:"p"},".carousel-item"),". They can be easily hidden on smaller viewports, as shown below, with optional display utilities. We hide them initially with ",(0,r.kt)("inlineCode",{parentName:"p"},".d-none")," and bring them back on medium-sized devices with ",(0,r.kt)("inlineCode",{parentName:"p"},".d-md-block"),"."),(0,r.kt)("p",null,"Code below is an example of how you could replace each carousel item to a carousel item ",(0,r.kt)("strong",{parentName:"p"},"WITH")," a caption."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<div class="carousel-item">\n  <img src="..." alt="...">\n  <div class="carousel-caption d-none d-md-block">\n    <h5>...</h5>\n    <p>...</p>\n  </div>\n</div>\n')),(0,r.kt)("p",null,"Now, commit + push ",(0,r.kt)("a",{parentName:"p",href:"https://tamushpe.github.io/tamushpe-guides/docs/personal-website/Week%203/pushing#:~:text=live%20website%20already!-,%23,-Calmados!%20We%20get"},"if you need a refresher")),(0,r.kt)("h3",{id:"-congratulations-you-have-completed-this-section-\ud83e\udd73"},"\ud83c\udf89 Congratulations! You have completed this section \ud83e\udd73"),(0,r.kt)("h2",{id:"-thank-you-for-joining-us-this-week-we-look-forward-to-you-continuing"},"\ud83c\udf88 Thank you for joining us this week! We look forward to you continuing.\ud83e\udd13"),(0,r.kt)("p",null,"\ud83d\udca1",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://forms.gle/szkqVAN2Cb31KDAE6"},"Feedback HERE")),"\ud83e\udd14"))}p.isMDXComponent=!0}}]);