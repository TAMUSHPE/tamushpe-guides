"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[9972],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2736:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:2},s="\ud83e\udd3f Let's dive deeper into HTML and CSS",i={unversionedId:"personal-website3/Week-2/html_css_comments",id:"personal-website3/Week-2/html_css_comments",title:"\ud83e\udd3f Let's dive deeper into HTML and CSS",description:"In our index.html and main.css we are going to create ID's and classes. Now, what do each of them do and when should I use one or the other? That's a great question Diego, let's talk about it.",source:"@site/docs/personal-website3/Week-2/html_css_comments.md",sourceDirName:"personal-website3/Week-2",slug:"/personal-website3/Week-2/html_css_comments",permalink:"/docs/personal-website3/Week-2/html_css_comments",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/personal-website3/Week-2/html_css_comments.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"ultimatePersonalWebsiteSidebar",previous:{title:"\ud83e\udd28 What is Bootstrap?",permalink:"/docs/personal-website3/Week-2/boostrap"},next:{title:"\ud83d\uddbc\ufe0f Margins vs. Padding",permalink:"/docs/personal-website3/Week-2/margins_padding"}},l={},c=[{value:"Summary:",id:"summary",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-lets-dive-deeper-into-html-and-css"},"\ud83e\udd3f Let's dive deeper into HTML and CSS"),(0,o.kt)("p",null,"In our ",(0,o.kt)("strong",{parentName:"p"},"index.html")," and ",(0,o.kt)("strong",{parentName:"p"},"main.css")," we are going to create ID's and classes. Now, what do each of them do and when should I use one or the other? That's a great question Diego, let's talk about it."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://media4.giphy.com/media/As7dzE5IDlM3ygg61X/giphy.gif?cid=6c09b9523lr2i0qvtxxx9adw2chrgktes3cm4hpk291rp41y&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",alt:"Oprah"})),(0,o.kt)("p",null,"You use classes and IDs for the same purpose: you create something in your HTML file and then can change the appearance of that certain object with its class or ID. However, classes can be used multiple times while IDs can only be used once. Therefore, if you are creating something that you are only going to use once on your website, you should probably add the ID attribute rather than the class one. Classes are great for when you create a tile that you want to duplicate over and over again, let's say for your experience section. "),(0,o.kt)("p",null,"Let's see an example of this would look both in your HTML and your css file."),(0,o.kt)("p",null,"Your ",(0,o.kt)("strong",{parentName:"p"},"index.html")," is where you create/assign classes and IDs. For instance, let's take a look at some of the code will be writing in a second:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<nav class="navbar navbar-default fixed-top navbar-expand-lg navbar-dark" id="navbar-hide">\n')),(0,o.kt)("p",null,"The first thing I want you to notice from the code above, is that the ",(0,o.kt)("strong",{parentName:"p"},"nav")," object is going to be a part of the classes: ",(0,o.kt)("strong",{parentName:"p"},"navbar, navbar-default, fixed-top, navbar-expand-lg,")," and ",(0,o.kt)("strong",{parentName:"p"},"navbar-dark"),". These are the classes that we are accessing from Bootstrap! \ud83d\udd25"),(0,o.kt)("p",null,"Secondly, we are creating an ID for this same ",(0,o.kt)("strong",{parentName:"p"},"nav")," object: ",(0,o.kt)("strong",{parentName:"p"},"navbar-hide"),". "),(0,o.kt)("p",null,"You might be wondering woahhhhh Sir Diego, there's both classes and an ID is that okay? This is a totally valid question, but yes, it is completely fine to do this. What would make no sense was if you created two IDs for the same thing. That's like you having two first names, I can call you by either one but does it really make sense for you to tell me both? Not really right? Well, it's the same thing for IDs."),(0,o.kt)("p",null,"Now, to change certain parts of said classes and IDs we go into our ",(0,o.kt)("strong",{parentName:"p"},"main.css")," file."),(0,o.kt)("p",null,"To access a class, you do .className{}. For example let's say we have a class called ",(0,o.kt)("strong",{parentName:"p"},"mainPage")," and that contains everything inside the main part of the website. We can change the background color for this section by doing the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".mainPage{\n    background-color: black;\n}\n")),(0,o.kt)("p",null,"To access IDs, it almost the same thing but now we put a # in front instead of a period. So we can say we gave an ID for the title of our website where we are going to put our name called ",(0,o.kt)("strong",{parentName:"p"},"titleName"),". What if we want to change the font? Well, let's take a look:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"#titleName{\n    font-family: 'Times New Roman';\n    color: #07575b /* Cool blue */;\n}\n")),(0,o.kt)("h3",{id:"summary"},"Summary:"),(0,o.kt)("p",null,"Classes - Great for items that you want to use the format again for."),(0,o.kt)("p",null,"IDs - Great for specific items that will only be needed once."))}u.isMDXComponent=!0}}]);