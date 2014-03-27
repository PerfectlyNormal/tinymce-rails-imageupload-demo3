// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require tinymce-jquery
//= require_self

$("document:ready", function() {
  $("[rel=tinymce]").tinymce({
    theme: "modern",
    toolbar: "bold,italic,underline,|,bullist,numlist,outdent,indent,|,undo,redo,|,pastetext,pasteword,selectall,|,uploadimage",
    pagebreak_separator: "<p class='page-separator'>&nbsp;</p>",
    plugins: ["uploadimage"],
    relative_urls: false,
    remove_script_host: false,
    document_base_url: (!window.location.origin ? window.location.protocol + "//" + window.location.host : window.location.origin) + "/",
  })
});