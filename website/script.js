// --- PRODUCTS DATA WITH HIGHLIGHTS ---
const products = [
    { 
        id: 1, 
        name: "Cotton Saree", 
        category: "Ethnic", 
        price: 1299, 
        rating: 4.5, 
        img: "https://sutisancha.com/cdn/shop/files/Untitleddesign-2024-07-20T172056.033.jpg?v=1721898476&width=2048",
        highlights: ["100% Pure Cotton", "Traditional Handloom", "6.5 meters length with blouse piece", "Easy to drape", "Machine washable"]
    },
    { 
        id: 2, 
        name: "Anarkali dress", 
        category: "Ethnic", 
        price: 1199, 
        rating: 4.8, 
        img: "https://desilooklifestyle.com/cdn/shop/files/WhatsAppImage2023-04-21at9.30.15AM.jpg?v=1715951580",
        highlights: ["Flowy Anarkali design", "Comfortable georgette fabric", "Perfect for festive occasions", "Comes with dupatta", "Beautiful embroidery work"]
    },
    { 
        id: 3, 
        name: "Lehanga", 
        category: "Party", 
        price: 2999, 
        rating: 4.2, 
        img: "https://ashbhav.com/cdn/shop/files/1_8ed643fe-70b0-43aa-9a5d-267c239c296d.jpg?v=1698550057",
        highlights: ["Designer lehenga choli", "Semi-stitched for custom fit", "Rich embellishments", "Includes blouse & dupatta", "Wedding & party wear"]
    },
    { 
        id: 4, 
        name: "Floral Summer Gown", 
        category: "Casual", 
        price: 999, 
        rating: 5.0, 
        img: "https://pinkcloset.in/cdn/shop/files/Elsa-Floral_min_3.jpg?v=1714044447&width=1946",
        highlights: ["Beautiful floral print", "Lightweight breathable fabric", "Flowy maxi length", "Perfect for summer", "Easy care material"]
    },
    { 
        id: 5, 
        name: "Bodycon", 
        category: "Party", 
        price: 1999, 
        rating: 4.1, 
        img: "https://5.imimg.com/data5/ECOM/Default/2024/10/457669649/NF/LV/AV/133434625/skzdpakr7trncmb-500x500.webp",
        highlights: ["Figure-hugging silhouette", "Premium stretch fabric", "Party & evening wear", "Sleeveless design", "Back zip closure"]
    },
    { 
        id: 6, 
        name: "Yellow Sunshine Frock", 
        category: "Summer", 
        price: 900, 
        rating: 4.6, 
        img: "https://cdn.shopaccino.com/miaminx/products/miaminx4926-copy-506205036276_m.jpeg?v=572",
        highlights: ["Bright cheerful yellow", "Cotton blend fabric", "Knee-length design", "Side pockets", "Comfortable fit"]
    },
    { 
        id: 7, 
        name: "Blue Polka Dot Dress", 
        category: "Casual", 
        price: 1150, 
        rating: 3.9, 
        img: "https://i.etsystatic.com/9635813/r/il/ff8918/3306626680/il_570xN.3306626680_qssb.jpg",
        highlights: ["Classic polka dot pattern", "A-line silhouette", "Half sleeves", "Midi length", "Vintage inspired"]
    },
    { 
        id: 8, 
        name: "Boho Chic Maxi", 
        category: "Casual", 
        price: 1650, 
        rating: 4.7, 
        img: "https://boho-dress.com/cdn/shop/products/boho-maxi-dress-jen-dresses-802_750x.jpg?v=1743889928",
        highlights: ["Bohemian style", "Floor-length maxi", "Relaxed comfortable fit", "Tassel details", "Beach & resort wear"]
    },
    { 
        id: 9, 
        name: "Winter Woolen Dress", 
        category: "Winter", 
        price: 1499, 
        rating: 3.5, 
        img: "https://www.trenbee.com/cdn/shop/files/download_26_1800x1800.webp?v=1732110662",
        highlights: ["Warm woolen blend", "Long sleeves", "Turtleneck design", "Thick winter fabric", "Cozy & stylish"]
    },
    { 
        id: 10, 
        name: "Wedding Gown", 
        category: "Fantasy", 
        price: 2999, 
        rating: 4.9, 
        img: "https://ms-cdn2.maggiesottero.com/151938/High/Maggie-Sottero-Galina-A-line-Wedding-Dress-26MK419A01-PROMO10-IV002.jpg?w=460",
        highlights: ["Elegant A-line gown", "Lace detailing", "Floor-length", "Built-in bra support", "Dream wedding dress"]
    },
    { 
        id: 11, 
        name: "Black Crop Top", 
        category: "Casual", 
        price: 899, 
        rating: 4.0, 
        img: "https://img0.junaroad.com/uiproducts/18401698/zoom_0-1655533496.jpg",
        highlights: ["Trendy crop length", "Solid black color", "Cotton spandex blend", "Stretchy & comfortable", "Pairs with any bottom"]
    },
    { 
        id: 12, 
        name: "Party Saree", 
        category: "Party", 
        price: 1750, 
        rating: 4.3, 
        img: "https://rkkurtis.com/cdn/shop/files/IMG_5765.jpg?v=1706774818&width=2268",
        highlights: ["Shimmer georgette fabric", "Ready to wear", "Pre-stitched pleats", "Party & occasion wear", "Comes with blouse"]
    },
    { 
        id: 13, 
        name: "Cotton Candy Striped", 
        category: "Casual", 
        price: 699, 
        rating: 4.5, 
        img: "https://images.asos-media.com/products/miss-selfridge-jumper-in-pink-stripe/207302044-1-pinkstripe?$n_640w$",
        highlights: ["Soft pink stripes", "Knit jumper style", "Relaxed fit", "Comfortable cotton", "Everyday casual wear"]
    },
    { 
        id: 14, 
        name: "Kurta Set", 
        category: "Ethnic", 
        price: 1300, 
        rating: 4.8, 
        img: "https://www.aravalii.com/cdn/shop/files/1_0005_DK1053_3.jpg?v=1746178387&width=2048",
        highlights: ["Complete 3-piece set", "Kurta, palazzo & dupatta", "Premium silk blend", "Intricate embroidery", "Festive & traditional"]
    },
    { 
        id: 15, 
        name: "Tailored JumpSuit", 
        category: "Smart", 
        price: 1350, 
        rating: 4.4, 
        img: "https://img105.savana.com/goods-pic/24b3bf2d94e34bb9b6e71109562e1bfa_w540_h720_q85.webp",
        highlights: ["Professional jumpsuit", "Tailored fit", "Belt included", "Office & formal wear", "Wrinkle-resistant fabric"]
    },
    { 
        id: 16, 
        name: "Street Style Denim Dress", 
        category: "Casual", 
        price: 1299, 
        rating: 4.2, 
        img: "https://img.kwcdn.com/product/fancy/bcc72f71-3a5d-4d5a-ae59-ea44f4141ecc.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
        highlights: ["Trendy denim fabric", "Button-down front", "Adjustable waist belt", "Casual street style", "Multiple pockets"]
    },
    { 
        id: 17, 
        name: "Butterfly Sleeve Top", 
        category: "Top", 
        price: 599, 
        rating: 4.0, 
        img: "https://static.wixstatic.com/media/464bd7_f91a3f006ef94b15b442b33f36b14e99~mv2.jpg/v1/fill/w_736,h_980,al_c,q_85,enc_avif,quality_auto/464bd7_f91a3f006ef94b15b442b33f36b14e99~mv2.jpg",
        highlights: ["Butterfly sleeve design", "Lightweight chiffon", "Elegant & feminine", "Versatile styling", "Easy to maintain"]
    },
    { 
        id: 18, 
        name: "Sequined Night Gown", 
        category: "Evening", 
        price: 3500, 
        rating: 4.9, 
        img: "https://seemagujral.com/cdn/shop/files/SG_B_2-1071.jpg?v=1694757676",
        highlights: ["Luxurious sequin work", "Evening & cocktail wear", "Figure-flattering design", "Premium quality", "Statement piece"]
    },
    { 
        id: 19, 
        name: "Green Garden Dress", 
        category: "Summer", 
        price: 1450, 
        rating: 3.8, 
        img: "https://www.teutamatoshi.com/cdn/shop/products/image_3dce4a84-c125-44a8-93d6-27b547c3a7dc.jpg?v=1629973426",
        highlights: ["Floral garden print", "Flowy midi length", "Adjustable straps", "Summer collection", "Romantic & dreamy"]
    },
    { 
        id: 20, 
        name: "Pink Bright Frock", 
        category: "Party", 
        price: 950, 
        rating: 4.6, 
        img: "https://m.media-amazon.com/images/I/813j1QKYiEL._AC_UY1100_.jpg",
        highlights: ["Vibrant pink color", "Party wear frock", "Flared skirt design", "Back zip closure", "Fun & youthful"]
    }
];

// --- APP STATE ---
let cart = [];
let isLoggedIn = false;
const userName = "Anusha";
let currentFilter = 'All';
let selectedSize = 'M';
let currentProductId = null;

// Mock reviews data
let reviews = {
    1: [
        { user: "Priya", rating: 4, comment: "Absolutely stunning saree! The fabric is so soft.", date: "16-2-2024" },
        { user: "Neha", rating: 4, comment: "Loved this cotton saree! The design is simple and classy. Perfect for office and casual occasions.", date: "26-8-2024" },
        { user: "Aisha", rating: 5, comment: "Nice cotton saree with good quality material. It feels light and breathable, suitable for long hours.", date: "11-4-2025" }
    ],
    2: [
        { user: "Sanjana", rating: 5, comment: "The fit of the Anarkali dress is perfect, looks even better in person.", date: "20-1-2024" },
        { user: "Ananya", rating: 4, comment: "I loved this red Anarkali! The stitching and detailing are very neat. It makes you look elegant and confident. Totally worth the price.", date: "11-8-2024"},
        { user: "Kavya", rating: 5, comment: "The dress is very pretty and eye-catching. The red shade is vibrant and suits Indian occasions well. Slightly long for me, but overall a great buy.", date: "25-4-2025" },           
        { user: "Rashmi", rating: 4, comment: "An excellent Anarkali dress for weddings or special occasions. The color, flare, and overall finish are amazing. I received many compliments wearing it", date: "16-9-2025" }
    ],
    3: [
        { user: "Meera K", rating: 4, comment: "Beautiful Lehanga, slightly heavy but worth it for the party look.", date: "20-11-2024" },
        { user: "Vijay D", rating: 5, comment: "Bought for my sister, the embroidery is exquisite.", date: "18-5-2025" },
        { user: "Lavanya", rating: 5, comment: "Perfect lehenga for special occasions. The finishing is excellent and it looks exactly like the pictures.", date: "19-8-2025" }
    ],
    4: [
        { user: "Isha", rating: 4, comment: "This floral summer gown is light, breathable, and perfect for hot weather.", date: "11-4-2024" },
        { user: "Aadhya", rating: 5,comment: "Perfect for a summer day. Very comfortable.", date: "24-8-2024" }
    ],
    5: [
        { user: "Meera K", rating: 4, comment: "Beautiful Lehanga, slightly heavy but worth it for the party look.", date: "20-11-2024" },
        { user: "Vijay D", rating: 5, comment: "Bought for my sister, the embroidery is exquisite.", date: "18-5-2025" },
        { user: "Lavanya", rating: 5, comment: "Perfect lehenga for special occasions. The finishing is excellent and it looks exactly like the pictures.", date: "19-8-2025" }
    ],
    6: [
        { user: "Ritu S", rating: 5, comment: "My daughter loves the Yellow Sunshine Frock! True to size.", date: "17-2-2024" },
        { user: "Pooja", rating: 4, comment: "Great choice for casual outings and daytime events.", date: "4-6-2024" },
        { user: "Sneha", rating: 5, comment: "Bright yellow color gives a cheerful and lively look.", date: "28-11-2024" },
        { user: "Diya", rating: 5, comment: "Very comfortable and perfect for summer days.", date: "11-3-2025" },
        { user: "Meera", rating: 4, comment: "Perfect for a summer day. Very comfortable.", date: "30-6-2025" }
    ],
    7: [
        { user: "Sanya", rating: 4, comment: "Timeless pattern that never goes out of fashion.", date: "16-4-2024" },
        { user: "Shreya", rating: 5, comment: "Classic polka dot design with a modern touch.", date: "18-5-2025" },
        { user: "Riya", rating: 5, comment: "Comfortable dress suitable for daily wear.", date: "13-1-2025" }
    ],
    8: [
        { user: "Tanvi", rating: 5, comment: "Stylish maxi dress with a relaxed boho look.", date: "22-9-2024" },
        { user: "Neha", rating: 4, comment: "Perfect for vacations and casual gatherings.", date: "16-6-2025" },
        { user: "Priya", rating: 5, comment: "Comfortable and trendy at the same time.", date: "7-10-2025" }
    ],
    9: [
        { user: "Khushi", rating: 5, comment: "Keeps you warm and comfortable during winter.", date: "20-11-2024" },
        { user: "Aarohi", rating: 5, comment: "Looks elegant while providing good warmth.", date: "18-11-2025" }
    ],
    10: [
        { user: "Mounika", rating: 5, comment: "Makes the bride look graceful and classy.", date: "2-6-2024" },
        { user: "Aarya", rating: 4, comment: "High-quality fabric with lovely detailing.", date: "18-10-2024" },
        { user: "Avni", rating: 4, comment: "Truly a dream wedding outfit.", date: "29-8-2025" }
    ],
    11: [
        { user: "Vanya", rating: 4, comment: "Trendy crop top suitable for modern styling.", date: "15-6-2025" },
        { user: "Ankika", rating: 5, comment: "Easy to pair with jeans, skirts, or trousers.", date: "25-10-2025" }
    ],
    12: [
        { user: "Ishitha", rating: 4, comment: "Beautiful detailing adds grace to the outfit.", date: "12-7-2024" },
        { user: "Reva", rating: 4, comment: "Perfect for weddings and festive events.", date: "12-4-2025" },
        { user: "Bhavya", rating: 5, comment: "Makes you look traditional and stylish.", date: "30-9-2025" }
    ],
    13: [
        { user: "Kumari", rating: 4, comment: "Soft pastel stripes give a cute and fresh look.", date: "24-7-2024" },
        { user: "Nandini", rating: 5, comment: "Light and breathable, ideal for summer.", date: "5-5-2025" },
        { user: "Siya", rating: 5, comment: "Simple design with attractive colors.", date: "10-10-2025" }
    ],
    14: [
        { user: "Trisha", rating: 4, comment: "Comfortable and elegant traditional wear.", date: "20-11-2024" },
        { user: "Shruthi", rating: 4, comment: "Easy to wear and maintain.", date: "18-5-2025" },
        { user: "Gayatri", rating: 5, comment: "Suitable for office and daily use.", date: "19-8-2025" }
    ],
    15: [
        { user: "Mahika", rating: 4, comment: "Smart and modern outfit with a perfect fit.", date: "12-4-2015" },
        { user: "Jhanvi", rating: 5, comment: "Suitable for parties and formal events.", date: "3-6-2024" },
        { user: "Anjali", rating: 5, comment: "The Jumpsuit was a little tighter than expected on the waist.", date: "12-8-2024" },
        { user: "Aahana", rating: 4, comment: "A great alternative to dresses.", date: "26-2-2025" },
        { user: "Pranavi", rating: 4, comment: "Gives a confident and stylish look.", date: "12-4-2025" }
    ],
    16: [
        { user: "Parnika", rating: 4, comment: "Strong fabric with a comfortable fit.", date: "20-8-2024" },
        { user: "Eesha", rating: 5, comment: "Easy to style with sneakers or flats.", date: "1-4-2025" },
        { user: "Yamini", rating: 5, comment: "Gives a cool street-style look.", date: "17-8-2025" }
    ],
    17: [
        { user: "Sharmila", rating: 4, comment: "Stylish butterfly sleeves give a feminine look.", date: "22-8-2024" },
        { user: "Hanishka", rating: 4, comment: "Adds elegance to a simple outfit.", date: "15-1-2025" }
    ],
    18: [
        { user: "Prisha", rating: 4, comment: "Glamorous gown perfect for evening parties.", date: "12-5-2024" },
        { user: "Lavina", rating: 4, comment: "Makes you look elegant and confident.", date: "28-8-2024" },
        { user: "Sakshi", rating: 5, comment: "Comfortable fit with stylish design.", date: "7-3-2025" },
        { user: "Charisma", rating: 5, comment: "Ideal for night events and functions.", date: "29-9-2025" }
    ],
    19: [
        { user: "Darshana", rating: 4, comment: "Fresh green color gives a soothing look.", date: "19-7-2024" },
        { user: "Mehal", rating: 5, comment: "Gives a natural and graceful appearance.", date: "28-11-2024" },
        { user: "Akshara", rating: 5, comment: "Perfect for daytime outings.", date: "9-2-2025" }
    ],
    20: [
        { user: "Prisha", rating: 5, comment: "Bright pink color looks attractive and cheerful.", date: "23-11-2024" },
        { user: "Vaidehi", rating: 4, comment: "Makes the outfit look lively and fun.", date: "20-9-2025" }
    ]
};

let feedbackList = [
    {
        id: 1,
        name: "Priya Sharma",
        email: "priya@gmail.com",
        rating: 5,
        category: "Product Quality",
        comment: "Amazing quality! The dress fits perfectly and looks beautiful.",
        date: "11/01/2025"
    },
    {
        id: 2,
        name: "Ananya R",
        email: "ananya@gmail.com",
        rating: 4,
        category: "Website Experience",
        comment: "Website is very smooth and easy to navigate. Loved it!",
        date: "18/06/2025"
    },
    {
        id: 3,
        name: "Sneha Patel",
        email: "sneha@gmail.com",
        rating: 5,
        category: "Customer Service",
        comment: "Customer support was quick and very helpful.",
        date: "2/09/2025"
    }
];

// --- UTILITY FUNCTIONS ---
function calculateAverageRating(productId) {
    const productReviews = reviews[productId] || [];
    if (productReviews.length === 0) return 0;
    const totalRating = productReviews.reduce((sum, r) => sum + r.rating, 0);
    return Math.round((totalRating / productReviews.length) * 10) / 10;
}

function renderRatingStars(rating, totalStars = 5) {
    const roundedRating = Math.round(rating * 2) / 2;
    let stars = '';
    for (let i = 1; i <= totalStars; i++) {
        if (i <= roundedRating) {
            stars += '★';
        } else {
            stars += '☆';
        }
    }
    const ratingDisplay = (rating > 0) ? rating.toFixed(1) : '0.0'; 
    return `<div class="product-rating">${stars} <span class="rating-number">(${ratingDisplay})</span></div>`;
}

// --- PRODUCT RENDERING ---
function renderProducts(filter = 'All') {
    const productContainer = document.getElementById('product-list');
    const filteredProducts = products.filter(p => filter === 'All' || p.category === filter);

    if (filteredProducts.length === 0) {
        productContainer.innerHTML = '<p style="text-align: center; grid-column: 1 / -1; margin-top: 30px;">No products found in this category.</p>';
        return;
    }

    productContainer.innerHTML = filteredProducts.map(product => {
        const avgRating = calculateAverageRating(product.id);
        const cartItem = cart.find(item => item.id === product.id);
        const quantity = cartItem ? cartItem.quantity : 0;
        
        return `
            <div class="product-card" onclick="openProductDetail(${product.id})">
                <div class="img-container">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="card-details">
                    <div class="product-cat">${product.category}</div>
                    <div class="product-name">${product.name}</div>
                    ${renderRatingStars(avgRating)}
                    <div class="product-price">₹${product.price}</div>
                    <div class="rating-controls">
                        <a class="review-link" onclick="event.stopPropagation(); openReviewModal(${product.id})">See/Add Review</a>
                    </div>
                    ${quantity === 0 ? 
                        `<button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id}, 1)">Add to Cart</button>` :
                        `<div class="quantity-controls">
                            <button class="quantity-btn" onclick="event.stopPropagation(); decreaseQuantity(${product.id})">−</button>
                            <span class="quantity-display">${quantity}</span>
                            <button class="quantity-btn" onclick="event.stopPropagation(); addToCart(${product.id}, 1)">+</button>
                        </div>`
                    }
                </div>
            </div>
        `;
    }).join('');
}

function getUniqueCategories() {
    const categories = products.map(p => p.category);
    return ['All', ...new Set(categories)];
}

function renderCategoryFilters() {
    const container = document.getElementById('category-filter');
    const categories = getUniqueCategories();

    container.innerHTML = categories.map(cat => `
        <button 
            class="filter-btn ${cat === currentFilter ? 'active' : ''}" 
            onclick="setCategoryFilter('${cat}')">
            ${cat}
        </button>
    `).join('');
}

function setCategoryFilter(category) {
    currentFilter = category;
    renderCategoryFilters();
    renderProducts(category);
}

// --- INITIALIZATION ---
function init() {
    setupStarRating();
    setupFeedbackStarRating(); 
    renderCategoryFilters();
    renderProducts(currentFilter);
    renderFeedbackList();
    
    if(localStorage.getItem('isLoggedIn') === 'true') {
        isLoggedIn = true;
        updateAuthUI();
        router('home');
    } else {
        router('login');
    }
}

// --- ROUTER ---
const originalRouter = function(pageId) {
    if((pageId === 'cart' || pageId === 'payment') && !isLoggedIn) {
        showToast("Please login first!", "red");
        router('login');
        return;
    }

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId + '-page').classList.add('active');
    window.scrollTo(0,0);

    if(pageId === 'home') renderProducts(currentFilter);
    if(pageId === 'cart') renderCart();
    if(pageId === 'payment') {
        document.getElementById('pay-amount').innerText = document.getElementById('final-total').innerText;
    }
    if(pageId === 'feedback') renderFeedbackList();
};

let router = function(pageId) {
    history.pushState({ page: pageId }, "", "#" + pageId);
    originalRouter(pageId);
};

window.onpopstate = function(event) {
    if (event.state && event.state.page) {
        originalRouter(event.state.page);
    }
};

window.addEventListener("load", () => {
    const pageFromHash = location.hash.replace("#", "");
    if (pageFromHash) {
        originalRouter(pageFromHash);
    }
});

// --- AUTHENTICATION ---
function handleLogin(e) {
    e.preventDefault();
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    updateAuthUI();
    router('home');
    showToast("Welcome to DIVA!");
}

function handleLogout() {
    isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    cart = [];
    document.getElementById('cart-count').innerText = 0;
    updateAuthUI();
    router('login');
    showToast("Logged out successfully!", "blue");
}

function updateAuthUI() {
    const btn = document.getElementById('auth-btn');
    const userDisplay = document.getElementById('user-display');
    if(isLoggedIn) {
        btn.innerText = "Logout";
        btn.setAttribute('onclick', 'handleLogout()');
        btn.style.background = "#333";
        userDisplay.style.display = "block";
        userDisplay.innerHTML = `Hi, <strong>${userName}</strong>`;
    } else {
        btn.innerText = "Login";
        btn.setAttribute('onclick', "router('login')");
        btn.style.background = "var(--primary)";
        userDisplay.style.display = "none";
    }
}

// --- CART LOGIC ---
function addToCart(productId, quantity = 1) {
    if (!isLoggedIn) {
        showToast("Please login to add items to cart!", "red");
        router('login');
        return;
    }
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        const product = products.find(p => p.id === productId);
        cart.push({ ...product, quantity });
    }
    updateCartCount();
    renderProducts(currentFilter);
    showToast("Item added to cart!");
}

function decreaseQuantity(productId) {
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            renderProducts(currentFilter);
        }
    }
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').innerText = count;
}

function renderCart() {
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('subtotal');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('final-total');

    if (cart.length === 0) {
        container.innerHTML = '<p style="padding: 20px; text-align: center;">Your cart is empty. Start shopping!</p>';
        subtotalEl.innerText = '₹0';
        taxEl.innerText = '₹0';
        totalEl.innerText = '₹0';
        return;
    }

    let subtotal = 0;

    container.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        return `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}">
                <div class="cart-info">
                    <div class="cart-item-header">
                        <div>
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-category">${item.category}</div>
                        </div>
                        <div class="cart-item-price">₹${itemTotal}</div>
                    </div>
                    <div class="cart-quantity-controls">
                        <button class="cart-qty-btn" onclick="updateCartQuantity(${item.id}, -1)">−</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="cart-qty-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                        <span class="remove-btn" onclick="removeFromCart(${item.id})">Remove</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const taxRate = 0.05;
    const tax = subtotal * taxRate;
    const finalTotal = subtotal + tax;

    subtotalEl.innerText = `₹${subtotal.toFixed(2)}`;
    taxEl.innerText = `₹${tax.toFixed(2)}`;
    totalEl.innerText = `₹${finalTotal.toFixed(2)}`;
}

function updateCartQuantity(productId, change) {
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += change;
        if (existingItem.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            renderCart();
            renderProducts(currentFilter);
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    renderCart();
    renderProducts(currentFilter);
    showToast("Item removed from cart.", "blue");
}

// --- PAYMENT LOGIC ---
function processPayment() {
    cart = [];
    updateCartCount();
    renderProducts(currentFilter);
    router('home');
    showToast("Payment successful! Thank you for shopping with us.", "green");
}

// --- TOAST NOTIFICATION ---
function showToast(message, color = "green") {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.style.backgroundColor = color === "red" ? "#dc3545" : (color === "blue" ? "#007bff" : "#28a745");
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}

// --- REVIEW MODAL LOGIC ---
let currentReviewProductId = null;

function openReviewModal(productId) {
    currentReviewProductId = productId;
    const product = products.find(p => p.id === productId);

    if (!product) {
        showToast("Product not found.", "red");
        return;
    }

    document.getElementById('review-product-id').value = productId;
    document.getElementById('modal-product-name').innerText = `Reviews for: ${product.name}`;
    document.getElementById('review-rating').value = 0;
    document.getElementById('review-comment').value = '';
    updateStarRatingInput(0);

    renderReviews(productId);
    document.getElementById('review-modal').style.display = 'block';
}

function closeModal(event) {
    if (event.target === document.getElementById('review-modal') || event.target.className === 'close-btn') {
        document.getElementById('review-modal').style.display = 'none';
        currentReviewProductId = null;
    }
}

function setupStarRating() {
    const starContainer = document.getElementById('star-rating-input');
    starContainer.addEventListener('mouseover', function(e) {
        if (e.target.tagName === 'SPAN' && e.target.hasAttribute('data-rating')) {
            const ratingValue = parseInt(e.target.getAttribute('data-rating'));
            highlightStars(ratingValue, true);
        }
    });
    starContainer.addEventListener('mouseout', function(e) {
        highlightStars(parseInt(document.getElementById('review-rating').value), false);
    });
    starContainer.addEventListener('click', function(e) {
        if (e.target.tagName === 'SPAN' && e.target.hasAttribute('data-rating')) {
            const ratingValue = parseInt(e.target.getAttribute('data-rating'));
            document.getElementById('review-rating').value = ratingValue;
            updateStarRatingInput(ratingValue);
        }
    });
}

function updateStarRatingInput(rating) {
    const stars = document.querySelectorAll('#star-rating-input span');
    stars.forEach(star => {
        if (parseInt(star.getAttribute('data-rating')) <= rating) {
            star.classList.add('selected');
            star.innerText = '★';
        } else {
            star.classList.remove('selected');
            star.innerText = '☆';
        }
    });
}

function highlightStars(rating, isHover) {
    const stars = document.querySelectorAll('#star-rating-input span');
    const currentRating = parseInt(document.getElementById('review-rating').value);

    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-rating'));
        if (isHover) {
            if (starValue <= rating) {
                star.classList.add('selected');
                star.innerText = '★';
            } else {
                star.classList.remove('selected');
                star.innerText = '☆';
            }
        } else {
            updateStarRatingInput(currentRating);
        }
    });
}

function submitReview(e) {
    e.preventDefault();
    
    if (!isLoggedIn) {
        showToast("You must be logged in to submit a review.", "red");
        return;
    }

    const productId = parseInt(document.getElementById('review-product-id').value);
    const rating = parseInt(document.getElementById('review-rating').value);
    const comment = document.getElementById('review-comment').value.trim();

    if (rating === 0 || comment.length < 5) {
        showToast("Please provide a rating (1-5) and a comment (min 5 characters).", "red");
        return;
    }

    const newReview = {
        user: userName,
        rating: rating,
        comment: comment,
        date: new Date().toLocaleDateString('en-GB').replace(/\//g, '-')
    };

    if (!reviews[productId]) {
        reviews[productId] = [];
    }
    reviews[productId].unshift(newReview);

    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        products[productIndex].rating = calculateAverageRating(productId);
    }

    renderReviews(productId);
    renderProducts(currentFilter);
    
    document.getElementById('review-rating').value = 0;
    document.getElementById('review-comment').value = '';
    updateStarRatingInput(0); 

    showToast("Review submitted successfully!", "green");
}

function renderReviews(productId) {
    const reviewListContainer = document.getElementById('reviews-list-container');
    const productReviews = reviews[productId] || [];
    
    document.getElementById('review-count').innerText = productReviews.length;

    if (productReviews.length === 0) {
        reviewListContainer.innerHTML = '<p style="text-align: center; color: #666; padding: 10px;">Be the first to review this product!</p>';
        return;
    }

    reviewListContainer.innerHTML = productReviews.map(r => `
        <div class="review-item">
            <div class="review-meta">
                <strong>${r.user}</strong>
                <span>${r.date}</span>
            </div>
            ${renderRatingStars(r.rating)}
            <p>${r.comment}</p>
        </div>
    `).join('');
}

// --- PRODUCT DETAIL MODAL ---
function openProductDetail(productId) {
    currentProductId = productId;
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const avgRating = calculateAverageRating(productId);

    document.getElementById('detail-product-img').src = product.img;
    document.getElementById('detail-product-category').innerText = product.category;
    document.getElementById('detail-product-name').innerText = product.name;
    document.getElementById('detail-product-price').innerText = `₹${product.price}`;
    document.getElementById('detail-product-rating').innerText = `★ ${avgRating.toFixed(1)}`;
    
    const highlightsList = document.getElementById('highlights-list');
    highlightsList.innerHTML = product.highlights.map(h => `<li>${h}</li>`).join('');

    document.getElementById('detail-review-link').onclick = function() {
        closeProductDetail();
        openReviewModal(productId);
    };

    document.getElementById('detail-add-cart').onclick = function() {
        addToCart(productId, 1);
        showToast(`Added ${product.name} (Size: ${selectedSize}) to cart!`);
    };

    document.getElementById('detail-buy-now').onclick = function() {
        if (!isLoggedIn) {
            showToast("Please login first!");
            closeProductDetail();
            router('login');
            return;
        }
        addToCart(productId, 1);
        closeProductDetail();
        router('cart');
    };

    selectedSize = 'M';
    document.querySelectorAll('.size-option').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.innerText === 'M') btn.classList.add('selected');
    });

    document.getElementById('product-detail-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProductDetail(event) {
    if (!event || event.target.classList.contains('close-btn') || event.target.id === 'product-detail-modal') {
        document.getElementById('product-detail-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
        currentProductId = null;
    }
}

function selectSize(button, size) {
    document.querySelectorAll('.size-option').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    selectedSize = size;
}

// --- FEEDBACK FUNCTIONALITY ---
function setupFeedbackStarRating() {
    const starContainer = document.getElementById('feedback-star-rating');
    starContainer.addEventListener('click', function(e) {
        if (e.target.tagName === 'SPAN' && e.target.hasAttribute('data-rating')) {
            const ratingValue = parseInt(e.target.getAttribute('data-rating'));
            document.getElementById('feedback-rating').value = ratingValue;
            updateFeedbackStarRating(ratingValue);
            hideError('rating-error');
        }
    });
}

function updateFeedbackStarRating(rating) {
    const stars = document.querySelectorAll('#feedback-star-rating span');
    stars.forEach(star => {
        const val = parseInt(star.getAttribute('data-rating'));
        if (val <= rating) {
            star.classList.add('selected');
            star.innerText = '★';
        } else {
            star.classList.remove('selected');
            star.innerText = '☆';
        }
    });
}

function showError(elementId, inputId) {
    document.getElementById(elementId).classList.add('show');
    if (inputId) {
        document.getElementById(inputId).classList.add('input-error');
    }
}

function hideError(elementId, inputId) {
    document.getElementById(elementId).classList.remove('show');
    if (inputId) {
        document.getElementById(inputId).classList.remove('input-error');
    }
}

function validateFeedbackForm() {
    let isValid = true;

    const name = document.getElementById('feedback-name').value.trim();
    if (name.length < 2) {
        showError('name-error', 'feedback-name');
        isValid = false;
    } else {
        hideError('name-error', 'feedback-name');
    }

    const email = document.getElementById('feedback-email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('email-error', 'feedback-email');
        isValid = false;
    } else {
        hideError('email-error', 'feedback-email');
    }
    
    const phone = document.getElementById('feedback-phone').value.trim();
if (!/^[6-9]\d{9}$/.test(phone)) {
    showError('phone-error', 'feedback-phone');
    isValid = false;
} else {
    hideError('phone-error', 'feedback-phone');
}

    const rating = parseInt(document.getElementById('feedback-rating').value);
    if (rating === 0) {
        showError('rating-error');
        isValid = false;
    } else {
        hideError('rating-error');
    }

    const category = document.getElementById('feedback-category').value;
    if (category === '') {
        showError('category-error', 'feedback-category');
        isValid = false;
    } else {
        hideError('category-error', 'feedback-category');
    }

    const comment = document.getElementById('feedback-comment').value.trim();
    if (comment.length < 10) {
        showError('comment-error', 'feedback-comment');
        isValid = false;
    } else {
        hideError('comment-error', 'feedback-comment');
    }

    return isValid;
}

function submitFeedback(e) {
    e.preventDefault();

    if (!validateFeedbackForm()) {
        showToast("Please fix the errors in the form", "red");
        return;
    }

    const newFeedback = {
        id: Date.now(),
        name: document.getElementById('feedback-name').value.trim(),
        email: document.getElementById('feedback-email').value.trim(),
        rating: parseInt(document.getElementById('feedback-rating').value),
        category: document.getElementById('feedback-category').value,
        comment: document.getElementById('feedback-comment').value.trim(),
        date: new Date().toLocaleDateString('en-GB')
    };

    feedbackList.unshift(newFeedback);

    document.getElementById('feedback-form').reset();
    document.getElementById('feedback-rating').value = 0;
    updateFeedbackStarRating(0);

    renderFeedbackList();
    showToast("Thank you for your feedback!");

    document.getElementById('feedback-list-section').scrollIntoView({ behavior: 'smooth' });
}

function renderFeedbackList() {
    const container = document.getElementById('feedback-list-container');
    const countEl = document.getElementById('feedback-count');

    countEl.innerText = feedbackList.length;

    if (feedbackList.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #878787; padding: 20px;">No feedback yet. Be the first to share!</p>';
        return;
    }

    container.innerHTML = feedbackList.map(f => `
        <div class="feedback-item">
            <div class="feedback-header">
                <span class="feedback-user">${f.name}</span>
                <span class="feedback-date">${f.date}</span>
            </div>
            <div class="feedback-rating">${'★'.repeat(f.rating)}${'☆'.repeat(5-f.rating)}</div>
            <div class="feedback-category">Category: ${f.category}</div>
            <div class="feedback-comment">${f.comment}</div>
        </div>
    `).join('');
}