(this["webpackJsonppresentation-app"]=this["webpackJsonppresentation-app"]||[]).push([[0],{16:function(e,t,a){e.exports={header:"Header_header__3AhW_",logo:"Header_logo__2FffY",name:"Header_name__37GoO",level:"Header_level__3NuMy",navWidth360:"Header_navWidth360__3m00t",navWidth370:"Header_navWidth370__2Lqyr",navWidth400:"Header_navWidth400__1tCXp",navWidth460:"Header_navWidth460__1nkQF",nav:"Header_nav__2f7Dn",active:"Header_active__1VFq_",collapseButton:"Header_collapseButton__1ubSG",headerOpened:"Header_headerOpened__3sKKV"}},18:function(e,t,a){e.exports={portfolioContainer:"Portfolio_portfolioContainer__2xo0k",contentWrapper:"Portfolio_contentWrapper__KEMP_",portfolioProject:"Portfolio_portfolioProject__1433K",portfolioProjectItem:"Portfolio_portfolioProjectItem__1svPi",portfolioProjectName:"Portfolio_portfolioProjectName__2KV8L",portfolioProjectDescription:"Portfolio_portfolioProjectDescription__2lwLK",portfolioProjectNote:"Portfolio_portfolioProjectNote__22_1Z",portfolioProjectUrl:"Portfolio_portfolioProjectUrl__3fzqU","homeTransition-appear":"Portfolio_homeTransition-appear__2VJlf","homeTransition-appear-active":"Portfolio_homeTransition-appear-active__18Mxh"}},44:function(e,t,a){e.exports={aboutContainer:"About_aboutContainer__1AL3_",contentWrapper:"About_contentWrapper__3-maW",title:"About_title__hy7f-",text:"About_text__1Oenj"}},45:function(e,t,a){e.exports={contactContainer:"Contact_contactContainer__2FvEx",contentWrapper:"Contact_contentWrapper__3CdKM",contact:"Contact_contact__2d73W",clickableImg:"Contact_clickableImg__3vemD"}},46:function(e,t,a){e.exports={homepageContainer:"Homepage_homepageContainer__1H1Tb",contentWrapper:"Homepage_contentWrapper__1Lfyh",text:"Homepage_text__1kfoq",links:"Homepage_links__2fw36"}},50:function(e,t,a){e.exports={footer:"Footer_footer__10tfe",copyright:"Footer_copyright__2uh4s",copyrightIcon:"Footer_copyrightIcon__uzd6K"}},52:function(e,t,a){e.exports={contentWrapper:"App_contentWrapper__1NUOt",main:"App_main__1D2S9"}},56:function(e,t,a){e.exports={componentInvisible:"withLoadingEffect_componentInvisible__2l9Z5",componentVisible:"withLoadingEffect_componentVisible__1YNX4"}},57:function(e,t,a){e.exports={errorContainer:"Error404_errorContainer__oxz2Y",contentWrapper:"Error404_contentWrapper__XIpJj"}},59:function(e,t,a){e.exports={preloaderWrapper:"Preloader_preloaderWrapper__JL7pa"}},75:function(e,t,a){},76:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var o=a(0),i=a.n(o),n=a(8),r=a.n(n),c=(a(75),a(76),a(52)),s=a.n(c),l=a.p+"static/media/preloader.6d2c9aba.svg",d=a(59),p=a.n(d),m=a(2);var u=i.a.memo((({height:e="100%",width:t="100%",maxWidth:a="100%",maxHeight:o="100%"})=>Object(m.jsx)("div",{className:p.a.preloaderWrapper,style:{height:e,width:t,backgroundColor:"#F8F8F8"},children:Object(m.jsx)("img",{src:l,alt:"Preloader",style:{maxWidth:a,maxHeight:o}})}))),j=a(12),h=a(33),b=a(16),g=a.n(b),v=a(7);const x=e=>e.lang.language,f=e=>e.header.navbarText,_=e=>e.header.selectLabel,O=e=>e.header.currentPage;var k=a(21),y=a.n(k);const P="lang/CHANGE_LANGUAGE",z={language:"eng"},N=e=>({type:P,payload:{language:e}});var C=(e=z,t)=>{switch(t.type){case P:return{...e,language:t.payload.language};default:return e}},W=a(116),S=a(123),I=a(119),R=a(124),M=a(121),T=a(122);const w=Object(W.a)((e=>Object(S.a)({formControl:{minWidth:25,"& .MuiSelect-icon":{left:31},"& .MuiSelect-select:focus":{backgroundColor:"rgba(255, 255, 255, 0)"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"rgb(0, 0, 0)",borderWidth:1},"& .MuiFormLabel-root.Mui-focused":{color:"rgb(0, 0, 0)",transition:"200ms color"},"& .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover":{backgroundColor:"rgba(255, 255, 255, 0.25)"},"& .MuiMenu-paper":{backgroundColor:"lightgray",maxHeight:"max-content"}},formControlPaddingUkrRus:{"& .MuiSelect-outlined.MuiSelect-outlined":{paddingTop:10,paddingRight:25,paddingLeft:10}},formControlPaddingEng:{"& .MuiSelect-outlined.MuiSelect-outlined":{paddingTop:10,paddingRight:22,paddingLeft:8}},formControlPaddingCz:{"& .MuiSelect-outlined.MuiSelect-outlined":{paddingTop:10,paddingRight:32,paddingLeft:11},"& .MuiSelect-icon":{left:30}},formControlPaddingHr:{"& .MuiSelect-outlined.MuiSelect-outlined":{paddingTop:10,paddingRight:29,paddingLeft:12},"& .MuiSelect-icon":{left:29}},resize:{fontFamily:"Source Sans Pro",fontSize:16.5},menuStyle:{"& .MuiPaper-root":{position:"absolute",backgroundColor:"#E9E9E9",maxHeight:"min-content"}}})));var A=i.a.memo((()=>{const e=Object(v.c)(_),t=Object(v.c)(x),a=w(t),o=Object(v.b)();return Object(m.jsxs)(I.a,{variant:"outlined",size:"small",className:a.formControl,children:[Object(m.jsx)(R.a,{id:"select-outlined-label",className:y()(a.resize),children:e[t]}),Object(m.jsxs)(M.a,{MenuProps:{className:a.menuStyle},labelId:"select-outlined-label",id:"select-outlined",value:t,onChange:e=>{o(N(e.target.value))},label:e[t],className:y()(a.resize,{[a.formControlPaddingEng]:"eng"===t},{[a.formControlPaddingUkrRus]:"ukr"===t||"rus"},{[a.formControlPaddingCz]:"cz"===t},{[a.formControlPaddingHr]:"hr"===t}),children:[Object(m.jsx)(T.a,{value:"eng",children:"eng"}),Object(m.jsx)(T.a,{value:"cz",children:"cz"}),Object(m.jsx)(T.a,{value:"ukr",children:"ukr"}),Object(m.jsx)(T.a,{value:"rus",children:"rus"}),Object(m.jsx)(T.a,{value:"hr",children:"hr"})]})]})})),H=a.p+"static/media/collapse_minus.0636bcd4.svg",L=a.p+"static/media/collapse_plus.3375a66e.svg";const D="SET_CURRENT_PAGE",E={navbarText:[{title:{eng:"Home",ukr:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430",rus:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430",cz:"Dom\u016f",hr:"Po\u010detna stranica"},path:"/",id:1},{title:{eng:"About",ukr:"\u041f\u0440\u043e \u043c\u0435\u043d\u0435",rus:"\u041e\u0431\u043e \u043c\u043d\u0435",cz:"O mn\u011b",hr:"O meni"},path:"/about",id:2},{title:{eng:"Portfolio",ukr:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0456\u043e",rus:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e",cz:"Portfolio",hr:"Portfolio"},path:"/portfolio",id:3},{title:{eng:"Contact",ukr:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438",rus:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",cz:"Kontakty",hr:"Kontakt"},path:"/contacts",id:4}],selectLabel:{eng:"Lang",ukr:"\u041c\u043e\u0432\u0430",rus:"\u042f\u0437\u044b\u043a",cz:"Jazyk",hr:"Jezik"},currentPage:null},F=e=>({type:D,payload:{currentPage:e}});var J=(e=E,t)=>{switch(t.type){case D:return{...e,currentPage:t.payload.currentPage};default:return e}},U=a(65);const B=e=>e.errorReducer.error404,K=e=>e.errorReducer.error,V=i.a.memo((()=>{const[e,t]=Object(o.useState)(!1),a=Object(v.c)(f),i=Object(o.useMemo)((()=>[]),[]);return Object(m.jsxs)("header",{className:y()(g.a.header,e&&g.a.headerOpened),children:[Object(m.jsx)(G,{text:a,currentPage:i}),Object(m.jsxs)("div",{className:g.a.logo,children:[Object(m.jsx)("div",{className:g.a.name,children:"Maksym Stepanets"}),Object(m.jsx)("div",{className:g.a.level,children:"Junior React Developer"})]}),Object(m.jsx)("button",{className:g.a.collapseButton,onClick:()=>t(!e),children:e?Object(m.jsx)("img",{src:H,alt:"collapseMinus"}):Object(m.jsx)("img",{src:L,alt:"collapsePlus"})}),Object(m.jsx)(q,{setIsOpen:t,text:a,currentPage:i})]})})),G=i.a.memo((({text:e,currentPage:t})=>{const a=Object(v.c)(x),i=Object(v.b)(),n=Object(j.g)(),r=Object(v.c)(O),c=Object(v.c)(K),s=n.pathname;return Object(o.useEffect)((()=>{e.some((e=>e.path===s))?i(F(t[t.length-1])):i(F(c[a]))}),[t,a,c,i,e,s]),Object(m.jsx)(U.a,{children:Object(m.jsx)("title",{children:r})})})),q=i.a.memo((({setIsOpen:e,text:t,currentPage:a})=>{const o=Object(v.c)(x);return Object(m.jsxs)("nav",{className:y()(g.a.nav,{[g.a.navWidth360]:"eng"===o},{[g.a.navWidth370]:"cz"===o},{[g.a.navWidth400]:"hr"===o},{[g.a.navWidth460]:"rus"===o},{[g.a.navWidth460]:"ukr"===o}),children:[Object(m.jsx)(A,{}),t.map((t=>Object(m.jsx)(h.b,{onClick:()=>e(!1),exact:!0,to:t.path,isActive:e=>(e&&a.push(t.title[o]),!!e),activeClassName:g.a.active,children:t.title[o]},t.id)))]})}));var Z=V;const X=e=>e.about.text;var Y=a(14),$=a(49),Q=a.n($);var ee=function(e){return t=>{const a=Object(v.c)(x),i=Object(j.f)(),n=Object(v.b)();return Object(o.useEffect)((()=>{const e=i.location.search.split("?")[0],t={};t.lang=a,i.location.pathname+i.location.search!==`${i.location.pathname}?${Q.a.stringify(t)}`&&i.push({pathname:e,search:Q.a.stringify(t)})}),[a,i.location.search,i]),Object(o.useEffect)((()=>{let e=Q.a.parse(i.location.search.substring(1)).lang;n(N(e))})),Object(m.jsx)(e,{...t})}},te=a(44),ae=a.n(te),oe=a(56),ie=a.n(oe);var ne=function(e){return i.a.memo((t=>{const[a,i]=Object(o.useState)(!1);return Object(o.useLayoutEffect)((()=>{setTimeout((()=>{i(!0)}))}),[]),Object(m.jsx)("div",{className:a?ie.a.componentVisible:ie.a.componentInvisible,children:Object(m.jsx)(e,{...t})})}))};const re=i.a.memo((()=>{const e=Object(v.c)(x),t=Object(v.c)(X);return Object(m.jsx)("div",{className:ae.a.aboutContainer,children:Object(m.jsxs)("div",{className:ae.a.contentWrapper,children:[Object(m.jsx)("h1",{className:ae.a.title,children:t[e].title}),t[e].description.map(((e,t)=>Object(m.jsx)("span",{className:ae.a.text,children:e},t)))]})})}));var ce=Object(Y.c)(ee,ne)(re);const se=e=>e.portfolio.text;var le=a(18),de=a.n(le);var pe=i.a.memo((({name:e,description:t,url:a,id:o,notes:i})=>Object(m.jsxs)("div",{className:de.a.portfolioProject,children:[Object(m.jsxs)("h1",{className:y()(de.a.portfolioProjectItem,de.a.portfolioProjectName),children:[o,". ",e]}),Object(m.jsx)("span",{className:y()(de.a.portfolioProjectItem,de.a.portfolioProjectDescription),children:t}),Object(m.jsx)("a",{href:a,className:y()(de.a.portfolioProjectItem,de.a.portfolioProjectUrl),children:a.substring(8)}),i&&i.map(((e,t)=>Object(m.jsx)("span",{className:de.a.portfolioProjectNote,children:e},t)))]})));const me=i.a.memo((()=>{const e=Object(v.c)(x),t=Object(v.c)(se);return Object(m.jsx)("div",{className:de.a.portfolioContainer,children:Object(m.jsx)("div",{className:de.a.contentWrapper,children:t[e].map(((e,t)=>Object(m.jsx)(pe,{name:e.name,description:e.description,url:e.url,id:e.id,notes:e.notes},t)))})})}));var ue=Object(Y.c)(ee,ne)(me),je=a(45),he=a.n(je);const be=e=>e.contact.text,ge=i.a.memo((()=>{const e=Object(v.c)(be);return Object(m.jsx)("div",{className:he.a.contactContainer,children:Object(m.jsx)("div",{className:he.a.contentWrapper,children:e.map((e=>Object(m.jsxs)("div",{className:he.a.contact,children:[Object(m.jsx)("a",{href:e.url,children:Object(m.jsx)("img",{src:e.image,alt:e.name,className:he.a.clickableImg})}),Object(m.jsx)("a",{href:e.url,children:e.name})]},e.id)))})})}));var ve=Object(Y.c)(ee,ne)(ge);const xe=e=>e.home.text;var fe=a(46),_e=a.n(fe);const Oe=i.a.memo((()=>{const e=Object(v.c)(x),t=Object(v.c)(be),a=Object(v.c)(xe);return Object(m.jsx)("div",{className:_e.a.homepageContainer,children:Object(m.jsxs)("div",{className:_e.a.contentWrapper,children:[Object(m.jsxs)("div",{className:_e.a.text,children:[Object(m.jsx)("div",{children:a[e].greeting}),Object(m.jsx)("div",{children:a[e].description})]}),Object(m.jsx)("div",{className:_e.a.links,children:t.map((e=>Object(m.jsx)("a",{href:e.url,children:Object(m.jsx)("img",{src:e.image,alt:e.name})},e.id)))})]})})}));var ke=Object(Y.c)(ee,ne)(Oe),ye=a(57),Pe=a.n(ye);const ze=i.a.memo((()=>{const e=Object(v.c)(B),t=Object(v.c)(x);return Object(m.jsx)("div",{className:Pe.a.errorContainer,children:Object(m.jsx)("div",{className:Pe.a.contentWrapper,children:Object(m.jsx)("h1",{children:e[t]})})})}));var Ne=Object(Y.c)(ee,ne)(ze),Ce=a(50),We=a.n(Ce);var Se=i.a.memo((()=>Object(m.jsx)("div",{className:We.a.footer,children:Object(m.jsxs)("span",{className:We.a.copyright,children:[Object(m.jsx)("span",{className:We.a.copyrightIcon,children:"\xa9"})," 2021"]})})));var Ie=i.a.memo((()=>{const[e,t]=Object(o.useState)(!1);return Object(o.useLayoutEffect)((()=>{setTimeout((()=>{t(!0)}),1500)}),[]),e?Object(m.jsxs)("div",{className:s.a.contentWrapper,children:[Object(m.jsx)(Z,{}),Object(m.jsx)("main",{className:s.a.main,children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{path:"/about",render:()=>Object(m.jsx)(ce,{})}),Object(m.jsx)(j.a,{path:"/portfolio",render:()=>Object(m.jsx)(ue,{})}),Object(m.jsx)(j.a,{path:"/contacts",render:()=>Object(m.jsx)(ve,{})}),Object(m.jsx)(j.a,{exact:!0,path:"/",render:()=>Object(m.jsx)(ke,{})}),Object(m.jsx)(j.a,{path:"*",render:()=>Object(m.jsx)(Ne,{})})]})}),Object(m.jsx)(Se,{})]}):Object(m.jsx)(u,{})}));var Re=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,126)).then((({getCLS:t,getFID:a,getFCP:o,getLCP:i,getTTFB:n})=>{t(e),a(e),o(e),i(e),n(e)}))};const Me={text:{eng:{title:"About Me",description:["My name is Max. I live in Prague. For the last few years of my life, I have been actively interested in learning languages, and in 2019 I first got acquainted with a programming language. Because of the need to automate routine tasks at work, I learned Python a little. I liked the result so much that I delved deeper into the field of programming. This was the beginning of a new stage in my life.","Today I am studying React Native and enhancement my knowledge in native JS, React, and Typescript. Although I have experience with the backend and databases, my heart belongs only to the frontend.","Unfortunately, I have spent most of my time studying the theoretical part, so up to now, my portfolio is empty. Of course, I did practical assignments in various courses, but I don't see the point in including them. What is the point in presenting to the employer what he has already seen in other people's portfolios? Anyway, I promise to fill in the existing gaps in the portfolio soon! I am already working on this so hard."]},ukr:{title:"\u041f\u0440\u043e \u043c\u0435\u043d\u0435",description:["\u041c\u0435\u043d\u0435 \u0437\u0432\u0430\u0442\u0438 \u041c\u0430\u043a\u0441. \u042f \u0436\u0438\u0432\u0443 \u0443 \u041f\u0440\u0430\u0437\u0456. \u0414\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u043e\u0441\u0442\u0430\u043d\u043d\u0456\u0445 \u0440\u043e\u043a\u0456\u0432 \u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0437\u0430\u0445\u043e\u043f\u043b\u044e\u044e\u0441\u044f \u0432\u0438\u0432\u0447\u0435\u043d\u043d\u044f\u043c \u0440\u0456\u0437\u043d\u0438\u0445 \u043c\u043e\u0432, \u0430 \u0443 2019 \u0440\u043e\u0446\u0456 \u044f \u0432\u043f\u0435\u0440\u0448\u0435 \u043f\u043e\u0437\u043d\u0430\u0439\u043e\u043c\u0438\u0432\u0441\u044f \u0437 \u043c\u043e\u0432\u043e\u044e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0443\u0432\u0430\u043d\u043d\u044f. \u0423 \u0437\u0432'\u044f\u0437\u043a\u0443 \u0437 \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0456\u0441\u0442\u044e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0443\u0432\u0430\u0442\u0438 \u0431\u0443\u0434\u0435\u043d\u043d\u0456 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f \u043d\u0430 \u0440\u043e\u0431\u043e\u0442\u0456 \u044f \u043f\u043e\u0447\u0430\u0432 \u0432\u0438\u0432\u0447\u0430\u0442\u0438 Python. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043c\u0435\u043d\u0435 \u0432\u0440\u0430\u0437\u0438\u0432 \u043d\u0430\u0441\u0442\u0456\u043b\u044c\u043a\u0438, \u0449\u043e \u044f \u0432\u0438\u0440\u0456\u0448\u0438\u0432 \u0437\u0430\u043d\u0443\u0440\u0438\u0442\u0438\u0441\u044f \u0443 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0443\u0432\u0430\u043d\u043d\u044f \u0449\u0435 \u0431\u0456\u043b\u044c\u0448\u0435. \u0417 \u0446\u044c\u043e\u0433\u043e \u043c\u043e\u043c\u0435\u043d\u0442\u0443 \u043f\u043e\u0447\u0430\u0432\u0441\u044f \u043d\u043e\u0432\u0438\u0439 \u0435\u0442\u0430\u043f \u043c\u043e\u0433\u043e \u0436\u0438\u0442\u0442\u044f.","\u0421\u0442\u0430\u043d\u043e\u043c \u043d\u0430 \u0441\u044c\u043e\u0433\u043e\u0434\u043d\u0456 \u044f \u0437\u0430\u0439\u043c\u0430\u044e\u0441\u044f \u0432\u0438\u0432\u0447\u0435\u043d\u043d\u044f\u043c React Native \u0442\u0430 \u043f\u043e\u0433\u043b\u0438\u0431\u043b\u044e\u044e \u0441\u0432\u043e\u0457 \u0437\u043d\u0430\u043d\u043d\u044f \u043d\u0430\u0442\u0438\u0432\u043d\u043e\u0433\u043e JS, React \u0456 Typescript. \u0425\u043e\u0447 \u044f \u0439 \u043c\u0430\u044e \u0434\u043e\u0441\u0432\u0456\u0434 \u0440\u043e\u0431\u043e\u0442\u0438 \u0437 \u0431\u0435\u043a\u0435\u043d\u0434\u043e\u043c \u0442\u0430 \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u0438\u0445, \u0430\u043b\u0435 \u043c\u043e\u0454 \u0441\u0435\u0440\u0446\u0435 \u043d\u0430\u043b\u0435\u0436\u0438\u0442\u044c \u043b\u0438\u0448\u0435 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0443.","\u041d\u0430 \u0436\u0430\u043b\u044c, \u0432\u043f\u0440\u043e\u0434\u043e\u0432\u0436 \u0442\u043e\u0433\u043e \u0447\u0430\u0441\u0443, \u043a\u043e\u043b\u0438 \u044f \u0432\u0438\u0432\u0447\u0430\u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0443\u0432\u0430\u043d\u043d\u044f, \u0431\u0456\u043b\u044c\u0448\u0443 \u0439\u043e\u0433\u043e \u0447\u0430\u0441\u0442\u0438\u043d\u0443 \u044f \u0432\u0438\u0442\u0440\u0430\u0442\u0438\u0432 \u043d\u0430 \u0437\u0430\u043a\u0440\u0456\u043f\u043b\u0435\u043d\u043d\u044f \u0441\u0430\u043c\u0435 \u0442\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u043d\u0438\u0445 \u0437\u043d\u0430\u043d\u044c, \u0442\u043e\u043c\u0443 \u043c\u043e\u0454 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0456\u043e \u043f\u043e\u043a\u0438 \u0449\u043e \u043f\u043e\u0440\u043e\u0436\u043d\u0454. \u0417\u0432\u0438\u0447\u0430\u0439\u043d\u043e, \u044f \u0432\u0438\u043a\u043e\u043d\u0443\u0432\u0430\u0432 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u043d\u0456 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f \u043f\u0456\u0434 \u0447\u0430\u0441 \u043f\u0440\u043e\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f \u0440\u0456\u0437\u043d\u043e\u043c\u0430\u043d\u0456\u0442\u043d\u0438\u0445 \u043a\u0443\u0440\u0441\u0456\u0432, \u0430\u043b\u0435 \u0434\u043e\u0434\u0430\u0432\u0430\u0442\u0438 \u0457\u0445 \u0434\u043e \u0441\u0432\u043e\u0433\u043e \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0456\u043e \u044f \u043d\u0435 \u0431\u0430\u0447\u0443 \u0441\u0435\u043d\u0441\u0443. \u041d\u0430\u0432\u0456\u0449\u043e \u043f\u043e\u043a\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u0440\u043e\u0431\u043e\u0442\u043e\u0434\u0430\u0432\u0446\u044e \u0442\u0435, \u0449\u043e \u0432\u0456\u043d \u0432\u0436\u0435 \u0431\u0430\u0447\u0438\u0432 \u0434\u0435\u0441\u044f\u0442\u043a\u0438 \u0440\u0430\u0437\u0456\u0432 \u0440\u0430\u043d\u0456\u0448\u0435 \u0432 \u0456\u043d\u0448\u0438\u0445 \u043b\u044e\u0434\u0435\u0439? \u0423 \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u043c\u0443 \u0440\u0430\u0437\u0456, \u043d\u0430\u044f\u0432\u043d\u0456 \u043f\u0440\u043e\u0431\u0456\u043b\u0438 \u0443 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0456\u043e \u044f \u043e\u0431\u0456\u0446\u044f\u044e \u0449\u043e\u043d\u0430\u0439\u0448\u0432\u0438\u0434\u0448\u0435 \u0437\u0430\u043f\u043e\u0432\u043d\u0438\u0442\u0438! \u0412\u0436\u0435 \u0437\u0430\u0440\u0430\u0437 \u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u043d\u0430\u0434 \u0446\u0438\u043c \u043f\u0440\u0430\u0446\u044e\u044e."]},rus:{title:"\u041e\u0431\u043e \u043c\u043d\u0435",description:["\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u041c\u0430\u043a\u0441. \u042f \u0436\u0438\u0432\u0443 \u0432 \u041f\u0440\u0430\u0433\u0435. \u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043b\u0435\u0442 \u0441\u0432\u043e\u0435\u0439 \u0436\u0438\u0437\u043d\u0438 \u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0443\u0432\u043b\u0435\u043a\u0430\u044e\u0441\u044c \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435\u043c \u044f\u0437\u044b\u043a\u043e\u0432, \u0430 \u0432 2019 \u0433\u043e\u0434\u0443 \u044f \u0432\u043f\u0435\u0440\u0432\u044b\u0435 \u043f\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u043b\u0441\u044f \u0441 \u044f\u0437\u044b\u043a\u043e\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u0412 \u0441\u0432\u044f\u0437\u0438 \u0441 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c\u044e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0443\u0442\u0438\u043d\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0435 \u044f \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043f\u043e\u0434\u0443\u0447\u0438\u043b Python. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043c\u043d\u0435 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u0441\u044f, \u0447\u0442\u043e \u044f \u0440\u0435\u0448\u0438\u043b \u0443\u0433\u043b\u0443\u0431\u0438\u0442\u044c\u0441\u044f \u0432 \u0441\u0444\u0435\u0440\u0443 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u0421 \u044d\u0442\u043e\u0433\u043e \u043d\u0430\u0447\u0430\u043b\u0441\u044f \u043d\u043e\u0432\u044b\u0439 \u044d\u0442\u0430\u043f \u043c\u043e\u0435\u0439 \u0436\u0438\u0437\u043d\u0438.","\u041d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f\u0448\u043d\u0438\u0439 \u0434\u0435\u043d\u044c \u044f \u0437\u0430\u043d\u0438\u043c\u0430\u044e\u0441\u044c \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435\u043c React Native \u0438 \u0443\u0433\u043b\u0443\u0431\u043b\u0435\u043d\u0438\u0435\u043c \u0437\u043d\u0430\u043d\u0438\u0439 \u0432 \u0441\u0444\u0435\u0440\u0435 \u043d\u0430\u0442\u0438\u0432\u043d\u043e\u0433\u043e JS, React \u0438 Typescript. \u0425\u043e\u0442\u044c \u044f \u0438 \u0438\u043c\u0435\u044e \u043e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0431\u044d\u043a\u0435\u043d\u0434\u043e\u043c \u0438 \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u043d\u043e \u043c\u043e\u0451 \u0441\u0435\u0440\u0434\u0446\u0435 \u043f\u0440\u0435\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u043b\u0438\u0448\u044c \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0443.","\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0431\u043e\u043b\u044c\u0448\u0443\u044e \u0447\u0430\u0441\u0442\u044c \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u044f \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u043b \u043d\u0430 \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435 \u0442\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432, \u0442\u0430\u043a \u0447\u0442\u043e \u043f\u043e\u043a\u0430 \u0447\u0442\u043e \u043c\u043e\u0451 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e \u043f\u0443\u0441\u0442\u0443\u0435\u0442. \u0420\u0430\u0437\u0443\u043c\u0435\u0435\u0442\u0441\u044f, \u044f \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u043b \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u043d\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043a\u0443\u0440\u0441\u0430\u0445, \u043d\u043e \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0438\u0445 \u0432 \u0441\u0432\u043e\u0451 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e \u044f \u043d\u0435 \u0432\u0438\u0436\u0443 \u0441\u043c\u044b\u0441\u043b\u0430. \u0417\u0430\u0447\u0435\u043c \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u043e\u0434\u0430\u0442\u0435\u043b\u044e \u0442\u043e, \u0447\u0442\u043e \u043e\u043d \u0432\u0438\u0434\u0435\u043b \u0443\u0436\u0435 \u0434\u0435\u0441\u044f\u0442\u043a\u0438 \u0440\u0430\u0437 \u0443 \u0434\u0440\u0443\u0433\u0438\u0445 \u043b\u044e\u0434\u0435\u0439? \u0412 \u043b\u044e\u0431\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043f\u0440\u043e\u0431\u0435\u043b\u044b \u0432 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e \u044f \u043e\u0431\u0435\u0449\u0430\u044e \u0441\u043a\u043e\u0440\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c! \u0423\u0436\u0435 \u0441\u0435\u0439\u0447\u0430\u0441 \u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u043d\u0430\u0434 \u044d\u0442\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u0430\u044e."]},cz:{title:"O mn\u011b",description:["Jmenuji se Max. Bydl\xedm v Praze. Posledn\xedch n\u011bkolik let sv\xe9ho \u017eivota se aktivn\u011b zaj\xedm\xe1m o studium jazyk\u016f a v roce 2019 jsem se poprv\xe9 sezn\xe1mil s programovac\xedm jazykem. Pot\u0159eboval jsem v pr\xe1ci automatizovat rutinn\xed \xfakoly a proto jsem se trochu nau\u010dil Python. Byl jsem z v\xfdsledk\u016f nad\u0161en\xfd, tak\u017ee jsem se rozhodl prohloubit znalosti Pythonu a studovat programov\xe1n\xed d\xe1l. A tak za\u010dala nov\xe1 etapa m\xe9ho \u017eivota.","Dnes se zab\xfdv\xe1m studiem React Native a prohlouben\xedm znalost\xed v oblasti nativn\xedho JSu, Reactu a Typescriptu. I kdy\u017e m\xe1m zku\u0161enosti s backendem a datab\xe1zemi, m\xe9 srdce pat\u0159\xed pouze frontendu.","Bohu\u017eel, v\u011bt\u0161inu \u010dasu jsem str\xe1vil studiem teorie, tak\u017ee zat\xedm je m\xe9 portfolio pr\xe1zdn\xe9. Samoz\u0159ejm\u011b jsem vykon\xe1val \xfakoly b\u011bhem r\u016fzn\xfdch kurz\u016f, ale d\xe1vat je do portfolia nevid\xedm smysl. Aby se zam\u011bstnavatel d\xedval na to, co u\u017e vid\u011bl mnohokr\xe1t u jin\xfdch lid\xed? Ale ne. Ka\u017edop\xe1dn\u011b slibuji, \u017ee brzy sv\xe9 portfolio dopln\xedm! U\u017e te\u010f na tom aktivn\u011b pracuji."]},hr:{title:"O meni",description:["Zovem se Max. \u017divim u Pragu. Tijekom posljednjih nekoliko godina svoga \u017eivota sam se aktivno bavio u\u010denjem jezika, a 2019. godine se prvi put upoznao sa programskim jezikom. Trebao sam automatizirati na poslu rutinske zadatke, tako da malo nau\u010dio Python. Bio sam tako odu\u0161evljen rezultatom da odlu\u0107io produbiti znanje Pythona i u\u010diti programiranje dalje. Tako je po\u010delo novo poglavlje u mom \u017eivotu.","Danas u\u010dim React Native i produbljujem znanja u oblastima JSa, Reacta i Typescripta. Iako imam iskustva u backendu i bazama podataka, moje srce pripada samo frontendu.","Na\u017ealost, ve\u0107inu vremena sam proveo prou\u010davaju\u0107i teoriju, tako da je za danas moj portfolio prazan. Premda da sam radio zadatke na razli\u010ditim te\u010dajevima, imati ih u portofoliju ne vidim smisao. Za\u0161to? Da bi poslodavac gledao na ono \u0161to je ve\u0107 mnogo puta vidio u portfolijima drugih ljudi? U svakom slu\u010daju, obe\u0107avam da \u0107u uskoro ne\u0161to u portfolio dodavati! Ve\u0107 sada aktivno radim na tome."]}}};var Te=(e=Me,t)=>(t.type,e);const we={text:[{image:a.p+"static/media/github.e6d6bee7.svg",url:"https://github.com/mxtsx",name:"Github",id:1},{image:a.p+"static/media/linkedin-round.b14bfe3d.svg",url:"https://www.linkedin.com/in/mxtsx/",name:"LinkedIn",id:2},{image:a.p+"static/media/email-round.0ea35c92.svg",url:"mailto: mxdottsx@gmail.com",name:"mxdottsx@gmail.com",id:3}]};var Ae=(e=we,t)=>(t.type,e);const He={text:{eng:{greeting:"Hi, my name is Max.",description:"I am a Junior React Developer. Welcome to my page."},ukr:{greeting:"\u041f\u0440\u0438\u0432\u0456\u0442, \u044f \u041c\u0430\u043a\u0441.",description:"\u042f \u043f\u043e\u0447\u0438\u043d\u0430\u044e\u0447\u0438\u0439 React Developer. \u0412\u0456\u0442\u0430\u044e \u043d\u0430 \u043c\u043e\u0457\u0439 \u0441\u0442\u043e\u0440\u0456\u043d\u0446\u0456."},rus:{greeting:"\u041f\u0440\u0438\u0432\u0435\u0442, \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u041c\u0430\u043a\u0441.",description:"\u042f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0439 React Developer. \u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u043c\u043e\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."},cz:{greeting:"Ahoj, jsem Max.",description:"Jsem Junior React Developer. V\xedtejte na moj\xed str\xe1nce."},hr:{greeting:"Bok, ja sam Max.",description:"Sam Junior React Developer. Dobro do\u0161li na moju stranicu."}}};var Le=(e=He,t)=>(t.type,e);const De={text:{eng:[{id:1,name:"Business card website",description:"This page was made using React, Redux, Typescript and Material UI elements.",url:"https://mxtsx.github.io"},{id:2,name:"Social Network",description:"Page was made using React, Redux, Typescript, Formik, Axios, WebSocket and Ant Design elements.",url:"https://mxtsx.github.io/sample-social-network",notes:["Login: free@samuraijs.com","Password: free","In the Safari browser: cookies - enabled; prevent cross-site tracking - disabled."]}],ukr:[{id:1,name:"\u0421\u0430\u0439\u0442-\u0432\u0456\u0437\u0438\u0442\u043a\u0430",description:"\u0426\u044f \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430 \u0431\u0443\u043b\u0430 \u0437\u0440\u043e\u0431\u043b\u0435\u043d\u0430 \u0437 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f\u043c React, Redux, Typescript \u0442\u0430 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0456\u0432 Material UI.",url:"https://mxtsx.github.io"},{id:2,name:"\u0421\u043e\u0446\u0456\u0430\u043b\u044c\u043d\u0430 \u043c\u0435\u0440\u0435\u0436\u0430",description:"\u0421\u0442\u043e\u0440\u0456\u043d\u043a\u0430 \u0431\u0443\u043b\u0430 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0430 \u0437 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f\u043c React, Redux, Typescript, Formik, Axios, WebSocket \u0442\u0430 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0456\u0432 Ant Design.",url:"https://mxtsx.github.io/sample-social-network",notes:["\u041b\u043e\u0433\u0456\u043d: free@samuraijs.com","\u041f\u0430\u0440\u043e\u043b\u044c: free","\u0423 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0456 Safari: \u043a\u0443\u043a\u0456\u0441 - \u0434\u043e\u0437\u0432\u043e\u043b\u0435\u043d\u0456; \u043d\u0435 \u0441\u0442\u0435\u0436\u0438\u0442\u0438 \u043c\u0456\u0436 \u0441\u0430\u0439\u0442\u0430\u043c\u0438 - \u0432\u0438\u043c\u043a\u043d\u0435\u043d\u043e."]}],rus:[{id:1,name:"\u0421\u0430\u0439\u0442-\u0432\u0438\u0437\u0438\u0442\u043a\u0430",description:"\u042d\u0442\u043e\u0442 \u0441\u0430\u0439\u0442 \u0431\u044b\u043b \u0441\u0434\u0435\u043b\u0430\u043d \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c React, Redux, Typescript \u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 Material UI.",url:"https://mxtsx.github.io"},{id:2,name:"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0435\u0442\u044c",description:"\u0421\u0430\u0439\u0442 \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c React, Redux, Typescript, Formik, Axios, WebSocket \u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 Ant Design.",url:"https://mxtsx.github.io/sample-social-network",notes:["\u041b\u043e\u0433\u0438\u043d: free@samuraijs.com","\u041f\u0430\u0440\u043e\u043b\u044c: free","\u0412 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 Safari: \u043a\u0443\u043a\u0438\u0441 - \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b; \u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u043a\u0440\u0435\u0441\u0442\u043d\u043e\u0433\u043e \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u044f - \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043e."]}],cz:[{id:1,name:"Webov\xe1 vizitka",description:"Tato str\xe1nka byla vytvo\u0159ena s pou\u017eit\xedm React, Redux, Typescript a element\u016f Material UI.",url:"https://mxtsx.github.io"},{id:2,name:"Soci\xe1ln\xed s\xed\u0165",description:"Str\xe1nka byla vytvo\u0159ena s pou\u017eit\xedm React, Redux, Typescript, Formik, Axios, WebSocket a element\u016f Ant Design.",url:"https://mxtsx.github.io/sample-social-network",notes:["P\u0159ihla\u0161ovac\xed jm\xe9no: free@samuraijs.com","Heslo: free","V prohl\xed\u017ee\u010di Safari: cookies - zapnuto; nasledovat nap\u0159\xed\u010d str\xe1nkami - vypnuto."]}],hr:[{id:1,name:"Poslovna web stranica",description:"Ova stranica je stvorena pomo\u0107u React, Redux, Typescript i elementa Material UI.",url:"https://mxtsx.github.io"},{id:2,name:"Dru\u0161tvena mre\u017ea",description:"Stranica je stvorena pomo\u0107u React, Redux, Typescript, Formik, Axios, WebSocket i elemenata Ant Design.",url:"https://mxtsx.github.io/sample-social-network",notes:["Korisni\u010dko ime: free@samuraijs.com","Lozinka: free","U pregledniku Safari: cookies - uklju\u010deno; sprije\u010di pra\u0107enje na vi\u0161e mj. - isklju\u010deno."]}]}};var Ee=(e=De,t)=>(t.type,e);const Fe={error404:{eng:"Page doesn't exist",ukr:"\u0421\u0442\u043e\u0440\u0456\u043d\u043a\u0438 \u043d\u0435 \u0456\u0441\u043d\u0443\u0454",rus:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442",cz:"Str\xe1nka neexistuje",hr:"Stranica ne postoji"},error:{eng:"Error",ukr:"\u041f\u043e\u043c\u0438\u043b\u043a\u0430",rus:"\u041e\u0448\u0438\u0431\u043a\u0430",cz:"Chyba",hr:"Gre\u0161ka"}};var Je=(e=Fe,t)=>(t.type,e);const Ue=Object(Y.b)({about:Te,contact:Ae,home:Le,portfolio:Ee,header:J,lang:C,errorReducer:Je});var Be=Object(Y.d)(Ue);r.a.render(Object(m.jsx)(h.a,{children:Object(m.jsx)(v.a,{store:Be,children:Object(m.jsx)(Ie,{})})}),document.getElementById("root")),Re()}},[[85,1,2]]]);
//# sourceMappingURL=main.415adef5.chunk.js.map