"use strict";(()=>{{let H=function(e){n.classList.contains("visible")||(n.classList.add("visible"),m.classList.add("hidden"),e.opening=!0,console.log("OnBurger - Opening Menu"))},$=function(e){!n.classList.contains("visible")&&e.code=="Escape"&&(n.classList.add("visible"),m.classList.add("hidden"),e.opening=!0,console.log("OnEscape - Opening Menu"))},D=function(e){!e.opening&&n.classList.contains("visible")&&!e.target.closest("nav.primary-nav")&&(n.classList.remove("visible"),m.classList.remove("hidden"),console.log("off primary-menu - Closing Menu"))},T=function(e){!e.opening&&n.classList.contains("visible")&&e.code=="Escape"&&(n.classList.remove("visible"),m.classList.remove("hidden"),console.log("OnEscape - Closing Menu"))},I=function(){n.classList.contains("visible")&&(n.classList.remove("visible"),m.classList.remove("hidden"),console.log("onScroll - Closing Menu"))},P=function(e){console.log("zippyUnfold()");let o=this.firstElementChild.nextElementSibling;if(o){let t=o.firstElementChild;t.style.marginTop!="0px"&&(t.style.cssText="margin-top: 0px;")}},j=function(){console.log("zippyFold()");let e=this.firstElementChild.nextElementSibling;if(e){let t=e.firstElementChild;t.style.marginTop=="0px"&&(t.style.cssText=`margin-top: -${t.offsetHeightPlus}px;`)}let o=this.firstElementChild.querySelector("a");o&&(o.onZippyHeadAnchorClicks=0)},Z=function(){p.style.opacity==0&&window.scrollY>100&&(clearTimeout(z),p.style.cssText="opacity: 1",console.log("Scroll - Showing Side Navigation"))},Q=function(){p.style.opacity==1&&window.scrollY<=100&&(p.style.cssText="opacity: 0",z=setTimeout(()=>{p.style.cssText="opacity: 0; width: 0; height: 0"},200),console.log("Scroll - Hideing Side Navigation"))},l=function(){console.log("desctop_AND_tablet()"),l.isON=!0,l.off=function(){l.isON=!1,console.log("desctop_AND_tablet.off()")}},a=function(){if(console.log("desctop()"),i)if(i.children.length){s=document.getElementById("preview-switch-desctop");var e=function(){console.log("change"),b(h()),y(s.checked)};s.on("change",e)}else console.log("NO Articles Previews!");a.isON=!0,a.off=function(){a.isON=!1,console.log("desctop.off()"),i&&i.children.length&&s.removeEventListener("change",e)}},r=function(){console.log("tablet()"),r.isON=!0,r.off=function(){r.isON=!1,console.log("tablet.off()")}},d=function(){console.log("mobile()"),d.isON=!0,d.off=function(){d.isON=!1,console.log("mobile.off()")}},c=function(){if(console.log("mobile_AND_tablet()"),i)if(i.children.length){s=document.getElementById("preview-switch-mobile");var e=function(){console.log("change"),b(h()),y(s.checked)};s.on("change",e)}else console.log("NO Articles Previews!");c.isON=!0,c.off=function(){c.isON=!1,console.log("mobile_AND_tablet.off()"),w.forEach(o=>{let t=o.firstElementChild.querySelector("a");t&&t.removeEventListener("click",onFirstClick_noFollow)}),i&&i.children.length&&s.removeEventListener("change",e)}};navigator.userAgent.includes("Chrome")&&!navigator.userAgent.includes("Edge")&&document.documentElement.classList.add("chrome");let x=window.innerWidth-document.documentElement.clientWidth;document.documentElement.style.setProperty("--scrollbar-width",`${x}px`),x>0?document.documentElement.classList.add("has-scrollbar"):document.documentElement.classList.add("no-scrollbar"),window.mobileAndTabletCheck=function(){let e=!1;return function(o){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(o)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(o.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e},EventTarget.prototype.on=EventTarget.prototype.addEventListener;let O=window.matchMedia("(max-width: 425px)"),E=window.matchMedia("(min-width: 426px) and (max-width: 768px)"),L=window.matchMedia("(min-width: 769px)"),v=window.location.pathname,p=document.body.querySelector(".side-nav"),n=document.body.querySelector(".primary-nav"),m=document.body.querySelector(".burger"),C=document.body.querySelector(".container"),F=C.querySelector("article.article"),w=document.body.querySelector(".primary-nav").querySelectorAll(".zippy"),i=C.querySelector("ul.alist"),s;if(i)if(i.children.length){if(h=function(){let o,t=1/0;for(let g of i.children){let A=Math.abs(g.getBoundingClientRect().top);A<t&&(t=A,o=g)}return o},b=function(o,t,g){console.log(`viewUpdate() <- onShow: ${g}`),t&&(s.checked=t==="true"),s.checked?i.classList.add("preview-mode"):i.classList.remove("preview-mode"),o&&(o==i.firstElementChild?document.body.scrollTo(0,0):o.scrollIntoView())},i&&i.children.length){let o=document.body.dataset.pageCategory;y=function(t){sessionStorage.setItem(`previewSwitch_STATE, for: ${o}`,`${t}`)},k=function(){return sessionStorage.getItem(`previewSwitch_STATE, for: ${o}`)}}i.children.indexOf=Array.prototype.indexOf;let e;q=function(){if(!e){let o=0;e=setInterval(()=>{sessionStorage.setItem(`focusPREVIEW_INDEX, for: ${v}`,i.children.indexOf(h())),++o==6&&(clearInterval(e),e=!1)},2e3/6)}},window.on("scroll",q),M=function(o){clearInterval(e),sessionStorage.setItem(`focusPREVIEW_INDEX, for: ${v}`,o)};for(let o=0;o<i.children.length;o++)N=i.children[o].firstElementChild.firstElementChild.firstElementChild,N.on("click",M.bind(N,o));u=function(){let o=k(),t=i.children[sessionStorage.getItem(`focusPREVIEW_INDEX, for: ${v}`)];b(t,o,!0)},window.on("pageshow",u)}else console.log("NO Articles Previews!");m.on("click",H),document.on("keyup",$),window.on("scroll",I),document.documentElement.on("click",D),document.on("keyup",T),n.style.display="block",document.querySelectorAll(".zippy-content").forEach(e=>{e.offsetHeightPlus=e.offsetHeight+25+43.225+23.275,e.style.cssText=`margin-top: -${e.offsetHeightPlus}px`}),n.style.display="",w.forEach(e=>{e.on("mouseover",P),e.on("mouseleave",j)});let z;if(window.on("scroll",Z),window.on("scroll",Q),mobileAndTabletCheck()){let e=function(o){++this.onZippyHeadAnchorClicks==1&&o.preventDefault()};console.log("MOBILE DEVICE"),w.forEach(o=>{let t=o.firstElementChild.querySelector("a");t&&(t.onZippyHeadAnchorClicks=0,t.on("click",e))})}let f;L.matches&&(a(),l(),f="desctop"),L.addListener(e=>{e.matches&&f!="desctop"&&(d.isON&&d.off(),r.isON&&r.off(),c.isON&&c.off(),a(),l.isON||l(),f="desctop",i&&i.children.length&&u())}),E.matches&&(r(),l(),c(),f="tablet"),E.addListener(e=>{e.matches&&f!="tablet"&&(d.isON&&d.off(),a.isON&&a.off(),r(),l.isON||l(),c.isON||c(),f="tablet",i&&i.children.length&&u())}),O.matches&&(d(),c(),f="mobile"),O.addListener(e=>{e.matches&&f!="mobile"&&(r.isON&&r.off(),a.isON&&a.off(),l.isON&&l.off(),d(),c.isON||c(),f="mobile",i&&i.children.length&&u())})}var h,b,y,k,q,M,N,u;})();
