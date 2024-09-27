$(function () {
    // const swiper = new Swiper('.myswiper', {
    //     parallax: true,
    //     pagination: {
    //         el: '.swiper-pagination',
    //     },

    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     autoplay: {
    //         delay: 2000, // Set the delay between slides in milliseconds
    //         disableOnInteraction: false, // Allow autoplay to continue even when user interacts with the slider
    //     },
    //     speed: 2000,
    //     loop: true,
    //     loopAdditionalSlides: 1,
    //     slidesPerView: 1, // Set slidesPerView to 1
    //     spaceBetween: 0,
    //     effect: 'fade', // Set the effect to 'fade'
    //     fadeEffect: {
    //         crossFade: true, // Enable cross-fade effect
    //     },
    // });
    // var swiperContainer = document.querySelector('.myswiper');

    // swiperContainer.addEventListener('mouseenter', function () {
    //     swiper.autoplay.stop();
    // });

    // swiperContainer.addEventListener('mouseleave', function () {
    //     swiper.autoplay.start();
    // });
    // projectswiper

    /* ===========================
             wow 
       =========================== */
    function wowActivator() {
        wow = new WOW({
            offset: 0
        });
        wow.init();
    }
    wowActivator();
    $('.show-search').click(function () {
        $('.control-search').toggle(500);

    });
    $('.my-special-link').click(function () {
        $('.special-dropdown ').toggle(500)
    })
    // $("#open-menu").click(function () {
    //     var isExpanded = $(this).attr('aria-expanded');
    //     $(this).find('.fa-bars, .fa-bars').toggleClass('all');
    //     if (isExpanded === 'false') {
    //         $(this)
    //             .find('[data-fa-i2svg]')
    //             .toggleClass('fa-xmark')
    //             .toggleClass('fa-bars');
    //         $('body').css('position', 'static');
    //     } else {
    //         $(this)
    //             .find('[data-fa-i2svg]')
    //             .toggleClass('fa-bars')
    //             .toggleClass('fa-xmark');
    //         $('body').css({
    //             'position': 'fixed',
    //             'width': '100%',
    //             'height': '100%'
    //         });
    //     }
    // })
    // Get the dropdown items
    const dropdownItems = document.querySelectorAll('.language-drop .dropdown-menu .dropdown-item');

    // Add click event listener to each dropdown item
    dropdownItems.forEach(item => {
        item.addEventListener('click', function () {
            // Get the selected item's text
            const selectedItemText = this.textContent.trim();

            // Update the dropdown toggle text
            const dropdownToggle = document.querySelector('.language-drop .dropdown-toggle span');
            dropdownToggle.textContent = selectedItemText;
        });
    });
    const navLinks = document.querySelectorAll('nav a');

    // Function to handle link click
    function handleLinkClick(e) {
        // Remove active class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to clicked link
        e.target.classList.add('active');
    }

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    // Optional: Set initial active link based on current URL
    const currentURL = window.location.href;
    navLinks.forEach(link => {
        if (link.href === currentURL) {
            link.classList.add('active');
        }
    });
})
document.getElementById('open-menu').addEventListener('click', function () {
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
    } else {
        this.classList.add('is-active');
    }
});
window.addEventListener("scroll", function () {
    const navbar = document.querySelectorAll("#nav");

    for (let i = 0; i < navbar.length; i++) {
        if (window.scrollY > 50) {
            navbar[i].classList.add("nave");
        } else {
            navbar[i].classList.remove("nave");
        }
    }
    const lin = document.querySelectorAll(".abo .nav-item a.nav-link");
    for (let n = 0; n < lin.length; n++) {
        if (window.scrollY > 50) {
            lin[n].classList.add("bac");
        } else {
            lin[n].classList.remove("bac");
        }
    }
    const but = document.querySelectorAll(".abo .btn-nav");
    for (let n = 0; n < but.length; n++) {
        if (window.scrollY > 50) {
            but[n].classList.add("meg");
        } else {
            but[n].classList.remove("meg");
        }
    }
    const ico = document.querySelectorAll(".abo .btn-nav svg");
    for (let n = 0; n < ico.length; n++) {
        if (window.scrollY > 50) {
            ico[n].classList.add("rang");
        } else {
            ico[n].classList.remove("rang");
        }
    }
});