const products = [
    {
      "product_id": 1,
      "name": "4K Ultra HD LED Smart TV (55 inch)",
      "category_id": 1,
      "description": "Experience vibrant colors and stunning clarity with this 55-inch Smart TV. Features include built-in streaming apps and voice control.",
      "price": 599.99,
      "discount": 10,
      "stock": 25,
      "rating": 4.8,
      "brand": "TechNova",
      "images": [
        "https://picsum.photos/400/400?random=1"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 2,
      "name": "Wireless Noise-Cancelling Headphones",
      "category_id": 1,
      "description": "Premium sound quality with industry-leading active noise cancellation. Enjoy up to 30 hours of playtime on a single charge.",
      "price": 199.50,
      "discount": 5,
      "stock": 60,
      "rating": 4.5,
      "brand": "AudioMax",
      "images": [
        "https://picsum.photos/400/400?random=2"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 3,
      "name": "Portable Bluetooth Speaker (Waterproof)",
      "category_id": 1,
      "description": "Take your music anywhere with this rugged, waterproof speaker. Delivers powerful sound and deep bass for up to 12 hours.",
      "price": 75.00,
      "discount": 10,
      "stock": 70,
      "rating": 4.1,
      "brand": "TechNova",
      "images": [
        "https://picsum.photos/400/400?random=3"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 4,
      "name": "High-Speed 1TB External SSD",
      "category_id": 1,
      "description": "Transfer large files in seconds. Durable, shock-resistant design, perfect for professionals and gamers on the go.",
      "price": 120.00,
      "discount": 15,
      "stock": 80,
      "rating": 4.6,
      "brand": "StoragePro",
      "images": [
        "https://picsum.photos/400/400?random=4"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 5,
      "name": "Ergonomic Wireless Mouse",
      "category_id": 1,
      "description": "Designed for comfort and precision. Features customizable buttons and a long-lasting battery life for all-day use.",
      "price": 30.00,
      "discount": 20,
      "stock": 90,
      "rating": 4.7,
      "brand": "TechNova",
      "images": [
        "https://picsum.photos/400/400?random=5"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 6,
      "name": "Smart Watch with Heart Rate Monitor",
      "category_id": 1,
      "description": "Track your fitness, sleep, and notifications. Water-resistant design with a bright, always-on display.",
      "price": 149.99,
      "discount": 0,
      "stock": 100,
      "rating": 4.3,
      "brand": "FitTech",
      "images": [
        "https://picsum.photos/400/400?random=6"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 7,
      "name": "LED Ring Light with Tripod Stand",
      "category_id": 1,
      "description": "Professional lighting solution for vlogging, video calls, and photography. Adjustable brightness and color temperature.",
      "price": 40.00,
      "discount": 5,
      "stock": 110,
      "rating": 3.8,
      "brand": "TechNova",
      "images": [
        "https://picsum.photos/400/400?random=7"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 8,
      "name": "Mesh Wi-Fi System (3-Pack)",
      "category_id": 1,
      "description": "Eliminate dead zones and enjoy seamless Wi-Fi coverage across your entire home. Easy setup and parental controls.",
      "price": 189.00,
      "discount": 10,
      "stock": 120,
      "rating": 4.1,
      "brand": "NetStream",
      "images": [
        "https://picsum.photos/400/400?random=8"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 9,
      "name": "Universal Power Bank (20000mAh)",
      "category_id": 1,
      "description": "High-capacity portable charger for phones and tablets. Features dual-USB output and fast charging technology.",
      "price": 50.00,
      "discount": 15,
      "stock": 130,
      "rating": 4.4,
      "brand": "TechNova",
      "images": [
        "https://picsum.photos/400/400?random=9"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 10,
      "name": "Mechanical Gaming Keyboard (RGB)",
      "category_id": 1,
      "description": "Responsive mechanical keys with customizable RGB backlighting. Built with durable aluminum construction for intense gaming.",
      "price": 99.99,
      "discount": 20,
      "stock": 140,
      "rating": 4.7,
      "brand": "GameForce",
      "images": [
        "https://picsum.photos/400/400?random=10"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 11,
      "name": "Men's Slim Fit Cotton Oxford Shirt",
      "category_id": 2,
      "description": "A classic slim-fit shirt made from 100% breathable Oxford cotton. Perfect for both casual and semi-formal occasions.",
      "price": 39.99,
      "discount": 0,
      "stock": 150,
      "rating": 4.2,
      "brand": "UrbanWear",
      "images": [
        "https://picsum.photos/400/400?random=11"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 12,
      "name": "High-Waist Distressed Denim Jeans",
      "category_id": 2,
      "description": "Comfortable and stylish high-waist denim jeans with a modern distressed finish. Features a straight-leg cut.",
      "price": 59.99,
      "discount": 5,
      "stock": 85,
      "rating": 4.6,
      "brand": "UrbanWear",
      "images": [
        "https://picsum.photos/400/400?random=12"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 13,
      "name": "Women's Floral Print Midi Dress",
      "category_id": 2,
      "description": "A light and airy midi dress with a beautiful floral print, perfect for summer. Features a V-neckline and tie waist.",
      "price": 45.00,
      "discount": 10,
      "stock": 70,
      "rating": 4.1,
      "brand": "ChicStyle",
      "images": [
        "https://picsum.photos/400/400?random=13"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 14,
      "name": "Classic Leather Biker Jacket",
      "category_id": 2,
      "description": "A timeless genuine leather jacket with a quilted lining and asymmetrical zipper. Adds an edge to any outfit.",
      "price": 199.00,
      "discount": 15,
      "stock": 40,
      "rating": 4.9,
      "brand": "UrbanWear",
      "images": [
        "https://picsum.photos/400/400?random=14"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 15,
      "name": "Unisex Basic White Sneakers",
      "category_id": 2,
      "description": "Everyday comfortable and stylish sneakers with a durable rubber sole. The perfect staple for casual wear.",
      "price": 65.50,
      "discount": 20,
      "stock": 90,
      "rating": 4.7,
      "brand": "SoleMate",
      "images": [
        "https://picsum.photos/400/400?random=15"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 16,
      "name": "Cashmere Blend Scarf",
      "category_id": 2,
      "description": "Luxuriously soft scarf made from a fine cashmere and wool blend. Provides warmth and elegance during colder months.",
      "price": 55.00,
      "discount": 0,
      "stock": 100,
      "rating": 4.5,
      "brand": "UrbanWear",
      "images": [
        "https://picsum.photos/400/400?random=16"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 17,
      "name": "Black Aviator Sunglasses (Polarized)",
      "category_id": 2,
      "description": "Classic aviator style with polarized lenses to reduce glare. Lightweight metal frame for maximum comfort.",
      "price": 29.99,
      "discount": 5,
      "stock": 110,
      "rating": 4.3,
      "brand": "SunShade",
      "images": [
        "https://picsum.photos/400/400?random=17"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 18,
      "name": "Stretch Cotton T-Shirt (V-Neck)",
      "category_id": 2,
      "description": "Essential V-neck t-shirt in a soft, stretchy cotton blend. Ideal for layering or wearing on its own.",
      "price": 18.50,
      "discount": 10,
      "stock": 120,
      "rating": 4.1,
      "brand": "UrbanWear",
      "images": [
        "https://picsum.photos/400/400?random=18"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 19,
      "name": "Designer Crossbody Bag",
      "category_id": 2,
      "description": "Compact and stylish crossbody bag with a magnetic closure and adjustable strap. Made from premium vegan leather.",
      "price": 75.00,
      "discount": 15,
      "stock": 130,
      "rating": 4.4,
      "brand": "ChicStyle",
      "images": [
        "https://picsum.photos/400/400?random=19"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 20,
      "name": "Wool Blend Tailored Trousers",
      "category_id": 2,
      "description": "Smart, tailored trousers in a comfortable wool blend. Features a slim, modern fit and sharp crease line.",
      "price": 85.00,
      "discount": 20,
      "stock": 140,
      "rating": 4.7,
      "brand": "UrbanWear",
      "images": [
        "https://picsum.photos/400/400?random=20"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 21,
      "name": "Stainless Steel Cookware Set (10-Piece)",
      "category_id": 3,
      "description": "Professional-grade stainless steel set with an aluminum core for even heating. Includes pots, pans, and lids.",
      "price": 199.00,
      "discount": 0,
      "stock": 50,
      "rating": 4.7,
      "brand": "HomeLux",
      "images": [
        "https://picsum.photos/400/400?random=21"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 22,
      "name": "High-Power Immersion Blender",
      "category_id": 3,
      "description": "Blend soups, smoothies, and sauces right in the pot. Includes whisk and chopper attachments.",
      "price": 45.00,
      "discount": 5,
      "stock": 60,
      "rating": 3.8,
      "brand": "KitchenPro",
      "images": [
        "https://picsum.photos/400/400?random=22"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 23,
      "name": "Soft Microfiber Sheet Set (Queen)",
      "category_id": 3,
      "description": "Luxuriously soft and wrinkle-resistant microfiber sheets. Provides a comfortable night's sleep.",
      "price": 35.00,
      "discount": 10,
      "stock": 70,
      "rating": 4.1,
      "brand": "DreamWeave",
      "images": [
        "https://picsum.photos/400/400?random=23"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 24,
      "name": "Cordless Handheld Vacuum Cleaner",
      "category_id": 3,
      "description": "Lightweight and powerful vacuum for quick cleanups. Ideal for pet hair and small messes.",
      "price": 79.99,
      "discount": 15,
      "stock": 80,
      "rating": 4.4,
      "brand": "CleanSweep",
      "images": [
        "https://picsum.photos/400/400?random=24"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 25,
      "name": "Bamboo Cutting Board Set",
      "category_id": 3,
      "description": "Durable and eco-friendly bamboo cutting boards. Set of three sizes with a juice groove.",
      "price": 25.00,
      "discount": 20,
      "stock": 90,
      "rating": 4.7,
      "brand": "HomeLux",
      "images": [
        "https://picsum.photos/400/400?random=25"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 26,
      "name": "Essential Oil Diffuser with LED Light",
      "category_id": 3,
      "description": "Ultrasonic diffuser to humidify the air and spread calming essential oil aromas. Features a color-changing LED light.",
      "price": 28.50,
      "discount": 0,
      "stock": 100,
      "rating": 4.5,
      "brand": "AromaCare",
      "images": [
        "https://picsum.photos/400/400?random=26"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 27,
      "name": "Modern Geometric Area Rug (5x7ft)",
      "category_id": 3,
      "description": "Adds a stylish touch to any room. Soft, low-pile design that is easy to clean and durable.",
      "price": 95.00,
      "discount": 5,
      "stock": 110,
      "rating": 3.8,
      "brand": "HomeLux",
      "images": [
        "https://picsum.photos/400/400?random=27"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 28,
      "name": "Digital Kitchen Scale",
      "category_id": 3,
      "description": "High-precision digital scale for accurate baking and cooking. Features a tare function and easy-to-read LCD.",
      "price": 19.99,
      "discount": 10,
      "stock": 120,
      "rating": 4.1,
      "brand": "KitchenPro",
      "images": [
        "https://picsum.photos/400/400?random=28"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 29,
      "name": "Insulated Stainless Steel Water Bottle",
      "category_id": 3,
      "description": "Keeps drinks cold for 24 hours and hot for 12 hours. Wide-mouth opening for easy cleaning.",
      "price": 18.00,
      "discount": 15,
      "stock": 130,
      "rating": 4.4,
      "brand": "HomeLux",
      "images": [
        "https://picsum.photos/400/400?random=29"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
    {
      "product_id": 30,
      "name": "Set of 4 Bar Stools (Adjustable Height)",
      "category_id": 3,
      "description": "Modern design bar stools with a chrome base and comfortable faux leather seats. Swivel and adjustable height.",
      "price": 180.00,
      "discount": 20,
      "stock": 140,
      "rating": 4.7,
      "brand": "HomeLux",
      "images": [
        "https://picsum.photos/400/400?random=30"
      ],
      "created_at": "2025-10-30T04:00:54Z",
      "updated_at": "2025-10-30T04:00:54Z"
    },
];

 

const productGrid = document.getElementById('product-grid');
const noProductsMessage = document.getElementById('no-products');


function renderProducts(productList) {
    productGrid.innerHTML = ''; // Clear existing products
    
    if (productList.length === 0) {
        noProductsMessage.classList.remove('hidden');
        return;
    }

    noProductsMessage.classList.add('hidden');

    productList.forEach(product => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition duration-500 transform hover:-translate-y-1';
        
        // Use the first image URL from the images array
        const imageUrl = product.images && product.images.length > 0 ? product.images[0] : 'placeholder.jpg';
        
        // Generate star rating string
        const stars = '⭐'.repeat(Math.round(product.rating));
        
        card.innerHTML = `
            <div class="aspect-w-3 aspect-h-2">
                <img src="${imageUrl}" alt="${product.name}" class="w-full h-40 object-cover">
            </div>
            <div class="p-4 flex flex-col justify-between h-auto">
                <div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-1 truncate">${product.name}</h3>
                    <p class="text-xl font-bold text-indigo-600 mb-2">$${product.price.toFixed(2)}</p>
                    <div class="flex items-center mb-3">
                        ${stars}
                        <span class="text-xs text-gray-500 ml-2">(${product.rating.toFixed(1)})</span>
                    </div>
                </div>
                <button class="w-full bg-yellow-400 text-indigo-900 font-medium py-2 rounded-full shadow-md hover:bg-yellow-300 transition duration-300 text-sm">
                    Add to Cart
                </button>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// --- Categories Filter Logic ---
const filterButtons = document.querySelectorAll('.filter-btn');

/**
 * Filters the product list based on the category ID.
 */
function filterProducts(categoryValue) {
    let filtered = products;
    
    if (categoryValue !== 'All') {
        // Convert the string categoryValue (from data-category) to the integer category_id
        const categoryId = parseInt(categoryValue, 10);
        filtered = products.filter(product => product.category_id === categoryId);
    }
    
    renderProducts(filtered);

    // Update button styles
    filterButtons.forEach(btn => {
        if (btn.dataset.category === categoryValue) {
            btn.classList.add('bg-indigo-600', 'text-white', 'hover:bg-indigo-700', 'transform', 'hover:scale-105');
            btn.classList.remove('bg-white', 'text-gray-700', 'hover:bg-gray-100', 'border', 'border-gray-200');
        } else {
            btn.classList.remove('bg-indigo-600', 'text-white', 'hover:bg-indigo-700', 'transform', 'hover:scale-105');
            btn.classList.add('bg-white', 'text-gray-700', 'hover:bg-gray-100', 'border', 'border-gray-200');
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterProducts(button.dataset.category);
    });
});

// --- Banner / Image Slider Logic --- 
const sliderTrack = document.getElementById('slider-track');
const prevSlideBtn = document.getElementById('prev-slide');
const nextSlideBtn = document.getElementById('next-slide');
const slides = document.querySelectorAll('#slider-track > div');
const totalSlides = slides.length;
let currentSlide = 0;
let slideInterval;

function updateSlider() {
    const offset = -currentSlide * 100;
    sliderTrack.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

nextSlideBtn.addEventListener('click', () => {
    clearInterval(slideInterval); // Stop auto-slide on manual interaction
    nextSlide();
    startAutoSlide(); // Restart auto-slide
});

prevSlideBtn.addEventListener('click', () => {
    clearInterval(slideInterval); // Stop auto-slide on manual interaction
    prevSlide();
    startAutoSlide(); // Restart auto-slide
});

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products); // Initial product rendering
    startAutoSlide(); // Start the image slider
    // Set initial active category button style
    document.querySelector('.filter-btn[data-category="All"]').classList.add('bg-indigo-600', 'text-white', 'hover:bg-indigo-700', 'transform', 'hover:scale-105');
    document.querySelector('.filter-btn[data-category="All"]').classList.remove('bg-white', 'text-gray-700', 'hover:bg-gray-100', 'border', 'border-gray-200');
});
    