# Portfolio Website - Zahad

A modern, glassmorphism-themed portfolio website with animated backgrounds and smooth interactions.

## Features

- **Glassmorphism Design**: Modern glass-like effects with backdrop blur
- **Animated Background**: Floating geometric shapes with gradient orbs
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Scroll-triggered fade-in effects and hover interactions
- **Multiple Pages**: About, Experience, Projects, Skills, Certifications, Resume
- **Contact Integration**: Email, phone, and LinkedIn links on every page

## File Structure

```
portfolio/
├── index.html              # About Me / Home page
├── work-experience.html    # Work Experience timeline
├── projects.html           # Project showcase
├── skills.html            # Technical skills with progress bars
├── certifications.html    # Certifications and training
├── resume.html            # Resume viewer and download
├── css/
│   └── style.css          # Main stylesheet with glassmorphism theme
├── js/
│   └── main.js            # JavaScript for animations and interactions
└── assets/
    ├── images/            # Place your images here
    ├── icons/             # Place your icons here
    └── resume.pdf         # Your resume PDF

```

## Setup Instructions

### 1. Customize Your Information

**Update Contact Information** (in all HTML files):
- Replace `your.email@example.com` with your actual email
- Replace `+971XXXXXXXXX` with your phone number
- Replace `https://linkedin.com/in/yourprofile` with your LinkedIn URL

**Update Personal Information**:
- Edit `index.html` - Update name, title, about me content
- Edit `work-experience.html` - Add your work experience details
- Edit `projects.html` - Update with your actual projects
- Edit `skills.html` - Adjust skill levels and add/remove skills
- Edit `certifications.html` - Add your certifications
- Edit `resume.html` - Add your resume details

### 2. Add Your Resume

1. Place your resume PDF in `assets/resume.pdf`
2. In `resume.html`, uncomment the PDF embed line:
   ```html
   <iframe src="assets/resume.pdf" class="pdf-embed" title="Resume PDF"></iframe>
   ```
3. Remove or comment out the placeholder section

### 3. Add Your Photo (Optional)

1. Place your photo in `assets/images/profile.jpg`
2. Add it to `index.html` in the hero section:
   ```html
   <img src="assets/images/profile.jpg" alt="Zahad" style="width: 200px; border-radius: 50%; margin-bottom: 2rem;">
   ```

### 4. Update Project Links

In `projects.html`, update the GitHub and live demo links for each project:
```html
<a href="https://github.com/yourusername/project" class="project-link">
```

### 5. Test Locally

Open `index.html` in your web browser to test the website locally.

## Customization Guide

### Changing Colors

All colors are defined as CSS variables in `css/style.css`. Update these variables:

```css
:root {
  --color-accent-magenta: #ff006e;  /* Primary accent color */
  --color-accent-purple: #8b00ff;   /* Secondary accent color */
  /* ... other colors */
}
```

### Adjusting Animations

Modify animation speeds in `css/style.css`:
```css
--transition-fast: 0.2s ease;
--transition-medium: 0.3s ease;
--transition-slow: 0.5s ease;
```

### Adding More Sections

1. Copy an existing HTML file
2. Update the navigation links in all files
3. Add your new content
4. Ensure footer and navigation are consistent

### Mobile Menu

The mobile menu automatically appears on screens smaller than 768px. The hamburger icon toggles the navigation menu.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Note**: The glassmorphism effect (backdrop-filter) may have limited support in older browsers. The site will still function with fallback styling.

## Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Upload all files
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify

1. Create account at netlify.com
2. Drag and drop the portfolio folder
3. Site will be live instantly with a unique URL

### Custom Domain

After deploying, you can add a custom domain in your hosting provider's settings.

## Performance Tips

1. **Optimize Images**: Compress images before uploading
2. **Minify CSS/JS**: Use tools like CSSNano and UglifyJS for production
3. **Enable Caching**: Configure your server for browser caching
4. **Use WebP**: Convert images to WebP format for better compression

## Credits

Color scheme inspired by modern glassmorphism design trends.
Icons: SVG icons embedded inline for performance.

## License

This portfolio template is free to use for personal and commercial projects.

---

**Need Help?**

If you encounter any issues or have questions about customization, feel free to reach out!
