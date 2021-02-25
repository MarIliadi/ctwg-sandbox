(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{199:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,f=p["".concat(a,".").concat(d)]||p[d]||h[d]||o;return n?r.a.createElement(f,s(s({ref:t},l),{},{components:n})):r.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},201:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var i=n(22),r=n(203);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(i.default)();return{withBaseUrl:(n,i)=>function(e,t,n,{forcePrependBaseUrl:i=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(i)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+a:a}(t,e,n,i)}}function a(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},203:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}))},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),r=n(7),o=(n(0),n(199)),a=n(201),s={id:"pattern-jurisdiction",title:"Jurisdictions",scopeid:"essifLab",type:"pattern",typeid:"jurisdiction",stage:"draft",hoverText:"The Jurisdictions pattern captures the Concepts and relations that explain what a generic Jurisdiction consists of, and relates it to Parties and Legal Entities."},c={unversionedId:"terms/pattern-jurisdiction",id:"terms/pattern-jurisdiction",isDocsHomePage:!1,title:"Jurisdictions",description:"Purpose",source:"@site/docs/terms/pattern-jurisdiction.md",slug:"/terms/pattern-jurisdiction",permalink:"/ctwg-sandbox/docs/terms/pattern-jurisdiction",version:"current"},l=[{value:"Purpose",id:"purpose",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Formalized model",id:"formalized-model",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"purpose"},"Purpose"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Jurisdiction pattern")," captures the concepts and relations that explain how generic %%jurisdictions|jurisdiction%%  work, and can be constructed. It shows that it can be seen as the composition of one %%scope|scope%%, one %%legal system|legal-system%% and one party that operates the legal system within that scope."),Object(o.b)("h3",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"While most people are familiar with what we call %%legal jurisdictions|legal-jurisdiction%%, one readily observes that the characteristics of a jurisdiction - i.e. a %%scope|scope%% within which some party organizes that rules/laws/policies are being made, enforced and conflicts resolved - can be found outside of jurisdictions in numerous other contexts. For example,"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"%%organizations|organization%% habitually will have rules (business policies) in place, enforce them (to some extent), and have ways of resolving conflicts, and therefore qualify. Specifically, multi-nationals are known to operate multiple jurisdictions, aliging the rules and scopes with those of other (often legal) jurisdictions for the purpose of preventing situations in which conflicting rules apply, which would lead to many effort-intensive conflict-resolution cases."),Object(o.b)("li",{parentName:"ul"},"NGO's, that may run aid-projects, refugee-camps etc., ensure that a set of rules apply within the scopes of such projects and camps, and arrange for (internal) conflicts to be resolved. Hence they qualify"),Object(o.b)("li",{parentName:"ul"},"All sorts of clubs (sports, leisure, ...) have rules, means to enforce them, and a conflict resolution means which they operate within the scope of the locations they control and/or their activities. "),Object(o.b)("li",{parentName:"ul"},"Families qualify as well: the parents make the rules, enforce them, and resolve conflicts."),Object(o.b)("li",{parentName:"ul"},"Even individual persons (which qualify as parties), have their own 'scope of control', within which they work according to their own rules (e.g. morals, ethics, preferred ways of working), enforce them (pretty much automatically), and resolve any conflicts (e.g. personal problems that may arise when their rules/habits conflict with what their spouse, employer, any else requires them to do). Saying that an individual operates a (personal) 'legal system' within its scope of control is aligned with the ideas human rights that say humans are 'self sovereign'.")),Object(o.b)("p",null,"Still, jurisdictions have a lot of variety. The obvious (and self-evident) variety is in the parties that operate its legal system. However, there are also differences in scopes. %%Legal jurisdictions|legal-jurisdiction%% for example may align their scopes with different territories. %%Organizations|organization%% may align their scopes with physical locations as well, possibly aligning them (also) with scopes from legal jurisdictions. Smaller clubs, e.g. a bingo club that weekly hires a cafe for a few hours to do its things, will have its scope determined by location and time. Families and individuals have scopes that are limited by their ability to control (enforce rules)."),Object(o.b)("p",null,"Jurisdictions also in terms of the legal system they apply. Different jurisdictions have different (kinds of) rules, which are there to ensure and facilitate that its party realizes the %%objectives|objective%% it has set (for that scope). Often, such rules include specifications of the processes for maintaining the rules themselves, for enforcing them, and for resolving conflicts. Depending on the specific jurisdiction, the specification and maintentance of rules can be anywhere from being very informal to very formal, enforcement ranges from being almost absent to very strict, and resolution of conflicts is anywhere between ad-hoc and tedious litigation."),Object(o.b)("p",null,"Note that all the rules, processes and decisions must be part of the %%knowledge|knowledge%% of the party that runs the jurisdiction."),Object(o.b)("h3",{id:"formalized-model"},"Formalized model"),Object(o.b)("p",null,"Here is a visual representation of this pattern, using the following ",Object(o.b)("a",{parentName:"p",href:"../notations-and-conventions#pattern-diagram-notations"},"notations and conventions"),":"),Object(o.b)("img",{alt:"Conceptual model of the 'Jurisdiction' pattern",src:Object(a.a)("images/patterns/pattern-jurisdiction.png")}),Object(o.b)("p",null,"The figure shows that a %%jurisdiction|jurisdiction%% comprises a single %%scope|scope%%, a (single) %%legal system|legal-system%% system and a party that operates this Legal System within the Scope (which it controls). The Legal System applies to %%Entities|entity%% that are known in the jurisdiction (e.g. registered with the party as per the rules of the legal system, leading to their being registered/represented in the %%knowledge|knowledge%% of that party). These are what, specifically for %%legal jurisdictions|legal-jurisdiction%% are called %%legal entities|legal-entity%%."))}p.isMDXComponent=!0}}]);