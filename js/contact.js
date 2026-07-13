const citiesByState = {
        "TAMIL NADU": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli (Trichy)", "Salem", "Tirunelveli", "Erode", "Vellore"],
        "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Tirupati", "Kurnool"],
        "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Tawang"],
        "Assam": ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tezpur"],
        "Kerala": ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Alappuzha", "Kollam"],
        "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda"],
        "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner"]
    };

    const stateSelect = document.getElementById('stateSelect');
    const citySelect = document.getElementById('citySelect');
    const contactForm = document.getElementById('contactForm');
    const container = document.querySelector('.form-container');

    stateSelect.addEventListener('change', function() {
        const selectedState = this.value;
        citySelect.innerHTML = '<option value="">select</option>';
        
        if (selectedState && citiesByState[selectedState]) {
            citiesByState[selectedState].forEach(city => {
                const opt = document.createElement('option');
                opt.value = city;
                opt.textContent = city;
                citySelect.appendChild(opt);
            });
        }
    });

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = contactForm.elements['name'].value;
        const email = contactForm.elements['email'].value;
        const state = contactForm.elements['state'].value;
        const city = contactForm.elements['City'].value;
        const address = contactForm.elements['address'].value;
        const phone = contactForm.elements['phone'].value;
        
        container.innerHTML = `
            <div style="text-align: center; padding: 10px 5px;">
                <div style="font-size: 45px; color: #28a745; margin-bottom: 12px;">✔</div>
                <h2 style="color: #28a745; margin-bottom: 8px; font-size: 20px;">Details Submitted!</h2>
                <p style="font-size: 13px; color: #555; margin-bottom: 18px;">Thank you, <strong>${name}</strong>. Our team will contact you very soon!</p>
                
                <div style="text-align: left; background: #f8f9fa; border: 1px solid #ddd; border-radius: 6px; padding: 12px; font-size: 13px; line-height: 1.6; color: #333; margin-bottom: 18px;">
                    <strong style="font-size:14px; display:block; margin-bottom:6px; border-bottom:1px solid #eee; padding-bottom:4px;">Request Summary:</strong>
                    • <strong>Email:</strong> ${email}<br>
                    • <strong>Phone:</strong> ${phone}<br>
                    • <strong>Location:</strong> ${city}, ${state}<br>
                    • <strong>Address:</strong> ${address}
                </div>
                
                <button onclick="window.location.reload()" style="background: linear-gradient(90deg, #f0c14b 60%, #fffbe6 100%); color: #222; border: 1px solid #f0c14b; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-size: 14px; font-weight: bold; width: 100%; transition: opacity 0.2s; box-shadow: 0 2px 8px #f0c14b44;">Send Another Request</button>
            </div>
        `;
    });

