(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(199)),i={id:"essif-glue",title:"eSSIF-Glue",scopeid:"essifLab",type:"concept",typeid:"essif-glue",stage:"draft",hoverText:"eSSIF-Glue: interface layer that allows components with Transaction Data Collector and/or Transaction Data Discloser functionality to use the Wallet, Holder, Issuer and Verifier functionalities.",glossaryText:"interface layer that allows components with %%transaction data collector^transaction-data-collector%% and/or %%transaction data discloser^transaction-data-discloser%% functionality to use the %%wallet^wallet%%, %%holder^holder%%, %%issuer^issuer%% and %%verifier^verifier%% functionalities."},s={unversionedId:"terms/essif-glue",id:"terms/essif-glue",isDocsHomePage:!1,title:"eSSIF-Glue",description:"Short Description",source:"@site/docs/terms/essif-glue.md",slug:"/terms/essif-glue",permalink:"/ctwg-sandbox/docs/terms/essif-glue",version:"current"},c=[{value:"Short Description",id:"short-description",children:[]},{value:"Purpose",id:"purpose",children:[]},{value:"Criterion",id:"criterion",children:[]}],l={toc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"short-description"},"Short Description"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"eSSIF-Glue")," is an interface layer that consists of a documented set of APIs between the %%Transaction Data Collector|transaction-data-collector%% and %%Transaction Data Discloser|transaction-data-discloser%% on the one hand, and the Wallet, Holder, Issuer and Verifier (WHIV) components on the other hand. "),Object(a.b)("p",null," Ultimately, we would like to see these APIs standardized. Having such APIs allows different parties to create their own version of the WHIV components, supporting the SSI technologies as they see fit, and shrinking or expanding functionalities as they feel appropriate. parties can then select such WHIV components as they see fit."),Object(a.b)("h3",{id:"purpose"},"Purpose"),Object(a.b)("p",null,"The purpose of the essif-Glue APIs is to make calling the WHIV functions as simple as possible, given the functions of the %%Transaction Data Collector|transaction-data-collector%% and %%Transaction Data Discloser|transaction-data-discloser%%"),Object(a.b)("h3",{id:"criterion"},"Criterion"),Object(a.b)("p",null,"The set of API's described at ",Object(a.b)("a",{parentName:"p",href:"https://gitlab.grnet.gr/essif-lab/tno-ssi-service/developer-docs"},"https://gitlab.grnet.gr/essif-lab/tno-ssi-service/developer-docs"),"."))}u.isMDXComponent=!0},199:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,h=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return r?o.a.createElement(h,s(s({ref:t},l),{},{components:r})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);