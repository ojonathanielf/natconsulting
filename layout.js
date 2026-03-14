// Shared navigation and footer injected into all pages

function renderNav(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'services.html', label: 'Services' },
    { href: 'books.html', label: 'Books' },
    { href: 'blog.html', label: 'Blog' },
    { href: 'contact.html', label: 'Contact' },
  ];

  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${p.href === activePage ? 'active' : ''}">${p.label}</a></li>`
  ).join('');

  const mobileLinks = pages.map(p =>
    `<a href="${p.href}" class="${p.href === activePage ? 'active' : ''}">${p.label}</a>`
  ).join('');

  document.getElementById('nav-placeholder').innerHTML = `
    <nav>
      <a href="index.html" class="nav-logo">Nat <span>Consulting</span></a>
      <ul class="nav-links">
        ${links}
        <li><a href="contact.html" class="nav-cta">Book a Session</a></li>
      </ul>
      <div class="hamburger" id="hamburger">
        <span></span><span></span><span></span>
      </div>
    </nav>
    <div class="mobile-menu" id="mobileMenu">
      ${mobileLinks}
      <a href="contact.html" style="color:var(--gold);font-weight:600;">Book a Session →</a>
    </div>
  `;
}

function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="footer-grid">
        <div class="footer-brand">
          <span class="nav-logo">Nat <span>Consulting</span> Ltd.</span>
          <p>Empowering lives through Scripture-grounded education, emotional intelligence coaching, and transformative learning resources.</p>
          <div class="social-links">
            <a href="https://www.facebook.com/ojo.nathaniel3?mibextid=ZbWKwL" target="_blank" class="social-link" title="Facebook">f</a>
            <a href="https://www.linkedin.com/in/nathanielojo" target="_blank" class="social-link" title="LinkedIn">in</a>
            <a href="https://wa.me/2349033179833" target="_blank" class="social-link" title="WhatsApp">W</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="books.html">Books</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="blog.html">Blog & Articles</a></li>
            <li><a href="books.html">Free Download</a></li>
            <li><a href="contact.html">Book a Session</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:ojonathanielf@gmail.com">ojonathanielf@gmail.com</a></li>
            <li><a href="https://wa.me/2349033179833">+234 903 317 9833</a></li>
            <li><a href="contact.html">Send a Message</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 Nat Consulting Ltd. All rights reserved.</span>
        <span>Made with faith &amp; purpose</span>
      </div>
    </footer>
  `;
}
