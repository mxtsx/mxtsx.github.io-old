(this["webpackJsonppresentation-app"]=this["webpackJsonppresentation-app"]||[]).push([[0],{15:function(e,t,a){e.exports={header:"Header_header__3AhW_",logo:"Header_logo__2FffY",name:"Header_name__37GoO",level:"Header_level__3NuMy",navWidth360:"Header_navWidth360__3m00t",navWidth370:"Header_navWidth370__2Lqyr",navWidth400:"Header_navWidth400__1tCXp",navWidth460:"Header_navWidth460__1nkQF",nav:"Header_nav__2f7Dn",active:"Header_active__1VFq_",collapseButton:"Header_collapseButton__1ubSG",headerOpened:"Header_headerOpened__3sKKV"}},20:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=e=>e.lang.language},34:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));const n="lang/CHANGE_LANGUAGE",o={language:"eng"},i={languageChanged:e=>({type:n,payload:{language:e}})};t.b=(e=o,t)=>{switch(t.type){case n:return{...e,language:t.payload.language};default:return e}}},45:function(e,t,a){e.exports={homepageContainer:"Homepage_homepageContainer__1H1Tb",contentWrapper:"Homepage_contentWrapper__1Lfyh",text:"Homepage_text__1kfoq",links:"Homepage_links__2fw36"}},49:function(e,t,a){e.exports={footer:"Footer_footer__10tfe",copyright:"Footer_copyright__2uh4s",copyrightIcon:"Footer_copyrightIcon__uzd6K"}},51:function(e,t,a){e.exports={contentWrapper:"App_contentWrapper__1NUOt",main:"App_main__1D2S9"}},55:function(e,t,a){e.exports={componentInvisible:"withLoadingEffect_componentInvisible__2l9Z5",componentVisible:"withLoadingEffect_componentVisible__1YNX4"}},56:function(e,t,a){"use strict";var n=a(12),o=a(20),i=a(10),r=a(0),s=a(48),c=a.n(s),l=a(34),d=a(2);t.a=function(e){return t=>{const a=Object(n.c)(o.a),s=Object(i.f)(),u=Object(n.b)();return Object(r.useEffect)((()=>{const e=s.location.search.split("?")[0],t={};t.lang=a,s.location.pathname+s.location.search!==`${s.location.pathname}?${c.a.stringify(t)}`&&s.push({pathname:e,search:c.a.stringify(t)})}),[a,s.location.search,s]),Object(r.useEffect)((()=>{let e=c.a.parse(s.location.search.substring(1)).lang;u(l.a.languageChanged(e))})),Object(d.jsx)(e,{...t})}}},57:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(55),r=a.n(i),s=a(2);t.a=function(e){return o.a.memo((t=>{const[a,o]=Object(n.useState)(!1);return Object(n.useLayoutEffect)((()=>{setTimeout((()=>{o(!0)}))}),[]),Object(s.jsx)("div",{className:a?r.a.componentVisible:r.a.componentInvisible,children:Object(s.jsx)(e,{...t})})}))}},59:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return o}));const n=e=>e.errorReducer.error404,o=e=>e.errorReducer.error},60:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=e=>e.contact.text},61:function(e,t,a){e.exports={preloaderWrapper:"Preloader_preloaderWrapper__JL7pa"}},77:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(7),r=a.n(i),s=(a(77),a(51)),c=a.n(s),l=a.p+"static/media/preloader.6d2c9aba.svg",d=a(61),u=a.n(d),m=a(2);var p=o.a.memo((({height:e="100%",width:t="100%",maxWidth:a="100%",maxHeight:n="100%"})=>Object(m.jsx)("div",{className:u.a.preloaderWrapper,style:{height:e,width:t,backgroundColor:"#F8F8F8"},children:Object(m.jsx)("img",{src:l,alt:"Preloader",style:{maxWidth:a,maxHeight:n}})}))),h=a(10),g=a(32),j=a(15),b=a.n(j),v=a(12),x=a(20);const f=e=>e.header.navbarText,k=e=>e.header.selectLabel,O=e=>e.header.currentPage;var y=a(33),_=a.n(y),z=a(34),P=a(117),S=a(124),R=a(120),M=a(125),I=a(122),C=a(123);const w=Object(P.a)((e=>Object(S.a)({formControl:{minWidth:25,"& .MuiSelect-icon":{left:31},"& .MuiSelect-select:focus":{backgroundColor:"rgba(255, 255, 255, 0)"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"rgb(0, 0, 0)",borderWidth:1},"& .MuiFormLabel-root.Mui-focused":{color:"rgb(0, 0, 0)",transition:"200ms color"},"& .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover":{backgroundColor:"rgba(255, 255, 255, 0.25)"},"& .MuiMenu-paper":{backgroundColor:"lightgray",maxHeight:"max-content"}},formControlPaddingUkrRus:{"& .MuiSelect-outlined.MuiSelect-outlined":{paddingTop:10,paddingRight:25,paddingLeft:10}},formControlPaddingEng:{"& .MuiSelect-outlined.MuiSelect-outlined":{paddingTop:10,paddingRight:22,paddingLeft:8}},formControlPaddingCz:{"& .MuiSelect-outlined.MuiSelect-outlined":{paddingTop:10,paddingRight:32,paddingLeft:11},"& .MuiSelect-icon":{left:30}},formControlPaddingHr:{"& .MuiSelect-outlined.MuiSelect-outlined":{paddingTop:10,paddingRight:29,paddingLeft:12},"& .MuiSelect-icon":{left:29}},resize:{fontFamily:"Source Sans Pro",fontSize:16.5},menuStyle:{"& .MuiPaper-root":{position:"absolute",backgroundColor:"#E9E9E9",maxHeight:"min-content"}}})));var N=o.a.memo((()=>{const e=Object(v.c)(k),t=Object(v.c)(x.a),a=w(t),n=Object(v.b)();return Object(m.jsxs)(R.a,{variant:"outlined",size:"small",className:a.formControl,children:[Object(m.jsx)(M.a,{id:"select-outlined-label",className:_()(a.resize),children:e[t]}),Object(m.jsxs)(I.a,{MenuProps:{className:a.menuStyle},labelId:"select-outlined-label",id:"select-outlined",value:t,onChange:e=>{n(z.a.languageChanged(e.target.value))},label:e[t],className:_()(a.resize,{[a.formControlPaddingEng]:"eng"===t},{[a.formControlPaddingUkrRus]:"ukr"===t||"rus"},{[a.formControlPaddingCz]:"cz"===t},{[a.formControlPaddingHr]:"hr"===t}),children:[Object(m.jsx)(C.a,{value:"eng",children:"eng"}),Object(m.jsx)(C.a,{value:"cz",children:"cz"}),Object(m.jsx)(C.a,{value:"ukr",children:"ukr"}),Object(m.jsx)(C.a,{value:"rus",children:"rus"}),Object(m.jsx)(C.a,{value:"hr",children:"hr"})]})]})})),T=a.p+"static/media/collapse_minus.0636bcd4.svg",W=a.p+"static/media/collapse_plus.3375a66e.svg";const H="SET_CURRENT_PAGE",A={navbarText:[{title:{eng:"Home",ukr:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430",rus:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430",cz:"Dom\u016f",hr:"Po\u010detna stranica"},path:"/",id:1},{title:{eng:"About",ukr:"\u041f\u0440\u043e \u043c\u0435\u043d\u0435",rus:"\u041e\u0431\u043e \u043c\u043d\u0435",cz:"O mn\u011b",hr:"O meni"},path:"/about",id:2},{title:{eng:"Portfolio",ukr:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0456\u043e",rus:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e",cz:"Portfolio",hr:"Portfolio"},path:"/portfolio",id:3},{title:{eng:"Contact",ukr:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438",rus:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",cz:"Kontakty",hr:"Kontakt"},path:"/contacts",id:4}],selectLabel:{eng:"Lang",ukr:"\u041c\u043e\u0432\u0430",rus:"\u042f\u0437\u044b\u043a",cz:"Jazyk",hr:"Jezik"},currentPage:null},L=e=>({type:H,payload:{currentPage:e}});var F=(e=A,t)=>{switch(t.type){case H:return{...e,currentPage:t.payload.currentPage};default:return e}},D=a(67),E=a(59);const J=o.a.memo((()=>{const[e,t]=Object(n.useState)(!1),a=Object(v.c)(f),o=Object(n.useMemo)((()=>[]),[]);return Object(m.jsxs)("header",{className:_()(b.a.header,e&&b.a.headerOpened),children:[Object(m.jsx)(U,{text:a,currentPage:o}),Object(m.jsxs)("div",{className:b.a.logo,children:[Object(m.jsx)("div",{className:b.a.name,children:"Maksym Stepanets"}),Object(m.jsx)("div",{className:b.a.level,children:"Junior React Developer"})]}),Object(m.jsx)("button",{className:b.a.collapseButton,onClick:()=>t(!e),children:e?Object(m.jsx)("img",{src:T,alt:"collapseMinus"}):Object(m.jsx)("img",{src:W,alt:"collapsePlus"})}),Object(m.jsx)(B,{setIsOpen:t,text:a,currentPage:o})]})})),U=o.a.memo((({text:e,currentPage:t})=>{const a=Object(v.c)(x.a),o=Object(v.b)(),i=Object(h.g)(),r=Object(v.c)(O),s=Object(v.c)(E.a),c=i.pathname;return Object(n.useEffect)((()=>{e.some((e=>e.path===c))?o(L(t[t.length-1])):o(L(s[a]))}),[t,a,s,o,e,c]),Object(m.jsx)(D.a,{children:Object(m.jsx)("title",{children:r})})})),B=o.a.memo((({setIsOpen:e,text:t,currentPage:a})=>{const n=Object(v.c)(x.a);return Object(m.jsxs)("nav",{className:_()(b.a.nav,{[b.a.navWidth360]:"eng"===n},{[b.a.navWidth370]:"cz"===n},{[b.a.navWidth400]:"hr"===n},{[b.a.navWidth460]:"rus"===n},{[b.a.navWidth460]:"ukr"===n}),children:[Object(m.jsx)(N,{}),t.map((t=>Object(m.jsx)(g.b,{onClick:()=>e(!1),exact:!0,to:t.path,isActive:e=>(e&&a.push(t.title[n]),!!e),activeClassName:b.a.active,children:t.title[n]},t.id)))]})}));var G=J;const V=e=>e.home.text;var K=a(45),q=a.n(K),Z=a(26),X=a(56),Y=a(57),$=a(60);const Q=o.a.memo((()=>{const e=Object(v.c)(x.a),t=Object(v.c)($.a),a=Object(v.c)(V);return Object(m.jsx)("div",{className:q.a.homepageContainer,children:Object(m.jsxs)("div",{className:q.a.contentWrapper,children:[Object(m.jsxs)("div",{className:q.a.text,children:[Object(m.jsx)("div",{children:a[e].greeting}),Object(m.jsx)("div",{children:a[e].description})]}),Object(m.jsx)("div",{className:q.a.links,children:t.map((e=>Object(m.jsx)("a",{href:e.url,children:Object(m.jsx)("img",{src:e.image,alt:e.name})},e.id)))})]})})}));var ee=Object(Z.c)(X.a,Y.a)(Q),te=a(49),ae=a.n(te);var ne=o.a.memo((()=>Object(m.jsx)("div",{className:ae.a.footer,children:Object(m.jsxs)("span",{className:ae.a.copyright,children:[Object(m.jsx)("span",{className:ae.a.copyrightIcon,children:"\xa9"})," 2021"]})})));const oe=o.a.lazy((()=>a.e(3).then(a.bind(null,135)))),ie=o.a.lazy((()=>a.e(6).then(a.bind(null,134)))),re=o.a.lazy((()=>a.e(4).then(a.bind(null,131)))),se=o.a.lazy((()=>a.e(5).then(a.bind(null,132))));var ce=o.a.memo((()=>{const[e,t]=Object(n.useState)(!1);return Object(n.useEffect)((()=>{setTimeout((()=>{t(!0)}),3e3)}),[]),e?Object(m.jsxs)("div",{className:c.a.contentWrapper,children:[Object(m.jsx)(G,{}),Object(m.jsx)("main",{className:c.a.main,children:Object(m.jsxs)(h.c,{children:[Object(m.jsx)(h.a,{path:"/about",render:()=>Object(m.jsx)(oe,{})}),Object(m.jsx)(h.a,{path:"/portfolio",render:()=>Object(m.jsx)(ie,{})}),Object(m.jsx)(h.a,{path:"/contacts",render:()=>Object(m.jsx)(re,{})}),Object(m.jsx)(h.a,{exact:!0,path:"/",render:()=>Object(m.jsx)(ee,{})}),Object(m.jsx)(h.a,{path:"*",render:()=>Object(m.jsx)(se,{})})]})}),Object(m.jsx)(ne,{})]}):Object(m.jsx)(p,{})}));var le=e=>{e&&e instanceof Function&&a.e(7).then(a.bind(null,133)).then((({getCLS:t,getFID:a,getFCP:n,getLCP:o,getTTFB:i})=>{t(e),a(e),n(e),o(e),i(e)}))};const de={text:{eng:{title:"About Me",description:["My name is Max. I live in Prague. For the last few years of my life, I have been actively interested in learning languages, and in 2019 I first got acquainted with a programming language. Because of the need to automate routine tasks at work, I learned Python a little. I liked the result so much that I delved deeper into the field of programming. This was the beginning of a new stage in my life.","Today I am studying React Native and enhancement my knowledge in native JS, React, and Typescript. Although I have experience with the backend and databases, my heart belongs only to the frontend.","Unfortunately, I have spent most of my time studying the theoretical part, so up to now, my portfolio is empty. Of course, I did practical assignments in various courses, but I don't see the point in including them. What is the point in presenting to the employer what he has already seen in other people's portfolios? Anyway, I promise to fill in the existing gaps in the portfolio soon! I am already working on this so hard."]},ukr:{title:"\u041f\u0440\u043e \u043c\u0435\u043d\u0435",description:["\u041c\u0435\u043d\u0435 \u0437\u0432\u0430\u0442\u0438 \u041c\u0430\u043a\u0441. \u042f \u0436\u0438\u0432\u0443 \u0443 \u041f\u0440\u0430\u0437\u0456. \u0414\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u043e\u0441\u0442\u0430\u043d\u043d\u0456\u0445 \u0440\u043e\u043a\u0456\u0432 \u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0437\u0430\u0445\u043e\u043f\u043b\u044e\u044e\u0441\u044f \u0432\u0438\u0432\u0447\u0435\u043d\u043d\u044f\u043c \u0440\u0456\u0437\u043d\u0438\u0445 \u043c\u043e\u0432, \u0430 \u0443 2019 \u0440\u043e\u0446\u0456 \u044f \u0432\u043f\u0435\u0440\u0448\u0435 \u043f\u043e\u0437\u043d\u0430\u0439\u043e\u043c\u0438\u0432\u0441\u044f \u0437 \u043c\u043e\u0432\u043e\u044e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0443\u0432\u0430\u043d\u043d\u044f. \u0423 \u0437\u0432'\u044f\u0437\u043a\u0443 \u0437 \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0456\u0441\u0442\u044e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0443\u0432\u0430\u0442\u0438 \u0431\u0443\u0434\u0435\u043d\u043d\u0456 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f \u043d\u0430 \u0440\u043e\u0431\u043e\u0442\u0456 \u044f \u043f\u043e\u0447\u0430\u0432 \u0432\u0438\u0432\u0447\u0430\u0442\u0438 Python. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043c\u0435\u043d\u0435 \u0432\u0440\u0430\u0437\u0438\u0432 \u043d\u0430\u0441\u0442\u0456\u043b\u044c\u043a\u0438, \u0449\u043e \u044f \u0432\u0438\u0440\u0456\u0448\u0438\u0432 \u0437\u0430\u043d\u0443\u0440\u0438\u0442\u0438\u0441\u044f \u0443 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0443\u0432\u0430\u043d\u043d\u044f \u0449\u0435 \u0431\u0456\u043b\u044c\u0448\u0435. \u0417 \u0446\u044c\u043e\u0433\u043e \u043c\u043e\u043c\u0435\u043d\u0442\u0443 \u043f\u043e\u0447\u0430\u0432\u0441\u044f \u043d\u043e\u0432\u0438\u0439 \u0435\u0442\u0430\u043f \u043c\u043e\u0433\u043e \u0436\u0438\u0442\u0442\u044f.","\u0421\u0442\u0430\u043d\u043e\u043c \u043d\u0430 \u0441\u044c\u043e\u0433\u043e\u0434\u043d\u0456 \u044f \u0437\u0430\u0439\u043c\u0430\u044e\u0441\u044f \u0432\u0438\u0432\u0447\u0435\u043d\u043d\u044f\u043c React Native \u0442\u0430 \u043f\u043e\u0433\u043b\u0438\u0431\u043b\u044e\u044e \u0441\u0432\u043e\u0457 \u0437\u043d\u0430\u043d\u043d\u044f \u043d\u0430\u0442\u0438\u0432\u043d\u043e\u0433\u043e JS, React \u0456 Typescript. \u0425\u043e\u0447 \u044f \u0439 \u043c\u0430\u044e \u0434\u043e\u0441\u0432\u0456\u0434 \u0440\u043e\u0431\u043e\u0442\u0438 \u0437 \u0431\u0435\u043a\u0435\u043d\u0434\u043e\u043c \u0442\u0430 \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u0438\u0445, \u0430\u043b\u0435 \u043c\u043e\u0454 \u0441\u0435\u0440\u0446\u0435 \u043d\u0430\u043b\u0435\u0436\u0438\u0442\u044c \u043b\u0438\u0448\u0435 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0443.","\u041d\u0430 \u0436\u0430\u043b\u044c, \u0432\u043f\u0440\u043e\u0434\u043e\u0432\u0436 \u0442\u043e\u0433\u043e \u0447\u0430\u0441\u0443, \u043a\u043e\u043b\u0438 \u044f \u0432\u0438\u0432\u0447\u0430\u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0443\u0432\u0430\u043d\u043d\u044f, \u0431\u0456\u043b\u044c\u0448\u0443 \u0439\u043e\u0433\u043e \u0447\u0430\u0441\u0442\u0438\u043d\u0443 \u044f \u0432\u0438\u0442\u0440\u0430\u0442\u0438\u0432 \u043d\u0430 \u0437\u0430\u043a\u0440\u0456\u043f\u043b\u0435\u043d\u043d\u044f \u0441\u0430\u043c\u0435 \u0442\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u043d\u0438\u0445 \u0437\u043d\u0430\u043d\u044c, \u0442\u043e\u043c\u0443 \u043c\u043e\u0454 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0456\u043e \u043f\u043e\u043a\u0438 \u0449\u043e \u043f\u043e\u0440\u043e\u0436\u043d\u0454. \u0417\u0432\u0438\u0447\u0430\u0439\u043d\u043e, \u044f \u0432\u0438\u043a\u043e\u043d\u0443\u0432\u0430\u0432 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u043d\u0456 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f \u043f\u0456\u0434 \u0447\u0430\u0441 \u043f\u0440\u043e\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f \u0440\u0456\u0437\u043d\u043e\u043c\u0430\u043d\u0456\u0442\u043d\u0438\u0445 \u043a\u0443\u0440\u0441\u0456\u0432, \u0430\u043b\u0435 \u0434\u043e\u0434\u0430\u0432\u0430\u0442\u0438 \u0457\u0445 \u0434\u043e \u0441\u0432\u043e\u0433\u043e \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0456\u043e \u044f \u043d\u0435 \u0431\u0430\u0447\u0443 \u0441\u0435\u043d\u0441\u0443. \u041d\u0430\u0432\u0456\u0449\u043e \u043f\u043e\u043a\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u0440\u043e\u0431\u043e\u0442\u043e\u0434\u0430\u0432\u0446\u044e \u0442\u0435, \u0449\u043e \u0432\u0456\u043d \u0432\u0436\u0435 \u0431\u0430\u0447\u0438\u0432 \u0434\u0435\u0441\u044f\u0442\u043a\u0438 \u0440\u0430\u0437\u0456\u0432 \u0440\u0430\u043d\u0456\u0448\u0435 \u0432 \u0456\u043d\u0448\u0438\u0445 \u043b\u044e\u0434\u0435\u0439? \u0423 \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u043c\u0443 \u0440\u0430\u0437\u0456, \u043d\u0430\u044f\u0432\u043d\u0456 \u043f\u0440\u043e\u0431\u0456\u043b\u0438 \u0443 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0456\u043e \u044f \u043e\u0431\u0456\u0446\u044f\u044e \u0449\u043e\u043d\u0430\u0439\u0448\u0432\u0438\u0434\u0448\u0435 \u0437\u0430\u043f\u043e\u0432\u043d\u0438\u0442\u0438! \u0412\u0436\u0435 \u0437\u0430\u0440\u0430\u0437 \u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u043d\u0430\u0434 \u0446\u0438\u043c \u043f\u0440\u0430\u0446\u044e\u044e."]},rus:{title:"\u041e\u0431\u043e \u043c\u043d\u0435",description:["\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u041c\u0430\u043a\u0441. \u042f \u0436\u0438\u0432\u0443 \u0432 \u041f\u0440\u0430\u0433\u0435. \u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043b\u0435\u0442 \u0441\u0432\u043e\u0435\u0439 \u0436\u0438\u0437\u043d\u0438 \u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0443\u0432\u043b\u0435\u043a\u0430\u044e\u0441\u044c \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435\u043c \u044f\u0437\u044b\u043a\u043e\u0432, \u0430 \u0432 2019 \u0433\u043e\u0434\u0443 \u044f \u0432\u043f\u0435\u0440\u0432\u044b\u0435 \u043f\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u043b\u0441\u044f \u0441 \u044f\u0437\u044b\u043a\u043e\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u0412 \u0441\u0432\u044f\u0437\u0438 \u0441 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c\u044e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0443\u0442\u0438\u043d\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0435 \u044f \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043f\u043e\u0434\u0443\u0447\u0438\u043b Python. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043c\u043d\u0435 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u0441\u044f, \u0447\u0442\u043e \u044f \u0440\u0435\u0448\u0438\u043b \u0443\u0433\u043b\u0443\u0431\u0438\u0442\u044c\u0441\u044f \u0432 \u0441\u0444\u0435\u0440\u0443 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u0421 \u044d\u0442\u043e\u0433\u043e \u043d\u0430\u0447\u0430\u043b\u0441\u044f \u043d\u043e\u0432\u044b\u0439 \u044d\u0442\u0430\u043f \u043c\u043e\u0435\u0439 \u0436\u0438\u0437\u043d\u0438.","\u041d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f\u0448\u043d\u0438\u0439 \u0434\u0435\u043d\u044c \u044f \u0437\u0430\u043d\u0438\u043c\u0430\u044e\u0441\u044c \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435\u043c React Native \u0438 \u0443\u0433\u043b\u0443\u0431\u043b\u0435\u043d\u0438\u0435\u043c \u0437\u043d\u0430\u043d\u0438\u0439 \u0432 \u0441\u0444\u0435\u0440\u0435 \u043d\u0430\u0442\u0438\u0432\u043d\u043e\u0433\u043e JS, React \u0438 Typescript. \u0425\u043e\u0442\u044c \u044f \u0438 \u0438\u043c\u0435\u044e \u043e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0431\u044d\u043a\u0435\u043d\u0434\u043e\u043c \u0438 \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u043d\u043e \u043c\u043e\u0451 \u0441\u0435\u0440\u0434\u0446\u0435 \u043f\u0440\u0435\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u043b\u0438\u0448\u044c \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0443.","\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0431\u043e\u043b\u044c\u0448\u0443\u044e \u0447\u0430\u0441\u0442\u044c \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u044f \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u043b \u043d\u0430 \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435 \u0442\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432, \u0442\u0430\u043a \u0447\u0442\u043e \u043f\u043e\u043a\u0430 \u0447\u0442\u043e \u043c\u043e\u0451 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e \u043f\u0443\u0441\u0442\u0443\u0435\u0442. \u0420\u0430\u0437\u0443\u043c\u0435\u0435\u0442\u0441\u044f, \u044f \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u043b \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u043d\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043a\u0443\u0440\u0441\u0430\u0445, \u043d\u043e \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0438\u0445 \u0432 \u0441\u0432\u043e\u0451 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e \u044f \u043d\u0435 \u0432\u0438\u0436\u0443 \u0441\u043c\u044b\u0441\u043b\u0430. \u0417\u0430\u0447\u0435\u043c \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u043e\u0434\u0430\u0442\u0435\u043b\u044e \u0442\u043e, \u0447\u0442\u043e \u043e\u043d \u0432\u0438\u0434\u0435\u043b \u0443\u0436\u0435 \u0434\u0435\u0441\u044f\u0442\u043a\u0438 \u0440\u0430\u0437 \u0443 \u0434\u0440\u0443\u0433\u0438\u0445 \u043b\u044e\u0434\u0435\u0439? \u0412 \u043b\u044e\u0431\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043f\u0440\u043e\u0431\u0435\u043b\u044b \u0432 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e \u044f \u043e\u0431\u0435\u0449\u0430\u044e \u0441\u043a\u043e\u0440\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c! \u0423\u0436\u0435 \u0441\u0435\u0439\u0447\u0430\u0441 \u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u043d\u0430\u0434 \u044d\u0442\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u0430\u044e."]},cz:{title:"O mn\u011b",description:["Jmenuji se Max. Bydl\xedm v Praze. Posledn\xedch n\u011bkolik let sv\xe9ho \u017eivota se aktivn\u011b zaj\xedm\xe1m o studium jazyk\u016f a v roce 2019 jsem se poprv\xe9 sezn\xe1mil s programovac\xedm jazykem. Pot\u0159eboval jsem v pr\xe1ci automatizovat rutinn\xed \xfakoly a proto jsem se trochu nau\u010dil Python. Byl jsem z v\xfdsledk\u016f nad\u0161en\xfd, tak\u017ee jsem se rozhodl prohloubit znalosti Pythonu a studovat programov\xe1n\xed d\xe1l. A tak za\u010dala nov\xe1 etapa m\xe9ho \u017eivota.","Dnes se zab\xfdv\xe1m studiem React Native a prohlouben\xedm znalost\xed v oblasti nativn\xedho JSu, Reactu a Typescriptu. I kdy\u017e m\xe1m zku\u0161enosti s backendem a datab\xe1zemi, m\xe9 srdce pat\u0159\xed pouze frontendu.","Bohu\u017eel, v\u011bt\u0161inu \u010dasu jsem str\xe1vil studiem teorie, tak\u017ee zat\xedm je m\xe9 portfolio pr\xe1zdn\xe9. Samoz\u0159ejm\u011b jsem vykon\xe1val \xfakoly b\u011bhem r\u016fzn\xfdch kurz\u016f, ale d\xe1vat je do portfolia nevid\xedm smysl. Aby se zam\u011bstnavatel d\xedval na to, co u\u017e vid\u011bl mnohokr\xe1t u jin\xfdch lid\xed? Ale ne. Ka\u017edop\xe1dn\u011b slibuji, \u017ee brzy sv\xe9 portfolio dopln\xedm! U\u017e te\u010f na tom aktivn\u011b pracuji."]},hr:{title:"O meni",description:["Zovem se Max. \u017divim u Pragu. Tijekom posljednjih nekoliko godina svoga \u017eivota sam se aktivno bavio u\u010denjem jezika, a 2019. godine se prvi put upoznao sa programskim jezikom. Trebao sam automatizirati na poslu rutinske zadatke, tako da malo nau\u010dio Python. Bio sam tako odu\u0161evljen rezultatom da odlu\u0107io produbiti znanje Pythona i u\u010diti programiranje dalje. Tako je po\u010delo novo poglavlje u mom \u017eivotu.","Danas u\u010dim React Native i produbljujem znanja u oblastima JSa, Reacta i Typescripta. Iako imam iskustva u backendu i bazama podataka, moje srce pripada samo frontendu.","Na\u017ealost, ve\u0107inu vremena sam proveo prou\u010davaju\u0107i teoriju, tako da je za danas moj portfolio prazan. Premda da sam radio zadatke na razli\u010ditim te\u010dajevima, imati ih u portofoliju ne vidim smisao. Za\u0161to? Da bi poslodavac gledao na ono \u0161to je ve\u0107 mnogo puta vidio u portfolijima drugih ljudi? U svakom slu\u010daju, obe\u0107avam da \u0107u uskoro ne\u0161to u portfolio dodavati! Ve\u0107 sada aktivno radim na tome."]}}};var ue=(e=de,t)=>(t.type,e);const me={text:[{image:a.p+"static/media/github.e6d6bee7.svg",url:"https://github.com/mxtsx",name:"Github",id:1},{image:a.p+"static/media/linkedin-round.b14bfe3d.svg",url:"https://www.linkedin.com/in/mxtsx/",name:"LinkedIn",id:2},{image:a.p+"static/media/email-round.0ea35c92.svg",url:"mailto: mxdottsx@gmail.com",name:"mxdottsx@gmail.com",id:3}]};var pe=(e=me,t)=>(t.type,e);const he={text:{eng:{greeting:"Hi, my name is Max.",description:"I am a Junior React Developer. Welcome to my page."},ukr:{greeting:"\u041f\u0440\u0438\u0432\u0456\u0442, \u044f \u041c\u0430\u043a\u0441.",description:"\u042f \u043f\u043e\u0447\u0438\u043d\u0430\u044e\u0447\u0438\u0439 React Developer. \u0412\u0456\u0442\u0430\u044e \u043d\u0430 \u043c\u043e\u0457\u0439 \u0441\u0442\u043e\u0440\u0456\u043d\u0446\u0456."},rus:{greeting:"\u041f\u0440\u0438\u0432\u0435\u0442, \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u041c\u0430\u043a\u0441.",description:"\u042f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0439 React Developer. \u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u043c\u043e\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."},cz:{greeting:"Ahoj, jsem Max.",description:"Jsem Junior React Developer. V\xedtejte na moj\xed str\xe1nce."},hr:{greeting:"Bok, ja sam Max.",description:"Sam Junior React Developer. Dobro do\u0161li na moju stranicu."}}};var ge=(e=he,t)=>(t.type,e);const je={text:{eng:[{id:1,name:"Business card website",description:"This page was made using React, Redux, Typescript and Material UI elements.",url:"https://mxtsx.github.io"},{id:2,name:"Social Network",description:"Page was made using React, Redux, Typescript, Formik, Axios, WebSocket and Ant Design elements.",url:"https://mxtsx.github.io/sample-social-network",notes:["Login: free@samuraijs.com","Password: free","In the Safari browser: cookies - enabled; prevent cross-site tracking - disabled."]}],ukr:[{id:1,name:"\u0421\u0430\u0439\u0442-\u0432\u0456\u0437\u0438\u0442\u043a\u0430",description:"\u0426\u044f \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430 \u0431\u0443\u043b\u0430 \u0437\u0440\u043e\u0431\u043b\u0435\u043d\u0430 \u0437 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f\u043c React, Redux, Typescript \u0442\u0430 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0456\u0432 Material UI.",url:"https://mxtsx.github.io"},{id:2,name:"\u0421\u043e\u0446\u0456\u0430\u043b\u044c\u043d\u0430 \u043c\u0435\u0440\u0435\u0436\u0430",description:"\u0421\u0442\u043e\u0440\u0456\u043d\u043a\u0430 \u0431\u0443\u043b\u0430 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0430 \u0437 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f\u043c React, Redux, Typescript, Formik, Axios, WebSocket \u0442\u0430 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0456\u0432 Ant Design.",url:"https://mxtsx.github.io/sample-social-network",notes:["\u041b\u043e\u0433\u0456\u043d: free@samuraijs.com","\u041f\u0430\u0440\u043e\u043b\u044c: free","\u0423 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0456 Safari: \u043a\u0443\u043a\u0456\u0441 - \u0434\u043e\u0437\u0432\u043e\u043b\u0435\u043d\u0456; \u043d\u0435 \u0441\u0442\u0435\u0436\u0438\u0442\u0438 \u043c\u0456\u0436 \u0441\u0430\u0439\u0442\u0430\u043c\u0438 - \u0432\u0438\u043c\u043a\u043d\u0435\u043d\u043e."]}],rus:[{id:1,name:"\u0421\u0430\u0439\u0442-\u0432\u0438\u0437\u0438\u0442\u043a\u0430",description:"\u042d\u0442\u043e\u0442 \u0441\u0430\u0439\u0442 \u0431\u044b\u043b \u0441\u0434\u0435\u043b\u0430\u043d \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c React, Redux, Typescript \u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 Material UI.",url:"https://mxtsx.github.io"},{id:2,name:"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0435\u0442\u044c",description:"\u0421\u0430\u0439\u0442 \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c React, Redux, Typescript, Formik, Axios, WebSocket \u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 Ant Design.",url:"https://mxtsx.github.io/sample-social-network",notes:["\u041b\u043e\u0433\u0438\u043d: free@samuraijs.com","\u041f\u0430\u0440\u043e\u043b\u044c: free","\u0412 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 Safari: \u043a\u0443\u043a\u0438\u0441 - \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b; \u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u043a\u0440\u0435\u0441\u0442\u043d\u043e\u0433\u043e \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u044f - \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043e."]}],cz:[{id:1,name:"Webov\xe1 vizitka",description:"Tato str\xe1nka byla vytvo\u0159ena s pou\u017eit\xedm React, Redux, Typescript a element\u016f Material UI.",url:"https://mxtsx.github.io"},{id:2,name:"Soci\xe1ln\xed s\xed\u0165",description:"Str\xe1nka byla vytvo\u0159ena s pou\u017eit\xedm React, Redux, Typescript, Formik, Axios, WebSocket a element\u016f Ant Design.",url:"https://mxtsx.github.io/sample-social-network",notes:["P\u0159ihla\u0161ovac\xed jm\xe9no: free@samuraijs.com","Heslo: free","V prohl\xed\u017ee\u010di Safari: cookies - zapnuto; nasledovat nap\u0159\xed\u010d str\xe1nkami - vypnuto."]}],hr:[{id:1,name:"Poslovna web stranica",description:"Ova stranica je stvorena pomo\u0107u React, Redux, Typescript i elementa Material UI.",url:"https://mxtsx.github.io"},{id:2,name:"Dru\u0161tvena mre\u017ea",description:"Stranica je stvorena pomo\u0107u React, Redux, Typescript, Formik, Axios, WebSocket i elemenata Ant Design.",url:"https://mxtsx.github.io/sample-social-network",notes:["Korisni\u010dko ime: free@samuraijs.com","Lozinka: free","U pregledniku Safari: cookies - uklju\u010deno; sprije\u010di pra\u0107enje na vi\u0161e mj. - isklju\u010deno."]}]}};var be=(e=je,t)=>(t.type,e);const ve={error404:{eng:"Page doesn't exist",ukr:"\u0421\u0442\u043e\u0440\u0456\u043d\u043a\u0438 \u043d\u0435 \u0456\u0441\u043d\u0443\u0454",rus:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442",cz:"Str\xe1nka neexistuje",hr:"Stranica ne postoji"},error:{eng:"Error",ukr:"\u041f\u043e\u043c\u0438\u043b\u043a\u0430",rus:"\u041e\u0448\u0438\u0431\u043a\u0430",cz:"Chyba",hr:"Gre\u0161ka"}};var xe=(e=ve,t)=>(t.type,e);const fe=Object(Z.b)({about:ue,contact:pe,home:ge,portfolio:be,header:F,lang:z.b,errorReducer:xe});var ke=Object(Z.d)(fe);r.a.render(Object(m.jsx)(g.a,{children:Object(m.jsx)(v.a,{store:ke,children:Object(m.jsx)(ce,{})})}),document.getElementById("root")),le()}},[[86,1,2]]]);
//# sourceMappingURL=main.361a8b4f.chunk.js.map