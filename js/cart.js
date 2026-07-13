let cart = JSON.parse(localStorage.getItem('topfix_cart')) || [];

    function renderCart() {
        const cartGrid = document.getElementById('cartGrid');
        const emptyCartView = document.getElementById('emptyCartView');
        const itemsList = document.getElementById('cartItemsList');
        const summaryPanel = document.getElementById('cartSummary');

        if (cart.length === 0) {
            cartGrid.style.display = 'none';
            emptyCartView.style.display = 'block';
            return;
        }

        cartGrid.style.display = 'grid';
        emptyCartView.style.display = 'none';

        // 1. Render items list
        let itemsHtml = '';
        cart.forEach((item, index) => {
            itemsHtml += `
            <div class="cart-item">
                <img class="cart-item-img" src="${item.img}" alt="${item.title}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-desc">${item.desc}</div>
                    <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                </div>
                <button class="remove-btn" onclick="removeFromCartPage(${index})">Remove</button>
            </div>
            `;
        });
        itemsList.innerHTML = itemsHtml;

        // 2. Render summary panel
        const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
        const gst = Math.round(subtotal * 0.18); // 18% GST
        const total = subtotal + gst;

        summaryPanel.innerHTML = `
            <div class="summary-title">Order Summary</div>
            <div class="summary-row">
                <span>Items Subtotal:</span>
                <span>₹${subtotal.toLocaleString()}</span>
            </div>
            <div class="summary-row">
                <span>GST (18%):</span>
                <span>₹${gst.toLocaleString()}</span>
            </div>
            <div class="summary-row">
                <span>Shipping:</span>
                <span style="color:#28a745; font-weight:bold;">FREE</span>
            </div>
            <div class="summary-total">
                <span>Grand Total:</span>
                <span style="color:#b12704;">₹${total.toLocaleString()}</span>
            </div>
            <button class="checkout-btn" onclick="openCheckoutModal()">Proceed to Purchase</button>
        `;
    }

    function removeFromCartPage(index) {
        cart.splice(index, 1);
        localStorage.setItem('topfix_cart', JSON.stringify(cart));
        renderCart();
    }

    function openCheckoutModal() {
        document.getElementById('checkoutModalOverlay').style.display = 'flex';
    }

    function closeCheckoutModal() {
        document.getElementById('checkoutModalOverlay').style.display = 'none';
    }

    // Intercept checkout form submit to display confirmation receipt
    document.getElementById('checkoutForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('fullName').value;
        const address = document.getElementById('shippingAddress').value;
        const phone = document.getElementById('phoneNumber').value;
        
        const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
        const gst = Math.round(subtotal * 0.18);
        const total = subtotal + gst;

        // Clear cart
        cart = [];
        localStorage.setItem('topfix_cart', JSON.stringify(cart));

        // Show receipt in modal
        const modalContent = document.getElementById('checkoutModalContent');
        modalContent.innerHTML = `
            <div style="text-align: center; padding: 20px 10px;">
                <div style="font-size: 55px; color: #28a745; margin-bottom: 15px;">✔</div>
                <h2 style="color: #28a745; margin-bottom: 10px; font-size: 22px;">Order Placed Successfully!</h2>
                <p style="font-size: 14px; color: #555; margin-bottom: 20px;">Thank you, <strong>${name}</strong>. Your shipment is on its way!</p>
                
                <div style="text-align: left; background: #f8f9fa; border: 1px solid #ddd; border-radius: 8px; padding: 16px; font-size: 13px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                    <strong style="font-size: 14px; display: block; border-bottom: 1px solid #eee; padding-bottom: 6px; margin-bottom: 8px;">Order Details:</strong>
                    • <strong>Ship To:</strong> ${address}<br>
                    • <strong>Contact Phone:</strong> ${phone}<br>
                    • <strong>Amount Paid:</strong> ₹${total.toLocaleString()}<br>
                    • <strong>Est. Delivery:</strong> 3-5 Working Days
                </div>
                
                <button onclick="window.location.href='product.html'" style="background: linear-gradient(135deg, #f0c14b 0%, #eebe45 100%); color: #111; border: 1px solid #d4a732; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-size: 15px; font-weight: bold; width: 100%; box-shadow: 0 4px 15px rgba(240, 193, 75, 0.25);">Back to Shopping</button>
            </div>
        `;
    });

    // Render cart on page load
    document.addEventListener('DOMContentLoaded', renderCart);

