"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),i=n(6010),o=n(2389),l=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:f,groupId:h,className:v}=e,w=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:w.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=w.find((e=>e.props.default)))?void 0:n.props.value)?t:w[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:N}=(0,s.U)(),[T,O]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=h){const e=k[h];null!=e&&e!==T&&b.some((t=>t.value===e))&&O(e)}const C=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==T&&(E(t),O(a),null!=h&&N(h,String(a)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;n=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},v)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:P,onFocus:C,onClick:C},o,{className:(0,i.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(w.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},w.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},7096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),o=n(5162);const l={sidebar_position:3},s="\u270d\ufe0f Writing to Files",u={unversionedId:"python/file-input-output/writing-files",id:"python/file-input-output/writing-files",title:"\u270d\ufe0f Writing to Files",description:"",source:"@site/docs/python/file-input-output/writing-files.md",sourceDirName:"python/file-input-output",slug:"/python/file-input-output/writing-files",permalink:"/docs/python/file-input-output/writing-files",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/python/file-input-output/writing-files.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"pythonSidebar",previous:{title:"\ud83e\udd13 Reading from Files",permalink:"/docs/python/file-input-output/reading-files"},next:{title:"Extra Resources",permalink:"/docs/python/resources/"}},p={},c=[{value:"Writing basics",id:"writing-basics",level:2},{value:"Append to a file",id:"append-to-a-file",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ufe0f-writing-to-files"},"\u270d\ufe0f Writing to Files"),(0,r.kt)("p",null,"Knowing how to write to files with Python can be a very useful skill to have in your engineering career. This section covers the basics of writing to files."),(0,r.kt)("h2",{id:"writing-basics"},"Writing basics"),(0,r.kt)("p",null,"We can write and print information to a new file using the ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," function as shown below. In this example, we're overwriting the old content of testFile.txt with a new message. The Python code prints the old content of the file, writes a new message, and then prints the new content of the file. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Old Content of")," ",(0,r.kt)("inlineCode",{parentName:"p"},"testFile.txt")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Howdy!\nThis is a test file!\nYou're doing great! :)\n")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Opening a file\nmyFile = open("testFile.txt", "r+")  # allows reading and writing to a file\n\n# Writing to a file\nmyFile.write("Tech Affairs is awesome!!")\n\n# Reading our new text\nprint(\'\\nNew content:\\n\', myFile.read())\n'))),(0,r.kt)(o.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"New content:\nTech Affairs is awesome!!\n")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If a file with the given filename doesn't exist, a new file with that name will be created."))),(0,r.kt)("h2",{id:"append-to-a-file"},"Append to a file"),(0,r.kt)("p",null,"We can see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"w")," permission causes Python to overwrite old content from a file, however, if we want to keep the old information and add on to it, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," permission instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"w")," as shown below."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Old Content of")," ",(0,r.kt)("inlineCode",{parentName:"p"},"testFile.txt")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Howdy!\nThis is a test file!\nYou're doing great! :)\n")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Opening a file\nmyFile = open("testFile.txt", "a+")  # allows appending and reading a file\n\n# Writing to the end of a file\nmyFile.write("This is new content!")\n\n# Reading our new text\nprint(\'New content:\\n\', myFile.read())\n'))),(0,r.kt)(o.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"New content:\nHowdy!\nThis is a test file!\nYou're doing great! :)\nThis is new content!\n")))))}m.isMDXComponent=!0}}]);