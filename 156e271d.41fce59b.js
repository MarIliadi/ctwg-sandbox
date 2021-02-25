(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{199:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),f=n,m=l["".concat(a,".").concat(f)]||l[f]||d[f]||i;return r?o.a.createElement(m,s(s({ref:t},p),{},{components:r})):o.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),i=(r(0),r(199)),a={id:"scope",title:"Scope",scopeid:"eSSIFLab",type:"concept",typeid:"scope",stage:"draft",hoverText:"Scope: the extent of the area or subject matter (which we use to define Patterns, Concepts, Terms and Glossaries in).",glossaryText:"the extent of the area or subject matter (which we use to define %%patterns^pattern%%, %%concepts^concept%%, %%terms^term%% and %%glossaries^glossary%% in)."},s={unversionedId:"terms/scope",id:"terms/scope",isDocsHomePage:!1,title:"Scope",description:"Short Description",source:"@site/docs/terms/scope.md",slug:"/terms/scope",permalink:"/ctwg-sandbox/docs/terms/scope",version:"current"},c=[{value:"Short Description",id:"short-description",children:[]},{value:"Purpose",id:"purpose",children:[]},{value:"Criteria",id:"criteria",children:[]},{value:"Notes",id:"notes",children:[]}],p={toc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"short-description"},"Short Description"),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"scope")," (in the eSSIFLab context) is the extent of the area or subject matter (as in ",Object(i.b)("a",{parentName:"p",href:"https://www.lexico.com/definition/scope"},"OED"),". We use it to define patterns, concepts, terms and glossaries in, but a scope may serve other (additional) purposes. Scopes may overlap, or be nested. It is comparable to ",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Namespace"},"Namespeces"),", were it not that entities other than names (signs that are used to identify/refer to objects of various kinds) can reside in a scope as it is defined here."),Object(i.b)("p",null,"The %%terminology pattern|pattern-terminology%% provides an overview of how this concept fits in with related concepts."),Object(i.b)("h3",{id:"purpose"},"Purpose"),Object(i.b)("p",null,"This allows each %%term|term%% (words, phrases) to be used in a limited scope, for specific purposes. The fact that terms are 'scoped' implies that a term may have ",Object(i.b)("em",{parentName:"p"},"different")," meanings, depending on the scope within which it is used. Also, it allows us to author documentation in a 'scoped' fashion, allowing different groups of people to author, use and disseminate their documentation (including documentation about their ideas (%%patterns|pattern%%), %%concepts|concept%%, and %%terms|term%%.)"),Object(i.b)("h3",{id:"criteria"},"Criteria"),Object(i.b)("p",null,"a (virtual) demarcation that serves particular purposes."),Object(i.b)("h3",{id:"notes"},"Notes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Scopes within which a certain %%concept|concept%% is known, may still use different terms to refer to the concept. That's the reason for having %%definitions|definition%% that specify criteria for determining whether or not something qualifies as (an instance of) some concept: we cannot rely on different scopes necessarily using the same terms for that.")))}u.isMDXComponent=!0}}]);