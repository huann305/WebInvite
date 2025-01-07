document.addEventListener("DOMContentLoaded", () => {
    // Chọn tất cả các phần tử có thể xuất hiện trong khung nhìn
    const elements = document.querySelectorAll("header, section, footer, div, img, h1, h2, h3, p, button");

    // Thêm lớp fade-in cho các phần tử
    elements.forEach(element => {
        const random = Math.floor(Math.random() * 2) + 1; // Random từ 1 đến 3
        if(random === 1) element.classList.add("fade-in-left");
        if(random === 2) element.classList.add("fade-in-right");
    });

    // Sử dụng IntersectionObserver để quan sát
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active"); // Thêm lớp active khi phần tử vào khung nhìn
                observer.unobserve(entry.target); // Ngừng quan sát phần tử
            }
        });
    }, {
        threshold: 0.1 // Kích hoạt khi 10% phần tử xuất hiện
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});
