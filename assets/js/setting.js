if($(window).width()>480){
    // Dekstop Slider
    $(".slider1").attr("src","assets/images/dekstop1.jpg")
    $(".slider2").attr("src","assets/images/dekstop2.jpg")
}else{
    // Mobile Slider
    $(".slider1").attr("src","assets/images/mobile1.jpg")
    $(".slider2").attr("src","assets/images/mobile2.jpg")
}
$(window).on('resize', function(){
    var win = $(this);
    
    if (win.width() >= 480) {
        console.log("deskstop")
         // Dekstop Slider
        $(".slider1").attr("src","assets/images/dekstop1.jpg")
        $(".slider2").attr("src","assets/images/dekstop2.jpg")
    }else if((win.width() < 480)){
        console.log("mobile")
        // Mobile Slider
        $(".slider1").attr("src","assets/images/mobile1.jpg")
        $(".slider2").attr("src","assets/images/mobile2.jpg")   
    }
});