import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLaptopCode, FaMobileAlt, FaCogs, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <div className="portfolio bg-gradient min-vh-100 text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm sticky-top">
        <a className="navbar-brand" href="#">Yash Thakkar</a>
        <div className="navbar-nav ms-auto">
          <a className="nav-link" href="#services">Services</a>
          <a className="nav-link" href="#contact">Contact</a>
          <a className="nav-link" href="#about">About Me</a>
          <a className="nav-link" href="#feedback">Feedback</a>
        </div>
      </nav>

      <motion.header className="hero-section text-center py-5 bg-dark text-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <h1 className="display-4 fw-bold">I'm Yash Thakkar</h1>
        <p className="lead">Freelance Web & App Developer</p>
      </motion.header>

      <section id="services" className="py-5 bg-light text-dark">
        <div className="container">
          <h2 className="text-center mb-4">Services</h2>
          <div className="row text-center g-4">
            {[{ icon: FaLaptopCode, title: 'Web Development', text: 'Modern and responsive websites built using Odoo, .NET, and more.' },
              { icon: FaMobileAlt, title: 'App Development', text: 'Scalable Android applications tailored to your business.' },
              { icon: FaCogs, title: 'Odoo Services', text: 'Custom Odoo solutions for your business.' }].map((service, index) => (
              <motion.div key={index} className="col-md-4" whileHover={{ scale: 1.05 }}>
                <div className="p-4 border rounded shadow-lg bg-white h-100">
                  <service.icon size={50} className="mb-3 text-primary" />
                  <h5 className="mt-3">{service.title}</h5>
                  <p>{service.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-5 bg-light text-dark border-top">
        <div className="container d-md-flex align-items-center">
          <motion.img src="" alt="Yash Thakkar" className="rounded-circle shadow-lg mb-4 mb-md-0 me-md-5" whileHover={{ scale: 1.1 }} />
          <div>
            <h2>About Me</h2>
            <p>I’m Yash Thakkar, a freelance developer passionate about creating seamless digital experiences with modern designs. I specialize in Odoo, .NET, and Android app development, delivering top-quality solutions for businesses.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-5 bg-dark text-light border-top">
        <div className="container text-center">
          <h2>Contact Me</h2>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <motion.a whileHover={{ scale: 1.1 }} href="mailto:yashthakkar0603@gmail.com?subject=Inquiry&body=Hello Yash, I am interested in your services!" className="btn btn-primary p-3"> <FaEnvelope /> Email Me</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="tel:+919106433706" className="btn btn-success p-3"><FaPhone /> Call Me</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="https://www.google.com/maps/place/Bhuj,+Gujarat" target="_blank" className="btn btn-danger p-3"><FaMapMarkerAlt /> Location (Bhuj)</motion.a>
          </div>
        </div>
      </section>

      <section id="feedback" className="py-5 bg-secondary text-light border-top">
        <div className="container w-50">
          <h2 className="text-center mb-4">Feedback</h2>
          <form>
            <div className="mb-3">
              <label>Name</label>
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="your.email@example.com" />
            </div>
            <div className="mb-3">
              <label>Message</label>
              <textarea className="form-control" rows="4" placeholder="Your feedback"></textarea>
            </div>
            <motion.button whileHover={{ scale: 1.05 }} type="submit" className="btn btn-primary">Send Feedback</motion.button>
          </form>
        </div>
      </section>

      <footer className="bg-dark text-center text-light py-3">
        <p>© 2025 Yash Thakkar. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
