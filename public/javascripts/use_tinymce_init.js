function getStats(id) {
      var body = tinymce.get(id).getBody(), text = tinymce.trim(body.innerText || body.textContent);
  
      return {
          chars: text.length,
          words: text.split(/[\w\u2019\'-]+/).length
      };
  }
$().ready(function() {
	$("textarea").tinymce({
		// Location of TinyMCE script
		script_url : '/javascripts/tinymce/jscripts/tiny_mce/tiny_mce.js',

		// General options
		theme : "advanced",
		plugins : "autolink,lists,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,advlist",

		// Theme options
		theme_advanced_buttons1 : "bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,styleselect,formatselect,fontselect,fontsizeselect",
		theme_advanced_buttons2 : "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",
		theme_advanced_toolbar_location : "top",
		theme_advanced_toolbar_align : "left",
		theme_advanced_statusbar_location : "bottom",
		theme_advanced_resizing : true,

		// Example content CSS (should be your site CSS)
		content_css : "css/content.css",

		// Drop lists for link/image/media/template dialogs
		template_external_list_url : "lists/template_list.js",
		external_link_list_url : "lists/link_list.js",
		external_image_list_url : "lists/image_list.js",
		media_external_list_url : "lists/media_list.js",
    

		setup: function(ed){
		  ed.onKeyDown.add(function(ed, e){
		    var chars = getStats(ed.id).chars;
        var wordlimit = 725;
        var wordcount = wordlimit-chars;
        $("#word-count-"+ed.id).html(wordcount);
        if(wordcount <= 0 && e.keyCode != 8) {
           return tinymce.dom.Event.cancel(e);
        }
		  });
		}
    

	});
});
