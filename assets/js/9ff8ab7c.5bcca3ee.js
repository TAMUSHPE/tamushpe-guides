"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[2928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(h,u(u({ref:t},p),{},{components:n})):r.createElement(h,u({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function u(e){let{children:t,hidden:n,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),a=n(7294),o=n(6010),u=n(2389),i=n(7392),l=n(7094),s=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n;const{lazy:u,block:m,defaultValue:d,values:h,groupId:b,className:f}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,i.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,l.U)(),[O,T]=(0,a.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=b){const e=w[b];null!=e&&e!==O&&y.some((t=>t.value===e))&&T(e)}const I=e=>{const t=e.currentTarget,n=E.indexOf(t),r=y[n].value;r!==O&&(x(t),T(r),null!=b&&N(b,String(r)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=E.indexOf(e.currentTarget)+1;n=null!=(r=E[t])?r:E[0];break}case"ArrowLeft":{var a;const t=E.indexOf(e.currentTarget)-1;n=null!=(a=E[t])?a:E[E.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},f)},y.map((e=>{let{value:t,label:n,attributes:u}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:C,onFocus:I,onClick:I},u,{className:(0,o.Z)("tabs__item",c,null==u?void 0:u.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,u.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),o=n(5488),u=n(5162);const i={sidebar_position:2},l="User Input",s={unversionedId:"python/user-input-output/basic-user-input",id:"python/user-input-output/basic-user-input",title:"User Input",description:"This section covers the basics of how to collect user input, provides coding examples, and reveals some useful tips to help you out when programming.",source:"@site/docs/python/user-input-output/basic-user-input.md",sourceDirName:"python/user-input-output",slug:"/python/user-input-output/basic-user-input",permalink:"/docs/python/user-input-output/basic-user-input",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/python/user-input-output/basic-user-input.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"pythonSidebar",previous:{title:"Introduction",permalink:"/docs/python/user-input-output/introduction"},next:{title:"User Output",permalink:"/docs/python/user-input-output/basic-user-output"}},p={},c=[{value:"Input Function",id:"input-function",level:2},{value:"Working With Numbers",id:"working-with-numbers",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-input"},"User Input"),(0,a.kt)("p",null,"This section covers the basics of how to collect user input, provides coding examples, and reveals some useful tips to help you out when programming."),(0,a.kt)("h2",{id:"input-function"},"Input Function"),(0,a.kt)("p",null,"In Python, you can collect input from the user by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," function. Although it is unnecessary, you always want to provide a message including what you want to collect from the user. The example below shows me collecting a user's name and printing it."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Stores user input in a variable called name\nname = input("Enter your first name: ")\n\n# Prints the users name\nprint("Your name is:", name)\n'))),(0,a.kt)(u.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,a.kt)("p",null,"If our input is ",(0,a.kt)("inlineCode",{parentName:"p"},"Jonathan"),", then our output would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Your name is: Jonathan\n")))),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Input collected from the user will always be a String!!"))),(0,a.kt)("h2",{id:"working-with-numbers"},"Working With Numbers"),(0,a.kt)("p",null,"In engineering, it's pretty common to collect numbers from users; however, since the input is a string, we must cast it to an ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"float")," (usually float) if we want to do math with it."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Collects 2 numbers from a user and casts them to floats\nnum1 = float(input("Enter a number: "))\nnum2 = float(input("Enter a number: "))\n\n# Prints the sum of num1 and num2\nprint("num1 + num2 = ", num1 + num2)\n'))),(0,a.kt)(u.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,a.kt)("p",null,"If our inputs are ",(0,a.kt)("inlineCode",{parentName:"p"},"12")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"343"),", then our output would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"num1 + num2 = 355.0\n")))))}d.isMDXComponent=!0}}]);