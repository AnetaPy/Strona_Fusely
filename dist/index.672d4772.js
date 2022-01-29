const $openClose = $(".openMenu, .closeMenu");
const $menuWide = $(".navbar nav ul li a.features, .navbar nav ul li a.pricing, .navbar nav ul li a.blog, .navbar nav ul li a.contact");
const $up = $(".navbar nav ul li a.home, .navbar .logo img");
const $navigation = $(".navigation");
// Navigation
$menuWide.on("click", function() {
    const goToSection = "[data-section=" + $(this).attr("class") + "]";
    $("body, html").animate({
        scrollTop: Math.round($(goToSection).offset().top - 120)
    }, 2500);
});
$up.on("click", function() {
    $("body, html").animate({
        scrollTop: "0px"
    }, 2500);
});
// Menu burger
$openClose.on("click", function() {
    $openClose.toggleClass("hide");
    $navigation.toggleClass("show");
});

//# sourceMappingURL=index.672d4772.js.map
