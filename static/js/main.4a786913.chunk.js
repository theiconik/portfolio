(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{24:function(e,t,a){e.exports=a(46)},34:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/logo.faef93e2.png"},36:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.8e99f438.svg"},37:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.d781db27.svg"},38:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.4a62b2bf.svg"},39:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.809bd9ed.svg"},40:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.ba2e262d.svg"},41:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.91e8f44c.svg"},42:function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.3df134e6.png"},43:function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.5c235f00.png"},44:function(e,t,a){e.exports=a.p+"static/media/features-split-image-03.2b8a8766.png"},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(21),l=a.n(n),s=a(10),c=a(6),o=a(2),m=["component","layout"],d=function(e){var t=e.component,a=e.layout,i=Object(o.a)(e,m);return a=void 0===a?function(e){return r.a.createElement(r.a.Fragment,null,e.children)}:a,r.a.createElement(s.a,Object.assign({},i,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},v=a(9),u=a(3),p=a.n(u),h=a(17),b=r.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),n=Object(v.a)(a,2),l=n[0],s=n[1],c=Object(i.useState)([]),o=Object(v.a)(c,2),m=o[0],d=o[1],u=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},p=function(){if(!u())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=l-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(u()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),p())}),[m]);var b=function(){u()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(h.throttle)((function(){b(),p()}),30),E=Object(h.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){b(),p()}),[l]),r.a.createElement(r.a.Fragment,null,e.children())}));b.propTypes={children:p.a.func.isRequired};var f=b,E=a(13),g=(a(34),a(1)),N=a.n(g),w=a(12),O=["className","src","width","height","alt"],j=function(e){var t=e.className,a=e.src,n=e.width,l=e.height,s=e.alt,c=Object(o.a)(e,O),m=Object(i.useState)(!1),d=Object(v.a)(m,2),u=d[0],p=d[1],h=Object(i.useRef)(null);Object(i.useEffect)((function(){b(h.current)}),[]);var b=function(e){var t,a,i=document.createElement("img");u||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return r.a.createElement("img",Object.assign({},c,{ref:h,className:t,src:a,width:n,height:l,alt:s,onLoad:function(){p(!0)}}))};j.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var y=j,D=["className"],x=function(e){var t=e.className,i=Object(o.a)(e,D),n=N()("brand",t);return r.a.createElement("div",Object.assign({},i,{className:n}),r.a.createElement("h1",{className:"m-0"},r.a.createElement(w.a,{to:"/"},r.a.createElement(y,{src:a(35),style:{filter:"contrast(130%)",marginTop:"7px"},alt:"Open",width:47,height:47}))))},k=["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"],C=function(e){var t=e.className,a=e.navPosition,n=e.hideNav,l=e.hideSignin,s=e.bottomOuterDivider,c=e.bottomDivider,m=Object(o.a)(e,k),d=Object(i.useState)(!1),u=Object(v.a)(d,2),p=u[0],h=u[1],b=Object(i.useRef)(null),f=Object(i.useRef)(null);Object(i.useEffect)((function(){return p&&E(),document.addEventListener("keydown",w),document.addEventListener("click",O),function(){document.removeEventListener("keydown",w),document.removeEventListener("click",O),g()}}));var E=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",h(!0)},g=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),h(!1)},w=function(e){p&&27===e.keyCode&&g()},O=function(e){b.current&&p&&!b.current.contains(e.target)&&e.target!==f.current&&g()},j=N()("site-header",s&&"has-bottom-divider",t);return r.a.createElement("header",Object.assign({},m,{className:j}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:N()("site-header-inner",c&&"has-bottom-divider")},r.a.createElement(x,null),!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:p?g:E},r.a.createElement("span",{className:"screen-reader"},"Menu"),r.a.createElement("span",{className:"hamburger"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("nav",{ref:b,className:N()("header-nav",p&&"is-active")},r.a.createElement("div",{className:"header-nav-inner"},r.a.createElement("ul",{className:N()("list-reset text-xs",a&&"header-nav-".concat(a))},r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/theiconik_"},"Twitter"))),!l&&r.a.createElement("ul",{className:"list-reset header-nav-right"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://webstract.hashnode.dev/",className:"button button-primary button-wide-mobile button-sm",onClick:g},"Blogs")))))))))};C.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var L=C,P=["className"],S=function(e){var t=e.className,a=Object(o.a)(e,P),i=N()("footer-social",t);return r.a.createElement("div",Object.assign({},a,{className:i}),r.a.createElement("ul",{className:"list-reset"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100009559383251"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Facebook"),r.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/theiconik_"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Twitter"),r.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://instagram.com/realujwl"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Instagram"),r.a.createElement("g",null,r.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),r.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),r.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},F=["className","topOuterDivider","topDivider"],T=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,n=Object(o.a)(e,F),l=N()("site-footer center-content-mobile",a&&"has-top-divider",t);return r.a.createElement("footer",Object.assign({},n,{className:l}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:N()("site-footer-inner",i&&"has-top-divider")},r.a.createElement("div",{className:"footer-top space-between text-xxs"},r.a.createElement("div",{className:"footer-copyright"},"Made with \ud83d\udc9c in India"),r.a.createElement(S,null)))))};T.defaultProps={topOuterDivider:!1,topDivider:!1};var B=T,M=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{navPosition:"right",className:"reveal-from-bottom"}),r.a.createElement("main",{className:"site-content"},t),r.a.createElement(B,null))},H=a(4),A={types:{topOuterDivider:p.a.bool,bottomOuterDivider:p.a.bool,topDivider:p.a.bool,bottomDivider:p.a.bool,hasBgColor:p.a.bool,invertColor:p.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},I={types:Object(H.a)({},A.types),defaults:Object(H.a)({},A.defaults)},R={types:Object(H.a)(Object(H.a)({},A.types),{},{invertMobile:p.a.bool,invertDesktop:p.a.bool,alignTop:p.a.bool,imageFill:p.a.bool}),defaults:Object(H.a)(Object(H.a)({},A.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},_={types:Object(H.a)(Object(H.a)({},A.types),{},{pushLeft:p.a.bool}),defaults:Object(H.a)(Object(H.a)({},A.defaults),{},{pushLeft:!1})},z=["className"],V=function(e){var t=e.className,a=Object(o.a)(e,z),i=N()("button-group",t);return r.a.createElement("div",Object.assign({},a,{className:i}))},W=["className","tag","color","size","loading","wide","wideMobile","disabled"],q=function(e){var t=e.className,a=e.tag,i=e.color,n=e.size,l=e.loading,s=e.wide,c=e.wideMobile,m=e.disabled,d=Object(o.a)(e,W),v=N()("button",i&&"button-".concat(i),n&&"button-".concat(n),l&&"is-loading",s&&"button-block",c&&"button-wide-mobile",t),u=a;return r.a.createElement(u,Object.assign({},d,{className:v,disabled:m}))};q.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var J=q,U=["className","children","handleClose","show","closeHidden","video","videoTag"],G=function(e){var t=e.className,a=e.children,n=e.handleClose,l=e.show,s=e.closeHidden,c=e.video,m=e.videoTag,d=Object(o.a)(e,U);Object(i.useEffect)((function(){return document.addEventListener("keydown",u),document.addEventListener("click",p),function(){document.removeEventListener("keydown",u),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){v()}),[d.show]);var v=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},u=function(e){27===e.keyCode&&n(e)},p=function(e){e.stopPropagation()},h=N()("modal",l&&"is-active",c&&"modal-video",t);return r.a.createElement(r.a.Fragment,null,l&&r.a.createElement("div",Object.assign({},d,{className:h,onClick:n}),r.a.createElement("div",{className:"modal-inner",onClick:p},c?r.a.createElement("div",{className:"responsive-video"},"iframe"===m?r.a.createElement("iframe",{title:"video",src:c,frameBorder:"0",allowFullScreen:!0}):r.a.createElement("video",{"v-else":!0,controls:!0,src:c})):r.a.createElement(r.a.Fragment,null,!s&&r.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:n}),r.a.createElement("div",{className:"modal-content"},a)))))};G.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var K=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],Q=Object(H.a)({},I.defaults),$=function(e){var t=e.className,a=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,c=e.hasBgColor,m=e.invertColor,d=Object(o.a)(e,K),u=Object(i.useState)(!1),p=Object(v.a)(u,2),h=(p[0],p[1],N()("hero section center-content",a&&"has-top-divider",n&&"has-bottom-divider",c&&"has-bg-color",m&&"invert-color",t)),b=N()("hero-inner section-inner",l&&"has-top-divider",s&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},d,{className:h}),r.a.createElement("div",{className:"container-sm",style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"-75px"}},r.a.createElement("div",{className:b},r.a.createElement("div",{className:"hero-content"},r.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Hi there! I'm ",r.a.createElement("span",{className:"text-color-primary"},"Ujjawal")),r.a.createElement("div",{className:"container-xs"},r.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"CS Undergrad at National Institute of Technology Agartala who likes problem-solving and loves frontend web development."),r.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},r.a.createElement(V,null,r.a.createElement(J,{tag:"a",color:"primary",wideMobile:!0,href:"https://linkedin.com/in/theiconik"},"LinkedIn"),r.a.createElement(J,{tag:"a",color:"dark",wideMobile:!0,href:"https://github.com/theiconik/"},"Github"))))))))};$.defaultProps=Q;var X=$,Y=["className","data","children","tag"],Z=function(e){var t=e.className,a=e.data,i=e.children,n=e.tag,l=Object(o.a)(e,Y),s=N()("section-header",t),c=n;return r.a.createElement(r.a.Fragment,null,(a.title||a.paragraph)&&r.a.createElement("div",Object.assign({},l,{className:s}),r.a.createElement("div",{className:"container-xs"},i,a.title&&r.a.createElement(c,{className:N()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&r.a.createElement("p",{className:"m-0"},a.paragraph))))};Z.defaultProps={children:null,tag:"h2"};var ee=Z,te=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],ae=Object(H.a)({},_.defaults),ie=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,c=e.hasBgColor,m=e.invertColor,d=e.pushLeft,v=Object(o.a)(e,te),u=N()("features-tiles section",i&&"has-top-divider",n&&"has-bottom-divider",c&&"has-bg-color",m&&"invert-color",t),p=N()("features-tiles-inner section-inner pt-0",l&&"has-top-divider",s&&"has-bottom-divider"),h=N()("tiles-wrap center-content",d&&"push-left");return r.a.createElement("section",Object.assign({},v,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:p},r.a.createElement(ee,{data:{title:"Current Tech Stack",paragraph:"As I already mentioned, being a problem solver, C++ is my goto langauge and rest other I mainly use for project building."},className:"center-content"}),r.a.createElement("div",{className:h},r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"mb-16"},r.a.createElement(y,{src:a(36),alt:"Features tile icon 01",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"C++"),r.a.createElement("div",{className:"m-0 text-sm",height:"2rem"})))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"mb-16"},r.a.createElement(y,{src:a(37),alt:"Features tile icon 02",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Python"),r.a.createElement("div",{className:"m-0 text-sm"})))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"mb-16"},r.a.createElement(y,{src:a(38),alt:"Features tile icon 03",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"JavaScript"),r.a.createElement("div",{className:"m-0 text-sm"})))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"mb-16"},r.a.createElement(y,{src:a(39),alt:"Features tile icon 04",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Sass"),r.a.createElement("p",{className:"m-0 text-sm"})))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"mb-16"},r.a.createElement(y,{src:a(40),alt:"Features tile icon 05",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"ReactJS"),r.a.createElement("p",{className:"m-0 text-sm"})))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"mb-16"},r.a.createElement(y,{src:a(41),alt:"Features tile icon 06",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"PostgreSQL"),r.a.createElement("p",{className:"m-0 text-sm"}))))))))};ie.defaultProps=ae;var re=ie,ne=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"],le=Object(H.a)({},R.defaults),se=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,c=e.hasBgColor,m=e.invertColor,d=e.invertMobile,v=e.invertDesktop,u=e.alignTop,p=e.imageFill,h=Object(o.a)(e,ne),b=N()("features-split section",i&&"has-top-divider",n&&"has-bottom-divider",c&&"has-bg-color",m&&"invert-color",t),f=N()("features-split-inner section-inner",l&&"has-top-divider",s&&"has-bottom-divider"),E=N()("split-wrap",d&&"invert-mobile",v&&"invert-desktop",u&&"align-top");return r.a.createElement("section",Object.assign({},h,{className:b}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:f},r.a.createElement(ee,{data:{title:"Recent Projects",paragraph:"Since I have been mainly focusing on problem-solving, I haven't made many projects but yeah in near future, I'll be building more web apps and more cool projects"},className:"center-content"}),r.a.createElement("div",{className:E},r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Project #1"),r.a.createElement("a",{href:"https://spotolet.netlify.app/"},r.a.createElement("h3",{className:"mt-0 mb-12"},"spotolet")),r.a.createElement("p",{className:"m-0"},"spotolet \ud83d\udccd is a web app where users can find rent room/home locations and can post details about their vacant rent rooms/home. The app uses MERN stack and Mapbox-GL for the map.")),r.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(y,{src:a(42),alt:"Features split 01",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Project #2"),r.a.createElement("a",{href:"https://github.com/theiconik/pwd-pkg/"},r.a.createElement("h3",{className:"mt-0 mb-12"},"pwd-pkg")),r.a.createElement("p",{className:"m-0"},'pwd-pkg \ud83d\udd11 is an "implementation" of (multi-user) password manager, created using Python and PostgreSQL as backend database. It also includes features like password generator and strength of password checker and CSV export for passwords.')),r.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(y,{src:a(43),alt:"Features split 02",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Project #3"),r.a.createElement("a",{href:"https://piperchat.netlify.app/"},r.a.createElement("h3",{className:"mt-0 mb-12"},"piper-chat")),r.a.createElement("p",{className:"m-0"},"piper-chat \ud83e\udd33 is a two-user video call app made using Reactjs and socket.io. Inspired by the series 'Silicon Valley', the whole layout/ theme of the app is based on the company 'Pied Piper'. The app is responsive but it needs work.")),r.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(y,{src:a(44),alt:"Features split 03",width:528,height:396})))))))};se.defaultProps=le;var ce=se,oe=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"],me=Object(H.a)(Object(H.a)({},I.defaults),{},{split:!1}),de=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,m=e.split,d=Object(o.a)(e,oe),v=N()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),u=N()("cta-inner section-inner",n&&"has-top-divider",l&&"has-bottom-divider",m&&"cta-split");return r.a.createElement("section",Object.assign({},d,{className:v}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:u},r.a.createElement("div",{className:"cta-slogan"},r.a.createElement("h3",{className:"m-0"},"Want to talk to me?")),r.a.createElement("div",{className:"cta-action"},r.a.createElement(J,{tag:"a",color:"whitesmoke",style:{color:"#5658dd"},wideMobile:!0,href:"mailto:kumarujjawal51@gmail.com"},"Email me")))))};de.defaultProps=me;var ve=de,ue=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,{className:"illustration-section-01"}),r.a.createElement(re,null),r.a.createElement(ce,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),r.a.createElement(ve,{split:!0}))};E.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var pe=function(){var e=Object(i.useRef)(),t=Object(s.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){E.a.set({page:e}),E.a.pageview(e)}(a)}),[t]),r.a.createElement(f,{ref:e,children:function(){return r.a.createElement(s.c,null,r.a.createElement(d,{exact:!0,path:"/",component:ue,layout:M}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(45);var he=Object(c.a)();l.a.render(r.a.createElement(s.b,{history:he},r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.4a786913.chunk.js.map