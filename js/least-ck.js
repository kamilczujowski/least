/**
*** least.
*** Author: Kamil Czujowski, Sergej Müller
*** Transformed to a jQuery Plugin by Jorge Epuñan - @csslab
*** Version: 1.2
*** Made in ♥ - Copyright (c) 2013 Hamburg, Germany - All rights reserved.
*** https://twitter.com/kamilczujowski, http://wpcoder.de
**/(function(e){e.fn.least=function(t){var n=e.extend({random:!0,lazyload:!1},t);return this.each(function(){function t(t,n,r){var i=e('<figure class="close"></figure>'),s=e('<img src="'+n+'"/>');s.load(function(){t.html('<div class="fullCaption">'+r+"</div>").prepend(s).append(i).slideDown("slow")});i.on("click",function(){e("#fullPreview").slideToggle("slow")})}e(this).find("li a").click(function(n){n.preventDefault();var r=e(this),i=r.attr("href"),s=e("#fullPreview"),o=s.children("img"),u=r.nextAll(".projectInfo").html()||"";if(o.length&&i===o.attr("src")){s.slideToggle("slow");return}o.length?s.slideUp("slow",function(){t(s,i,u)}):t(s,i,u);e("html, body").animate({scrollTop:0},500)});if(n.lazyload){e.fn.lazyload||console.log("lazyload.js plugin needed, please load it.");e("img").lazyload({effect:"fadeIn"})}n.random&&e("#gallery").each(function(){var t=e(this),n=t.children("li").not(":first-child");n.sort(function(){var e=parseInt(Math.random()*8,null),t=e%4,n=e>2?1:-1;return t*n}).appendTo(t)})})}})(jQuery);