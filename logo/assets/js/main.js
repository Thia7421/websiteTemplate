jQuery(document).ready(function ($) {
    $("div.play-btn").hover(function (event) {
        $("div.service-hover-text").toggle();
        $("div.service-hover-text").css(
            {
                color: "white",
                background: "rgba(217, 14, 14, 0.85)",
                left: "0px",
                top: "0px",
            }
        );
    });
});