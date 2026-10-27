# DIVA: Fashion Store

A responsive fashion storefront built with **vanilla HTML, CSS and JavaScript**: no frameworks, no build step, no dependencies. It covers the full shopping journey from browsing to a (simulated) checkout, with state persisted in the browser.

**[Live demo](https://your-username.github.io/diva-fashion-store/)** · *replace with your deployed link*

<!--
Add screenshots to a /docs folder and uncomment:

![Home page](docs/home.png)
![Cart](docs/cart.png)
![Product detail](docs/product-detail.png)
-->

## Why I built it

I wanted a project that goes beyond a static page and deals with the problems a real storefront has: multi-step flows, state that has to survive a refresh, form validation, and keeping money calculations consistent across screens. I deliberately skipped frameworks to get comfortable with the fundamentals: DOM manipulation, event handling, routing and browser storage.

## Features

**Shopping**
- 20 products with category filters (Ethnic, Party, Casual, Summer, and more)
- Product detail modal with size selection, highlights and delivery info
- Cart with per-size line items (the same dress in M and L is tracked separately), quantity controls and removal
- **Buy Now** flow that checks out a single item without touching the cart
- Shipping and tax logic: free shipping above ₹999 (₹49 otherwise), 5% tax, with a "add ₹X more for free shipping" hint

**Account and checkout**
- Login with an email *or* an Indian mobile number (`+91` and spacing handled), followed by a short profile step for new users and a fast path for returning ones
- Delivery address modal with validation, reused at checkout
- Payment options (UPI with app picker and UPI ID validation, card, cash on delivery)

**Community**
- Star-rating reviews per product, with the product's average rating computed live from its reviews
- Site-wide feedback form with validation (name, email, mobile, rating, category, comment)
- Reviews and feedback you write are saved to `localStorage`

**Quality details**
- Hash-based router with working browser back/forward buttons and route guards (e.g. `#cart` redirects to login when logged out)
- Cart, session and user-written content persist across reloads
- Broken product images fall back to a branded placeholder
- Keyboard support: product cards are focusable (`Enter` / `Space` opens them) and `Esc` closes any modal
- Responsive layout down to mobile widths

## Tech stack

| | |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, Grid, Flexbox, media queries) |
| Logic | Vanilla JavaScript (ES6+) |
| Storage | `localStorage` |
| Fonts | Google Fonts (Montserrat, Playfair Display) |

## Getting started

No installation needed.

```bash
git clone https://github.com/your-username/diva-fashion-store.git
cd diva-fashion-store
```

Then either open `index.html` in your browser, or serve it locally:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

### Try it out
1. Log in with any email (e.g. `you@example.com`) or a 10-digit mobile number, and any password
2. Enter your name on the profile step
3. Filter by category, open a dress, pick a size and add it to the cart
4. Open the cart, change quantities and watch shipping and tax update
5. Check out: add a delivery address, choose UPI and a UPI app, and pay
6. Leave a review on a product, then refresh the page. It's still there

## Project structure

```
diva-fashion-store/
├── index.html   # All pages and modals (login, profile, home, cart, payment, feedback)
├── script.js    # Data, state, router, cart, checkout, reviews, feedback
├── styles.css   # Design tokens, layout, components, responsive rules
└── README.md
```

## How it works

**Single-page navigation.** Every screen is a `<section class="page">` in `index.html`. `navigate(pageId)` validates the route (login required for cart and payment, profile step only reachable from login, no checkout with an empty cart), updates the URL hash through the History API, and toggles the visible page. A `popstate` listener keeps the back and forward buttons working.

**One source of truth for money.** `calcTotals(subtotal)` computes shipping, tax and total. The cart summary, the Buy Now summary and the payment screen all use it, so the numbers can't drift apart. Amounts are rounded to paise to avoid floating-point artifacts.

**Safe rendering.** Anything user-controlled that goes into `innerHTML` (review text, feedback, names) passes through an `esc()` helper, so pasting `<img onerror=...>` into a review shows as text instead of running. The cart loaded from `localStorage` is rebuilt from the product catalogue, so edited prices or sizes in storage are ignored.

**Persistence.** `localStorage` keys:

| Key | Contents |
|---|---|
| `isLoggedIn`, `userName` | Session flags |
| `divaProfile` | Name, contact details, delivery address |
| `divaCart` | Cart entries (id, size, quantity) |
| `divaUserReviews` | Reviews written by the user |
| `divaUserFeedback` | Feedback written by the user |

## Scope and known limitations

This is a front-end project, and a few parts are intentionally simulated:

- **Authentication is a demo.** There is no backend, and the password isn't checked. The login stores a session flag in the browser.
- **Payments are simulated.** No payment gateway is integrated, and choosing "card" doesn't collect card details.
- **Data is local.** Orders, reviews and feedback live in the browser's `localStorage`, so they're per-device and not shared between users. There is no order history.
- **Product images are hotlinked** from third-party stores and may eventually go stale. A fallback placeholder is shown when they fail to load.

## Roadmap

- [ ] Split `script.js` into ES modules (products, cart, auth, reviews)
- [ ] Replace inline `onclick` handlers with event delegation
- [ ] Search and sort (price, rating)
- [ ] Order history page
- [ ] Wishlist
- [ ] Node/Express + database backend with real authentication and JWT sessions
- [ ] Self-hosted, optimized product images
- [ ] Unit tests for the cart and totals logic

## What I learned

- Designing client-side routing and guards with the History API
- Modelling cart state so that variants (sizes) don't collide
- Why user input must never be inserted into `innerHTML` unescaped, and treating `localStorage` as untrusted input
- Keeping derived values (ratings, totals) computed from a single source instead of duplicated
- Building keyboard-accessible interactions (focus, `Esc`, `Enter`) alongside mouse ones

## Author

**Your Name**: [GitHub](https://github.com/your-username) · [LinkedIn](https://www.linkedin.com/in/your-profile) · you@example.com

*Product names and images are used for demonstration purposes only. This is a portfolio project, not a real store.*