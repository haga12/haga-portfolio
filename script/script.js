$(document).ready(function(){

    $(".sub_gnb_nav_inner>ul>li").hover(function(){
        $(this).find(".gnb_sub_wrap").stop().slideDown();
    },function(){
        $(this).find(".gnb_sub_wrap").stop().slideUp();
    });


    // gnb fadein fadeout
    $(".tablet_gnb_sep ul li.tablet_gnb04").click(function(){
        $(".mob_gnb_wrap, .mob_gnb_dimm").fadeIn();
    });
    $(".btn_gnb_close").click(function(){
        $(".mob_gnb_wrap, .mob_gnb_dimm").fadeOut();
    });

    // gnb li slidedown
    $(".mob_gnb_menus ul").click(function(){
        //$(this).find(".mob_gnb_menus ul li").slideToggle();
        $(this).children().toggleClass("open");
    });

    $(".mob_gnb_menus ul").click(function(){
        //$(this).find(".mob_gnb_menus ul li").slideToggle();
        $(this).find(".mob_gnb_menus ul li ul li").toggleClass();
    });

    // footer updown
    $(".footer_menus ul").click(function(){
        $(this).children().toggleClass("open");
    });

    // 화살표 rotate
    $(".mob_gnb_menus ul:nth-child(1)").click(function(){
        $(".mob_gnb_menus ul li.mob_gnb_ttl1 a span").toggleClass("mob_gnb_arrow_down");
        $(".mob_gnb_menus ul li.mob_gnb_ttl1 a span").toggleClass("mob_gnb_arrow_up");
    });
    $(".mob_gnb_menus ul:nth-child(2)").click(function(){
        $(".mob_gnb_menus ul:nth-child(2) li.mob_gnb_ttl2 a span").toggleClass("mob_gnb_arrow_up");
        $(".mob_gnb_menus ul:nth-child(2) li.mob_gnb_ttl2 a span").toggleClass("mob_gnb_arrow_down");
    });
    $(".mob_gnb_menus ul:nth-child(3)").click(function(){
        $(".mob_gnb_menus ul:nth-child(3) li.mob_gnb_ttl2 a span").toggleClass("mob_gnb_arrow_up");
        $(".mob_gnb_menus ul:nth-child(3) li.mob_gnb_ttl2 a span").toggleClass("mob_gnb_arrow_down");
    });
    $(".mob_gnb_menus ul:nth-child(4)").click(function(){
        $(".mob_gnb_menus ul:nth-child(4) li.mob_gnb_ttl2 a span").toggleClass("mob_gnb_arrow_up");
        $(".mob_gnb_menus ul:nth-child(4) li.mob_gnb_ttl2 a span").toggleClass("mob_gnb_arrow_down");
    });
    $(".mob_gnb_menus ul:nth-child(5)").click(function(){
        $(".mob_gnb_menus ul:nth-child(5) li.mob_gnb_ttl2 a span").toggleClass("mob_gnb_arrow_up");
        $(".mob_gnb_menus ul:nth-child(5) li.mob_gnb_ttl2 a span").toggleClass("mob_gnb_arrow_down");
    });
    $(".mob_gnb_menus ul:nth-child(6)").click(function(){
        $(".mob_gnb_menus ul:nth-child(6) li.mob_gnb_ttl2 a span").toggleClass("mob_gnb_arrow_up");
        $(".mob_gnb_menus ul:nth-child(6) li.mob_gnb_ttl2 a span").toggleClass("mob_gnb_arrow_down");
    });
    $(".mob_gnb_menus ul:nth-child(7)").click(function(){
        $(".mob_gnb_menus ul:nth-child(7) li.mob_gnb_ttl2 a span").toggleClass("mob_gnb_arrow_up");
        $(".mob_gnb_menus ul:nth-child(7) li.mob_gnb_ttl2 a span").toggleClass("mob_gnb_arrow_down");
    });


    //line_notice slide
    $(".line_notice_inner_l dd li").eq().siblings().css("bottom","24px");
    var slideI =0;

    setInterval(function(){
        if(slideI<4){
            slideI++;
        }else{
            slideI=0;
        }

        $(".line_notice_inner_l dd li").eq(slideI).siblings().animate({"bottom":"24px"},500);
        $(".line_notice_inner_l dd li").eq(slideI).animate({"bottom":"0"},500);

    },3000);





});

$(window).scroll(function(){
    var offset = $(".reserve_wrap").offset().top;
    var height = window.innerHeight;

    var scrollPos = $(this).scrollTop();
    //console.log(offset, height, scrollPos);
    if(scrollPos >= offset - height) {
        $(".reserve_wrap").css("opacity","1");
    }
});









