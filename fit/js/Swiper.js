document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach(slider => {
        let images = slider.querySelectorAll(".slider-img");
        let index = 0;

        if (images.length === 0) return;

        images[index].classList.add("active");
        
        setInterval(() => {
          let current =
images[index];
            index = (index + 1) % images.length;
            let next = images[index];
            current.classList.remove("active");
            next.classList.add("active");
            

        }, 3000);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const filterBtn = document.querySelector(".filter-btn");
    const filterMenu = document.querySelector(".filter-menu");

    filterBtn.addEventListener("click", function() {
        filterMenu.classList.toggle("active");
    });

    // Закрытие меню при клике вне его
    document.addEventListener("click", function(event) {
        if (!filterBtn.contains(event.target) && !filterMenu.contains(event.target)) {
            filterMenu.classList.remove("active");
        }
    });
});

