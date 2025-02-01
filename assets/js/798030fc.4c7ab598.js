"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[9915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=l.createContext({}),c=function(e){var t=l.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return l.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(a,".").concat(m)]||u[m]||p[m]||o;return n?l.createElement(k,i(i({ref:t},d),{},{components:n})):l.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var l=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},i="\ud83e\uddbf Skills HTML",s={unversionedId:"new-personal-website/Week-5/skills_html",id:"new-personal-website/Week-5/skills_html",title:"\ud83e\uddbf Skills HTML",description:"To begin, we will add a container that will hold all the content. To do this, we do the following:",source:"@site/docs/new-personal-website/Week-5/skills_html.md",sourceDirName:"new-personal-website/Week-5",slug:"/new-personal-website/Week-5/skills_html",permalink:"/docs/new-personal-website/Week-5/skills_html",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/new-personal-website/Week-5/skills_html.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2}},a={},c=[],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-skills-html"},"\ud83e\uddbf Skills HTML"),(0,r.kt)("p",null,"To begin, we will add a container that will hold all the content. To do this, we do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Skills --\x3e\n\n<div id="skills">\n</div>\n')),(0,r.kt)("p",null,"Next, we will add the header and the container for our blocks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div id="skills">\n\n    <h1>Skills</h1>\n\n    <div id="skills-block-container">        \n    </div>\n\n</div>\n')),(0,r.kt)("p",null,"The block container will be used to make sure our skills content is in line and centered. This will make the skills easily legible and consistent. Now we need to add the skill blocks. We will use the following format for the blocks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'    <div id="skills-block-container">\n        <div class="skills-block">\n            <img src="images/html-logo.svg" alt="">\n            <h3>HTML</h3>\n        </div>\n    </div>\n')),(0,r.kt)("p",null,'Where the skills-block will contain the image and name of the skill, the img tag holds the image (don\'t forget to change the src property to your image), and the h3 tag will hold the name of your skill. To add multiple skills, simply add more "blocks" with the same format like so:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'    <div id="skills-block-container">\n        \x3c!-- old block starts --\x3e\n        <div class="skills-block">\n            <img src="images/html-logo.svg" alt="">\n            <h3>HTML</h3>\n        </div>\n        \x3c!-- old block ends, new block begins --\x3e\n        <div class="skills-block">\n            <img src="images/css-logo.svg" alt="">\n            <h3>CSS</h3>\n        </div>\n        \x3c!-- new block ends --\x3e\n    </div>\n')),(0,r.kt)("p",null,"Once you have all your blocks set up, we can move to styling our skills page."))}p.isMDXComponent=!0}}]);