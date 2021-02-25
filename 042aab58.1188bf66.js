(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{199:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,b=l["".concat(o,".").concat(d)]||l[d]||m[d]||a;return n?i.a.createElement(b,s(s({ref:t},p),{},{components:n})):i.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(199)),o={id:"semantics",title:"Semantics",scopeid:"essifLabTerminology",type:"concept",typeid:"semantics",stage:"draft",hoverText:"Semantics: a mapping between the (tangible/textual) Terms and (intangible) ideas/Concepts - their meaning.",glossaryText:"a mapping between the (tangible/textual) %%terms^term%% and (intangible) ideas/Concepts - their meaning."},s={unversionedId:"terms/semantics",id:"terms/semantics",isDocsHomePage:!1,title:"Semantics",description:"Short Description",source:"@site/docs/terms/semantics.md",slug:"/terms/semantics",permalink:"/ctwg-sandbox/docs/terms/semantics",version:"current"},c=[{value:"Short Description",id:"short-description",children:[]},{value:"Purpose",id:"purpose",children:[]},{value:"Criteria",id:"criteria",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"short-description"},"Short Description"),Object(a.b)("p",null,"We use the term ",Object(a.b)("strong",{parentName:"p"},"semantics")," to refer to the mapping between (tangible) %%terms|term%% and (intangible) %%concepts|concept%% (their meaning, the ideas behind it). Semantics are scoped, i.e. every %%scope|scope%% has its own semantic mapping. This implies that every party has - and maintains - its own (subjective) semantics, which is its subjective mapping of a set of terms onto the concepts/ideas in its %%knowledge|knowledge%%. The (erroneous) assumption that parties would (automagically) share a semantics is the cause of many misunderstandings, and hence should be identified and deleted as soon as possible."),Object(a.b)("h3",{id:"purpose"},"Purpose"),Object(a.b)("p",null,"The ability to distinguish between (non)semantics helps us to better understand one another, because it makes one aware of the fact that semantics is subjective, and its owner can update it. This allows such an owner to (temporarily) use terms in the same meaning as another party, specifically if they agree to use %%good definitions|definition%%."),Object(a.b)("h3",{id:"criteria"},"Criteria"),Object(a.b)("p",null,"A semantics is a mapping, in a specific %%scope|scope%%, between (tangible) %%terms|term%% and (intangible) %%concepts|concept%% (their meaning, the ideas behind it)."))}u.isMDXComponent=!0}}]);