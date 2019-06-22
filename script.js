const header = document.querySelector('header');
const sectionOne = document.querySelector('.home-intro');

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const sectionOneOptions = {
    rootMargin: '-150px 0px 0px 0px'
};

const sectionOneObs = new IntersectionObserver(function(entries, sectionOneOptions) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add('nav-scrolled');
        }
        else {
            header.classList.remove('nav-scrolled');
        }
    });
}, sectionOneOptions);

sectionOneObs.observe(sectionOne);

const appearOptions = {
    // threshold: 1,    //  with threshold 1 sliders wont work as the entire section 
                        //  has to be inside viewport and that cannot be with translaeX
    threshold: 0,
    rootMargin: '0px 0px -250px 0px'
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        // to stop applying the effect on all elements even when they are not seen
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target)
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});