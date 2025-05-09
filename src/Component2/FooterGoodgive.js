import React from "react";
import "./FooterGoodgive.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import companylogo from '../assets/companylogo.png'

export default function FooterGoodgive() {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <div className="footer-brand">
          <img
            src={companylogo}
            alt="Logo"
            className="footer-logo"
          />
          <span className="footer-title">Goodgive</span>
        </div>

        <h2 className="footer-heading">Together, We Can End Hunger</h2>
        <p className="footer-subheading">Thank you for visiting Good-give.com</p>
        <p className="footer-description">
          Your support—whether it’s through donating food, time, or funds—makes a real
          impact on the lives of those who need it most. Join us today and be part
          of the movement to end hunger in our community. Every donation, no matter
          how small, brings us closer to a world where no one goes hungry.
        </p>

        <div className="footer-buttons">
          <button className="footer-btn donate">Donate Now</button>
          <button className="footer-btn volunteer">Signup to Volunteer</button>
        </div>
      </div>

      <div className="footer-right">
        <h3 className="footer-contact-title">Contact Us</h3>
        <p className="footer-contact-text">
          We’d love to hear from you! Whether you have questions, want to donate,
          or are interested in volunteering, don’t hesitate to get in touch.
        </p>
        <p><strong>Phone:</strong> +91-7679791280</p>
        <p><strong>Email:</strong> donate@goodgive.com</p>
        <p><strong>Address:</strong> YMCA, Chennai-600091</p>

        <div className="footer-social">
          <p className="footer-social-label">Follow Us:</p>
          <div className="footer-social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
