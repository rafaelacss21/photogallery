//$("#showMoreBtn").on("click", function(){
//	$("#showMore").slideToggle();
//});


$("#showMoreBtn").click(function() {
     var btnTxt = $("#showMore").is(':visible') ? 'Show more' : 'Show less';
     $("#showMoreBtn").text(btnTxt);
     $("#showMore").slideToggle();
});
