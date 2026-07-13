const products = [
            // Laptops
            {
                title: "Dell Inspiron 15 5000",
                img: "product/laptop/laptop1.jpg",
                price: 52999,
                desc: "15.6\" FHD, Intel i5 12th Gen, 8GB RAM, 512GB SSD, Win 11.",
                rating: 4.5,
                category: "laptops"
            },
            {
                title: "HP Pavilion x360",
                img: "product/laptop/laptop2.png",
                price: 59999,
                desc: "14\" Touch, Intel i5 11th Gen, 16GB RAM, 512GB SSD, Win 11.",
                rating: 4.3,
                category: "laptops"
            },
            {
                title: "Lenovo IdeaPad Slim 3",
                img: "product/laptop/laptop3.jpg",
                price: 42999,
                desc: "15.6\" FHD, Ryzen 5, 8GB RAM, 512GB SSD, Win 11.",
                rating: 4.2,
                category: "laptops"
            },
            {
                title: "ASUS VivoBook 15",
                img: "product/laptop/laptop4.png",
                price: 38999,
                desc: "15.6\" FHD, Intel i3 12th Gen, 8GB RAM, 256GB SSD.",
                rating: 4.0,
                category: "laptops"
            },
            {
                title: "Apple MacBook Air M2",
                img: "product/laptop/laptop5.jpg",
                price: 104999,
                desc: "13.6\" Retina, Apple M2, 8GB RAM, 256GB SSD, macOS.",
                rating: 4.8,
                category: "laptops"
            },
            {
                title: "Acer Aspire 7",
                img: "product/laptop/laptop6.jpg",
                price: 57999,
                desc: "15.6\" FHD, Ryzen 7, 16GB RAM, 512GB SSD, GTX 1650.",
                rating: 4.4,
                category: "laptops"
            },
            {
                title: "MSI Modern 14",
                img: "product/laptop/laptop7.jpg",
                price: 49999,
                desc: "14\" FHD, Intel i5 11th Gen, 8GB RAM, 512GB SSD.",
                rating: 4.1,
                category: "laptops"
            },
            {
                title: "HP Victus Gaming",
                img: "product/laptop/laptop8.jpg",
                price: 74999,
                desc: "16.1\" FHD, Ryzen 5, 16GB RAM, 512GB SSD, RTX 3050.",
                rating: 4.5,
                category: "laptops"
            },

            {
                title: "Lenovo ThinkCentre M70t",
                img: "product/pc/pc1.jpg",
                price: 45999,
                desc: "Intel i5 10th Gen, 8GB RAM, 1TB HDD, Win 11 Pro.",
                rating: 4.2,
                category: "pcs"
            },
            {
                title: "HP All-in-One 24-df1669",
                img: "product/pc/pc2.jpg",
                price: 52999,
                desc: "23.8\" FHD, Intel i3 11th Gen, 8GB RAM, 512GB SSD.",
                rating: 4.0,
                category: "pcs"
            },
            {
                title: "Assembled Gaming PC",
                img: "product/pc/pc3.jpg",
                price: 69999,
                desc: "Ryzen 5 5600G, 16GB RAM, 512GB SSD, GTX 1660 Super.",
                rating: 4.3,
                category: "pcs"
            },
            {
                title: "Dell OptiPlex 3080",
                img: "product/pc/pc4.jpg",
                price: 38999,
                desc: "Intel i3 10th Gen, 4GB RAM, 1TB HDD, Win 10 Pro.",
                rating: 3.9,
                category: "pcs"
            },
            {
                title: "Apple iMac 24-inch M1",
                img: "product/pc/pc5.jpg",
                price: 124999,
                desc: "24\" 4.5K Retina, Apple M1, 8GB RAM, 256GB SSD.",
                rating: 4.7,
                category: "pcs"
            },
            {
                title: "Acer Aspire C24 All-in-One",
                img: "product/pc/pc6.png",
                price: 59999,
                desc: "23.8\" FHD, Intel i5 12th Gen, 8GB RAM, 512GB SSD.",
                rating: 4.1,
                category: "pcs"
            },
            {
                title: "Zebronics ZEB-AIO5221",
                img: "product/pc/pc7.jpg",
                price: 29999,
                desc: "21.5\" FHD, Intel J4105, 4GB RAM, 120GB SSD.",
                rating: 3.8,
                category: "pcs"
            },
            {
                title: "HP Pavilion Gaming Desktop",
                img: "product/pc/pc8.jpg",
                price: 84999,
                desc: "Intel i7 12th Gen, 16GB RAM, 1TB SSD, RTX 3060.",
                rating: 4.6,
                category: "pcs"
            },

            {
                title: "Apple iPhone 14",
                img: "product/mobile/mobile1.jpg",
                price: 71999,
                desc: "6.1\" Super Retina XDR, A15 Bionic, 128GB, 12MP Dual Cam.",
                rating: 4.7,
                category: "mobiles"
            },
            {
                title: "Samsung Galaxy S23",
                img: "product/mobile/mobile2.jpg",
                price: 74999,
                desc: "6.1\" FHD+, Snapdragon 8 Gen 2, 8GB RAM, 128GB.",
                rating: 4.6,
                category: "mobiles"
            },
            {
                title: "OnePlus 11R 5G",
                img: "product/mobile/mobile3.jpg",
                price: 39999,
                desc: "6.74\" AMOLED, Snapdragon 8+ Gen 1, 8GB RAM, 128GB.",
                rating: 4.4,
                category: "mobiles"
            },
            {
                title: "Xiaomi Redmi Note 12 Pro",
                img: "product/mobile/mobile4..jpg",
                price: 23999,
                desc: "6.67\" AMOLED, Dimensity 1080, 8GB RAM, 256GB.",
                rating: 4.3,
                category: "mobiles"
            },
            {
                title: "Realme Narzo 60X",
                img: "product/mobile/mobile5.jpg",
                price: 13999,
                desc: "6.72\" FHD+, Dimensity 6100+, 6GB RAM, 128GB.",
                rating: 4.1,
                category: "mobiles"
            },
            {
                title: "Google Pixel 7a",
                img: "product/mobile/mobile6.jpg",
                price: 42999,
                desc: "6.1\" OLED, Google Tensor G2, 8GB RAM, 128GB.",
                rating: 4.5,
                category: "mobiles"
            },
            {
                title: "Vivo V27 Pro",
                img: "product/mobile/mobile7.jpg",
                price: 36999,
                desc: "6.78\" AMOLED, Dimensity 8200, 8GB RAM, 128GB.",
                rating: 4.2,
                category: "mobiles"
            },
            {
                title: "Motorola Edge 40",
                img: "product/mobile/mobile8.jpg",
                price: 29999,
                desc: "6.55\" pOLED, Dimensity 8020, 8GB RAM, 256GB.",
                rating: 4.3,
                category: "mobiles"
            },

            // Accessories
            {
                title: "Logitech MX Master 3S Mouse",
                img: "product/accessories/extra1.jpg",
                price: 7999,
                desc: "Wireless, Ergonomic, 8K DPI, USB-C Rechargeable.",
                rating: 4.8,
                category: "accessories"
            },
            {
                title: "HP K500F Wired Keyboard",
                img: "product/accessories/extra2.jpg",
                price: 799,
                desc: "Full-size, LED Backlit, USB, Spill Resistant.",
                rating: 4.2,
                category: "accessories"
            },
            {
                title: "Canon PIXMA MG2577s Printer",
                img: "product/accessories/extra3.jpg",
                price: 3999,
                desc: "All-in-One Inkjet, Print/Scan/Copy, USB.",
                rating: 4.2,
                category: "accessories"
            },
            {
                title: "SanDisk Ultra 128GB MicroSD",
                img: "product/accessories/extra4.jpg",
                price: 1199,
                desc: "A1, UHS-I, up to 120MB/s, for mobiles/cameras.",
                rating: 4.6,
                category: "accessories"
            },
            {
                title: "boAt Rockerz 450 Bluetooth Headphones",
                img: "product/accessories/extra5.jpg",
                price: 1499,
                desc: "Wireless, 15H Playback, Lightweight, Mic.",
                rating: 4.3,
                category: "accessories"
            },
            {
                title: "Samsung 25W USB-C Fast Charger",
                img: "product/accessories/extra6.jpg",
                price: 1299,
                desc: "Super Fast Charging, USB Type-C, for mobiles.",
                rating: 4.5,
                category: "accessories"
            },
            {
                title: "TP-Link Archer C6 WiFi Router",
                img: "product/accessories/extra7.jpg",
                price: 2499,
                desc: "1200Mbps, Dual Band, 5 Antennas, MU-MIMO.",
                rating: 4.4,
                category: "accessories"
            },
            {
                title: "WD Elements 1TB Portable HDD",
                img: "product/accessories/extra8.jpg",
                price: 3899,
                desc: "USB 3.0, Plug & Play, Compact Design.",
                rating: 4.6,
                category: "accessories"
            },

            // More Laptops
            {
                title: "Dell XPS 13 Plus",
                img: "product/laptop/laptop9.jpg",
                price: 129999,
                desc: "13.4\" OLED, Intel i7 12th Gen, 16GB RAM, 1TB SSD.",
                rating: 4.7,
                category: "laptops"
            },
            {
                title: "Microsoft Surface Laptop 5",
                img: "product/laptop/laptop10.jpg",
                price: 114999,
                desc: "13.5\" Touch, Intel i5 12th Gen, 8GB RAM, 512GB SSD.",
                rating: 4.5,
                category: "laptops"
            },

            // More PCs
            {
                title: "Asus ROG Strix G15 Gaming PC",
                img: "product/pc/pc9.jpg",
                price: 99999,
                desc: "Ryzen 7 5800X, 16GB RAM, 1TB SSD, RTX 3070.",
                rating: 4.8,
                category: "pcs"
            },
            {
                title: "Intel NUC 11 Mini PC",
                img: "product/pc/pc10.jpg",
                price: 34999,
                desc: "Intel i5 11th Gen, 8GB RAM, 256GB SSD, Tiny Form.",
                rating: 4.2,
                category: "pcs"
            },

            // More Mobiles
            {
                title: "Oppo Reno 10 Pro+",
                img: "product/mobile/mobile9.jpg",
                price: 49999,
                desc: "6.74\" AMOLED, Snapdragon 8+ Gen 1, 12GB RAM, 256GB.",
                rating: 4.4,
                category: "mobiles"
            },
            {
                title: "Nothing Phone (2)",
                img: "product/mobile/mobile10.jpg",
                price: 44999,
                desc: "6.7\" OLED, Snapdragon 8+ Gen 1, 12GB RAM, 256GB.",
                rating: 4.3,
                category: "mobiles"
            },

            // More Accessories
            {
                title: "Apple AirPods Pro (2nd Gen)",
                img: "product/accessories/extra9.jpg",
                price: 24999,
                desc: "Active Noise Cancellation, MagSafe, Wireless Charging.",
                rating: 4.7,
                category: "accessories"
            },
            {
                title: "Mi Power Bank 3i 20000mAh",
                img: "product/accessories/extra10.jpg",
                price: 1999,
                desc: "18W Fast Charging, Triple Output, Dual Input.",
                rating: 4.5,
                category: "accessories"
            },
        ];

        let cart = JSON.parse(localStorage.getItem('topfix_cart')) || [];
        let cartTimeout;

        function renderProducts(filter = "", category = "") {
            const productsDiv = document.getElementById('products');
            productsDiv.innerHTML = "";
            let filtered = products.filter(p =>
                (category ? p.category === category : true) &&
                (
                    p.title.toLowerCase().includes(filter.toLowerCase()) ||
                    p.desc.toLowerCase().includes(filter.toLowerCase())
                )
            );
            if (filtered.length === 0) {
                productsDiv.innerHTML = "<p style='color:#232f3e;text-align:center;'>No products found.</p>";
                return;
            }
            filtered.forEach((p, idx) => {
                productsDiv.innerHTML += `
                <div class="product-card">
                    <img src="${p.img}" alt="${p.title}">
                    <div class="product-title">${p.title}</div>
                    <div class="rating">${renderStars(p.rating)} (${p.rating})</div>
                    <div class="product-price">₹${p.price.toLocaleString()}</div>
                    <div class="product-desc">${p.desc}</div>
                    <div class="product-actions">
                        <button class="add-to-cart" onclick="addToCart(${products.indexOf(p)})">Add to Cart</button>
                        <button class="buy-now" onclick="buyNow(${products.indexOf(p)})">Buy Now</button>
                    </div>
                </div>
                `;
            });
        }

        function renderStars(rating) {
            let full = Math.floor(rating);
            let half = rating % 1 >= 0.5 ? 1 : 0;
            let stars = "";
            for (let i = 0; i < full; i++) stars += "&#9733;";
            if (half) stars += "&#189;";
            for (let i = full + half; i < 5; i++) stars += "&#9734;";
            return stars;
        }

        function addToCart(idx) {
            cart.push(products[idx]);
            localStorage.setItem('topfix_cart', JSON.stringify(cart));
            document.getElementById('cartCount').textContent = cart.length;
            showCart();
        }

        function removeFromCart(i) {
            cart.splice(i, 1);
            localStorage.setItem('topfix_cart', JSON.stringify(cart));
            document.getElementById('cartCount').textContent = cart.length;
            showCart();
        }

        function buyNow(idx) {
            cart.push(products[idx]);
            localStorage.setItem('topfix_cart', JSON.stringify(cart));
            window.location.href = 'cart.html';
        }

        function searchProducts() {
            const val = document.getElementById('searchInput').value;
            renderProducts(val);
        }

        function showCart() {
            let cartDiv = document.getElementById('cartModal');
            if (!cartDiv) {
                cartDiv = document.createElement('div');
                cartDiv.id = 'cartModal';
                cartDiv.style.position = 'fixed';
                cartDiv.style.top = '70px';
                cartDiv.style.right = '30px';
                cartDiv.style.background = '#fff';
                cartDiv.style.border = '1px solid #232f3e';
                cartDiv.style.boxShadow = '0 2px 12px rgba(0,0,0,0.18)';
                cartDiv.style.zIndex = '9999';
                cartDiv.style.padding = '18px 22px 12px 22px';
                cartDiv.style.borderRadius = '8px';
                cartDiv.style.minWidth = '280px';
                cartDiv.style.maxWidth = '360px';
                cartDiv.style.maxHeight = '400px';
                cartDiv.style.overflowY = 'auto';
                cartDiv.innerHTML = '';
                
                // Pause auto-close on hover
                cartDiv.addEventListener('mouseenter', () => {
                    if (cartTimeout) clearTimeout(cartTimeout);
                });
                // Resume auto-close on mouse leave
                cartDiv.addEventListener('mouseleave', () => {
                    startCartTimer();
                });
                
                document.body.appendChild(cartDiv);
            }
            let html = `<div style="font-weight:bold;font-size:1.1rem;color:#232f3e;margin-bottom:12px;border-bottom:1.5px solid #eee;padding-bottom:6px;">Cart Items (${cart.length})</div>`;
            if (cart.length === 0) {
                html += `<div style="color:#888;text-align:center;padding:15px 0;">Cart is empty.</div>`;
            } else {
                html += `<ul style="padding:0;margin:0 0 10px 0;list-style:none;">`;
                cart.forEach((item, i) => {
                    html += `<li style="margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;gap:12px;border-bottom:1px solid #f5f5f5;padding-bottom:8px;">
                        <div style="flex:1;">
                            <div style="font-weight:600;font-size:13px;color:#222;">${item.title}</div>
                            <div style="color:#b12704;font-weight:bold;font-size:12px;margin-top:2px;">₹${item.price.toLocaleString()}</div>
                        </div>
                        <button onclick="removeFromCart(${i})" style="background:#cc0c39;color:#fff;border:none;padding:5px 10px;border-radius:4px;cursor:pointer;font-size:11px;font-weight:bold;transition:background 0.2s;">Remove</button>
                    </li>`;
                });
                html += `</ul>`;
                
                let total = cart.reduce((sum, item) => sum + item.price, 0);
                html += `<div style="font-weight:bold;margin-top:12px;margin-bottom:14px;font-size:1rem;display:flex;justify-content:space-between;border-top:1.5px solid #232f3e;padding-top:8px;color:#222;">
                    <span>Subtotal:</span>
                    <span style="color:#b12704;">₹${total.toLocaleString()}</span>
                </div>`;
            }
            html += `<button onclick="closeCart()" style="background:#232f3e;color:#fff;border:none;padding:6px 16px;border-radius:4px;cursor:pointer;font-weight:bold;font-size:13px;width:100%;text-align:center;">Close</button>`;
            cartDiv.innerHTML = html;
            cartDiv.style.display = 'block';
            
            // Auto close after 1 second
            startCartTimer();
        }

        function startCartTimer() {
            if (cartTimeout) clearTimeout(cartTimeout);
            cartTimeout = setTimeout(() => {
                closeCart();
            }, 1000);
        }

        // Close functionality clears timeout
        function closeCart() {
            let cartDiv = document.getElementById('cartModal');
            if (cartDiv) cartDiv.style.display = 'none';
            if (cartTimeout) clearTimeout(cartTimeout);
        }

        function handleHash() {
            const hash = window.location.hash;
            if (hash === "#laptops") {
                renderProducts("", "laptops");
            } else if (hash === "#pcs") {
                renderProducts("", "pcs");
            } else if (hash === "#mobiles") {
                renderProducts("", "mobiles");
            } else if (hash === "#accessories") {
                renderProducts("", "accessories");
            } else {
                renderProducts();
            }
        }

        window.addEventListener('hashchange', handleHash);

        // Add event listeners for nav links
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('cartInfo').style.cursor = 'pointer';
            document.getElementById('cartInfo').onclick = function() {
                window.location.href = 'cart.html';
            };
            document.getElementById('cartCount').textContent = cart.length;
            handleHash();

            // Add click handlers for category links
            document.querySelectorAll('.nav-links a, .dropdown-menu a').forEach(link => {
                link.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href.includes("#")) {
                        const hash = href.substring(href.indexOf("#"));
                        if (["#laptops", "#pcs", "#mobiles", "#accessories"].includes(hash)) {
                            if (window.location.pathname.endsWith("product.html") || !window.location.pathname.includes(".html")) {
                                e.preventDefault();
                                window.location.hash = hash;
                            }
                        }
                    }
                });
            });
        });

