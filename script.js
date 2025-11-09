document.addEventListener('DOMContentLoaded', () => {
    // Animate the hero text and button on load
    gsap.from('#hero-title', {duration: 1, y: -50, opacity: 0, ease: 'power2.out'});
    gsap.from('#hero-subtitle', {duration: 1, y: -20, opacity: 0, delay: 0.3});
    gsap.from('#hero-desc', {duration: 1, y: -20, opacity: 0, delay: 0.6});
    gsap.from('#hero .btn', {duration: 1, y: 20, opacity: 0, delay: 0.8});

    // Scroll-trigger animations for section headings and cards
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section.querySelector('h2'), {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
            },
            y: 40,
            opacity: 0,
            duration: 1
        });
        gsap.from(section.querySelectorAll('.feature-card, .blog-post'), {
            scrollTrigger: {
                trigger: section,
                start: 'top 75%',
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        });
    });
});
