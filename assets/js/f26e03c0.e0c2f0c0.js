"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[9318],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,r=e.block,c=e.defaultValue,u=e.values,p=e.groupId,d=e.className,m=a.Children.toArray(e.children),f=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),y=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,b=o(),h=b.tabGroupChoices,v=b.setTabGroupChoices,g=(0,a.useState)(y),k=g[0],w=g[1],N=[];if(null!=p){var T=h[p];null!=T&&T!==k&&f.some((function(e){return e.value===T}))&&w(T)}var x=function(e){var t=e.currentTarget,n=N.indexOf(t),a=f[n].value;w(a),null!=p&&(v(p,a),setTimeout((function(){var e,n,a,r,o,i,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case"ArrowLeft":var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},3312:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(5064),l=n(8215),s={sidebar_position:1},c="Numbers",u={unversionedId:"python/basic-data/numbers",id:"python/basic-data/numbers",isDocsHomePage:!1,title:"Numbers",description:"There are two main numeric types in python that you'll see very often throughout this course: int and float. The main difference between these two types is that int acts as a whole number and floats can have decimals. Below is an example of how to initilize each type (very simple).",source:"@site/docs/python/basic-data/numbers.md",sourceDirName:"python/basic-data",slug:"/python/basic-data/numbers",permalink:"/docs/python/basic-data/numbers",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/python/basic-data/numbers.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"pythonSidebar",previous:{title:"Varaibles and Types",permalink:"/docs/python/python-fundamentals/python-variables-types"},next:{title:"Strings",permalink:"/docs/python/basic-data/strings"}},p=[{value:"Type Verification",id:"type-verification",children:[]},{value:"Floats",id:"floats",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"numbers"},"Numbers"),(0,o.kt)("p",null,"There are two main numeric types in python that you'll see very often throughout this course: int and float. The main difference between these two types is that int acts as a whole number and floats can have decimals. Below is an example of how to initilize each type (very simple)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Creates an int and float variable\nx = 1   # int\ny = 2.6 # float\n")),(0,o.kt)("h2",{id:"type-verification"},"Type Verification"),(0,o.kt)("p",null,"In Python you can verify the type of any object using the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," function."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Creates an int and float variable\nx = 1\ny = 3.13\n\n# Prints the type of x and y\nprint(type(x))\nprint(type(y))\n"))),(0,o.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<class 'int'>\n<class 'float'>\n")))),(0,o.kt)("h2",{id:"floats"},"Floats"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"float")," method to explicitly cast a string or number to a float. Any int can become a float, however only strings containing numberic characters can be casted to floats. The word ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello")," cant be casted to a float, however the string ",(0,o.kt)("inlineCode",{parentName:"p"},'"123"')," can be casted to a float."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Creates string variable and prints its type\ny = "3.13"\nprint(y, type(y))\n\n# Casts y to a float and prints its type\ny = float(y)\nprint(y, type(y))\n'))),(0,o.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"3.13 <class 'str'>\n3.13 <class 'float'>\n")))),(0,o.kt)("h1",{id:"integers"},"Integers"),(0,o.kt)("p",null,"Sinilar to a float, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"int")," method to explicitly cast a string or number to an integer. Any number can become an int, however only strings containing numberic characters can be casted to ints. The word ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello")," can't be casted to a int, however the string ",(0,o.kt)("inlineCode",{parentName:"p"},'"123"')," can be casted to a int."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Creates string variable and prints its type\ny = "3.13"\nprint(type(y))\n\n# Casts y to an int and prints its type\ny = int(y)\nprint(type(y))\n'))),(0,o.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"3.13 <class 'str'>\n3 <class 'int'>\n")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note that when casting a number to an int, any existing decimals will be dropped since an integer is a whole number."))))}m.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);