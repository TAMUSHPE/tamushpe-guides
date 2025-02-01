"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[9596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),g=o,m=h["".concat(l,".").concat(g)]||h[g]||u[g]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="\ud83e\udd16 Cloning Your Repository",s={unversionedId:"personal-website3/Week-1/cloning",id:"personal-website3/Week-1/cloning",title:"\ud83e\udd16 Cloning Your Repository",description:"First of all, what is a repository? In simple terms, it's a place where you keep all your files for project and that also keeps all the versions of your project. Meaning that if you update it but later want to access what it was like a year ago you can!",source:"@site/docs/personal-website3/Week-1/cloning.md",sourceDirName:"personal-website3/Week-1",slug:"/personal-website3/Week-1/cloning",permalink:"/docs/personal-website3/Week-1/cloning",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/personal-website3/Week-1/cloning.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"ultimatePersonalWebsiteSidebar",previous:{title:"\u2699\ufe0f Setting Up Your Environment",permalink:"/docs/personal-website3/intro/environment"},next:{title:"\ud83d\ude01 HTML Setup",permalink:"/docs/personal-website3/Week-1/html-setup"}},l={},p=[],c={toc:p};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-cloning-your-repository"},"\ud83e\udd16 Cloning Your Repository"),(0,o.kt)("p",null,"First of all, what is a ",(0,o.kt)("em",{parentName:"p"},"repository"),"? In simple terms, it's a place where you keep all your files for project and that also keeps all the versions of your project. Meaning that if you update it but later want to access what it was like a year ago you can! "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExamtyNGJjaWhjNGp6b3M0dTJrbm02bWRreXF3Nzk0M3VhOXhkb2s2dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OyDFFr0YAkeS3yBVJy/giphy-downsized-large.gif",alt:"pretty cool"})),(0,o.kt)("p",null,"That either sounded mad cool or wack, but either way it's important for a personal website as we are going to display our websites using GitHub. "),(0,o.kt)("p",null,"First order of business, let's make a repository. Remember, ",(0,o.kt)("strong",{parentName:"p"},"DO NOT USE GITHUB DESKTOP"),". Go to GitHub website and log into your account. From there, on the top right corner of the screen look for a plus sign (+). Click that and then click 'New Repository'. Name the repository however you want that makes sense with your project. For instance, something like personal-website. ",(0,o.kt)("strong",{parentName:"p"},"Make sure there are no spaces in your name"),". "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GitHub Cloning Image",src:n(2913).Z,width:"1255",height:"451"})),(0,o.kt)("p",null,"Once the repository is made, there should be something in the middle that seems like a link. This is an HTTPS link that you can copy by clicking the copy button at the very right of the bar."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Git Clone in VSCode",src:n(6928).Z,width:"2184",height:"898"})),(0,o.kt)("p",null,"Now, open ",(0,o.kt)("strong",{parentName:"p"},"Visual Studio Code"),' and click on the button which says "Clone Git Repository" and put the same link you copied in this menu and press ',(0,o.kt)("strong",{parentName:"p"},"Clone from GitHub"),"."),(0,o.kt)("p",null,"After this, we will configure our Git with our GitHub in VSCode."),(0,o.kt)("p",null,"To access your terminal: You can click on ",(0,o.kt)("strong",{parentName:"p"},"View")," on the top navbar of the screen, then ",(0,o.kt)("strong",{parentName:"p"},"terminal")," on the dropdown menu. Once we open the terminal, let's make sure we're in Git Bash. It should say this at the top right of your terminal:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Powershell",src:n(5809).Z,width:"272",height:"56"})),(0,o.kt)("p",null,"We need to click that bottom arrow which will give us a drop down menu. From here we can select, ",(0,o.kt)("strong",{parentName:"p"},"Git Bash"),". Your terminal should look something like this once you have switched to Git Bash."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GitBash",src:n(1701).Z,width:"2604",height:"482"})),(0,o.kt)("p",null,"Okay from here, we're going to ",(0,o.kt)("strong",{parentName:"p"},"type")," both of the following in the terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'git config --global user.name "YourUserNameOnGitHub"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'git config --global user.email "YourEmail"\n')),(0,o.kt)("p",null,"Keep the quotations around your username and email, but make sure to replace each with the respective input. After its written correctly, make sure to press ",(0,o.kt)("strong",{parentName:"p"},"Enter"),"."),(0,o.kt)("p",null,"Niceee, now you've successfully cloned your repository and connected your Git to your GitHub!"))}u.isMDXComponent=!0},1701:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/git-bash-3a51d7ca9811435861928de00c20611a.png"},6928:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gitCloneVSCode-2571febd2dc515ab7dba1cbb3837108e.png"},2913:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/githubCloning-f5250cc1e7739f658eb0b4b9b2527c71.png"},5809:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);