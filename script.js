document.addEventListener('DOMContentLoaded', function() {

    const aboutBtn = document.getElementById("aboutBtn");
    const skillsBtn = document.getElementById("skillsBtn");
    const projectsBtn = document.getElementById("projectsBtn");
    const aboutSection = document.getElementById("About");
    const skillsSection = document.getElementById("Skills");
    const projectsSection = document.getElementById("Projects");

    function scrollToSection(section) {
        section.scrollIntoView({behavior: "smooth", block: "center"});
    }

    aboutBtn.addEventListener("click", function() {
        scrollToSection(aboutSection);
    });

    skillsBtn.addEventListener("click", function() {
        scrollToSection(skillsSection);
    });

    projectsBtn.addEventListener("click", function() {
        scrollToSection(projectsSection);
    });

});

