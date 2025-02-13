document.addEventListener("DOMContentLoaded", () => {
    // Change main image when clicking thumbnails
    const thumbnails = document.querySelectorAll(".thumbnail");
    const mainImage = document.getElementById("main-img");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            mainImage.src = this.src;
            thumbnails.forEach(thumb => thumb.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Quantity selection logic
    let quantity = 1;
    const quantityValue = document.getElementById("quantity-value");
    document.getElementById("increase").addEventListener("click", () => {
        quantity++;
        quantityValue.innerText = quantity;
    });

    document.getElementById("decrease").addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            quantityValue.innerText = quantity;
        }
    });
});

let quantity = 1;

function increaseQuantity() {
    quantity++;
    document.getElementById("quantity").innerText = quantity;
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        document.getElementById("quantity").innerText = quantity;
    }
}

function addToCart() {
    let toast = document.createElement("div");
    toast.className = "toast show";
    toast.innerText = `🛒 ${quantity} item(s) added to cart!`;
    
    document.getElementById("toast-container").appendChild(toast);

    setTimeout(() => {
        toast.classList.remove("show");
        toast.remove();
    }, 3000);
}