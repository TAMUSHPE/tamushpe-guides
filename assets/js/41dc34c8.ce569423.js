"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[5e3],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),b=r,m=d["".concat(i,".").concat(b)]||d[b]||c[b]||o;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(7462),r=a(7294),o=a(6010),l=a(2389),s=a(7392),i=a(7094),u=a(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,a;const{lazy:l,block:d,defaultValue:b,values:m,groupId:f,className:v}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,s.l)(y,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===b?b:null!=(t=null!=b?b:null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)?t:h[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:O}=(0,i.U)(),[w,N]=(0,r.useState)(g),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=f){const e=T[f];null!=e&&e!==w&&y.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,a=C.indexOf(t),n=y[a].value;n!==w&&(x(t),N(n),null!=f&&O(f,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=C.indexOf(e.currentTarget)+1;a=null!=(n=C[t])?n:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;a=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},y.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:I,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function b(e){const t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},2292:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),l=a(5162);const s={sidebar_position:3},i="Booleans",u={unversionedId:"python/basic-data/booleans",id:"python/basic-data/booleans",title:"Booleans",description:"",source:"@site/docs/python/basic-data/booleans.md",sourceDirName:"python/basic-data",slug:"/python/basic-data/booleans",permalink:"/docs/python/basic-data/booleans",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/python/basic-data/booleans.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"pythonSidebar",previous:{title:"Strings",permalink:"/docs/python/basic-data/strings"},next:{title:"Lists",permalink:"/docs/python/basic-data/lists"}},p={},c=[{value:"Comparisons",id:"comparisons",level:2},{value:"If statements &amp; booleans",id:"if-statements--booleans",level:2}],d={toc:c};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"booleans"},"Booleans"),(0,r.kt)("p",null,"Why is the purpose of booleans? In programming you often need to know if an expression is True or False. A boolean is a data type can can only have one of two values ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"False"),". Creating booleans is pretty straight forward as demonstrated below."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Creates 2 boolean variables\nbool1 = True\nbool2 = False\n\n# Print the boolean variables\nprint(bool1)\nprint(bool2)\n"))),(0,r.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"True\nFalse\n")))),(0,r.kt)("h2",{id:"comparisons"},"Comparisons"),(0,r.kt)("p",null,"When using comparison operators such as ",(0,r.kt)("inlineCode",{parentName:"p"},"=="),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<="),", and ",(0,r.kt)("inlineCode",{parentName:"p"},">"),", a boolean value will be returned based on the evaluation of the statement."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(20 > 3)\nprint(20 == 3)\nprint(20 < 3)\n"))),(0,r.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"True\nFalse\nFalse\n")))),(0,r.kt)("h2",{id:"if-statements--booleans"},"If statements & booleans"),(0,r.kt)("p",null,"If statment conditions evaluate if a boolean value or expression is True of False. If a True value is returned, the if block is evaluated; however, if the value is False and an else block exists, then the else block is evaluated."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Creates 2 numberic variables \na = 100\nb = 17\n\n# Conditional Statement\nif b > a:\n    print("b is greater than a")\nelse:\n    print("b is not gretaer than a")\n'))),(0,r.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"b is not gretaer than a\n")))))}b.isMDXComponent=!0}}]);