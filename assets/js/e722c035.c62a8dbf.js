"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[6774],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>b});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(o),b=r,f=d["".concat(l,".").concat(b)]||d[b]||p[b]||a;return o?n.createElement(f,s(s({ref:t},u),{},{components:o})):n.createElement(f,s({ref:t},u))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8715:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:4},s="\ud83d\udc5e Footer",i={unversionedId:"new-personal-website/Week-5/footer",id:"new-personal-website/Week-5/footer",title:"\ud83d\udc5e Footer",description:"For this footer, we will be using Bootstrap again as it makes it easier to create it. Our goal is to have it work similar to the navbar, only that it appears at the bottom of the page rather than the top.",source:"@site/docs/new-personal-website/Week-5/footer.md",sourceDirName:"new-personal-website/Week-5",slug:"/new-personal-website/Week-5/footer",permalink:"/docs/new-personal-website/Week-5/footer",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/new-personal-website/Week-5/footer.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4}},l={},c=[],u={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-footer"},"\ud83d\udc5e Footer"),(0,r.kt)("p",null,"For this footer, we will be using Bootstrap again as it makes it easier to create it. Our goal is to have it work similar to the navbar, only that it appears at the bottom of the page rather than the top."),(0,r.kt)("p",null,"To begin, we will create a container for the footer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Footer --\x3e\n\n<div id="footer-container">\n</div>\n')),(0,r.kt)("p",null,"Next, we will add the Bootstrap footer inside of this container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div id="footer-container">\n    <footer class="py-3">\n\n        <ul id="footerLine" class="nav justify-content-center border-bottom pb-3 mb-3">\n        </ul>\n        <p id="bottomFooter" class="text-center">Email: <a href="mailto:reveille@gmail.com">reveille@gmail.com</a></p>\n    \n    </footer>\n</div>\n')),(0,r.kt)("p",null,"Here, we use the class py-3 on the footer to add vertical padding of value 3 (p = padding, y = y-axis). In ul tag, we have many classes, where nav makes it act like a navbar, justify-content-center centers the content horizontally, border-bottom gives it a border in the bottom of the container, pb-3 gives padding at the bottom of value 3, and mb-3 gives it a margin at the bottom of value 3. In the p tag, we also use a class text-center to center the text within the container. These are all classes that act this way because we added Bootstrap to our ",(0,r.kt)("strong",{parentName:"p"},"index.html")," file, without it these classes would not do anything."),(0,r.kt)("p",null,"Next up, we want to add the buttons to the footer. We will add all the same buttons we added to the navbar."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'        <ul id="footerLine" class="nav justify-content-center border-bottom pb-3 mb-3">\n            <li class="nav-item">\n                <button class="btn me-4 footerBtn" type="button">About</button></li>\n                    <li class="nav-item"><button class="btn me-4 footerBtn" type="button">Experiences</button></li>\n                    <li class="nav-item"><button class="btn me-4 footerBtn" type="button">Education</button></li>\n                    <li class="nav-item"><button class="btn me-4 footerBtn" type="button">Projects</button></li>\n                    <li class="nav-item"><button class="btn me-4 footerBtn" type="button">Skills</button></li>\n                    <li class="nav-item"><button class="btn me-4 footerBtn" type="button">Resume</button></li>\n        </ul>\n')),(0,r.kt)("p",null,"Here, we use Bootstrap to style the buttons differently than we did in the navbar. Here, we only use the classes btn and me-4, as footerBtn is a class that we create so we can add our own custom styling. The btn class defines it as a Bootstrap button, and me-4 gives a value of 4 to the sides of the button."),(0,r.kt)("p",null,"Once we have this, we can go ahead and add CSS to the footer and change the colors to our needs. Since we are only editing the colors, the CSS is not going to be very long. The following is what we used to style our footer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* Footer */\n\n#footer-container {\n\n    background-color: var(--dark-gray);\n\n}\n\n.footerBtn {\n\n    color: var(--gray);\n\n}\n\n.footerBtn:hover {\n\n    color: var(--red);\n\n}\n\n#bottomFooter {\n\n    color: var(--gray);\n\n}\n")),(0,r.kt)("p",null,"All we did was make our footer container dark gray, made our buttons light gray when left alone and red when the cursor hovers over them, and made the text at the bottom of the footer gray. Once done, go ahead and open up live server and your website should look complete! However, we are missing one crucial step to make your website start working: we need to make our navbar and footer buttons work. If you try clicking them right now, they will not do anything. We still need to add functionality to these buttons."))}p.isMDXComponent=!0}}]);