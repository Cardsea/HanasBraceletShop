// Simple script for Hana's Bracelet Shop
console.log('✨ Hana\'s Bracelet Shop is ready!');

// Add a simple form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                content: `**New Message from Hana's Bracelet Shop!** 💖\n\n**Name:** ${formData.get('name')}\n**Email:** ${formData.get('email')}\n**Message:** ${formData.get('message')}`
            };

            // Send to Discord webhook
            fetch('https://discord.com/api/webhooks/1359725238987788461/STvdLyONfsk7xoNMZaHDbxAIn-O140N9s7b4q6j5JxpCnKik4n19oUxTYcUIODYy8e9c', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok) {
                    alert('Thanks for your message! I\'ll get back to you soon! 💖');
                    contactForm.reset();
                } else {
                    alert('Oops! Something went wrong. Please try again! 😅');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Oops! Something went wrong. Please try again! 😅');
            });
        });
    }
}); 