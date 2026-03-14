# Nat Consulting Ltd. — Website

A professional multi-page website for Nat Consulting Ltd., featuring Bible study resources, emotional intelligence consulting, and educational workbooks.

## Pages
- `index.html` — Home Page
- `about.html` — About Page
- `services.html` — Services Page
- `books.html` — Books & Publications Page
- `blog.html` — Blog & Resources Page
- `contact.html` — Contact Page

## File Structure
```
nat-consulting/
├── index.html
├── about.html
├── services.html
├── books.html
├── blog.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── layout.js   (shared nav & footer)
│   └── main.js     (interactions)
└── README.md
```

## Hosting on Netlify

1. Push this folder to a GitHub repository
2. Log in to [Netlify](https://netlify.com)
3. Click **Add new site → Import an existing project**
4. Select your GitHub repository
5. Set **Publish directory** to `/` (root) — no build command needed
6. Click **Deploy site**

Your site will be live in under a minute.

## Updating Content

- Edit any `.html` file directly in GitHub to update content
- Update `css/style.css` to change colours, fonts, or layout
- Update `js/layout.js` to modify the navigation or footer across all pages
- Netlify will automatically redeploy on every GitHub push

## Contact Form

The contact form uses [Formspree](https://formspree.io). To activate:
1. Create a free account at formspree.io
2. Create a new form and get your form endpoint URL
3. In `contact.html`, replace the `action` attribute on the `<form>` tag with your Formspree URL

## Customisation

- **Brand colours**: Edit CSS variables at the top of `css/style.css`
- **Logo/name**: Edit `.nav-logo` in `js/layout.js`
- **Social links**: Update in `js/layout.js` (footer) and `contact.html`
- **Book links**: Update Google Drive URLs in `index.html` and `books.html`
- **WhatsApp**: Update `+2349033179833` in links if number changes
