import React, { useState, useEffect } from 'react';
import { Coffee, MapPin, Clock, ShoppingBag, Menu as MenuIcon, X, Star, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content fade-in">
            <span className="subtitle">Welcome to</span>
            <h1>Felliya</h1>
            <p>Discover the perfect blend of artisanal coffee and modern atmosphere. Every cup tells a story of carefully selected beans and expert craftsmanship.</p>
            <div className="button-group">
              <button 
                onClick={() => window.location.href = '#menu'} 
                className="button button-primary hover-scale">
                Explore Menu
              </button>
              <button 
                onClick={() => window.location.href = '#about'} 
                className="button button-secondary hover-scale">
                Our Story
              </button>
            </div>
          </div>
          <div className="hero-image fade-in">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Artisanal coffee preparation"
              className="main-image"
            />
            <img
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Coffee beans"
              className="floating-image floating-image-1"
            />
            <img
              src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Latte art"
              className="floating-image floating-image-2"
            />
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-container">
          <div className="about-grid">
            <div className="about-image fade-in">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Our coffee shop"
              />
            </div>
            <div className="about-content fade-in">
              <span className="subtitle">About Us</span>
              <h2>A Modern Take on Traditional Coffee</h2>
              <p>Founded in 2010, Felliya has been at the forefront of the specialty coffee movement. We believe in sourcing the finest beans, roasting them to perfection, and serving them in an atmosphere that encourages connection and creativity.</p>
              <div className="stats-grid">
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Coffee Varieties</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2</span>
                  <span className="stat-label">Locations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <div className="featured-container">
          <span className="subtitle text-center">Featured Products</span>
          <h2 className="text-center">Signature Drinks</h2>
          <div className="featured-grid">
            {[
              {
                name: "Signature Latte",
                price: "$4.50",
                image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Cold Brew",
                price: "$4.00",
                image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Espresso",
                price: "$3.50",
                image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((product, index) => (
              <div key={index} className="featured-card fade-in">
                <div className="featured-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <span className="price">{product.price}</span>
                <button className="button button-primary">Order Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const Menu = () => (
  <div className="page-container" id="menu">
    <h1>Our Menu</h1>
    <div className="menu-grid">
      <div className="menu-category">
        <h2>Hot Coffee</h2>
        <div className="menu-items">
          <div className="menu-item hover-lift">
            <div className="menu-item-content">
              <h3>Espresso</h3>
              <p>Pure and intense</p>
            </div>
            <span className="price">$3.50</span>
          </div>
          <div className="menu-item hover-lift">
            <div className="menu-item-content">
              <h3>Cappuccino</h3>
              <p>Espresso with steamed milk foam</p>
            </div>
            <span className="price">$4.50</span>
          </div>
          <div className="menu-item hover-lift">
            <div className="menu-item-content">
              <h3>Latte</h3>
              <p>Espresso with steamed milk</p>
            </div>
            <span className="price">$4.75</span>
          </div>
        </div>
      </div>

      <div className="menu-category">
        <h2>Cold Drinks</h2>
        <div className="menu-items">
          <div className="menu-item hover-lift">
            <div className="menu-item-content">
              <h3>Iced Coffee</h3>
              <p>Cold brewed for 24 hours</p>
            </div>
            <span className="price">$4.00</span>
          </div>
          <div className="menu-item hover-lift">
            <div className="menu-item-content">
              <h3>Cold Brew</h3>
              <p>Smooth and rich</p>
            </div>
            <span className="price">$4.50</span>
          </div>
          <div className="menu-item hover-lift">
            <div className="menu-item-content">
              <h3>Frappuccino</h3>
              <p>Blended coffee and cream</p>
            </div>
            <span className="price">$5.50</span>
          </div>
        </div>
      </div>

      <div className="menu-category">
        <h2>Pastries</h2>
        <div className="menu-items">
          <div className="menu-item hover-lift">
            <div className="menu-item-content">
              <h3>Croissant</h3>
              <p>Freshly baked daily</p>
            </div>
            <span className="price">$3.75</span>
          </div>
          <div className="menu-item hover-lift">
            <div className="menu-item-content">
              <h3>Muffin</h3>
              <p>Blueberry or chocolate chip</p>
            </div>
            <span className="price">$3.25</span>
          </div>
          <div className="menu-item hover-lift">
            <div className="menu-item-content">
              <h3>Danish</h3>
              <p>Assorted flavors</p>
            </div>
            <span className="price">$3.50</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Locations = () => (
  <div className="page-container" id="locations">
    <h1>Our Locations</h1>
    <div className="locations-grid">
      <div className="location-card hover-lift">
        <img 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Downtown Cafe"
        />
        <div className="location-info">
          <h2>Downtown</h2>
          <p><MapPin size={16} /> 123 Main St, City Center</p>
          <p><Clock size={16} /> Mon-Fri: 7am-8pm</p>
          <p><Phone size={16} /> (555) 123-4567</p>
        </div>
      </div>

      <div className="location-card hover-lift">
        <img 
          src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Riverside Cafe"
        />
        <div className="location-info">
          <h2>Riverside</h2>
          <p><MapPin size={16} /> 456 River Rd, Waterfront</p>
          <p><Clock size={16} /> Mon-Sun: 8am-9pm</p>
          <p><Phone size={16} /> (555) 987-6543</p>
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="page-container">
    <h1>Contact Us</h1>
    <div className="contact-form">
      <input type="text" placeholder="Name" className="form-input" />
      <input type="email" placeholder="Email" className="form-input" />
      <textarea placeholder="Message" className="form-input" rows={5}></textarea>
      <button onClick={() => alert('Message sent!')} className="button button-primary hover-scale">
        Send Message
      </button>
    </div>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'menu': return <Menu />;
      case 'locations': return <Locations />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-container">
          <div className="logo hover-scale" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
            <Coffee size={24} />
            <span>Felliya</span>
          </div>
          <button className="mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#" onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'active' : ''}>Home</a>
            <a href="#" onClick={() => setCurrentPage('menu')} className={currentPage === 'menu' ? 'active' : ''}>Menu</a>
            <a href="#" onClick={() => setCurrentPage('locations')} className={currentPage === 'locations' ? 'active' : ''}>Locations</a>
            <a href="#" onClick={() => setCurrentPage('contact')} className={currentPage === 'contact' ? 'active' : ''}>Contact</a>
            <button onClick={() => window.location.href = '#menu'} className="button button-primary hover-scale">
              <ShoppingBag size={16} style={{ marginRight: '0.5rem' }} /> Order Now
            </button>
          </div>
        </div>
      </nav>

      {renderPage()}

      <footer>
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo">
                <Coffee size={24} />
                <span>Felliya</span>
              </div>
              <p>Crafting moments, one cup at a time</p>
              <div className="social-links">
                <a href="#" className="hover-scale"><Instagram size={20} /></a>
                <a href="#" className="hover-scale"><Facebook size={20} /></a>
                <a href="#" className="hover-scale"><Twitter size={20} /></a>
              </div>
            </div>
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#" onClick={() => setCurrentPage('menu')}>Our Menu</a></li>
                <li><a href="#" onClick={() => setCurrentPage('locations')}>Locations</a></li>
                <li><a href="#" onClick={() => setCurrentPage('contact')}>Contact</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact</h3>
              <ul className="footer-links">
                <li><Phone size={16} /> (555) 123-4567</li>
                <li><Mail size={16} /> hello@felliya.co</li>
                <li><MapPin size={16} /> 123 Main St, City Center</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Hours</h3>
              <ul className="footer-links">
                <li>Mon-Fri: 7am-8pm</li>
                <li>Sat: 8am-8pm</li>
                <li>Sun: 9am-7pm</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Felliya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;