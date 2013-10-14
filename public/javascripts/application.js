(function(c,n){var l="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(f){function m(){var b=c(i),a=c(h);d&&(h.length?d.reject(e,b,a):d.resolve(e));c.isFunction(f)&&f.call(g,e,b,a)}function j(b,a){b.src===l||-1!==c.inArray(b,k)||(k.push(b),a?h.push(b):i.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),o&&d.notifyWith(c(b),[a,e,c(i),c(h)]),e.length===k.length&&(setTimeout(m),e.unbind(".imagesLoaded")))}var g=this,d=c.isFunction(c.Deferred)?c.Deferred():
0,o=c.isFunction(d.notify),e=g.find("img").add(g.filter("img")),k=[],i=[],h=[];c.isPlainObject(f)&&c.each(f,function(b,a){if("callback"===b)f=a;else if(d)d[b](a)});e.length?e.bind("load.imagesLoaded error.imagesLoaded",function(b){j(b.target,"error"===b.type)}).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)j(a,e.isBroken);else if(a.complete&&a.naturalWidth!==n)j(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=l,a.src=d}):m();return d?d.promise(g):
g}})(jQuery);
// For those who need them (< IE 9), add support for CSS functions
var isStyleFuncSupported = CSSStyleDeclaration.prototype.getPropertyValue != null;
if (!isStyleFuncSupported) {
    CSSStyleDeclaration.prototype.getPropertyValue = function(a) {
        return this.getAttribute(a);
    };
    CSSStyleDeclaration.prototype.setProperty = function(styleName, value, priority) {
        this.setAttribute(styleName,value);
        var priority = typeof priority != 'undefined' ? priority : '';
        if (priority != '') {
            // Add priority manually
            var rule = new RegExp(RegExp.escape(styleName) + '\\s*:\\s*' + RegExp.escape(value) + '(\\s*;)?', 'gmi');
            this.cssText = this.cssText.replace(rule, styleName + ': ' + value + ' !' + priority + ';');
        } 
    }
    CSSStyleDeclaration.prototype.removeProperty = function(a) {
        return this.removeAttribute(a);
    }
    CSSStyleDeclaration.prototype.getPropertyPriority = function(styleName) {
        var rule = new RegExp(RegExp.escape(styleName) + '\\s*:\\s*[^\\s]*\\s*!important(\\s*;)?', 'gmi');
        return rule.test(this.cssText) ? 'important' : '';
    }
}

// Escape regex chars with \
RegExp.escape = function(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

// The style function
jQuery.fn.style = function(styleName, value, priority) {
    // DOM node
    var node = this.get(0);
    // Ensure we have a DOM node 
    if (typeof node == 'undefined') {
        return;
    }
    // CSSStyleDeclaration
    var style = this.get(0).style;
    // Getter/Setter
    if (typeof styleName != 'undefined') {
        if (typeof value != 'undefined') {
            // Set style property
            var priority = typeof priority != 'undefined' ? priority : '';
            style.setProperty(styleName, value, priority);
        } else {
            // Get style property
            return style.getPropertyValue(styleName);
        }
    } else {
        // Get CSSStyleDeclaration
        return style;
    }
}
function version_compare(v1, v2){
  var v1parts = v1.split(".");
  var v2parts = v2.split(".");
  for(var i =0; i < v1parts.length; i++){
    if(v2parts.length == i){
      return false;
    }
    if(v1parts[i] == v2parts[i]){
      continue;
    }
    else if(v1parts[i] > v2parts[i]){
      return false;
    }
    else {
      return true;
    }
  }
  if(v1parts.length != v2parts.length){
    return false;
  }
  return false;
}
$(document).ready(function(){
  
  
  
  if($("body").hasClass("projects-people")){
    var stafflogo = $(".staffpick").eq(0).attr("data-staff_logo");
		$(".logo").css("background", "url("+stafflogo+") no-repeat");
  }
  /*
  if($("body").hasClass("views-timeline")){
    if($(window).height()/2 < 7*50){
		  $(".aproject").css({
		    height: (($(window).height()/2)/7)
			});  
		}
  }
  */
  var isSafari = navigator.userAgent.match(/Safari/i) != null;
  if(isSafari){
    var version = navigator.userAgent.replace(/.*Version\//, "").replace(/ .*/, "");
    if(version_compare(version, "5.1.7")){
      $("body").addClass("shittysafari");
    }
  }
  var isiPad = navigator.userAgent.match(/iPad/i) != null;
  var isandroid = navigator.userAgent.match(/Android/i) != null;
		if(isiPad || isandroid || $(window).width() < 1025){
		  $(".lnav").click(function(){
		    setTimeout(function(){$(".lnavcontent").style("display", "block", "important");}, 400);
		  });
		  
		  $(".rnav").click(function(){
		    setTimeout(function(){$(".rnavcontent").style("display", "block", "important");$(".standardrnavcontent").style("display", "block", "important");}, 400);
		  });
		  
		}

	
	
	
	
	
	$(".logo").click(function(){
		window.location.href="/";
	});
	$(".companylogo").click(function(){
		window.location.href="/";
	});
	
	setTimeout(function(){$(".pastarrow, .futurearrow").fadeOut(600)}, 3000);
	setTimeout(function(){$(".scrollmsg").fadeOut(600)}, 7000);
	$("#project_startdate, #project_enddate, .blogs-edit #newdate").datepicker();
	
	$(".timelinepositioning").css({"top": $(window).height()/2, "width": $(window).width()-50});
	$(".projects-work .timelinepositioning").css({"top": $(window).height()/2, "width": $(window).width()-49});
	$(".pageheader").css({"width": $(window).width()-30});
	if($("body").hasClass("projects-prcs")){
		$(".prcsinfo, .leftprcs, .midprcs, .rightprcs").css({
			"height": $(".info").offset().top-$(".timelinepositioning").offset().top-10
		});
		$(".leftprcs, .midprcs, .rightprcs").css({
			"width": $(".timelinepositioning").width()/3
		});
	}
	$(".projects-journal .work").width($(".atimeline").width());
	
	if($("body").hasClass("views-timeline")){
  	setTimeout(function(){
      $(".views-timeline .tagline").fadeOut(200, function(){
        $(this).css({"font-size": "16px", "line-height": "32px", "position": "absolute", "bottom": "0", "left": "190px", "margin-top": "0", "padding-left": "0"});
        $(this).html($(".replacement .tagline").html().trim());
      	
      	$(this).fadeIn(0, function(){});
      });
    }, 7000);
	}
	
	//fullbleedscrolling
	if($("body").hasClass("projects-show")){
	$("img:not(#bgimg)").each(function(){
    $(this).css({
	 	   left: $(window).width()
  	});  
	});
	}
	
	slidecount = 0
	$(".projects-show .ncontrol").click(function(){
		if($("img").length > 1){
			$("img").eq(slidecount).addClass("showing").siblings().removeClass("showing");
			var next = $(".showing").next();
			if($(next).is("img")){
			  var FullscreenrOptions1 = {  width: $(next).attr("data-width"), height: $(next).attr("data-height"), bgID: "#"+$(next).attr("id") };
  			jQuery.fn.fullscreenr(FullscreenrOptions1);
  			$(next).css("left", $(window).width());
  			$(next).animate({
  				left: "-="+$(window).width()
  			}, 400);
  			console.log(slidecount);
  			$(".box"+(slidecount+2)).addClass("active").siblings().removeClass("active");
  			if(slidecount < $("img").length-1){
  			 slidecount++;
  			}
			} else {
			   slidecount = 0;
			   $("#bgimg").siblings("img").animate({
            left: "-="+$(window).width()
			   }, 400, function(){$("#bgimg").siblings("img").css("left", $(window).width());});
			$(".box1").addClass("active").siblings().removeClass("active");
			}	
		}
	});
	$(".projects-show .pcontrol").click(function(){
		if($("img").length > 1){
		  $("img").eq(slidecount).addClass("showing").siblings().removeClass("showing");
		  var next = $(".showing").prev();
		  if($(next).is("img")){
		    var FullscreenrOptions1 = {  width: $(next).attr("data-width"), height: $(next).attr("data-height"), bgID: "#"+$(next).attr("id") };
  			jQuery.fn.fullscreenr(FullscreenrOptions1);
  			$(next).css("left", (-1*$(window).width()));
  			$(next).animate({
  				left: "+="+$(window).width()
  			}, 400);
  			$(".showing").animate({
  				left: "+="+$(window).width()
  			}, 400);
  			console.log(slidecount);
  			$(".box"+(slidecount)).addClass("active").siblings().removeClass("active");
  			if(slidecount > 0){
  			 slidecount--;
  			}
		  } else {
		    slidecount = $("img").length-1;
		    console.log(slidecount);
			  var FullscreenrOptions1 = {  width: $("img").eq(-1).attr("data-width"), height: $("img").eq(-1).attr("data-height"), bgID: "#"+$("img").eq(-1).attr("id") };
    		jQuery.fn.fullscreenr(FullscreenrOptions1);
			  $("img").eq(-1).css("left", (-1*$(window).width()));
			  $("img").eq(-1).animate({
           left: "+="+$(window).width()
			  }, 400, function(){});
			  $(".imgbox").eq(-1).addClass("active").siblings().removeClass("active");
		  }
		}
	});


	$(".newstat a").live("click", function(){
		var newform = $(this).parent().prev().clone();
		$(newform).find("input[type=text]").val("");
		$(this).parent().prev().after(newform);
		return false;
	});
	$(".statprojsel").click(function(){
		var id = $(this).attr("data-project_id");
		$("#"+id).show();
		$("#"+id).siblings().hide();
		return false;
	});
  if($("body").hasClass("views-timeline")){
  	$(".amonth").each(function(){
  		var days = $(this).find(".aday").length
  		var wd = $(".aday").width();
  		var w = wd*days;
  		$(this).width(w);
  	});
  	var yw = 0;
  	$(".ayear").each(function(){
  		var months = $(this).find(".aday").length
  		var wm = $(this).find(".aday").width();
  		var w = wm*months;
  		$(this).width(w);
  		yw = yw + w;
  	});
  	var ayearsleft = 0;
  	lastdatestring = "";
  	if(!isiPad){
      /*	
      	lastdate = $.datepicker.parseDate('yy-mm-dd', $(".aprojectblock").eq(0).attr("data-enddate"));
      	
      	$(".aprojectblock").each(function(){
          var tmpdate = $.datepicker.parseDate('yy-mm-dd', $(this).attr("data-enddate"));
          if(tmpdate > lastdate){
            tmpdate.setMonth(tmpdate.getMonth() + 3);
            lastdate = tmpdate;
            lastdatestring = $.datepicker.formatDate('yy-mm-dd', lastdate);
          }
      	});
      */
      lastdate = $.datepicker.parseDate('yy-mm-dd', $(".aprojectblock").eq(-1).attr("data-enddate"));
      lastdate.setMonth(lastdate.getMonth() + 2);
      lastdatestring = $.datepicker.formatDate('yy-mm-dd', lastdate);
      
      
      
  	} else {
  	 lastdatestring = $(".ayears").attr("id");
  	}
  	console.log(lastdatestring);
  }	
	if($("body").hasClass("views-timeline")){
    //$(".ayear").each(function(){$(this).find(".week").eq(-1).css("border-right", "1px solid black")});
		var move = 0;
		$(".ayears").width(yw);
		var today = $(".ayears").attr("id");
		var left = $("#d_"+lastdatestring).offset().left;
		$("#d_"+lastdatestring).addClass("lastday");
		move = (-1*($(".lastday").offset().left - $(".atimeline").width()-$(".atimeline").offset().left));
		$(".ayears").animate({
			left: move
		}, 200);
		ayearsleft = Math.abs(move);
		
		function swipe1(event, phase, direction, distance){
		  if(direction == "left" && distance > 20){
		    $(".ayears").animate({
    			left: "-=50"
    		}, 10);
		  }
		  if(direction == "right" && distance > 20){
		    $(".ayears").animate({
    			left: "+=50"
    		}, 10);
		  }
		}
		var ipad = navigator.userAgent.match(/iPad/i) != null;
		var android = navigator.userAgent.match(/Android/i) != null;
		if(ipad || android){
		  $("body.views-timeline .aprojects").swipe({
		    click:function(event, target){
          window.location.href=$(target).closest(".aproject").find("a").attr("href");
        },
		    swipeStatus: swipe1
		  });
		  
		}
		
		
		  
	}
	$(".ablog").each(function(){
		var leftel = $(this).attr("data-pubdate");
		var moveleft = $("#d_"+leftel).offset().left - $(".timelinewindow").offset().left;
		$(this).css({
			left: moveleft+"px"
		});
	});
	$(".ablog:even").each(function(){
    var randheight = $(this).data("position") == "0" ? Math.floor(Math.random()*(320-300+1)+350) : $(this).data("position");
    $(this).css({
    	height: randheight
    });
	});
	$(".ablog:odd").each(function(){
    var randheight = $(this).data("position") == "0" ? Math.floor(Math.random()*(250-230+1)+280) : $(this).data("position");
    $(this).css({
    	height: randheight
    });
	});
	$(".aproject").each(function(){
		var that = $(this);
		var duration = $(this).find("a").attr("data-duration");
		var leftel = $(this).find("a").attr("data-startdate");
		var moveleft = $("#d_"+leftel).offset().left - $(".timelinewindow").offset().left;
		$(this).width(duration * $(".aday").width());
//		var toppos = $(".atimeline").offset().top+2;
//		var elem = document.elementFromPoint(moveleft-1, toppos);
//		nprev = 0;
//		if($(elem).hasClass("aprojectblock")){
//			nprev++;
//		}
//		console.log(moveleft);
		$(this).css({
			left: moveleft+"px"
//			top: nprev*($(".aproject a").height()+10)
		});
		
		
		
		var movedleft = parseInt($(this).css("left").replace("px", ""));
		var width = $(this).find("a").attr("data-duration") * $(".aday").width();
		var space = movedleft+width;
		var spaces = [];
		$(this).prevAll(".aproject").each(function(){
			var h = {};
			h['start'] = $.datepicker.parseDate('yy-mm-dd', $(this).find("a").attr("data-startdate"));
			h['end'] = $.datepicker.parseDate('yy-mm-dd', $(this).find("a").attr("data-enddate"));
			spaces.push(h);
		});
		var thisstart = $.datepicker.parseDate('yy-mm-dd', $(this).find("a").attr("data-startdate"));
		nprev = 0;
		for(i=0;i<spaces.length;i++){
			if((spaces[i]['start'] < thisstart || spaces[i]['start'] == thisstart) && (thisstart < spaces[i]['end'] || thisstart == spaces[i]['end'])){
				nprev++;
			}
		}
		$(this).css("top", -1*($(this).offset().top-$(window).height()/2-2));
		/*
		if(nprev == 0){
			$(this).css("top", -1*($(this).offset().top-$(window).height()/2-2));
		} else if(nprev == 1 && $(document.elementFromPoint($(this).offset().left-3, $(this).offset().top)).hasClass("innerproject")){
			$(this).css("top", (-1*($(this).offset().top-$(window).height()/2-2))+(2*nprev*($(".aproject").height()))+"px");
		} else {
			$(this).css("top", (-1*($(this).offset().top-$(window).height()/2-2))+(nprev*($(".aproject").height()))+"px");
		}
		if($(this).prev().length != 0){
			if($(this).offset().top == $(this).prev().offset().top && ($(this).offset().left == $(this).prev().offset().left || $(this).offset().left < $(this).prev().offset().left+$(this).prev().width())){
				$(this).css({
					top: "+="+$(".aproject").height()
				})
			}
		}
		*/
		
		/*
		var today = $(".ayears").attr("id");
		var left = $("#d_"+today).offset().left;
		moved = Math.abs($(".timelinewindow").width() - left + $(".aday").eq(0).offset().left - $(".aday").width());
		var that = $(this);		
		var leftpos = $(that).offset().left - moved;
		var toppos = $(".atimeline").offset().top+2;
		var elem = document.elementFromPoint(leftpos, toppos);
		if($(elem).hasClass("aprojectblock")){
			$(that).css("top", "+="+$(".aproject a").height());
		}
		*/
		/*
		var today = $(".ayears").attr("id");
		var left = $("#d_"+today).offset().left;
		moved = Math.abs($(".timelinewindow").width() - left + $(".aday").eq(0).offset().left - $(".aday").width());
		$(".aproject").each(function(){
			var that = $(this);		
			var leftpos = $(that).offset().left - moved;
			var toppos = $(".atimeline").offset().top+2;
			var elem = document.elementFromPoint(leftpos, toppos);
			console.log("index = "+$(that).index());
			console.log("leftpos = "+leftpos);
			console.log("toppos = "+toppos);
			console.log($(elem).html());
			if($(elem).hasClass("aprojectblock")){
				$(that).css("top", $(".aproject a").height());
			}
		});
		*/
		
		
		
	});
	
	//console.log($(".aproject").eq(12).offset().left)
	//console.log(Math.abs($(".timelinewindow").width() - $("#d_"+$(".ayears").attr("id")).offset().left + $(".aday").eq(0).offset().left - $(".aday").width()))
	//console.log($(".aproject").eq(12).offset().top)
	//console.log($(".aproject").eq(9).offset().left)
	//console.log($(".aproject").eq(9).offset().top)
	//console.log(($(".aproject").eq(12).offset().left) - (Math.abs($(".timelinewindow").width() - $("#d_"+$(".ayears").attr("id")).offset().left + $(".aday").eq(0).offset().left - $(".aday").width())))
	//console.log(document.elementFromPoint(($(".aproject").eq(12).offset().left) - (Math.abs($(".timelinewindow").width() - $("#d_"+$(".ayears").attr("id")).offset().left + $(".aday").eq(0).offset().left - $(".aday").width()))-2, $(".aproject").eq(12).offset().top))
	//console.log(ayearsleft);
	//console.log($(".aproject").eq(12).offset().left-ayearsleft)
	//console.log($(".aproject").eq(12).offset().top)
	//console.log($(document.elementFromPoint($(".aproject").eq(12).offset().left-ayearsleft, $(".aproject").eq(12).offset().top)))
	
	
	$(".views-timeline .timelinewindow").height($(".aproject").length * ($(".aproject").height()*2) + 30);
	
	
	/*var $wrapper = $('.ayears');
  var scrolling = 0;
  
  $('.pcontrol').bind("click", function(){
    if(scrolling == 1){} else {
      if($(".aday").eq(0).offset().left > 72){}else{
        $wrapper.animate({left: '+=600'}, 10);
      }
      if($("#d_2012-01-02").length > 0 && $("#d_2012-01-02").offset().left < 0){
				$(".year").html("2012");
			}
			if($("#d_2012-01-01").length > 0 && $("#d_2012-01-01").offset().left > $(window).width()/3){
				$(".year").html("2011");
			}
			if($("#d_2011-01-01").length > 0 && $("#d_2011-01-01").offset().left > $(window).width()/3){
				$(".year").html("2010");
			}
			if($("#d_2010-01-01").length > 0 && $("#d_2010-01-01").offset().left > $(window).width()/3){
				$(".year").html("2009");
			}
			if($("#d_2009-01-01").length > 0 && $("#d_2009-01-01").offset().left > $(window).width()/3){
				$(".year").html("2008");
			}
    }
	});
	$('.ncontrol').bind("click", function(){
    if(scrolling == 1){} else {
      if($(".aday").eq(-1).offset().left < $(".ncontrol").offset().left){window.location.href = "/lab"}else{
        $wrapper.animate({left: '-=600'}, 10);
      }
      if($("#d_2012-01-02").length > 0 && $("#d_2012-01-02").offset().left < 0){
				$(".year").html("2012");
			}
			if($("#d_2012-01-01").length > 0 && $("#d_2012-01-01").offset().left > $(window).width()/3){
				$(".year").html("2011");
			}
			if($("#d_2011-01-01").length > 0 && $("#d_2011-01-01").offset().left > $(window).width()/3){
				$(".year").html("2010");
			}
			if($("#d_2010-01-01").length > 0 && $("#d_2010-01-01").offset().left > $(window).width()/3){
				$(".year").html("2009");
			}
			if($("#d_2009-01-01").length > 0 && $("#d_2009-01-01").offset().left > $(window).width()/3){
				$(".year").html("2008");
			}
     }
	});
  
  function startScrollingLeft(){
      // contintually increase scroll position
      setTimeout(function(){$('.pcontrol').unbind("click")}, 500);
      
      if($(".aday").eq(0).offset().left > 72){}else{
        $wrapper.animate({left: '+=10'}, 10, startScrollingLeft);
      }
      if($("#d_2012-01-02").length > 0 && $("#d_2012-01-02").offset().left < 0){
				$(".year").html("2012");
			}
			if($("#d_2012-01-01").length > 0 && $("#d_2012-01-01").offset().left > $(window).width()/3){
				$(".year").html("2011");
			}
			if($("#d_2011-01-01").length > 0 && $("#d_2011-01-01").offset().left > $(window).width()/3){
				$(".year").html("2010");
			}
			if($("#d_2010-01-01").length > 0 && $("#d_2010-01-01").offset().left > $(window).width()/3){
				$(".year").html("2009");
			}
			if($("#d_2009-01-01").length > 0 && $("#d_2009-01-01").offset().left > $(window).width()/3){
				$(".year").html("2008");
			}
  }

  function stopScrollingLeft(){
      // stop increasing scroll position
      setTimeout(function(){scrolling = 0}, 300);
      $wrapper.stop();
  }
  function startScrollingRight(){
      // contintually increase scroll position
      scrolling = 1;
      if($(".aday").eq(-1).offset().left < $(".ncontrol").offset().left){window.location.href = "/lab"}else{
        $wrapper.animate({left: '-=10'}, 10, startScrollingRight);
      }
      if($("#d_2012-01-02").length > 0 && $("#d_2012-01-02").offset().left < 0){
				$(".year").html("2012");
			}
			if($("#d_2012-01-01").length > 0 && $("#d_2012-01-01").offset().left > $(window).width()/3){
				$(".year").html("2011");
			}
			if($("#d_2011-01-01").length > 0 && $("#d_2011-01-01").offset().left > $(window).width()/3){
				$(".year").html("2010");
			}
			if($("#d_2010-01-01").length > 0 && $("#d_2010-01-01").offset().left > $(window).width()/3){
				$(".year").html("2009");
			}
			if($("#d_2009-01-01").length > 0 && $("#d_2009-01-01").offset().left > $(window).width()/3){
				$(".year").html("2008");
			}
  }

  function stopScrollingRight(){
      // stop increasing scroll position
      scrolling = 0
      $wrapper.stop();
  }

  $('.pcontrol').mousedown(startScrollingLeft).mouseup(stopScrollingLeft);
  $('.ncontrol').mousedown(startScrollingRight).mouseup(stopScrollingRight);
	
	*/
	
	
	
	var scrolling = false;
	var mdown;
	$(".views-timeline .pcontrol").mousedown(function(event){
		mdown = event.timeStamp;
		//console.log(mdown);
		if($(".aday").eq(0).offset().left > 0){}else{
			scrolling = true;
			startScrolling($(".ayears"), "+=10px");
		}
	}).mouseup(function(event){
		scrolling = false;
		//console.log(event.timeStamp);
		if ((event.timeStamp - mdown) < 400){
			if($(".aday").eq(0).offset().left < -600){
				startScrolling($(".ayears"), "+=600px");
			} else {
				startScrolling($(".ayears"), "+="+$(".aday").eq(0).offset().left);
			}
		}
	});
	var mndown;
	$(".views-timeline .ncontrol").mousedown(function(event){
		mdown = event.timeStamp;
		if($(".lastday").eq(-1).offset().left < $(".ncontrol").offset().left){}else{
			scrolling = true;
			startScrolling($(".ayears"), "-=10px");
		}
	}).mouseup(function(event){
		scrolling = false;
		if ((event.timeStamp - mdown) < 400){
			if($(".lastday").eq(-1).offset().left > $(".ncontrol").offset().left+600){
				startScrolling($(".ayears"), "-=600px");
			} else {
				startScrolling($(".ayears"), "-="+($(".lastday").eq(-1).offset().left - $(".ncontrol").offset().left));
			}
		}
	});
	function startScrolling(obj, param){
		obj.animate({"left": param}, 10, function(){
			if(scrolling){
				startScrolling(obj, param);
			}
			if($("#d_2013-01-02").length > 0 && $("#d_2013-01-02").offset().left < $(window).width()/2){
				$(".year").html("2013");
			}
			if($("#d_2013-01-01").length > 0 && $("#d_2013-01-01").offset().left > $(window).width()/2){
				$(".year").html("2012");
			}
			if($("#d_2012-01-01").length > 0 && $("#d_2012-01-01").offset().left > $(window).width()/3){
				$(".year").html("2011");
			}
			if($("#d_2011-01-01").length > 0 && $("#d_2011-01-01").offset().left > $(window).width()/3){
				$(".year").html("2010");
			}
			if($("#d_2010-01-01").length > 0 && $("#d_2010-01-01").offset().left > $(window).width()/3){
				$(".year").html("2009");
			}
			if($("#d_2009-01-01").length > 0 && $("#d_2009-01-01").offset().left > $(window).width()/3){
				$(".year").html("2008");
			}
			if($(".lastday").eq(-1).offset().left < $(".ncontrol").offset().left){
				scrolling = false
			}
			if($(".aday").eq(0).offset().left > 72){
				scrolling = false;
				$(".ayears").css("left", "0");
			}
		});
	}
	
	
	/*$(".views-timeline .pcontrol").click(function(){
		var total = $(".ayears").width();
		var single = $(".timelinewindow").width();
		var amount = $(".ayear").length
		if($(".ayears").css('left').replace("px", "") < 0 ){	
			$(".ayears").animate({
				left: '+='+single/2
			}, 200);
		}
	});
	$(".views-timeline .ncontrol").click(function(){
		var total = $(".ayears").width();
		var single = $(".timelinewindow").width();
		var amount = $(".ayear").length
		if($(".ayears").css('left').replace("px", "") > -1*($(".ayears").width() - $(".timelinewindow").width())){	
			$(".ayears").animate({
				left: '-='+single/2
			}, 200);
		}
	});*/
	
	
	//process
	$(".prcsinfo").width($(".prcsweek").length * $(".prcsweek").width()+136);
	
	$(".projects-prcs .ncontrol").click(function(){
		var total = $(".prcsinfo").width();
		var single = $(".prcsweek").width();
		var amount = $(".prcsweek").length
		if($(".prcsinfo").css('left').replace("px", "") > -1*(total - single - 10)){	
			$(".prcsinfo").animate({
				left: '-='+single
			}, 200);
		}
	});
	$(".projects-prcs .pcontrol").click(function(){
		var total = $(".prcsinfo").width();
		var single = $(".prcsweek").width();
		var amount = $(".prcsweek").length
		if($(".prcsinfo").css('left').replace("px", "") < 0){	
			$(".prcsinfo").animate({
				left: '+='+single
			}, 200);
		}
	});
	
	//work
	$(".selector").hover(function(){$(".boxcontent").show();}, function(){$(".boxcontent").hide();});
	$(".byall").click(function(){
		$('.work').isotope({ filter: '.wproject' });
		$(".workwrapper").css({
			top: "-="+($(".workwrapper").offset().top - ($(window).height()/2+2))
		});
		$(this).addClass("active");
		$(this).closest("li").siblings().find("a").removeClass("active");
		$(".cat").html("All work");
		$(".boxcontent").hide();
		$(".categorycontent, .mediumcontent, .clientcontent, .clientswork").hide();
		return false;
	});
	$(".bymed").click(function(){
		$('.work').isotope({ filter: '.identity' });
		$(".workwrapper").css({
			top: "-="+($(".workwrapper").offset().top - ($(window).height()/2+2))
		});
		$(this).addClass("active");
		$(this).closest("li").siblings().find("a").removeClass("active");
		$(".cat").html("By medium");
		$(".boxcontent").hide();
		$(".mediumcontent").show();
		$(".categorycontent, .clientcontent, .clientswork").hide();
		return false;
	});
	$(".medsel").click(function(){
    var med = $(this).attr("data-medium");
	  $('.work').isotope({ filter: '.'+med });
	  $(".workwrapper").css({
			top: "-="+($(".workwrapper").offset().top - ($(window).height()/2+2))
		});
		$(this).addClass("active");
		$(this).closest("li").siblings().find("a").removeClass("active");
		$(".clientswork").hide();
		$(".cat").html("By medium");
		return false;
	});
	$(".bycat").click(function(){
		$('.work').isotope({ filter: '.established' });
		$(".workwrapper").css({
			top: "-="+($(".workwrapper").offset().top - ($(window).height()/2+2))
		});
		$(this).addClass("active");
		$(this).closest("li").siblings().find("a").removeClass("active");
		$(".cat").html("By client category");
		$(".boxcontent").hide();
		$(".categorycontent").show();
		$(".mediumcontent, .clientcontent, .clientswork").hide();
		return false;
	});
	$(".catsel").click(function(){
    var cat = $(this).attr("data-category");
	  $('.work').isotope({ filter: '.'+cat });
	  $(".workwrapper").css({
			top: "-="+($(".workwrapper").offset().top - ($(window).height()/2+2))
		});
		$(this).addClass("active");
		$(this).closest("li").siblings().find("a").removeClass("active");
		$(".clientswork").hide();
		$(".cat").html("By client category");
		return false;
	});
	$(".byclient").click(function(){
		$('.work').isotope({ filter: '.client' });
		$(".workwrapper").css({
			top: "-="+($(".workwrapper").offset().top - ($(window).height()/2+2))
		});
		$(this).addClass("active");
		$(this).closest("li").siblings().find("a").removeClass("active");
		$(".cat").html("List of clients");
		$(".boxcontent").hide();
		$(".clientcontent, .clientswork").show();
		$(".mediumcontent, .categorycontent").hide();
		$(".clientswork").css({
		  top: ($(window).height()/2+20),
		  left: ($(".atimeline").offset().left+5),
		  position: "fixed"
		});
		return false;
	});
	$("a.wclientsel").click(function(e){
	 e.stopImmediatePropagation();
	 $(this).addClass("active");
		$(this).closest("li").siblings().find("a").removeClass("active");
		$(this).siblings(".clientprojects").show()
		$(this).closest("li").siblings().find(".clientprojects").hide();
		return false;
	});
	
	
	//chronicle
	if($("body").hasClass("projects-chronicle")){
	var winheight;
    if($(window).height() > $(window).width()){
      winheight = $(window).width();
      $("#graph2009").css("visibility", "hidden");
      $(".date2009").hide();
    } else {
      winheight = $(window).height();
    }
	$("#graph2009").css({
		"height": (winheight*.8),
		"width": (winheight*.8),
		"border-radius": (winheight*.8),
		"top": ((-1*winheight*.8)/2 - 2),
		"left": (($(".graphs").width()/2) - ((winheight*.8)/2) - (($(".timelinepositioning").offset().left-($(window).width()-($(".timelinepositioning").offset().left+$(".timelinepositioning").width())))/2))
	});
	$("#graph2010").css({
		"height": (winheight*.7),
		"width": (winheight*.7),
		"border-radius": (winheight*.7),
		"top": ((-1*winheight*.7)/2 - 2 ),
		"left": (($(".graphs").width()/2) - ((winheight*.7)/2) - (($(".timelinepositioning").offset().left-($(window).width()-($(".timelinepositioning").offset().left+$(".timelinepositioning").width())))/2))
	});
	$("#graph2011").css({
		"height": (winheight*.6),
		"width": (winheight*.6),
		"border-radius": (winheight*.6),
		"top": (((-1*winheight*.6))/2  - 2),
		"left": (($(".graphs").width()/2) - ((winheight*.6)/2) - (($(".timelinepositioning").offset().left-($(window).width()-($(".timelinepositioning").offset().left+$(".timelinepositioning").width())))/2))
	});
	$("#graph2012").css({
		"height": (winheight*.5),
		"width": (winheight*.5),
		"border-radius": (winheight*.5),
		"top": (((-1*winheight*.5))/2  - 2),
		"left": (($(".graphs").width()/2) - ((winheight*.5)/2) - (($(".timelinepositioning").offset().left-($(window).width()-($(".timelinepositioning").offset().left+$(".timelinepositioning").width())))/2))
	});
	$("#graph2013").css({
		"height": (winheight*.4),
		"width": (winheight*.4),
		"border-radius": (winheight*.4),
		"top": (((-1*winheight*.4))/2 - 2),
		"left": (($(".graphs").width()/2) - ((winheight*.4)/2) - (($(".timelinepositioning").offset().left-($(window).width()-($(".timelinepositioning").offset().left+$(".timelinepositioning").width())))/2))
	});
	}
	
	
	//journal
	if($(window).height() < $(window).width()){
    $(".journal .photo").each(function(){
      $(this).width($(this).find("img").attr("data-width")+"px"); 
    });
    
    //$(".journal .blog").width($(".atimeline").width()/4-37);
    $(".journal").each(function(){$(this).width($(this).find(".photo").width()+50+$(this).find(".blog").width());});
    
  	
  	//$(".journal .photo img").height($(window).height()/2-10);
  	//$(".morephotos .photo img").height($(window).height()/2-10);
  	var jwidth = 0;
  	$(".journal").each(function(){jwidth = jwidth + $(this).width()});
  	$(".journals").width(jwidth);
  	$(".journals").css({
  		left: -1*($(".journals").width() - $(".atimeline").width()-1)
  	});
  	//$(".journal .photo").eq(-1).css("margin-right", "0");
  	//$(".journal .blog").eq(-1).css("width", "+=10px");
	} else {
   $(".journal .photo").each(function(){$(this).width($(this).find("img").attr("data-width")+"px");});
    //$(".journal .blog").width($(".atimeline").width()/4-37);
    $(".journal").each(function(){$(this).width($(this).find(".photo").width()+40+$(this).find(".blog").width());});
  	$(".journal .photo img").height($(window).height()/2-10);
  	$(".morephotos .photo img").height($(window).height()/2-10);
  	var jwidth = 0;
  	$(".journal").each(function(){jwidth += $(this).outerWidth()});
  	$(".journals").width(jwidth);
  	$(".journals").css({
  		left: -1*($(".journals").width() - $(".atimeline").width()-1)
  	});
  	$(".journal .photo").eq(-1).css("margin-right", "0");
  	//$(".journal .blog").eq(-1).css("width", "+=10px");
	}
	
	$(".projects-journal .pcontrol").click(function(){
		if($(".journals").css('left').replace("px", "") < 0 ){
			$(".blog").each(function(){
		    if(
		    ($(this).offset().left+$(this).closest(".journal").width() + $(this).closest(".journal").next().width()) > $(".pcontrol").eq(-1).offset().left
		    
		    ){
		      $(this).closest(".journal").addClass("overflown");
		    } else {
		      $(".journal").eq(-1).addClass("overflown");
		    }
			});
			
			$(".journals").animate({
				left: "+="+(
				
				$(".overflown").eq(0).width()-(
				  $(".overflown").eq(0).offset().left+$(".overflown").eq(0).width()-$(".pcontrol").width()-$(".pcontrol").offset().left
				) 
				)
			}, 200);
		}
	});
	$(".projects-journal .ncontrol").click(function(){
		if($(".journals").css('left').replace("px", "") > -1*($(".journals").width() - $(".atimeline").width()-1) ){
			
			$(".journals").animate({
				left: "-="+($(".overflown").eq(0).width() )
			}, 200);
			$(".overflown").eq(0).removeClass("overflown");
		}
	});
	$(".journalcat").click(function(){
    $(this).addClass("active").closest("li").siblings().find("a").removeClass("active")
    var cat = $(this).html().trim();
    $.post("/journalfilter", {category: cat}, function(){
      $(".ablog").each(function(){
				var leftel = $(this).attr("data-pubdate");
				var moveleft = $("#d_"+leftel).offset().left - $(".timelinewindow").offset().left;
				var randheight = 10 * (Math.floor(Math.random() * (30 - 20 + 1) + 20));
				$(this).css({
					left: moveleft+"px",
					height: randheight
				});
			});
			if($(window).height() > $(window).width()){
       $(".journal .photo").each(function(){$(this).width($(this).find("img").attr("data-width")+"px");});
       
        //$(".journal .blog").width($(".atimeline").width()/4-37);
        $(".journal").each(function(){$(this).width($(this).find(".photo").width()+30+$(this).find(".blog").width());});
      	$(".journal .photo img").height($(window).height()/2-10);
      	$(".morephotos .photo img").height($(window).height()/2-10);
      } else {
		   $(".journal .photo").each(function(){$(this).width($(this).find("img").attr("data-width")+"px");});
		   $(".journal .photo").imagesLoaded(function(){
      	   $(".journal .photo").each(function(){
            $(this).width($(this).find("img").width());
          });
          $(".journal").each(function(){$(this).width($(this).find(".photo").width()+30+$(this).find(".blog").width());});
      	});
        //$(".journal .blog").width($(".atimeline").width()/4-37);
        $(".journal").each(function(){$(this).width($(this).find(".photo").width()+30+$(this).find(".blog").width());});
      	$(".journal .photo img").height($(window).height()/2-10);
      	$(".morephotos .photo img").height($(window).height()/2-10);
      	$(".journal .photo").imagesLoaded(function(){
      	   $(".journal .photo").each(function(){
            $(this).width($(this).find("img").width());
          });
          $(".journal").each(function(){$(this).width($(this).find(".photo").width()+30+$(this).find(".blog").width());});
      	});
			}
			//$(".journal .photo").width($(".journal").width()/2-20);
			var jwidth = 0;
    	$(".journal").each(function(){jwidth = jwidth + $(this).width()});
    	$(".journals").width(jwidth);
			$(".journals").css({
				left: -1*($(".journals").width() - $(".atimeline").width()-1)
			});
			$(".journal .photo").eq(-1).css("margin-right", "0");
			//$(".journal .blog").eq(-1).css("width", "+=10px");
    });
    return false;
	});
	
	//projectlist
	$(".projectlist ul").mCustomScrollbar();
	$(".description").mCustomScrollbar();
	
	//description
	$(".plus").toggle(function(){
		$(this).html("-");
		$(this).closest(".info").find(".description").css("visibility", "visible");
	}, function(){
		$(this).html("+");
		$(this).closest(".info").find(".description").css("visibility", "hidden");
	});
	
	//stats
	$(".areachart").css({
		width: $(".atimeline").width()/2-70,
		height: (($(window).height()/2)-60),
		marginRight: "70px"
	});
	$(".areagraphcontainer").css({
		height: (($(window).height()/2)-100)
	});
	$(".piechart").css({
		width: $(".atimeline").width()/4-55,
		height: (($(window).height()/2)-42),
		marginRight: "70px"
	});
	$(".piechart").eq(-1).css({
		width: $(".atimeline").width()/4-55,
		height: (($(window).height()/2)-42),
		marginRight: "0px"
	});
	$(".piegraphcontainer") .css({
		height: (($(window).height()/2)-130)
  });
	//$(".percentage").css("left", ($(".piechart").width()/2)-($(".percentage").width()/2));
	$(".percentage").css("font-size", $(".percentage").width()/2.8+"px");
	$(".percentage").css("top", (($(".stattitle").height())+($(".piechart").height()/2)-($(".percentage").height()/2))-5);
	if($("body").hasClass("projects-show") || $("body").hasClass("projects-prcs") || $("body").hasClass("projects-stats")){
    $(".info").css("left", $(".pcontrol").offset().left+$(".pcontrol").width())
	}
	
	//journalstupidity
	//$(".journalswrapper").height($(window).height()/2-10);
	//$(".blog").height($(window).height()/2-30);
	//$(".photo, .photo img").height($(window).height()/2-10);
	
	//workviewshit
	if($("body").hasClass("projects-work")){
		$(".workwrapper").css({
			width: $(".atimeline").width()+37
		});
		$(".wproject").width(($(".atimeline").width()-60)/7);
		if($(".wproject").width()*7+60 > $(".atimeline").width()){
			$(".atimeline").css({
				width: "+="+Math.abs(($(".wproject").width()*7+60)-$(".atimeline").width())
			});
		} else if($(".wproject").width()*7+60 < $(".atimeline").width()){
			$(".atimeline").css({
				width: "-="+Math.abs(($(".wproject").width()*7+60)-$(".atimeline").width())
			});
		}
		wcount = $(".wproject").length/2;
		randomElements = jQuery(".wproject").get().sort(function(){ 
		  return Math.round(Math.random())-0.5
		}).slice(0,wcount);
		if($(window).height() > $(window).width()){ 
		  $(randomElements).height("+=5");
		} else {
		  $(randomElements).height("+=25");
		}
		
		
		randomElements2 = jQuery(".wproject").get().sort(function(){ 
		  return Math.round(Math.random())-0.5
		}).slice(0,wcount);
		if($(window).height() > $(window).width()){ 
		  $(randomElements2).height("+=10");
		} else {
		  $(randomElements2).height("+=50");
		}
		
		wlimit = $(window).height()/2+2;
		woffset = $(".workwrapper").offset().top;
		$("body.projects-work").bind("mousewheel", function(event, delta){
			//this.scrollTop -= (delta * 30);
			if($(".workwrapper").offset().top <= wlimit && ($(".workwrapper").offset().top+$(".workwrapper").height()) > wlimit){
				$(".workwrapper").animate({
					top: "+="+(delta * 30)
				}, 10, function(){
					if($(".workwrapper").offset().top > wlimit){
						$(".workwrapper").css({
							top: "-="+($(".workwrapper").offset().top - wlimit)
						});
					} else if(($(".workwrapper").offset().top+$(".workwrapper").height()) < wlimit){
						$(".workwrapper").css({
							top: "+="+(Math.abs(($(".workwrapper").offset().top+$(".workwrapper").height()-10) - wlimit))
						});
						//alert((($(".workwrapper").offset().top+$(".workwrapper").height()) - wlimit));
					}
				});
			} 
			event.preventDefault();
		});
	
		$(".mask").css("height", $(window).height()/2);
		
		function swipe2(event, phase, direction, distance){
		  if(direction == "up" && distance > 20){
		    $(".workwrapper").animate({
  					top: "+=20"
  				}, 10, function(){
  					if($(".workwrapper").offset().top > wlimit){
  						$(".workwrapper").css({
  							top: "-="+($(".workwrapper").offset().top - wlimit)
  						});
  					} else if(($(".workwrapper").offset().top+$(".workwrapper").height()) < wlimit){
  						$(".workwrapper").css({
  							top: "+="+(Math.abs(($(".workwrapper").offset().top+$(".workwrapper").height()-10) - wlimit))
  						});
  						//alert((($(".workwrapper").offset().top+$(".workwrapper").height()) - wlimit));
  					}
  				});
		  }
		  if(direction == "down" && distance > 20){
		    $(".workwrapper").animate({
  					top: "-=20"
  				}, 10, function(){
  					if($(".workwrapper").offset().top > wlimit){
  						$(".workwrapper").css({
  							top: "-="+($(".workwrapper").offset().top - wlimit)
  						});
  					} else if(($(".workwrapper").offset().top+$(".workwrapper").height()) < wlimit){
  						$(".workwrapper").css({
  							top: "+="+(Math.abs(($(".workwrapper").offset().top+$(".workwrapper").height()-10) - wlimit))
  						});
  						//alert((($(".workwrapper").offset().top+$(".workwrapper").height()) - wlimit));
  					}
  				});
		  }
		}
		
		$("body.projects-work .workwrapperwrapper").swipe({
		  click:function(event, target){
        //console.log($(target))
        if($(target).hasClass("wclientsel")){
        
        } else {
          window.location.href=$(target).closest(".wproject").find("a").attr("href");
        }
      },
      swipeStatus: swipe2
    });
		
		
		
		/*
		$("body.projects-work").swipe({
		  swipeUp: function(event, direction, distance, duration){
		    
  				$(".workwrapper").animate({
  					top: "+="+distance
  				}, 10, function(){
  					if($(".workwrapper").offset().top > wlimit){
  						$(".workwrapper").css({
  							top: "-="+($(".workwrapper").offset().top - wlimit)
  						});
  					} else if(($(".workwrapper").offset().top+$(".workwrapper").height()) < wlimit){
  						$(".workwrapper").css({
  							top: "+="+(Math.abs(($(".workwrapper").offset().top+$(".workwrapper").height()-10) - wlimit))
  						});
  						//alert((($(".workwrapper").offset().top+$(".workwrapper").height()) - wlimit));
  					}
  				});
  			
		  },
		  swipeDown: function(event, direction, distance, duration){
		    
  				$(".workwrapper").animate({
  					top: "-="+distance
  				}, 10, function(){
  					if($(".workwrapper").offset().top > wlimit){
  						$(".workwrapper").css({
  							top: "-="+($(".workwrapper").offset().top - wlimit)
  						});
  					} else if(($(".workwrapper").offset().top+$(".workwrapper").height()) < wlimit){
  						$(".workwrapper").css({
  							top: "+="+(Math.abs(($(".workwrapper").offset().top+$(".workwrapper").height()-10) - wlimit))
  						});
  						//alert((($(".workwrapper").offset().top+$(".workwrapper").height()) - wlimit));
  					}
  				});
  			
		  }
		  
		});
		*/
	}
	
	//searchshit
	$("#keywordsearch").focus(function(){
		if($(this).val()=="Search by keyword"){$(this).val("");}
	}).keyup(function(event){
		if(event.keyCode == 13){     
			var term = $("#keywordsearch").val();
			$.post("/search", {terms: term}, function(){
								
				$(".journal .photo img").height(445);
      	$(".morephotos .photo img").height(445);
      	$(".journal .photo").imagesLoaded(function(){
      	   $(".journal .photo").each(function(){
            $(this).width($(this).find("img").width());
            console.log($(this).find("img").width());
          });
          $(".journal").each(function(){
            $(this).width($(this).find(".photo").width()+40+$(this).find(".blog").width());
            console.log($(this).find(".photo").width()+40+$(this).find(".blog").width());
          });
      	  var jwidth = 0;
        	$(".journal").each(function(){jwidth = jwidth + $(this).width()});
        	$(".journals").width(jwidth);
        	$(".journals").css({
        		left: -1*($(".journals").width() - $(".atimeline").width()-1-20)
        	});
        	console.log(jwidth);
        	console.log($(".journals").width() - $(".atimeline").width()-1-20);
      	});
        
      	
  			
			});
		}
	}).blur(function(){
	 if($(this).val()==""){$(this).val("Search by keyword");}
  });
	$(".glass").click(function(){
		var term = $("#keywordsearch").val();
		$.post("/search", {terms: term}, function(){
		  $(".journal .photo img").height(445);
      	$(".morephotos .photo img").height(445);
      	$(".journal .photo").imagesLoaded(function(){
      	   $(".journal .photo").each(function(){
            $(this).width($(this).find("img").width());
            console.log($(this).find("img").width());
          });
          $(".journal").each(function(){
            $(this).width($(this).find(".photo").width()+40+$(this).find(".blog").width());
            console.log($(this).find(".photo").width()+40+$(this).find(".blog").width());
          });
      	  var jwidth = 0;
        	$(".journal").each(function(){jwidth = jwidth + $(this).width()});
        	$(".journals").width(jwidth);
        	$(".journals").css({
        		left: -1*($(".journals").width() - $(".atimeline").width()-1-20)
        	});
        	console.log(jwidth);
        	console.log($(".journals").width() - $(".atimeline").width()-1-20);
      	});	
		});
	});
	
	
	//timelinefixes
	/*
	$(".aproject").each(function(){
	 if($(this).attr("data-position")){
	   var nmbr = parseInt($(this).attr("data-position").replace(/\D/g, ""));
	   var direction = $(this).attr("data-position").replace(/\d/g, "");
	   if(direction == "+"){
	     $(this).css({
      	 top: "-="+nmbr*$(".aproject").height()
      	});
	   } else if(direction == "-"){
	     $(this).css({
      	 top: "+="+nmbr*$(".aproject").height()
      	});
	   }
	 }
	});
  */
	$(".aproject").each(function(){
	 if($(this).attr("data-position")){
	   var nmbr = parseInt($(this).attr("data-position").replace(/\D/g, ""))-1;
	   
	     $(this).css({
      	 top: "+="+nmbr*$(".aproject").height()
      	});
	   
	 }
	});
	
	
	
	
	//photo deletions
	$(".removeimage a").click(function(e){
	 e.preventDefault();
	 var project = $(this).data("project");
	 var photo = $(this).data("photo");
	 var operation = $(this).data("operation");
	 var staff = $(this).data("staff");
	 var studio = $(this).data("studio");
	 var blog = $(this).data("blog");
	 var client = $(this).data("client");
	 $.post("/deletephotos", {project: project, photo: photo, operation: operation, staff: staff, studio: studio, blog: blog, client: client}, function(){$(this).closest(".removeimage").siblings(".previewimage").hide();});
	 return false;
	});
	
	$(".removenew").click(function(){
    $(this).closest(".photofield").slideUp("slow", function(){$(this).remove();});
    return false;
	});
	
	//chroniclebox
	$(".projects-chronicle .box2").hover(function(){$(".projects-chronicle .box3").show(); $(".projects-chronicle .arrow").css("background-position", "0 -11px");}, function(){$(".projects-chronicle .box3").hide(); $(".projects-chronicle .arrow").css("background-position", "0 0");});
	
	//journalboxarrow
  $(".searchcat").mouseover(function(){$(".arrow").css("background-position", "0 -11px");}).mouseout(function(){$(".arrow").css("background-position", "0 0");});	
	
	
	//labnav
	$(".labnavsec a").click(function(){
    var sec = $(this).attr("data-sec");
    $(".active").removeClass("active");
    $(this).addClass("active");
    $("."+sec).addClass("active");
    if($(window).width() < 1025){
      $(".labnavsec").style("display", "none", "important");
      $(".standardrnavcontent").style("display", "none", "important");
    }
    return false;
	});
	
	//controls positioning
	if($("body").hasClass("projects-work")){
	 $(".projects-work .controls").css({right: 62+($(window).width()-($(".atimeline").width()+$(".atimeline").offset().left))-($(window).width() - ($(".pageheader").width()+$(".pageheader").offset().left))});
	 //$(".text").css("top", ($(".logo").height()-$(".text").height()));
	}
	if($("body").hasClass("projects-chronicle")){
	
	 $(".keys").css("left", ($(window).width()/2-($(".keys").width()-20)/2));
	 //$(".keys").css("top", ($(window).height()/2-40));
	 //$(".text").css("top", ($(".logo").height()-$(".text").height()));
	 $(".projects-chronicle .controls").css({right: 60+($(window).width()-($(".atimeline").width()+$(".atimeline").offset().left))-($(window).width() - ($(".pageheader").width()+$(".pageheader").offset().left))});
	//$(".projects-chronicle .text").css({marginTop: $(window).height()/2-80-137-98});
	}
	if($("body").hasClass("projects-journal")){
	 $(".projects-journal .controls").css({right: 60+($(window).width()-($(".atimeline").width()+$(".atimeline").offset().left))-($(window).width() - ($(".pageheader").width()+$(".pageheader").offset().left))});
	 //$(".text").css("top", ($(".logo").height()-$(".text").height()));
	}
	$(".tcontainer").eq(0).height($(window).height()/2);
	//$(".menunav").css({right: 0, left: ($(window).width()*.709)-37})
	

	
	
	//statsshowing
	$(".showstatscontainer").toggle(function(){$(this).html("-"); $(this).next().show(); return false;}, function(){$(this).html("+"); $(this).next().hide(); return false;})
	$(".showsprojectscontainer").toggle(function(){$(this).html("-"); $(this).next().show(); return false;}, function(){$(this).html("+"); $(this).next().hide(); return false;})
	
	//client select
	$("select#client").change(function(){
    if($("option:selected").text() != ""){
      $("input#newclient").val("");
    }
	});
	$("input#newclient").keyup(function(){
	 $("select#client").val("");
	});
	
	
	//studio columns
	if($(".studiocontents p").length > 0){
	 //$(".studiocontents p").width(($(".atimeline").width()-$(".studionavsec").width()) - ($(window).width() - $(".studionavsec").offset().left - $(".studionavsec").width() -10));
	}
	
	//staffslider
	if($("body").hasClass("projects-people")){
    $("#bgimg").hide();
    $(".staffwrapper, .astaff").width($(".atimeline").width());
    $(".staffs").width(($(".atimeline").width()+10)*($(".astaff").length));
    $(".astaff").each(function(){
      var url = $(this).find(".staffimg a").attr("href");
      var height = $(this).find(".staffimg a").attr("data-height");
      var width = $(this).find(".staffimg a").attr("data-width");
      var imgtag = "<img id='bgimg"+$(this).index()+"' src='"+url+"' data-height='"+height+"' data-width='"+width+"'/>"
      $("body").prepend(imgtag);
      var FullscreenrOptions = {  width: width, height: height, bgID: '#bgimg'+$(this).index() };
      jQuery.fn.fullscreenr(FullscreenrOptions);
      $("#bgimg"+$(this).index()).css({
        position: "absolute",
        left: $(window).width()
      });
    });
    
    
    $(".staffpick").click(function(){
  		$(this).addClass("active").closest("li").siblings().find("a").removeClass("active")
  		var index = $(this).parent().index()+1;
  		$("#bgimg"+(index-1)).css({"left": "0", "display": "block"});
  		$("#bgimg"+(index-1)).siblings("img").css("display", "none");
  		$(".staffs").animate({left: "-="+($(".astaff").eq(index-1).offset().left-60)}, 0);
  		var stafflogo = $(this).attr("data-staff_logo");
  		$(".logo").css("background", "url("+stafflogo+") no-repeat");
  		//var staffid = $(this).attr("data-staff_id");
  		//$.post("/staffpick", {staff: staffid}, function(){$(that).addClass("active").closest("li").siblings().find("a").removeClass("active")});
  		return false;
  	});
	
	}
	//labslider
	if($("body").hasClass("projects-lab")){
    $("#bgimg").hide();
    
    $(".alab").each(function(){
      var url = $(this).find(".labimg a").attr("href");
      var height = $(this).find(".labimg a").attr("data-height");
      var width = $(this).find(".labimg a").attr("data-width");
      var imgtag = "<img id='bgimg"+$(this).index()+"' src='"+url+"' data-height='"+height+"' data-width='"+width+"'/>"
      $("body").prepend(imgtag);
      var FullscreenrOptions = {  width: width, height: height, bgID: '#bgimg'+$(this).index() };
      jQuery.fn.fullscreenr(FullscreenrOptions);
      $("#bgimg"+$(this).index()).css({
        position: "absolute",
        left: $(window).width()
      });
    });
    
    
    $(".labnavsec .top div a").click(function(){
  		var index = $(this).parent().index()+1;
  		$("#bgimg"+(index-1)).css({"left": "0", "display": "block"});
  		$("#bgimg"+(index-1)).siblings("img").css("display", "none");
  	});
	
	}
	
	
	//header
	if($(".companylogo").length > 0){
	 $(".pageheader").css("top", (($(window).height()/2) - ($(".companylogo").height()) - 100));
	} else {
  	$(".pageheader").css("top", (($(window).height()/2) - ($(".logo").height()) - 100));
	}
	
	//chronicle links
	/*
	if($("body").hasClass("projects-work")){
    var cat = window.location.hash.replace("#", "").replace(/\d+/, "");
    var year = window.location.hash.replace("#", "").replace(/\D+/, ""); 
    if(cat.length > 0){
      if(cat == "established" || cat == "world-change" || cat == "entrepreneurs" || cat == "non-profit"){
        $(".bycat").addClass("active");
        $(".bycat").closest("li").siblings().find("a").removeClass("active");
        $(".cat").html("By client category");
        $(".categorycontent").show();
        $('*[data-category="'+cat+'"]').addClass("active");
        $('*[data-category="'+cat+'"]').closest("li").siblings().find("a").removeClass("active");
        
      } else {
        $(".bymed").addClass("active");
        $(".bymed").closest("li").siblings().find("a").removeClass("active");
        $(".cat").html("By medium");
        $(".mediumcontent").show();
        $('*[data-medium="'+cat+'"]').addClass("active");
        $('*[data-medium="'+cat+'"]').closest("li").siblings().find("a").removeClass("active");
      }
      $('.work').isotope({ filter: '.'+cat+"."+year });
    }
  }
  */
  if($("body").hasClass("projects-work")){
    if(window.location.hash.length > 0){
      var year = window.location.hash.replace("#", "").replace(/\D+/, ""); 
      $('.work').isotope({ filter: "."+year });
    }
  }
  $(".thing a").click(function(){
    $(this).addClass("active");
    $(this).parent().siblings().find("a").removeClass("active")
    var graph = $(this).attr("data-graph");
    $.post("/graphselect", {graph: graph}, function(){});
    return false;
  });
  
  //thumbsizes
  
   $(".wprojectthumb").each(function(){
    
    var width = $(this).width();
    var height = $(this).height();
    if(width > height){
      $(this).find("img").width(width); 
    } else {
      $(this).find("img").height(height); 
    }
    
    
   });
   
   if($("body").hasClass("projects-people")){
    
    //$(".staffcontents p").width($(".staffnav").offset().left - $(".atimeline").offset().left - 30)
    
   }
   if($("body").hasClass("projects-ethic") || $("body").hasClass("projects-competencies") || $("body").hasClass("projects-mission")){
    if($(".menunav").offset().left/2.1 < 355){
    //$(".studiocontents p").width(($(".atimeline").width()-$(".studionavsec").width()) - ($(window).width() - $(".studionavsec").offset().left - $(".studionavsec").width() -10));
    }
   }
   if($("body").hasClass("projects-lab")){
    if($(".menunav").offset().left/3.3 < 252){
    //$(".labcontents .block").width($(".menunav").offset().left/3.3)
    }
   }
   thingleft = "0px";
   $(".morebtn").live("click", function(){
    var that = $(this);
    $(this).closest(".journal").next().show();
    $(this).closest(".journal").next().find(".morephoto").show();
    thingleft = $(".journals").css("left");
   
    $(".journals").css({
      width: "+="+($(this).closest(".journal").next().width()+400)
    });
    $(this).css("visibility", "hidden");
    if($(this).closest(".journal").attr("id") == $(".journal").eq(-1).attr("id")){
      $(".journals").animate({
        left: "-="+$(".morebtn").eq(-1).closest(".journal").next().width()
      }, 0);
      $(".journals").animate({left: "-=20px"}, 0);
    }
    return false;
   });
   $(".lessbtn").live("click", function(){
    var that = $(this);
    $(this).closest(".morephotos").hide();
    $(this).closest(".morephotos .morephoto").hide();
    $(".journals").css({
      width: "-="+($(this).closest(".morephotos").width()+400),
      left: thingleft
    });
    
    
    $(".morebtn").css("visibility", "visible");
    return false;
   });
   $(".morephotos").height($(".journal").height());

    
    
    var isiPad = navigator.userAgent.match(/iPad/i) != null;
    if(isiPad){
      $(".lnav").bind("click", function(e) {
        //$(this).find(".lnavcontent").find("a").bind("click", function(){return false});
        //setTimeout(function(){$(".lnav").find(".lnavcontent").find("a").bind("click");}, 500);
      });
      
    }
});




$(window).resize(function() {
	//$(".timelinepositioning").css({"top": $(window).height()/2, "width": $(window).width()-50});
	//$(".pageheader").css("padding-top", $(window).height()/4);
	//$(".prcsinfo").width($(".prcsweek").length * $(".prcsweek").width()+68);
	
	$(".timelinepositioning").css({"top": $(window).height()/2, "width": $(window).width()-50});
	$(".projects-work .timelinepositioning").css({"top": $(window).height()/2, "width": $(window).width()-49});
	$(".pageheader").css({"width": $(window).width()-30});
	if($("body").hasClass("projects-prcs")){
		$(".prcsinfo, .leftprcs, .midprcs, .rightprcs").css({
			"height": $(".info").offset().top-$(".timelinepositioning").offset().top-10
		});
		$(".leftprcs, .midprcs, .rightprcs").css({
			"width": $(".timelinepositioning").width()/3
		});
	}
	$(".projects-journal .work").width($(".atimeline").width());
	$(".workwrapper").css({
		width: $(".atimeline").width()+37
	});
	if($("body").hasClass("projects-work")){
    $(".atimeline").width($(".tlwrapper").width());
  	$(".wproject").width(($(".atimeline").width()-60)/7);
  	if($(".wproject").width()*7+60 > $(".atimeline").width()){
  		$(".atimeline").css({
  			width: "+="+Math.abs(($(".wproject").width()*7+60)-$(".atimeline").width())
  		});
  	} else if($(".wproject").width()*7+60 < $(".atimeline").width()){
  		$(".atimeline").css({
  			width: "-="+Math.abs(($(".wproject").width()*7+60)-$(".atimeline").width())
  		});
  	}
  	
  	$('.work').isotope('reLayout')
	}
	$(".projects-work .controls").css({right: 62+($(window).width()-($(".atimeline").width()+$(".atimeline").offset().left))-($(window).width() - ($(".pageheader").width()+$(".pageheader").offset().left))});
	$(".projects-chronicle .controls").css({right: 60+($(window).width()-($(".atimeline").width()+$(".atimeline").offset().left))-($(window).width() - ($(".pageheader").width()+$(".pageheader").offset().left))});
	//$(".projects-chronicle .text").css({marginTop: $(window).height()/2-80-137-98});
	$(".projects-journal .controls").css({right: 60+($(window).width()-($(".atimeline").width()+$(".atimeline").offset().left))-($(window).width() - ($(".pageheader").width()+$(".pageheader").offset().left))});
	$(".tcontainer").eq(0).height($(window).height()/2);
	
	$(".areachart").css({
		width: $(".atimeline").width()/2-70,
		height: (($(window).height()/2)-60),
		marginRight: "70px"
	});
	$(".areagraphcontainer").css({
		height: (($(window).height()/2)-100)
	});
	$(".piechart").css({
		width: $(".atimeline").width()/4-35,
		height: (($(window).height()/2)-42),
		marginRight: "70px"
	});
	$(".piechart").eq(-1).css({
		width: $(".atimeline").width()/4-35,
		height: (($(window).height()/2)-42),
		marginRight: "0px"
	});
	$(".piegraphcontainer") .css({
		height: (($(window).height()/2)-130)
  });
	//$(".percentage").css("left", ($(".piechart").width()/2)-($(".percentage").width()/2));
	$(".percentage").css("font-size", $(".percentage").width()/2.8+"px");
	$(".percentage").css("top", (($(".stattitle").height())+($(".piechart").height()/2)-($(".percentage").height()/2))-5);
	
	if($("body").hasClass("projects-show") || $("body").hasClass("projects-prcs") || $("body").hasClass("projects-stats")){
    $(".info").css("left", $(".pcontrol").offset().left+$(".pcontrol").width())
	}
	if($(".companylogo").length > 0){
	 $(".pageheader").css("top", (($(window).height()/2) - ($(".companylogo").height()) - 100));
	} else {
  	$(".pageheader").css("top", (($(window).height()/2) - ($(".logo").height()) - 100));
	}
	
  if($("body").hasClass("projects-chronicle")){
	     $(".keys").css("left", ($(window).width()/2-($(".keys").width()-20)/2));
	     //$(".keys").css("top", ($(window).height()/2-40));
	     var winheight;
        if($(window).height() > $(window).width()){
          winheight = $(window).width();
          $("#graph2009").css("visibility", "hidden");
          $(".date2009").hide();
        } else {
          winheight = $(window).height();
        }
    	$("#graph2009").css({
    		"height": (winheight*.8),
    		"width": (winheight*.8),
    		"border-radius": (winheight*.8),
    		"top": ((-1*winheight*.8)/2 - 2),
    		"left": (($(".graphs").width()/2) - ((winheight*.8)/2) - (($(".timelinepositioning").offset().left-($(window).width()-($(".timelinepositioning").offset().left+$(".timelinepositioning").width())))/2))
    	});
    	$("#graph2010").css({
    		"height": (winheight*.7),
    		"width": (winheight*.7),
    		"border-radius": (winheight*.7),
    		"top": ((-1*winheight*.7)/2 - 2 ),
    		"left": (($(".graphs").width()/2) - ((winheight*.7)/2) - (($(".timelinepositioning").offset().left-($(window).width()-($(".timelinepositioning").offset().left+$(".timelinepositioning").width())))/2))
    	});
    	$("#graph2011").css({
    		"height": (winheight*.6),
    		"width": (winheight*.6),
    		"border-radius": (winheight*.6),
    		"top": (((-1*winheight*.6))/2  - 2),
    		"left": (($(".graphs").width()/2) - ((winheight*.6)/2) - (($(".timelinepositioning").offset().left-($(window).width()-($(".timelinepositioning").offset().left+$(".timelinepositioning").width())))/2))
    	});
    	$("#graph2012").css({
    		"height": (winheight*.5),
    		"width": (winheight*.5),
    		"border-radius": (winheight*.5),
    		"top": (((-1*winheight*.5))/2  - 2),
    		"left": (($(".graphs").width()/2) - ((winheight*.5)/2) - (($(".timelinepositioning").offset().left-($(window).width()-($(".timelinepositioning").offset().left+$(".timelinepositioning").width())))/2))
    	});
    	$("#graph2013").css({
    		"height": (winheight*.4),
    		"width": (winheight*.4),
    		"border-radius": (winheight*.4),
    		"top": (((-1*winheight*.4))/2 - 2),
    		"left": (($(".graphs").width()/2) - ((winheight*.4)/2) - (($(".timelinepositioning").offset().left-($(window).width()-($(".timelinepositioning").offset().left+$(".timelinepositioning").width())))/2))
    	});
	     
	     if($("#graph2013").length > 0){
          $(".date2013").css("left", $("#graph2013").offset().left - $(".atimeline").offset().left+5);
        }
        $(".date2012").css("left", ($("#graph2012").offset().left-$(".atimeline").offset().left)+5);
        $(".date2011").css("left", $("#graph2011").offset().left - $(".atimeline").offset().left+5);
        $(".date2010").css("left", $("#graph2010").offset().left - $(".atimeline").offset().left+5);
        if($("#graph2009").length > 0){
          $(".date2009").css("left", $("#graph2009").offset().left - $(".atimeline").offset().left+5);
        }
        if($("#graph2008").length > 0){
          $(".date2008").css("left", $("#graph2008").offset().left - $(".atimeline").offset().left+5)
        }
  }
  if($(".studiocontents p").length > 0){
	 //$(".studiocontents p").width(($(".atimeline").width()-$(".studionavsec").width()) - ($(window).width() - $(".studionavsec").offset().left - $(".studionavsec").width() -10));
	}
	if($("body").hasClass("projects-people")){
    
    $(".staffwrapper, .astaff").width($(".atimeline").width());
    $(".staffs").width(($(".atimeline").width()+10)*($(".astaff").length));
    $(".astaff").each(function(){
      
      
      $("#bgimg"+$(this).index()).css({
        position: "absolute",
        left: $(window).width(),
        width: $(window).width()
      });
      
      //$(this).addClass("active").closest("li").siblings().find("a").removeClass("active")
  		var index = $(".staffpick.active").parent().index()+1; 
  		$("#bgimg"+(index-1)).animate({left: "0"}, 0);
  		$("#bgimg"+(index-1)).siblings("img").animate({left: $(window).width()}, 0);
  		$(".staffs").animate({left: "-="+($(".astaff").eq(index-1).offset().left-60)}, 0);
      
    });
  }
  if($("body").hasClass("projects-work")){
   $(".mask").css("height", $(window).height()/2);
   $("body.projects-work").unbind("mousewheel");
   wlimit = $(window).height()/2+2;
		woffset = $(".workwrapper").offset().top;
		$("body.projects-work").bind("mousewheel", function(event, delta){
			//this.scrollTop -= (delta * 30);
			if($(".workwrapper").offset().top <= wlimit && ($(".workwrapper").offset().top+$(".workwrapper").height()) > wlimit){
				$(".workwrapper").animate({
					top: "+="+(delta * 30)
				}, 10, function(){
					if($(".workwrapper").offset().top > wlimit){
						$(".workwrapper").css({
							top: "-="+($(".workwrapper").offset().top - wlimit)
						});
					} else if(($(".workwrapper").offset().top+$(".workwrapper").height()) < wlimit){
						$(".workwrapper").css({
							top: "+="+(Math.abs(($(".workwrapper").offset().top+$(".workwrapper").height()-10) - wlimit))
						});
						//alert((($(".workwrapper").offset().top+$(".workwrapper").height()) - wlimit));
					}
				});
			} 
			event.preventDefault();
		});
  }
  if($("body").hasClass("projects-show") || $("body").hasClass("projects-prcs") || $("body").hasClass("projects-stats")){
    $("img").each(function(){
      if($(this).position().left > 0){
        $(this).css("left", $(window).width());
      }
    });
  }
  if($("body").hasClass("projects-people")){
   
    //$(".staffcontents p").width($(".staffnav").offset().left - $(".atimeline").offset().left - 30)
   
  }
  /*
  if($("body").hasClass("projects-ethic") || $("body").hasClass("projects-competencies") || $("body").hasClass("projects-mission")){
    if($(".menunav").offset().left/1.8 < 355){
      if($(".studiocontents p").length > 1){
        $(".studiocontents p").width($(".menunav").offset().left/1.8)
      }
    }
   }
   */
   if($("body").hasClass("projects-lab")){
    if($(".menunav").offset().left/3.3 < 252){
    //$(".labcontents .block").width($(".menunav").offset().left/3.3)
    }
   }
   /*
   if($(window).height() < $(window).width()){
    $(".journal .photo").each(function(){
      $(this).width($(this).find("img").width());
    });
    
    $(".journal .blog").width($(".atimeline").width()/4-37);
    $(".journal").each(function(){$(this).width($(this).find(".photo").width()+30+$(this).find(".blog").width());});
    
  	
  	$(".journal .photo img").height($(window).height()/2-10);
  	$(".morephotos .photo img").height($(window).height()/2-10);
  	var jwidth = 0;
  	$(".journal").each(function(){jwidth = jwidth + $(this).width()});
  	$(".journals").width(jwidth);
  	$(".journals").css({
  		left: -1*($(".journals").width() - $(".atimeline").width()-1)
  	});
  	$(".journal .photo").eq(-1).css("margin-right", "0");
  	$(".journal .blog").eq(-1).css("width", "+=10px");
	} else {
   $(".journal .photo").each(function(){
      $(this).width($(this).find("img").width());
    });
    $(".journal .blog").width($(".atimeline").width()/4-37);
    $(".journal").each(function(){$(this).width($(this).find(".photo").width()+30+$(this).find(".blog").width());});
  	$(".journal .photo img").height($(window).height()/2-10);
  	$(".morephotos .photo img").height($(window).height()/2-10);
  	var jwidth = 0;
  	$(".journal").each(function(){jwidth += $(this).outerWidth()});
  	$(".journals").width(jwidth);
  	$(".journals").css({
  		left: -1*($(".journals").width() - $(".atimeline").width()-1)
  	});
  	$(".journal .photo").eq(-1).css("margin-right", "0");
  	$(".journal .blog").eq(-1).css("width", "+=10px");
	}
	*/
	$(".wprojectthumb").each(function(){
    
    var width = $(this).width();
    var height = $(this).height();
    if(width > height){
      $(this).find("img").width(width); 
    } else {
      $(this).find("img").height(height); 
    }
    
    
   });
});

$(window).load(function(){

    
    
    //$(".journal .blog").width($(".atimeline").width()/4-37);
    
    
  	
  	$(".journal .photo img").height(445);
  	$(".morephotos .photo img").height(445);
  	$(".journal .photo").each(function(){
      $(this).width($(this).find("img").width());
    });
    $(".journal").each(function(){$(this).width($(this).find(".photo").width()+40+$(this).find(".blog").width());});
  	var jwidth = 0;
  	$(".journal").each(function(){jwidth = jwidth + $(this).width()});
  	$(".journals").width(jwidth);
  	$(".journals").css({
  		left: -1*($(".journals").width() - $(".atimeline").width()-1-20)
  	});
  	//$(".journal .photo").eq(-1).css("margin-right", "0");
  	//$(".journal .blog").eq(-1).css("width", "+=10px");

   
	
	if($("body").hasClass("projects-journal")){
    var blogid = window.location.hash.replace("#", "");
    if(blogid.length > 0){
      console.log($(blogid).offset().left);
      $(".journals").animate({left: "-="+($(blogid).offset().left - 64)}, 200)
      $(".blog").addClass("overflown");
    }
	}
	
	if($("body").hasClass("projects-journal")){
	 
	 $(".text").css("top", ($(".logo").height()-$(".text").height()));
	}
	
  
});

window.onorientationchange = function(){
	//$(".timelinepositioning").css({"top": $(window).height()/2, "width": $(window).width()-50});
	//$(".pageheader").css("padding-top", $(window).height()/4);
	//$(".prcsinfo").width($(".prcsweek").length * $(".prcsweek").width()+68);
	//$('img[id^="bg"]').css({width: $(window).width()});
	//$("#realBody").css({width: $(window).width(), overflow: "hidden"});
	window.scrollTo(0,1)
	$(".timelinepositioning").css({"top": $(window).height()/2, "width": $(window).width()-50});
	$(".projects-work .timelinepositioning").css({"top": $(window).height()/2, "width": $(window).width()-49});
	$(".pageheader").css({"width": $(window).width()-30});
	if($("body").hasClass("projects-prcs")){
		$(".prcsinfo, .leftprcs, .midprcs, .rightprcs").css({
			"height": $(".info").offset().top-$(".timelinepositioning").offset().top-10
		});
		$(".leftprcs, .midprcs, .rightprcs").css({
			"width": $(".timelinepositioning").width()/3
		});
	}
	$(".projects-journal .work").width($(".atimeline").width());
	$(".workwrapper").css({
		width: $(".atimeline").width()+37
	});
	if($("body").hasClass("projects-work")){
    $(".atimeline").width($(".tlwrapper").width());
  	$(".wproject").width(($(".atimeline").width()-60)/7);
  	if($(".wproject").width()*7+60 > $(".atimeline").width()){
  		$(".atimeline").css({
  			width: "+="+Math.abs(($(".wproject").width()*7+60)-$(".atimeline").width())
  		});
  	} else if($(".wproject").width()*7+60 < $(".atimeline").width()){
  		$(".atimeline").css({
  			width: "-="+Math.abs(($(".wproject").width()*7+60)-$(".atimeline").width())
  		});
  	}
  	
  	$('.work').isotope('reLayout')
	}
	$(".projects-work .controls").css({right: 62+($(window).width()-($(".atimeline").width()+$(".atimeline").offset().left))-($(window).width() - ($(".pageheader").width()+$(".pageheader").offset().left))});
	$(".projects-chronicle .controls").css({right: 60+($(window).width()-($(".atimeline").width()+$(".atimeline").offset().left))-($(window).width() - ($(".pageheader").width()+$(".pageheader").offset().left))});
	//$(".projects-chronicle .text").css({marginTop: $(window).height()/2-80-137-98});
	$(".projects-journal .controls").css({right: 60+($(window).width()-($(".atimeline").width()+$(".atimeline").offset().left))-($(window).width() - ($(".pageheader").width()+$(".pageheader").offset().left))});
	$(".tcontainer").eq(0).height($(window).height()/2);
	
	$(".areachart").css({
		width: $(".atimeline").width()/2-70,
		height: (($(window).height()/2)-60),
		marginRight: "70px"
	});
	$(".areagraphcontainer").css({
		height: (($(window).height()/2)-100)
	});
	$(".piechart").css({
		width: $(".atimeline").width()/4-35,
		height: (($(window).height()/2)-42),
		marginRight: "70px"
	});
	$(".piechart").eq(-1).css({
		width: $(".atimeline").width()/4-35,
		height: (($(window).height()/2)-42),
		marginRight: "0px"
	});
	$(".piegraphcontainer") .css({
		height: (($(window).height()/2)-130)
  });
	//$(".percentage").css("left", ($(".piechart").width()/2)-($(".percentage").width()/2));
	$(".percentage").css("font-size", $(".percentage").width()/2.8+"px");
	$(".percentage").css("top", (($(".stattitle").height())+($(".piechart").height()/2)-($(".percentage").height()/2))-5);
	
	if($("body").hasClass("projects-show") || $("body").hasClass("projects-prcs") || $("body").hasClass("projects-stats")){
    $(".info").css("left", $(".pcontrol").offset().left+$(".pcontrol").width())
	}
	if($(".companylogo").length > 0){
	 $(".pageheader").css("top", (($(window).height()/2) - ($(".companylogo").height()) - 100));
	} else {
  	$(".pageheader").css("top", (($(window).height()/2) - ($(".logo").height()) - 100));
	}
	
  if($("body").hasClass("projects-chronicle")){
	     $(".keys").css("left", ($(window).width()/2-($(".keys").width()-20)/2));
	     //$(".keys").css("top", ($(window).height()/2-40));
	     var winheight;
        if($(window).height() > $(window).width()){
          winheight = $(window).width();
          $("#graph2009").css("visibility", "hidden");
          $(".date2009").hide();
        } else {
          winheight = $(window).height();
        }
    	$("#graph2009").css({
    		"height": (winheight*.8),
    		"width": (winheight*.8),
    		"border-radius": (winheight*.8),
    		"top": ((-1*winheight*.8)/2 - 2),
    		"left": (($(".graphs").width()/2) - ((winheight*.8)/2) - (($(".timelinepositioning").offset().left-($(window).width()-($(".timelinepositioning").offset().left+$(".timelinepositioning").width())))/2))
    	});
    	$("#graph2010").css({
    		"height": (winheight*.7),
    		"width": (winheight*.7),
    		"border-radius": (winheight*.7),
    		"top": ((-1*winheight*.7)/2 - 2 ),
    		"left": (($(".graphs").width()/2) - ((winheight*.7)/2) - (($(".timelinepositioning").offset().left-($(window).width()-($(".timelinepositioning").offset().left+$(".timelinepositioning").width())))/2))
    	});
    	$("#graph2011").css({
    		"height": (winheight*.6),
    		"width": (winheight*.6),
    		"border-radius": (winheight*.6),
    		"top": (((-1*winheight*.6))/2  - 2),
    		"left": (($(".graphs").width()/2) - ((winheight*.6)/2) - (($(".timelinepositioning").offset().left-($(window).width()-($(".timelinepositioning").offset().left+$(".timelinepositioning").width())))/2))
    	});
    	$("#graph2012").css({
    		"height": (winheight*.5),
    		"width": (winheight*.5),
    		"border-radius": (winheight*.5),
    		"top": (((-1*winheight*.5))/2  - 2),
    		"left": (($(".graphs").width()/2) - ((winheight*.5)/2) - (($(".timelinepositioning").offset().left-($(window).width()-($(".timelinepositioning").offset().left+$(".timelinepositioning").width())))/2))
    	});
    	$("#graph2013").css({
    		"height": (winheight*.4),
    		"width": (winheight*.4),
    		"border-radius": (winheight*.4),
    		"top": (((-1*winheight*.4))/2 - 2),
    		"left": (($(".graphs").width()/2) - ((winheight*.4)/2) - (($(".timelinepositioning").offset().left-($(window).width()-($(".timelinepositioning").offset().left+$(".timelinepositioning").width())))/2))
    	});
	     
	     if($("#graph2013").length > 0){
          $(".date2013").css("left", $("#graph2013").offset().left - $(".atimeline").offset().left+5);
        }
        $(".date2012").css("left", ($("#graph2012").offset().left-$(".atimeline").offset().left)+5);
        $(".date2011").css("left", $("#graph2011").offset().left - $(".atimeline").offset().left+5);
        $(".date2010").css("left", $("#graph2010").offset().left - $(".atimeline").offset().left+5);
        if($("#graph2009").length > 0){
          $(".date2009").css("left", $("#graph2009").offset().left - $(".atimeline").offset().left+5);
        }
        if($("#graph2008").length > 0){
          $(".date2008").css("left", $("#graph2008").offset().left - $(".atimeline").offset().left+5)
        }
  }
  if($(".studiocontents p").length > 0){
	 //$(".studiocontents p").width(($(".atimeline").width()-$(".studionavsec").width()) - ($(window).width() - $(".studionavsec").offset().left - $(".studionavsec").width() -10));
	}
	if($("body").hasClass("projects-people")){
    
    $(".staffwrapper, .astaff").width($(".atimeline").width());
    $(".staffs").width(($(".atimeline").width()+10)*($(".astaff").length));
    $(".astaff").each(function(){
      
      
      $("#bgimg"+$(this).index()).css({
        position: "absolute",
        left: $(window).width(),
        width: $(window).width()
      });
      
      //$(this).addClass("active").closest("li").siblings().find("a").removeClass("active")
  		var index = $(".staffpick.active").parent().index()+1; 
  		$("#bgimg"+(index-1)).animate({left: "0"}, 0);
  		$("#bgimg"+(index-1)).siblings("img").animate({left: $(window).width()}, 0);
  		$(".staffs").animate({left: "-="+($(".astaff").eq(index-1).offset().left-60)}, 0);
      
    });
  }
  if($("body").hasClass("projects-work")){
   $(".mask").css("height", $(window).height()/2);
   $("body.projects-work").unbind("mousewheel");
   wlimit = $(window).height()/2+2;
		woffset = $(".workwrapper").offset().top;
		$("body.projects-work").bind("mousewheel", function(event, delta){
			//this.scrollTop -= (delta * 30);
			if($(".workwrapper").offset().top <= wlimit && ($(".workwrapper").offset().top+$(".workwrapper").height()) > wlimit){
				$(".workwrapper").animate({
					top: "+="+(delta * 30)
				}, 10, function(){
					if($(".workwrapper").offset().top > wlimit){
						$(".workwrapper").css({
							top: "-="+($(".workwrapper").offset().top - wlimit)
						});
					} else if(($(".workwrapper").offset().top+$(".workwrapper").height()) < wlimit){
						$(".workwrapper").css({
							top: "+="+(Math.abs(($(".workwrapper").offset().top+$(".workwrapper").height()-10) - wlimit))
						});
						//alert((($(".workwrapper").offset().top+$(".workwrapper").height()) - wlimit));
					}
				});
			} 
			event.preventDefault();
		});
  }
  if($("body").hasClass("projects-show") || $("body").hasClass("projects-prcs") || $("body").hasClass("projects-stats")){
    $("img").each(function(){
      if($(this).position().left > 0){
        $(this).css("left", $(window).width());
      }
    });
  }
  if($("body").hasClass("projects-people")){
   
    //$(".staffcontents p").width($(".staffnav").offset().left - $(".atimeline").offset().left - 30)
   
  }
  /*
  if($("body").hasClass("projects-ethic") || $("body").hasClass("projects-competencies") || $("body").hasClass("projects-mission")){
    if($(".menunav").offset().left/1.8 < 355){
      if($(".studiocontents p").length > 1){
        $(".studiocontents p").width($(".menunav").offset().left/1.8)
      }
    }
   }
   */
   if($("body").hasClass("projects-lab")){
    if($(".menunav").offset().left/3.3 < 252){
    //$(".labcontents .block").width($(".menunav").offset().left/3.3)
    }
   }
   /*
   if($(window).height() < $(window).width()){
    $(".journal .photo").each(function(){
      $(this).width($(this).find("img").width());
    });
    
    $(".journal .blog").width($(".atimeline").width()/4-37);
    $(".journal").each(function(){$(this).width($(this).find(".photo").width()+30+$(this).find(".blog").width());});
    
  	
  	$(".journal .photo img").height($(window).height()/2-10);
  	$(".morephotos .photo img").height($(window).height()/2-10);
  	var jwidth = 0;
  	$(".journal").each(function(){jwidth = jwidth + $(this).width()});
  	$(".journals").width(jwidth);
  	$(".journals").css({
  		left: -1*($(".journals").width() - $(".atimeline").width()-1)
  	});
  	$(".journal .photo").eq(-1).css("margin-right", "0");
  	$(".journal .blog").eq(-1).css("width", "+=10px");
	} else {
   $(".journal .photo").each(function(){
      $(this).width($(this).find("img").width());
    });
    $(".journal .blog").width($(".atimeline").width()/4-37);
    $(".journal").each(function(){$(this).width($(this).find(".photo").width()+30+$(this).find(".blog").width());});
  	$(".journal .photo img").height($(window).height()/2-10);
  	$(".morephotos .photo img").height($(window).height()/2-10);
  	var jwidth = 0;
  	$(".journal").each(function(){jwidth += $(this).outerWidth()});
  	$(".journals").width(jwidth);
  	$(".journals").css({
  		left: -1*($(".journals").width() - $(".atimeline").width()-1)
  	});
  	$(".journal .photo").eq(-1).css("margin-right", "0");
  	$(".journal .blog").eq(-1).css("width", "+=10px");
	}
	*/
	$(".wprojectthumb").each(function(){
    
    var width = $(this).width();
    var height = $(this).height();
    if(width > height){
      $(this).find("img").width(width); 
    } else {
      $(this).find("img").height(height); 
    }
    
    
   });
}