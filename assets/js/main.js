"use strict";
(() => {
  // <stdin>
  (function() {
    EventTarget.prototype.on = EventTarget.prototype.addEventListener;
    const mobileMediaQ = window.matchMedia("(max-width: 425px)");
    const tabletMediaQ = window.matchMedia("(min-width: 426px) and (max-width: 768px)");
    const desctopMediaQ = window.matchMedia("(min-width: 769px)");
    const pathname = window.location.pathname;
    const sideNav = document.body.querySelector(".side-nav");
    const menu = document.body.querySelector(".primary-nav");
    const burger = document.body.querySelector(".burger");
    const container = document.body.querySelector(".container");
    const article = container.querySelector("article.article");
    const primaryNav = document.body.querySelector(".primary-nav");
    const primaryNavZippies = primaryNav.querySelectorAll(".zippy");
    const articlesPreviews = container.querySelector("ul.alist");
    let previewSwitch;
    if (articlesPreviews) {
      if (articlesPreviews.children.length) {
        var getFocusPREVIEW = function() {
          let focusPREVIEW;
          let distance_to_focus = Infinity;
          for (let PREVIEW of articlesPreviews.children) {
            let distance_to_current = Math.abs(PREVIEW.getBoundingClientRect().top);
            if (distance_to_current < distance_to_focus) {
              distance_to_focus = distance_to_current;
              focusPREVIEW = PREVIEW;
            }
          }
          return focusPREVIEW;
        };
        var viewUpdate = function(focusPREVIEW, previewSwitch_STATE, onShow) {
          console.log(`viewUpdate() <- onShow: ${onShow}`);
          if (previewSwitch_STATE)
            previewSwitch.checked = previewSwitch_STATE === "true" ? true : false;
          if (previewSwitch.checked)
            articlesPreviews.classList.add("preview-mode");
          else
            articlesPreviews.classList.remove("preview-mode");
          if (!focusPREVIEW)
            return;
          if (focusPREVIEW == articlesPreviews.firstElementChild)
            document.body.scrollTo(0, 0);
          else
            focusPREVIEW.scrollIntoView();
        };
        if (document.body.dataset.layoutId == "ALIST") {
          const category = document.body.dataset.pageCategory;
          var saveSession_previewSwitch_STATE = function(previewSwitch_STATE) {
            sessionStorage.setItem(`previewSwitch_STATE, for: ${category}`, `${previewSwitch_STATE}`);
          };
          var fromSession_previewSwitch_STATE = function() {
            return sessionStorage.getItem(`previewSwitch_STATE, for: ${category}`);
          };
        }
        articlesPreviews.children.indexOf = Array.prototype.indexOf;
        let focusPREVIEW_INDEX_UpdateTimer;
        var saveSession_OnSCROLL_focusPREVIEW_INDEX = function() {
          if (!focusPREVIEW_INDEX_UpdateTimer) {
            let counter = 0;
            focusPREVIEW_INDEX_UpdateTimer = setInterval(() => {
              sessionStorage.setItem(`focusPREVIEW_INDEX, for: ${pathname}`, articlesPreviews.children.indexOf(getFocusPREVIEW()));
              if (++counter == 6) {
                clearInterval(focusPREVIEW_INDEX_UpdateTimer);
                focusPREVIEW_INDEX_UpdateTimer = false;
              }
            }, 2e3 / 6);
          }
        };
        window.on("scroll", saveSession_OnSCROLL_focusPREVIEW_INDEX);
        var saveSession_OnClick_focusPREVIEW_INDEX = function(i) {
          clearInterval(focusPREVIEW_INDEX_UpdateTimer);
          sessionStorage.setItem(`focusPREVIEW_INDEX, for: ${pathname}`, i);
        };
        for (let i = 0; i < articlesPreviews.children.length; i++) {
          var link = articlesPreviews.children[i].firstElementChild.firstElementChild.firstElementChild;
          link.on("click", saveSession_OnClick_focusPREVIEW_INDEX.bind(link, i));
        }
        var viewUpdateBySession_VIEW = function() {
          let previewSwitch_STATE = fromSession_previewSwitch_STATE();
          let focusPREVIEW = articlesPreviews.children[sessionStorage.getItem(`focusPREVIEW_INDEX, for: ${pathname}`)];
          viewUpdate(focusPREVIEW, previewSwitch_STATE, true);
        };
        window.on("pageshow", viewUpdateBySession_VIEW);
      } else
        console.log("NO Articles Previews!");
    }
    function openMenuOnBurgerClick(e) {
      if (!menu.classList.contains("visible")) {
        menu.classList.add("visible");
        burger.classList.add("hidden");
        e.opening = true;
        console.log("OnBurger - Opening Menu");
      }
    }
    function openMenuOnEscapeKeyup(e) {
      if (!menu.classList.contains("visible") && e.code == "Escape") {
        menu.classList.add("visible");
        burger.classList.add("hidden");
        e.opening = true;
        console.log("OnEscape - Opening Menu");
      }
    }
    burger.on("click", openMenuOnBurgerClick);
    document.on("keyup", openMenuOnEscapeKeyup);
    function closeMenuOfPMClick(e) {
      if (!e.opening && menu.classList.contains("visible") && !e.target.closest("menu.primary-menu")) {
        menu.classList.remove("visible");
        burger.classList.remove("hidden");
        console.log("off primary-menu - Closing Menu");
      }
    }
    function closeMenuOnEscapeKeyup(e) {
      if (!e.opening && menu.classList.contains("visible") && e.code == "Escape") {
        menu.classList.remove("visible");
        burger.classList.remove("hidden");
        console.log("OnEscape - Closing Menu");
      }
    }
    function closeMenuOnScroll() {
      if (menu.classList.contains("visible")) {
        menu.classList.remove("visible");
        burger.classList.remove("hidden");
        console.log("onScroll - Closing Menu");
      }
    }
    window.on("scroll", closeMenuOnScroll);
    document.documentElement.on("click", closeMenuOfPMClick);
    document.on("keyup", closeMenuOnEscapeKeyup);
    menu.style.display = "block";
    document.querySelectorAll(".zippy-content").forEach((zippyContent) => {
      zippyContent.classList.add("visible");
      zippyContent.offsetHeightPlus = zippyContent.offsetHeight + 25 + 43.225 + 23.275;
      zippyContent.style.cssText = `margin-top: -${zippyContent.offsetHeightPlus}px`;
    });
    menu.style.display = "";
    let zippyUnfolded;
    function zippyUnfold(e) {
      if (zippyUnfolded)
        return;
      console.log("zippyUnfold()");
      const zippyOverflow = this.firstElementChild.nextElementSibling;
      if (zippyOverflow) {
        const zippyContent = zippyOverflow.firstElementChild;
        if (zippyContent.style.marginTop != "0px") {
          zippyOverflow.style.cssText = `z-index: -1;`;
          zippyContent.style.cssText = `transition-delay: 0.11s;
                                       margin-top: 0px;`;
        }
      }
      zippyUnfolded = true;
    }
    function zippyFold() {
      console.log("zippyFold()");
      const zippyOverflow = this.firstElementChild.nextElementSibling;
      if (zippyOverflow) {
        const zippyContent = zippyOverflow.firstElementChild;
        if (zippyContent.style.marginTop == "0px") {
          zippyOverflow.style.cssText = `z-index: -2;`;
          zippyContent.style.cssText = `transition-delay: 0s;
                                       margin-top: -${zippyContent.offsetHeightPlus}px;`;
        }
      }
      const zippyHeadAnchor = this.firstElementChild.querySelector("a");
      if (zippyHeadAnchor)
        zippyHeadAnchor.onZippyHeadAnchorClicks = 0;
      zippyUnfolded = false;
    }
    primaryNavZippies.forEach((zippy) => {
      zippy.on("mouseover", zippyUnfold);
      zippy.on("mouseleave", zippyFold);
    });
    let sideNavRemovalTimer;
    function showSideNav() {
      if (sideNav.style.opacity == 0 && window.scrollY > 100) {
        clearTimeout(sideNavRemovalTimer);
        sideNav.style.cssText = `opacity: 1`;
        console.log("Scroll - Showing Side Navigation");
      }
    }
    function hideSideNav() {
      if (sideNav.style.opacity == 1 && window.scrollY <= 100) {
        sideNav.style.cssText = `opacity: 0`;
        sideNavRemovalTimer = setTimeout(() => {
          sideNav.style.cssText = `opacity: 0; width: 0; height: 0`;
        }, 200);
        console.log("Scroll - Hideing Side Navigation");
      }
    }
    window.on("scroll", showSideNav);
    window.on("scroll", hideSideNav);
    function desctop_AND_tablet() {
      console.log("desctop_AND_tablet()");
      desctop_AND_tablet.isON = true;
      desctop_AND_tablet.off = function() {
        desctop_AND_tablet.isON = false;
        console.log("desctop_AND_tablet.off()");
      };
    }
    function desctop() {
      console.log("desctop()");
      if (articlesPreviews) {
        if (articlesPreviews.children.length) {
          previewSwitch = document.getElementById("preview-switch-desctop");
          var previewModeSwitch = function() {
            console.log("change");
            viewUpdate(getFocusPREVIEW());
            saveSession_previewSwitch_STATE(previewSwitch.checked);
          };
          previewSwitch.on("change", previewModeSwitch);
        } else
          console.log("NO Articles Previews!");
      }
      desctop.isON = true;
      desctop.off = function() {
        desctop.isON = false;
        console.log("desctop.off()");
        if (articlesPreviews) {
          if (articlesPreviews.children.length)
            previewSwitch.removeEventListener("change", previewModeSwitch);
        }
      };
    }
    function tablet() {
      console.log("tablet()");
      tablet.isON = true;
      tablet.off = function() {
        tablet.isON = false;
        console.log("tablet.off()");
      };
    }
    function mobile() {
      console.log("mobile()");
      mobile.isON = true;
      mobile.off = function() {
        mobile.isON = false;
        console.log("mobile.off()");
      };
    }
    function mobile_AND_tablet() {
      console.log("mobile_AND_tablet()");
      primaryNavZippies.forEach((zippy) => {
        const zippyHeadAnchor = zippy.firstElementChild.querySelector("a");
        if (zippyHeadAnchor) {
          zippyHeadAnchor.onZippyHeadAnchorClicks = 0;
          zippyHeadAnchor.on("click", onFirstClick_noFollow);
        }
      });
      function onFirstClick_noFollow(e) {
        if (++this.onZippyHeadAnchorClicks == 1)
          e.preventDefault();
      }
      if (articlesPreviews) {
        if (articlesPreviews.children.length) {
          previewSwitch = document.getElementById("preview-switch-mobile");
          var previewModeSwitch = function() {
            console.log("change");
            viewUpdate(getFocusPREVIEW());
            saveSession_previewSwitch_STATE(previewSwitch.checked);
          };
          previewSwitch.on("change", previewModeSwitch);
        } else
          console.log("NO Articles Previews!");
      }
      mobile_AND_tablet.isON = true;
      mobile_AND_tablet.off = function() {
        mobile_AND_tablet.isON = false;
        console.log("mobile_AND_tablet.off()");
        primaryNavZippies.forEach((zippy) => {
          const zippyHeadAnchor = zippy.firstElementChild.querySelector("a");
          if (zippyHeadAnchor)
            zippyHeadAnchor.removeEventListener("click", onFirstClick_noFollow);
        });
        if (articlesPreviews) {
          if (articlesPreviews.children.length)
            previewSwitch.removeEventListener("change", previewModeSwitch);
        }
      };
    }
    let orientation;
    if (desctopMediaQ.matches) {
      desctop();
      desctop_AND_tablet();
      orientation = "desctop";
    }
    desctopMediaQ.addListener((e) => {
      if (e.matches && orientation != "desctop") {
        if (mobile.isON)
          mobile.off();
        if (tablet.isON)
          tablet.off();
        if (mobile_AND_tablet.isON)
          mobile_AND_tablet.off();
        desctop();
        if (!desctop_AND_tablet.isON)
          desctop_AND_tablet();
        orientation = "desctop";
        if (articlesPreviews) {
          if (articlesPreviews.children.length)
            viewUpdateBySession_VIEW();
        }
      }
    });
    if (tabletMediaQ.matches) {
      tablet();
      desctop_AND_tablet();
      mobile_AND_tablet();
      orientation = "tablet";
    }
    tabletMediaQ.addListener((e) => {
      if (e.matches && orientation != "tablet") {
        if (mobile.isON)
          mobile.off();
        if (desctop.isON)
          desctop.off();
        tablet();
        if (!desctop_AND_tablet.isON)
          desctop_AND_tablet();
        if (!mobile_AND_tablet.isON)
          mobile_AND_tablet();
        orientation = "tablet";
        if (articlesPreviews) {
          if (articlesPreviews.children.length)
            viewUpdateBySession_VIEW();
        }
      }
    });
    if (mobileMediaQ.matches) {
      mobile();
      mobile_AND_tablet();
      orientation = "mobile";
    }
    mobileMediaQ.addListener((e) => {
      if (e.matches && orientation != "mobile") {
        if (tablet.isON)
          tablet.off();
        if (desctop.isON)
          desctop.off();
        if (desctop_AND_tablet.isON)
          desctop_AND_tablet.off();
        mobile();
        if (!mobile_AND_tablet.isON)
          mobile_AND_tablet();
        orientation = "mobile";
        if (articlesPreviews) {
          if (articlesPreviews.children.length)
            viewUpdateBySession_VIEW();
        }
      }
    });
  })();
})();
