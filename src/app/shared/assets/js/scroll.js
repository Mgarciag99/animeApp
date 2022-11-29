window.onscroll = function (e) { 

    navBarr = document.getElementById('nav');
    scrollDown = window.scrollY;
   
    if(scrollDown > 0){
        navBarr.classList.add('sroll-nav');
    }else{
        navBarr.classList.remove('sroll-nav');
    }
   
} 