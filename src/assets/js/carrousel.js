    setInterval(() => {
        const slider = document.querySelector(".carrousel-images");
        let sliderSectionFirst = document.querySelectorAll(".img")[0];
        slider.style.marginLeft = "-200%";
        slider.style.transition = "all 2s";
        setTimeout(function () {
            slider.style.transition = "none";
            slider.insertAdjacentElement('beforeend', sliderSectionFirst);
            slider.style.marginLeft = "-100%";
        }, 2000);
    }, 5000);
    function rigthCarrousel(){
        var slider = document.querySelector(".carrousel-images");
        var sliderSection = document.querySelectorAll(".img");
        var sliderSectionLast = sliderSection[sliderSection.length - 1];
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
       
        var sliderSectionFirst = document.querySelectorAll(".img")[0];
        slider.style.marginLeft = "-200%";
        slider.style.transition = "all 2s";
        setTimeout(function () {
            slider.style.transition = "none";
            slider.insertAdjacentElement('beforeend', sliderSectionFirst);
            slider.style.marginLeft = "-100%";
        }, 2000);
    }
 
    function leftCarrousel(){
        var slider = document.querySelector(".carrousel-images");
        var sliderSection = document.querySelectorAll(".img");
        var sliderSectionLast = sliderSection[sliderSection.length - 1];
        
        slider.style.marginLeft = "0";
        slider.style.transition = "all 2s";
        setTimeout(function () {
            slider.style.transition = "none";
            slider.insertAdjacentElement('afterbegin', sliderSectionLast);
            slider.style.marginLeft = "-100%";
        }, 2000);
    }
    