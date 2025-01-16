//FAQ

function toggleFAQ(button) {
    const faq = button.parentElement;
    faq.classList.toggle("active");
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Gallery

const images = [
    "img/cerv.webp",
    "img/covid-vax.png",
    "img/covid19.webp",
    "img/dengue.jpg",
    "img/dental-fluro-2024.webp",
    "img/drug.webp",
    "img/dysmonorrhea.webp",
    "img/fam-plan.webp",
    "img/firecracker.webp",
    "img/first-aid.webp",
    "img/hfmd.webp",
    "img/hiv.webp",
    "img/hiv2.webp",
    "img/hypertension.png",
    "img/kidner.webp",
    "img/leptos.jpg",
    "img/leukemia.webp",
    "img/pneum.webp",
    "img/smog.webp",
    "img/smoke.png"
];

// NAV

let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    document.getElementById("modalImg").src = images[currentIndex];
    document.getElementById("myModal").style.display = "block";
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    document.getElementById("modalImg").src = images[currentIndex];
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
