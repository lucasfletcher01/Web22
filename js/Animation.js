$(window).scroll(function() {
$('.TeamMembers').each(function() {
var aniPos = $(this).offset().top;
var aniHeight = $(this).height();
var topOfpage = $(window).scrollTop();

if (aniPos < topOfpage + aniHeight && aniPos + aniHeight > topOfpage) {
$(this).addClass("TeamAnimation");
} else {
$(this).removeClass("TeamAnimation");
}
});
});
