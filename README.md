# 💄 Zoya Makeup Studio Website

A modern, elegant, and visually stunning website for a beauty brand specializing in professional makeup services.

## ✨ Features

### Design & UI/UX
- **Luxurious Design**: Soft pastel color palette (blush pink, nude beige, white, gold accents)
- **Smooth Animations**: Fade-in effects, hover transitions, and scroll animations
- **Responsive Layout**: Fully mobile and desktop friendly
- **Modern Typography**: Playfair Display and Poppins fonts
- **Glassmorphism Effects**: Soft shadows and elegant card layouts

### Sections

1. **🏠 Hero Section**
   - Full-width banner with beautiful imagery
   - Studio name and tagline
   - Call-to-action button
   - Animated scroll indicator

2. **💁 About Us**
   - Professional introduction
   - Feature highlights with icons
   - High-quality images

3. **💅 Services**
   - Bridal Makeup
   - Party Makeup
   - HD Makeup
   - Airbrush Makeup
   - Hair Styling
   - Pre-Wedding Makeup
   - Each with images, descriptions, and pricing

4. **💰 Pricing Packages**
   - Bridal Package (₹25,000)
   - Party Glam (₹5,500)
   - HD Makeup (₹8,000)
   - Modern pricing cards with hover effects

5. **📸 Gallery**
   - Grid layout with hover zoom
   - Click to view full-size images
   - Smooth overlay effects

6. **⭐ Testimonials**
   - Customer reviews with 5-star ratings
   - Client photos and feedback

7. **📅 Booking Section**
   - Appointment form with validation
   - Name, phone, email, date, service selection
   - WhatsApp integration for direct booking

8. **📞 Contact**
   - Address, phone, email, Instagram
   - Embedded Google Map
   - Contact information cards

9. **🔻 Footer**
   - Social media links
   - Quick navigation
   - Copyright information

### Interactive Features

- **Sticky Navigation**: Navbar stays visible while scrolling
- **Mobile Menu**: Responsive hamburger menu
- **WhatsApp Float Button**: Direct contact via WhatsApp
- **Form Validation**: JavaScript validation for booking form
- **Smooth Scrolling**: Elegant navigation between sections
- **Scroll Animations**: Elements fade in as you scroll
- **Image Modal**: Click gallery images to view full size
- **Active Nav Links**: Highlights current section

## 🚀 Getting Started

### Installation

1. Clone or download the repository
2. Open `index.html` in your web browser
3. No build process required - pure HTML, CSS, and JavaScript!

### File Structure

```
zoya-makeup-studio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
└── README.md          # Documentation
```

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #f8b4c1;
    --secondary-color: #e8a0ae;
    --accent-color: #d4af37;
    /* ... */
}
```

### Contact Information
Update the following in `index.html`:
- Phone numbers
- Email addresses
- Physical address
- Social media links
- WhatsApp number in the floating button

### Images
Replace the Unsplash URLs with your own images:
- Hero section background
- About section image
- Service images
- Gallery images

### Pricing
Modify prices in the Services and Pricing sections to match your actual rates.

## 📱 WhatsApp Integration

The booking form automatically creates a formatted WhatsApp message with:
- Customer name
- Phone number
- Email
- Preferred date
- Selected service
- Additional message

Update the WhatsApp number in:
1. `index.html` - WhatsApp float button (line 15)
2. `script.js` - Form submission handler (line 127)

Current number: `+91 98765 43210` (replace with your actual number)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Form Validation

The booking form includes:
- Required field validation
- Email format validation
- Phone number format (10 digits)
- Date validation (prevents past dates)
- Service selection validation
- Success/error notifications

## 🎯 Performance

- Optimized images from Unsplash CDN
- Minimal external dependencies
- CSS animations using GPU acceleration
- Lazy loading for images
- Clean, organized code

## 💡 Tips for Deployment

1. **Replace placeholder images** with your actual makeup work
2. **Update contact information** with real details
3. **Test the WhatsApp integration** with your number
4. **Optimize images** for faster loading
5. **Add Google Analytics** for tracking (optional)
6. **Set up a custom domain** for professional appearance

## 🔧 Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Playfair Display, Poppins)
- Unsplash Images (placeholder)

## 📄 License

This project is free to use for personal and commercial purposes.

## 🤝 Support

For questions or customization requests, feel free to reach out!

---

**Made with 💕 for Zoya Makeup Studio**

*Enhancing Your Natural Beauty*
