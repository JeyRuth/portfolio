function slideToLeft() {
    var contentSection = document.getElementById('content');
    var projetsSection = document.getElementById('projets-section');

    contentSection.style.transform = 'translateX(-100%)';
    contentSection.style.opacity = 0;

    // Simule un délai avant d'afficher la section suivante (2 secondes dans cet exemple)
    setTimeout(function() {
        contentSection.style.display = 'none';
        projetsSection.style.display = 'block';
        projetsSection.style.opacity = 1;
    }, 2000);
}
