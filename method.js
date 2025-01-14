 
    const images = [
        "methods/1.webp",
        "methods/2.webp",
        "methods/3.webp",
        "methods/4.webp",
        "methods/5.webp",
        "methods/6.webp",
        "methods/7.webp",
        "methods/8.webp",
        "methods/9.webp"
    ];
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
