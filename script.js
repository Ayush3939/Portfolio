document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-level');
    const skillsSection = document.getElementById('skills');

    const animateSkills = () => {
        // Check if skillsSection exists to prevent errors if element is not found
        if (!skillsSection) return;

        const sectionPos = skillsSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        // Trigger animation when the top of the skills section is within 75% of the viewport height
        if (sectionPos < screenHeight * 0.75) {
            skillBars.forEach(bar => {
                const percentage = bar.dataset.percentage; // Get percentage from data-percentage attribute
                bar.style.width = percentage + '%';
            });
            window.removeEventListener('scroll', animateSkills); // Run animation once
        }
    };

    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Call on load in case section is visible immediately
});