document.addEventListener("scroll", function() {
    var nav = document.querySelector('.navbar');
    if (window.scrollY > 710) {
        nav.classList.add('scroll')
    }
    else {
        nav.classList.remove('scroll')
    }
});











































































// document.addEventListener("scroll" , function(){
    //     const animation = document.getElementsByClassName('strong')
    //     if (window.scrollY > 3000) {
        //         animation.classList.add("animationscore")
        //     }
        //     else {
            //         animation.classList.remove("animationscore")
            //     }
            // })
            // document.addEventListener ('scroll' , function () {
            //     var animation = document.querySelector('.strong')
            //     var animation2 = document.querySelector('.strong2')
            //     var animation3 = document.querySelector('.strong3')
            //     var animation4 = document.querySelector('.strong4')
            //     if (window.scrollY > 3100 || window.scrollY < 3700) {
            //         animation.classList.add("animationscore")
            //         animation2.classList.add("animationscore")
            //         animation3.classList.add("animationscore")
            //         animation4.classList.add("animationscore")
            //     }
            //     else {
            //         animation.classList.remove("animationscore")
            //         animation2.classList.remove("animationscore")
            //         animation3.classList.remove("animationscore")
            //         animation4.classList.remove("animationscore")
            //     }
            // })