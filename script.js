// --- PRODUCTS DATA WITH HIGHLIGHTS ---
const products = [
    { 
        id: 1, 
        name: "Cotton Saree", 
        category: "Ethnic", 
        price: 1000, 
        rating: 4.5, 
        img: "https://sutisancha.com/cdn/shop/files/Untitleddesign-2024-07-20T172056.033.jpg?v=1721898476&width=2048",
        highlights: ["100% Pure Cotton", "Traditional Handloom", "6.5 meters length with blouse piece", "Easy to drape", "Machine washable"]
    },
    { 
        id: 2, 
        name: "Anarkali dress", 
        category: "Ethnic", 
        price: 1299, 
        rating: 4.8, 
        img: "https://uttamattires.com/wp-content/uploads/2025/09/1000212565.jpg",
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
        price: 1199, 
        rating: 5.0, 
        img: "https://rimzimfashion.com/cdn/shop/files/74-2.jpg?v=1724498835",
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
        price: 900, 
        rating: 4.8, 
        img: "https://www.trendbuy.co.in/cdn/shop/files/embroidered-roman-silk-kurta-set-for-women-festive-wear-main.jpg?v=1767189260",
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
let userName = localStorage.getItem('userName') || "Guest";
let currentFilter = 'All';
let selectedSize = 'M';
let currentProductId = null;
let buyNowItem = null; // set when "Buy Now" is used; payment is for this item only

// Mock reviews data
let reviews = {
    1: [
        { user: "Priya", rating: 4, comment: "Absolutely stunning saree! The fabric is so soft.", date: "11-04-2025" },
        { user: "Neha", rating: 4, comment: "Loved this cotton saree! The design is simple and classy. Perfect for office and casual occasions.", date: "26-08-2024" },
        { user: "Aisha", rating: 5, comment: "Nice cotton saree with good quality material. It feels light and breathable, suitable for long hours.", date: "16-02-2024" }
    ],
    2: [
        { user: "Sanjana", rating: 5, comment: "The fit of the Anarkali dress is perfect, looks even better in person.", date: "16-09-2025" },
        { user: "Ananya", rating: 4, comment: "I loved this red Anarkali! The stitching and detailing are very neat. It makes you look elegant and confident. Totally worth the price.", date: "25-04-2025"},
        { user: "Kavya", rating: 5, comment: "The dress is very pretty and eye-catching. The red shade is vibrant and suits Indian occasions well. Slightly long for me, but overall a great buy.", date: "11-08-2024" },           
        { user: "Rashmi", rating: 4, comment: "An excellent Anarkali dress for weddings or special occasions. The color, flare, and overall finish are amazing. I received many compliments wearing it", date: "01-05-2024" }
    ],
    3: [
        { user: "Meera K", rating: 4, comment: "Beautiful Lehanga, slightly heavy but worth it for the party look.", date: "19-08-2025" },
        { user: "Vijay D", rating: 5, comment: "Bought for my sister, the embroidery is exquisite.", date: "18-05-2025" },
        { user: "Lavanya", rating: 5, comment: "Perfect lehenga for special occasions. The finishing is excellent and it looks exactly like the pictures.", date: "20-11-2024" }
    ],
    4: [
        { user: "Isha", rating: 4, comment: "This floral summer gown is light, breathable, and perfect for hot weather.", date: "24-08-2025" },
        { user: "Aadhya", rating: 5,comment: "Perfect for a summer day. Very comfortable.", date: "11-04-2024" }
    ],
    5: [
        { user: "Meera K", rating: 4, comment: "Beautiful Lehanga, slightly heavy but worth it for the party look.", date: "19-08-2025" },
        { user: "Vijay D", rating: 5, comment: "Bought for my sister, the embroidery is exquisite.", date: "18-05-2025" },
        { user: "Lavanya", rating: 5, comment: "Perfect lehenga for special occasions. The finishing is excellent and it looks exactly like the pictures.", date: "20-11-2024" }
    ],
    6: [
        { user: "Ritu S", rating: 5, comment: "My daughter loves the Yellow Sunshine Frock! True to size.", date: "30-06-2025" },
        { user: "Pooja", rating: 4, comment: "Great choice for casual outings and daytime events.", date: "11-03-2025" },
        { user: "Sneha", rating: 5, comment: "Bright yellow color gives a cheerful and lively look.", date: "28-11-2024" },
        { user: "Diya", rating: 5, comment: "Very comfortable and perfect for summer days.", date: "04-06-2024" },
        { user: "Meera", rating: 4, comment: "Perfect for a summer day. Very comfortable.", date: "17-02-2024" }
    ],
    7: [
        { user: "Sanya", rating: 4, comment: "Timeless pattern that never goes out of fashion.", date: "25-08-2025" },
        { user: "Shreya", rating: 5, comment: "Classic polka dot design with a modern touch.", date: "18-08-2024" },
        { user: "Riya", rating: 5, comment: "Comfortable dress suitable for daily wear.", date: "13-01-2024" }
    ],
    8: [
        { user: "Tanvi", rating: 5, comment: "Stylish maxi dress with a relaxed boho look.", date: "07-10-2025" },
        { user: "Neha", rating: 4, comment: "Perfect for vacations and casual gatherings.", date: "16-06-2025" },
        { user: "Priya", rating: 5, comment: "Comfortable and trendy at the same time.", date: "22-09-2024" }
    ],
    9: [
        { user: "Khushi", rating: 5, comment: "Keeps you warm and comfortable during winter.", date: "20-11-2025" },
        { user: "Aarohi", rating: 5, comment: "Looks elegant while providing good warmth.", date: "18-10-2024" }
    ],
    10: [
        { user: "Mounika", rating: 5, comment: "Makes the bride look graceful and classy.", date: "29-08-2025" },
        { user: "Aarya", rating: 4, comment: "High-quality fabric with lovely detailing.", date: "18-10-2024" },
        { user: "Avni", rating: 4, comment: "Truly a dream wedding outfit.", date: "02-06-2024" }
    ],
    11: [
        { user: "Vanya", rating: 4, comment: "Trendy crop top suitable for modern styling.", date: "15-10-2025" },
        { user: "Ankika", rating: 5, comment: "Easy to pair with jeans, skirts, or trousers.", date: "25-06-2025" }
    ],
    12: [
        { user: "Ishitha", rating: 4, comment: "Beautiful detailing adds grace to the outfit.", date: "30-09-2025" },
        { user: "Reva", rating: 4, comment: "Perfect for weddings and festive events.", date: "12-04-2025" },
        { user: "Bhavya", rating: 5, comment: "Makes you look traditional and stylish.", date: "12-07-2024" }
    ],
    13: [
        { user: "Kumari", rating: 4, comment: "Soft pastel stripes give a cute and fresh look.", date: "10-12-2025" },
        { user: "Nandini", rating: 5, comment: "Light and breathable, ideal for summer.", date: "05-05-2025" },
        { user: "Siya", rating: 5, comment: "Simple design with attractive colors.", date: "24-07-2024" }
    ],
    14: [
        { user: "Trisha", rating: 4, comment: "Comfortable and elegant traditional wear.", date: "19-08-2025" },
        { user: "Shruthi", rating: 4, comment: "Easy to wear and maintain.", date: "18-05-2025" },
        { user: "Gayatri", rating: 5, comment: "Suitable for office and daily use.", date: "20-11-2024" }
    ],
    15: [
        { user: "Mahika", rating: 4, comment: "Smart and modern outfit with a perfect fit.", date: "12-04-2025" },
        { user: "Jhanvi", rating: 5, comment: "Suitable for parties and formal events.", date: "26-02-2025" },
        { user: "Anjali", rating: 5, comment: "The Jumpsuit was a little tighter than expected on the waist.", date: "12-08-2024" },
        { user: "Aahana", rating: 4, comment: "A great alternative to dresses.", date: "03-06-2024" },
        { user: "Pranavi", rating: 4, comment: "Gives a confident and stylish look.", date: "10-02-2024" }
    ],
    16: [
        { user: "Parnika", rating: 4, comment: "Strong fabric with a comfortable fit.", date: "17-08-2025" },
        { user: "Eesha", rating: 5, comment: "Easy to style with sneakers or flats.", date: "01-04-2025" },
        { user: "Yamini", rating: 5, comment: "Gives a cool street-style look.", date: "20-08-2024" }
    ],
    17: [
        { user: "Sharmila", rating: 4, comment: "Stylish butterfly sleeves give a feminine look.", date: "22-11-2025" },
        { user: "Hanishka", rating: 4, comment: "Adds elegance to a simple outfit.", date: "15-08-2024" }
    ],
    18: [
        { user: "Prisha", rating: 4, comment: "Glamorous gown perfect for evening parties.", date: "29-09-2025" },
        { user: "Lavina", rating: 4, comment: "Makes you look elegant and confident.", date: "07-03-2025" },
        { user: "Sakshi", rating: 5, comment: "Comfortable fit with stylish design.", date: "28-08-2024" },
        { user: "Charisma", rating: 5, comment: "Ideal for night events and functions.", date: "12-05-2024" }
    ],
    19: [
        { user: "Darshana", rating: 4, comment: "Fresh green color gives a soothing look.", date: "09-02-2025" },
        { user: "Mehal", rating: 5, comment: "Gives a natural and graceful appearance.", date: "28-11-2024" },
        { user: "Akshara", rating: 5, comment: "Perfect for daytime outings.", date: "19-07-2024" }
    ],
    20: [
        { user: "Prisha", rating: 5, comment: "Bright pink color looks attractive and cheerful.", date: "23-11-2025" },
        { user: "Vaidehi", rating: 4, comment: "Makes the outfit look lively and fun.", date: "20-09-2024" }
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
// Turns special characters into plain text so user input can't run as HTML
function esc(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Save reviews and feedback so they stay after a refresh
function saveReviewsAndFeedback() {
    try {
        localStorage.setItem('divaReviews', JSON.stringify(reviews));
        localStorage.setItem('divaFeedback', JSON.stringify(feedbackList));
    } catch (err) {}
}

// Load saved reviews and feedback (if any) and update product ratings
function loadReviewsAndFeedback() {
    try {
        const savedReviews = JSON.parse(localStorage.getItem('divaReviews') || 'null');
        const savedFeedback = JSON.parse(localStorage.getItem('divaFeedback') || 'null');
        if (savedReviews) reviews = savedReviews;
        if (Array.isArray(savedFeedback)) feedbackList = savedFeedback;
    } catch (err) {}
    products.forEach(p => {
        const avg = calculateAverageRating(p.id);
        if (avg > 0) p.rating = avg;
    });
}

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
        const quantity = cart.filter(item => item.id === product.id).reduce((sum, item) => sum + item.quantity, 0);
        
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
                        `<button class="add-cart-btn" onclick="event.stopPropagation(); openSizeModal(${product.id})">Add to Cart</button>` :
                        `<div class="quantity-controls">
                            <button class="quantity-btn" onclick="event.stopPropagation(); decreaseQuantity(${product.id})">−</button>
                            <span class="quantity-display">${quantity}</span>
                            <button class="quantity-btn" onclick="event.stopPropagation(); openSizeModal(${product.id})">+</button>
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
    loadReviewsAndFeedback();
    if (localStorage.getItem('isLoggedIn') === 'true') {
        loadCart();
        updateCartCount();
    }
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

    // The profile step is only reachable right after entering an email/phone
    if (pageId === 'profile' && !pendingLogin) {
        router('login');
        return;
    }

    // Leaving the payment page cancels any "Buy Now" purchase
    if (pageId !== 'payment') buyNowItem = null;

    // Can't checkout with an empty cart (unless buying a single dress via Buy Now)
    if (pageId === 'payment' && cart.length === 0 && !buyNowItem) {
        showToast("Please add a dress to cart to checkout", "red");
        if (!document.getElementById('cart-page').classList.contains('active')) {
            router('cart');
        }
        return;
    }

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId + '-page').classList.add('active');
    window.scrollTo(0,0);

    // Show the Home icon button everywhere except on home and login
    document.getElementById('home-btn').style.display = (pageId === 'home' || pageId === 'login' || pageId === 'profile') ? 'none' : 'block';

    if(pageId === 'home') renderProducts(currentFilter);
    if(pageId === 'cart') renderCart();
    if(pageId === 'payment') {
        const summaryEl = document.getElementById('buy-now-summary');
        if (buyNowItem) {
            const total = buyNowItem.price * buyNowItem.quantity * 1.05; // includes 5% tax
            document.getElementById('pay-amount').innerText = `₹${total.toFixed(2)}`;
            summaryEl.innerText = `${buyNowItem.name} (Size: ${buyNowItem.size}) - ₹${buyNowItem.price} + 5% tax`;
            summaryEl.style.display = 'block';
        } else {
            document.getElementById('pay-amount').innerText = document.getElementById('final-total').innerText;
            summaryEl.style.display = 'none';
        }
        renderDeliveryInfo();
        onPaymentMethodChange();
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
// Holds the verified email/phone between the login step and the profile step
let pendingLogin = null;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizePhone(value) {
    const digits = value.replace(/[\s\-()]/g, '').replace(/^\+?91/, '');
    return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}

function showFieldError(id, message) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerText = message || '';
    el.style.display = message ? 'block' : 'none';
}

function finishLogin(profile) {
    userName = profile.name;
    localStorage.setItem('userName', userName);
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    pendingLogin = null;
    loadCart();
    updateCartCount();
    updateAuthUI();
    renderProducts(currentFilter);
    router('home');
    showToast(`Welcome to DIVA, ${userName}!`);
}

function handleLogin(e) {
    e.preventDefault();
    const raw = document.getElementById('login-id').value.trim();
    let type = null, id = null;

    if (EMAIL_RE.test(raw)) {
        type = 'email';
        id = raw.toLowerCase();
    } else if (normalizePhone(raw)) {
        type = 'phone';
        id = normalizePhone(raw);
    }

    if (!id) {
        showFieldError('login-error', 'Enter a valid email or 10-digit phone number.');
        return;
    }
    showFieldError('login-error', '');

    // Returning customer: skip the profile step
    try {
        const saved = JSON.parse(localStorage.getItem('divaProfile') || 'null');
        if (saved && saved.id === id && saved.name) {
            finishLogin(saved);
            return;
        }
    } catch (err) {}

    // New customer: ask for name and a few details
    pendingLogin = { id, type };
    document.getElementById('profile-name').value = '';
    document.getElementById('profile-alt').value = '';
    document.getElementById('profile-address').value = '';
    document.getElementById('profile-alt-label').innerText =
        type === 'email' ? 'Phone Number (optional)' : 'Email Address (optional)';
    document.getElementById('profile-alt').placeholder =
        type === 'email' ? '9876543210' : 'user@example.com';
    showFieldError('profile-name-error', '');
    showFieldError('profile-alt-error', '');
    router('profile');
}

function handleProfileSubmit(e) {
    e.preventDefault();
    if (!pendingLogin) { router('login'); return; }

    const name = document.getElementById('profile-name').value.trim();
    const alt = document.getElementById('profile-alt').value.trim();
    const address = document.getElementById('profile-address').value.trim();
    let ok = true;

    if (name.length < 2) {
        showFieldError('profile-name-error', 'Please enter your name.');
        ok = false;
    } else {
        showFieldError('profile-name-error', '');
    }

    let altValue = '';
    if (alt) {
        if (pendingLogin.type === 'email') {
            altValue = normalizePhone(alt);
            if (!altValue) { showFieldError('profile-alt-error', 'Enter a valid 10-digit phone number.'); ok = false; }
        } else {
            altValue = EMAIL_RE.test(alt) ? alt.toLowerCase() : '';
            if (!altValue) { showFieldError('profile-alt-error', 'Enter a valid email address.'); ok = false; }
        }
        if (altValue) showFieldError('profile-alt-error', '');
    } else {
        showFieldError('profile-alt-error', '');
    }

    if (!ok) return;

    const profile = {
        id: pendingLogin.id,
        type: pendingLogin.type,
        name,
        email: pendingLogin.type === 'email' ? pendingLogin.id : altValue,
        phone: pendingLogin.type === 'phone' ? pendingLogin.id : altValue,
        address
    };
    try { localStorage.setItem('divaProfile', JSON.stringify(profile)); } catch (err) {}
    finishLogin(profile);
}

function handleLogout() {
    isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('divaCart');
    userName = "Guest";
    pendingLogin = null;
    document.querySelectorAll('#login-page form, #profile-page form').forEach(f => f.reset());
    showFieldError('login-error', '');
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
        userDisplay.innerHTML = '';
        userDisplay.append('Hi, ');
        const nameEl = document.createElement('strong');
        nameEl.textContent = userName;
        userDisplay.appendChild(nameEl);
    } else {
        btn.innerText = "Login";
        btn.setAttribute('onclick', "router('login')");
        btn.style.background = "var(--primary)";
        userDisplay.style.display = "none";
    }
}

// --- CART LOGIC ---
function addToCart(productId, quantity = 1, size = selectedSize) {
    if (!isLoggedIn) {
        showToast("Please login to add items to cart!", "red");
        router('login');
        return;
    }
    // Match by both id AND size so different sizes are separate cart entries
    const existingItem = cart.find(item => item.id === productId && item.size === size);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        const product = products.find(p => p.id === productId);
        cart.push({ ...product, quantity, size: size });
    }
    updateCartCount();
    renderProducts(currentFilter);
    showToast("Item added to cart!");
}

// --- SIZE PICKER MODAL (shown when clicking Add to Cart on the product grid) ---
let sizeModalProductId = null;
let sizeModalSelected = null;

function openSizeModal(productId) {
    if (!isLoggedIn) {
        showToast("Please login to add items to cart!", "red");
        router('login');
        return;
    }
    const product = products.find(p => p.id === productId);
    if (!product) return;
    sizeModalProductId = productId;
    sizeModalSelected = null;
    document.getElementById('size-modal-product').innerText = `${product.name} - ₹${product.price}`;
    document.querySelectorAll('#size-modal-options .size-option').forEach(b => b.classList.remove('selected'));
    document.getElementById('size-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function pickModalSize(button, size) {
    document.querySelectorAll('#size-modal-options .size-option').forEach(b => b.classList.remove('selected'));
    button.classList.add('selected');
    sizeModalSelected = size;
}

function closeSizeModal(event) {
    if (!event || event.target.id === 'size-modal' || event.target.classList.contains('close-btn')) {
        document.getElementById('size-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
        sizeModalProductId = null;
        sizeModalSelected = null;
    }
}

function confirmSizeAdd() {
    if (!sizeModalSelected) {
        showToast("Please choose a size first!", "red");
        return;
    }
    const id = sizeModalProductId;
    const size = sizeModalSelected;
    const product = products.find(p => p.id === id);
    closeSizeModal();
    addToCart(id, 1, size);
    showToast(`Added ${product.name} (Size: ${size}) to cart!`);
}

function decreaseQuantity(productId) {
    // For the product grid buttons, find any cart entry for this product
    const existingItem = [...cart].reverse().find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity <= 0) {
            cart = cart.filter(item => !(item.id === productId && item.size === existingItem.size));
        }
        updateCartCount();
        renderProducts(currentFilter);
    }
}

function saveCart() {
    try { localStorage.setItem('divaCart', JSON.stringify(cart)); } catch (e) {}
}

function loadCart() {
    try {
        const saved = JSON.parse(localStorage.getItem('divaCart') || '[]');
        cart = Array.isArray(saved) ? saved : [];
    } catch (e) {
        cart = [];
    }
}

function updateCartCount() {
    saveCart();
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
                            <!-- ✅ Display selected size -->
                            <div class="cart-item-size">Size: ${item.size || 'M'}</div>
                        </div>
                        <div class="cart-item-price">₹${itemTotal}</div>
                    </div>
                    <div class="cart-quantity-controls">
                        <button class="cart-qty-btn" onclick="updateCartQuantity(${item.id}, -1, '${item.size}')">−</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="cart-qty-btn" onclick="updateCartQuantity(${item.id}, 1, '${item.size}')">+</button>
                        <span class="remove-btn" onclick="removeFromCart(${item.id}, '${item.size}')">Remove</span>
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

// ✅ Updated to match by id + size
function updateCartQuantity(productId, change, size) {
    const existingItem = cart.find(item => item.id === productId && item.size === size);
    if (existingItem) {
        existingItem.quantity += change;
        if (existingItem.quantity <= 0) {
            cart = cart.filter(item => !(item.id === productId && item.size === size));
        }
        updateCartCount();
        renderCart();
        renderProducts(currentFilter);
    }
}

// ✅ Updated to match by id + size
function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    updateCartCount();
    renderCart();
    renderProducts(currentFilter);
    showToast("Item removed from cart.", "blue");
}

// --- PAYMENT LOGIC ---
function proceedToCheckout() {
    buyNowItem = null; // normal checkout uses the whole cart
    router('payment');
}

function cancelPayment() {
    router(buyNowItem ? 'home' : 'cart');
}

function onPaymentMethodChange() {
    const method = document.querySelector('input[name="payment"]:checked').value;
    document.getElementById('upi-apps').style.display = method === 'upi' ? 'block' : 'none';
}

document.addEventListener('change', function(e) {
    if (e.target.name === 'upi-app') {
        document.getElementById('upi-id-input').style.display = e.target.value === 'Other UPI ID' ? 'block' : 'none';
    }
});

function processPayment() {
    const p = getProfile();
    if (!p.address || !(p.phone && normalizePhone(p.phone))) {
        showToast("Please add your delivery address and contact number", "red");
        openAddressModal();
        return;
    }
    const method = document.querySelector('input[name="payment"]:checked').value;
    let appName = '';
    if (method === 'upi') {
        const chosen = document.querySelector('input[name="upi-app"]:checked');
        if (!chosen) {
            showToast("Please choose a UPI app (PhonePe, Google Pay...)", "red");
            return;
        }
        if (chosen.value === 'Other UPI ID') {
            const upiId = document.getElementById('upi-id-input').value.trim();
            if (!/^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(upiId)) {
                showToast("Please enter a valid UPI ID (e.g. name@bank)", "red");
                return;
            }
        }
        appName = chosen.value;
    }
    if (buyNowItem) {
        // Buy Now: only this dress was purchased, keep the rest of the cart
        buyNowItem = null;
    } else {
        cart = [];
    }
    updateCartCount();
    renderProducts(currentFilter);
    router('home');
    showToast(appName ? `Payment successful via ${appName}! Thank you for shopping with us.` : "Payment successful! Thank you for shopping with us.", "green");
}

// --- DELIVERY ADDRESS (checkout) ---
function getProfile() {
    try { return JSON.parse(localStorage.getItem('divaProfile') || '{}') || {}; }
    catch (e) { return {}; }
}

function renderDeliveryInfo() {
    const p = getProfile();
    const nameEl = document.getElementById('delivery-name');
    const addrEl = document.getElementById('delivery-address');
    const phoneEl = document.getElementById('delivery-phone');
    const btn = document.getElementById('change-address-btn');

    nameEl.textContent = p.deliveryName || p.name || userName;
    if (p.address) {
        addrEl.className = 'delivery-address';
        addrEl.textContent = p.address;
        btn.textContent = 'Change';
    } else {
        addrEl.className = 'delivery-empty';
        addrEl.textContent = 'No delivery address added yet.';
        btn.textContent = 'Add address';
    }
    phoneEl.textContent = p.phone ? `📞 ${p.phone}` : '📞 No contact number added';
}

function openAddressModal() {
    const p = getProfile();
    document.getElementById('addr-name').value = p.deliveryName || p.name || '';
    document.getElementById('addr-phone').value = p.phone || '';
    document.getElementById('addr-address').value = p.address || '';
    ['addr-name-error', 'addr-phone-error', 'addr-address-error'].forEach(id => showFieldError(id, ''));
    document.getElementById('address-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeAddressModal(event) {
    if (!event || event.target.id === 'address-modal' || event.target.classList.contains('close-btn')) {
        document.getElementById('address-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function saveAddress(e) {
    e.preventDefault();
    const name = document.getElementById('addr-name').value.trim();
    const phoneRaw = document.getElementById('addr-phone').value.trim();
    const address = document.getElementById('addr-address').value.trim();
    const phone = normalizePhone(phoneRaw);
    let ok = true;

    if (name.length < 2) { showFieldError('addr-name-error', 'Please enter the receiver\'s name.'); ok = false; }
    else showFieldError('addr-name-error', '');
    if (!phone) { showFieldError('addr-phone-error', 'Enter a valid 10-digit phone number.'); ok = false; }
    else showFieldError('addr-phone-error', '');
    if (address.length < 10) { showFieldError('addr-address-error', 'Please enter your full address.'); ok = false; }
    else showFieldError('addr-address-error', '');
    if (!ok) return;

    const p = getProfile();
    p.deliveryName = name;
    p.phone = phone;
    p.address = address;
    try { localStorage.setItem('divaProfile', JSON.stringify(p)); } catch (err) {}

    closeAddressModal();
    renderDeliveryInfo();
    showToast("Delivery address saved!");
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

    saveReviewsAndFeedback();
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
                <strong>${esc(r.user)}</strong>
                <span>${esc(r.date)}</span>
            </div>
            ${renderRatingStars(r.rating)}
            <p>${esc(r.comment)}</p>
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
    highlightsList.innerHTML = product.highlights.map(h => `<li>${esc(h)}</li>`).join('');

    document.getElementById('detail-review-link').onclick = function() {
        closeProductDetail();
        openReviewModal(productId);
    };

    document.getElementById('detail-add-cart').onclick = function() {
        if (!isLoggedIn) {
            closeProductDetail();
            showToast("Please login to add items to cart!", "red");
            router('login');
            return;
        }
        const size = selectedSize;
        addToCart(productId, 1, size);
        closeProductDetail();
        router('home');
        showToast(`Added ${product.name} (Size: ${size}) to cart!`);
    };

    document.getElementById('detail-buy-now').onclick = function() {
        if (!isLoggedIn) {
            showToast("Please login first!");
            closeProductDetail();
            router('login');
            return;
        }
        // Buy only this dress: skip the cart and go straight to payment
        buyNowItem = { ...product, quantity: 1, size: selectedSize };
        closeProductDetail();
        router('payment');
    };

    // ✅ Reset size to M when opening modal
    selectedSize = 'M';
    document.querySelectorAll('#size-options .size-option').forEach(btn => {
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
    document.querySelectorAll('#size-options .size-option').forEach(btn => btn.classList.remove('selected'));
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
    saveReviewsAndFeedback();

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
                <span class="feedback-user">${esc(f.name)}</span>
                <span class="feedback-date">${esc(f.date)}</span>
            </div>
            <div class="feedback-rating">${'★'.repeat(f.rating)}${'☆'.repeat(5-f.rating)}</div>
            <div class="feedback-category">Category: ${esc(f.category)}</div>
            <div class="feedback-comment">${esc(f.comment)}</div>
        </div>
    `).join('');
}