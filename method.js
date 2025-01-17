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
    
    document.querySelectorAll('.read-more-btn').forEach(btn => { btn.addEventListener('click', () => { const cardText = btn.previousElementSibling.querySelector('.read-more-text'); cardText.style.display = 'inline'; btn.style.display = 'none'; }); });

// GALLERY 

    const images = [
        "methods/1.webp",
        "methods/2.webp",
        "methods/3.webp",
        "methods/4.webp",
        "methods/5.webp",
        "methods/6.webp",
        "methods/7.webp",
        "methods/8.webp",
        "methods/9.webp",
        // "methods/10.webp",
        "methods/11.webp",
        "methods/12.webp",
        // "methods/13.webp",
        "methods/14.jpg",
        "methods/15.png",

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

