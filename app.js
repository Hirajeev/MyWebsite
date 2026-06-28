$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "TPgM/PM", "Business Analyst", "UI/UX Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "TPgM/PM", "Business Analyst", "UI/UX Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // contact form submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        const statusBox = contactForm.querySelector(".form-status");
        const submitButton = contactForm.querySelector("button[type='submit']");

        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const originalText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";

            if (statusBox) {
                statusBox.textContent = "Sending your message...";
                statusBox.className = "form-status";
            }

            const formData = new FormData(contactForm);
            formData.set("_subject", "New message from your portfolio website");
            formData.set("_captcha", "false");

            try {
                const response = await fetch("https://formsubmit.co/ajax/rajeevkumarsingh582@gmail.com", {
                    method: "POST",
                    body: formData
                });

                if (!response.ok) {
                    throw new Error("Message could not be sent.");
                }

                contactForm.reset();
                if (statusBox) {
                    statusBox.textContent = "Your message was sent successfully. Thank you!";
                    statusBox.classList.add("success");
                }
            } catch (error) {
                if (statusBox) {
                    statusBox.textContent = "Sorry, your message could not be sent right now. Please email me directly at rajeevkumarsingh582@gmail.com.";
                    statusBox.classList.add("error");
                }
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }
        });
    }
});