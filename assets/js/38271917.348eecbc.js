"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[688],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:3},r="\ud83d\udd17 Linking Pages",l={unversionedId:"personal-website/Week 3/linking",id:"personal-website/Week 3/linking",title:"\ud83d\udd17 Linking Pages",description:"So previously, you got to work on having six files, known as copies of your index/home file. Listed below are the files you should have.",source:"@site/docs/personal-website/Week 3/linking.md",sourceDirName:"personal-website/Week 3",slug:"/personal-website/Week 3/linking",permalink:"/docs/personal-website/Week 3/linking",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/personal-website/Week 3/linking.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3}},s={},p=[{value:"\u2795 Adding links",id:"-adding-links",level:2},{value:"\ud83d\uddc2 Proper file organizaiton",id:"-proper-file-organizaiton",level:2},{value:"\u23e9 Commit &amp; Push",id:"-commit--push",level:2},{value:"\ud83c\udf89 Congratulations! You have completed this section \ud83e\udd73",id:"-congratulations-you-have-completed-this-section-",level:3},{value:"\ud83c\udf88 Thank you for joining us this week! We look forward to you continuing.\ud83e\udd13",id:"-thank-you-for-joining-us-this-week-we-look-forward-to-you-continuing",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-linking-pages"},"\ud83d\udd17 Linking Pages"),(0,o.kt)("p",null,"So previously, you got to work on having six files, known as copies of your index/home file. Listed below are the files you should have."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. img folder - for images\n2. index.html - home page\n3. about.html - about page\n4. projects.html - projects page\n5. involvement.html - involvement page\n6. styles.css - styles file, more useful later\n")),(0,o.kt)("p",null,"Now, lets get to the real deal..."),(0,o.kt)("h2",{id:"-adding-links"},"\u2795 Adding links"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open your index.html file in VSCode, and locate the navbar section"),(0,o.kt)("li",{parentName:"ol"},"Locate the navbar section within the body tag. Your navbar should look something like this")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<nav class="navbar navbar-expand-lg navbar-dark bg-dark">\n    <a class="navbar-brand" href="#">Navbar</a>\n    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">\n        <span class="navbar-toggler-icon"></span>\n    </button>\n    <div class="collapse navbar-collapse" id="navbarNavDropdown">\n        <ul class="navbar-nav">\n        <li class="nav-item active">\n            <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>\n        </li>\n        <li class="nav-item">\n            <a class="nav-link" href="#">About</a>\n        </li>\n        <li class="nav-item">\n            <a class="nav-link" href="#">Projects</a>\n        </li>\n        <li class="nav-item">\n            <a class="nav-link" href="#">Involvement</a>\n        </li>\n        <li class="nav-item">\n            <a class="nav-link" href="#">Resume</a>\n        </li>\n        </ul>\n    </div>\n</nav>\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"See where it says ",(0,o.kt)("inlineCode",{parentName:"li"},'<a class="nav-link" href="#">Projects</a>'),"? Replace the ",(0,o.kt)("inlineCode",{parentName:"li"},"#")," with the respective file name, in this case, projects.html"),(0,o.kt)("li",{parentName:"ol"},"Repeat for all navbar links, ",(0,o.kt)("strong",{parentName:"li"},"except")," the resume page for now.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You don't have to do this now, but if you want to get ahead...",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Drag & drop your resume file into the same file as your repo"),(0,o.kt)("li",{parentName:"ol"},"Once you have your resume file name, replace the ",(0,o.kt)("inlineCode",{parentName:"li"},"#")," with it."))),(0,o.kt)("li",{parentName:"ul"},"Such as if my file name is ",(0,o.kt)("inlineCode",{parentName:"li"},"Geronimo_Paula_Resume.pdf"),", the one like will look like ",(0,o.kt)("inlineCode",{parentName:"li"},'<a class="nav-link" href="Geronimo_Paula_Resume.pdf">Resume</a>'))))),(0,o.kt)("h2",{id:"-proper-file-organizaiton"},"\ud83d\uddc2 Proper file organizaiton"),(0,o.kt)("p",null,"Minor changes to all files ",(0,o.kt)("strong",{parentName:"p"},"but")," the index.html file will include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Removing the ",(0,o.kt)("inlineCode",{parentName:"li"},"<div></div>")," consisting of the home page's background & text"),(0,o.kt)("li",{parentName:"ul"},"Replacing the old navbar to the updated navbar")),(0,o.kt)("p",null,"If you know how to do that, go ahead. For more detailed steps, follow them bellow."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Remove the div consisting of what we added to the home page. It should look something like this:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div class="text-center align-self-center">\n    <p class="name text-center h1">Paula L. Geronimo</p>\n    <p class="text-center h1 backtext">Texas A&M\'23</p>\n    <p class="text-center h2 backtext">Technology Management</p>\n</div>\n')),(0,o.kt)("p",null,"with your information instead, of course. Remove it from all the other files. For file management, instead of openeing one by one on a different VSCode window, you have tabs to toggle from.\n2. Once you have removed that from every file, go ahead and select, copy ",(0,o.kt)("em",{parentName:"p"},"everything")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<navbar></navbar>")," tag, ",(0,o.kt)("em",{parentName:"p"},"then")," select the old navbar in your other file, and paste."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"copy &amp; paste navbar",src:n(3461).Z,width:"600",height:"338"}),"\n3. Select & paste for every file."),(0,o.kt)("h2",{id:"-commit--push"},"\u23e9 Commit & Push"),(0,o.kt)("p",null,"Your github edits should just consist of changed you made this week. Open up Github Desktop to view. It should look like this"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"github changes",src:n(5323).Z,width:"1416",height:"1190"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Write your summary "Week 3 changes and updates" with an optional detailed description'),(0,o.kt)("li",{parentName:"ol"},"Commit to ",(0,o.kt)("strong",{parentName:"li"},"main")),(0,o.kt)("li",{parentName:"ol"},"Push your changes, and now, head on over to your website ",(0,o.kt)("em",{parentName:"li"},"username"),".github.io to view live updated changes.")),(0,o.kt)("h3",{id:"-congratulations-you-have-completed-this-section-"},"\ud83c\udf89 Congratulations! You have completed this section \ud83e\udd73"),(0,o.kt)("h2",{id:"-thank-you-for-joining-us-this-week-we-look-forward-to-you-continuing"},"\ud83c\udf88 Thank you for joining us this week! We look forward to you continuing.\ud83e\udd13"),(0,o.kt)("p",null,"\ud83d\udca1",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://forms.gle/YMrVupARi3CPyzQYA"},"Feedback HERE")),"\ud83e\udd14"))}c.isMDXComponent=!0},5323:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/edited-files-579bb0ded07ebb4c84d73051e34772d0.png"},3461:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/navcopy-paste-edf3aeceef00eb48769d545c72b41f28.gif"}}]);