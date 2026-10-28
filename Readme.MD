# DIVA: Fashion Store

A responsive online fashion store built with **plain HTML, CSS and JavaScript**: no frameworks, no libraries, no build tools. It covers the full shopping journey from browsing products to a simulated checkout.

## About the project

I built this to practice the fundamentals of front-end development: working with the DOM, handling events, validating forms, and keeping data after a page refresh. I chose not to use a framework so I could understand how these things work underneath.

## Features

**Shopping**
- Product listing with category filters
- Product details popup with size selection and highlights
- Cart with quantity controls and remove option; the same product in different sizes is kept as separate items
- "Buy Now" to check out one item without using the cart
- Cart summary with subtotal, 5% tax and total

**Account and checkout**
- Login and profile forms with validation
- Delivery address form
- Payment page with UPI, card and cash on delivery options (simulated)

**Community**
- Star-rating reviews on each product; the product rating is calculated from its reviews
- Feedback form with validation
- User input is escaped before it is shown on the page, so pasted HTML or scripts appear as plain text

**General**
- Cart, login, reviews and feedback are saved in `localStorage` and stay after a refresh
- Browser back and forward buttons work between pages
- Responsive layout for desktop and mobile

## Tech stack

| Area | Used |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (Flexbox, Grid, media queries) |
| Logic | JavaScript (ES6) |
| Storage | `localStorage` |

## Run it on your computer

1. Click the green **Code** button on this page and choose **Download ZIP**.
2. Unzip the folder.
3. Open `index.html` in your browser.

**Try it:** log in with any email and any password, add a dress to the cart, then go through checkout. Write a review, refresh the page, and it will still be there.

## Project structure

```
index.html   - all pages and popups
styles.css   - design and responsive layout
script.js    - products, cart, login, reviews, feedback
README.md
```

## What I learned

- Building a multi-page flow on a single HTML page with JavaScript
- Managing cart data, including items that differ by size
- Saving and loading data with `localStorage`
- Validating forms and showing helpful error messages
- Why user input must be escaped before adding it to the page with `innerHTML`

## Limitations

- Login and payment are for demonstration only. There is no backend, and passwords are not checked.
- Data is stored only in the user's own browser.
- Product images come from other websites and may stop loading later.

## Future improvements

- Search and sort products by price and rating
- Order history page
- Wishlist
- Backend with real authentication and a database

## Author

**Anusha R**
GitHub: [Anusha-R16](https://github.com/Anusha-R16)

*Product names and images are for demonstration only. This is a practice project, not a real store.*