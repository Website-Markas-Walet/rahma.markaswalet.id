!function(n,e){"use strict";var t=function(n,e){var t=n.find(".bdt-prime-slider-tango");if(!t.length)return;var o=t.find(".swiper-container"),r=t.data("settings");const i=elementorFrontend.utils.swiper;!async function(){await new i(o,r);r.pauseOnHover&&e(o).hover((function(){this.swiper.autoplay.stop()}),(function(){this.swiper.autoplay.start()}))}()};jQuery(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/prime-slider-tango.default",t)}))}(jQuery,window.elementorFrontend);