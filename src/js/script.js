const scrollTop = document.querySelector('#scrollTop');

const topScroll = () => {
    if (window.scrollY > 450) {
        scrollTop.style.display = "block";
        scrollTop.classList.replace("animate__fadeOutDown", "animate__fadeInUp")
    } else {
        scrollTop.classList.replace("animate__fadeInUp", "animate__fadeOutDown")
    }
}

const scrollToTop = () => {
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', topScroll);
scrollTop.addEventListener("click", scrollToTop);