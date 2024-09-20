window.onload = function() {
    console.log('Page loaded - JavaScript is running');

    const images = document.querySelectorAll('.content-div img');

    images.forEach((img, index) => {
        img.addEventListener('mouseover', function() {
            console.log('Hovered over image ' + (index + 1));
            this.style.opacity = '0.8';
        });

        img.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });

        img.addEventListener('focus', function() {
            this.style.border = '2px solid blue';
        });

        img.addEventListener('blur', function() {
            this.style.border = '2px solid #bbb';
        });
    });
};
