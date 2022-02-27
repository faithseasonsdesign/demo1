function styling(){

    let window_width = window.outerWidth;
    let window_height = window.outerHeight;

    if(window_height <= 568){
        let welcome_caption = document.getElementsByClassName("welcome-caption");
        welcome_caption[0].style.paddingTop = "40px";
    }
   
}

styling();