(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{199:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return y}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=n,y=f["".concat(a,".").concat(d)]||f[d]||u[d]||o;return r?i.a.createElement(y,c(c({ref:t},l),{},{components:r})):i.a.createElement(y,c({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),o=(r(0),r(199)),a={id:"dictionary-file",title:"Dictionary-file",scopeid:"essifLab",type:"dictionary",typeid:"dictionary-file",stage:"draft",hoverText:"Dictionary-file: a file whose contents specifies the contents of a Dictionary.",glossaryText:"a file whose contents specifies the contents of a %%dictionary^dictionary%%."},c={unversionedId:"terms/dictionary-file",id:"terms/dictionary-file",isDocsHomePage:!1,title:"Dictionary-file",description:"Short Description",source:"@site/docs/terms/dictionary-file.md",slug:"/terms/dictionary-file",permalink:"/ctwg-sandbox/docs/terms/dictionary-file",version:"current"},s=[{value:"Short Description",id:"short-description",children:[]},{value:"Purpose",id:"purpose",children:[]},{value:"Criterion",id:"criterion",children:[]}],l={toc:s};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"short-description"},"Short Description"),Object(o.b)("p",null,"A ",Object(o.b)("strong",{parentName:"p"},"dictionary-file")," is a file that contains the specification of what does (not) go into a specific %%dictionary|dictionary%%. To faciliate authors, a self-explanatory ",Object(o.b)("a",{parentName:"p",href:"/ctwg-sandbox/docs/terminology-engine-v1-templates/dictionaryID"},"template file")," is available."),Object(o.b)("h3",{id:"purpose"},"Purpose"),Object(o.b)("p",null,"%%Dictionaries|dictionary%% help people to figure out the meaning of terms, specifically if the context of the text they are interpreting isn't very clear, or the meaning of the used terms is left to the imagination of the reader. "),Object(o.b)("h3",{id:"criterion"},"Criterion"),Object(o.b)("p",null,"a file that defines/specifies a %%dictionary|dictionary%%."))}p.isMDXComponent=!0}}]);