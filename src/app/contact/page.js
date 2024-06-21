'use client';

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Contact Us - Josh International School</title>
        <meta name="description" content="Contact information for Josh International School" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-800 text-white w-full py-4 text-center flex flex-col items-center">
        <Image 
          src="/school-logo.png" // Replace this URL with your actual logo URL
          alt="School Logo"
          width={200}
          height={200}
        />
        <h1 className="text-3xl mt-2">Josh International School</h1>
        <p className="text-xl mt-1">"Excellence in Education"</p>
      </header>

      <nav className="w-full bg-blue-600">
        <ul className="flex justify-center space-x-4 py-2">
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-white hover:bg-blue-700 px-3 py-1 rounded">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className="text-white hover:bg-blue-700 px-3 py-1 rounded">About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/admissions" legacyBehavior>
              <a className="text-white hover:bg-blue-700 px-3 py-1 rounded">Admissions</a>
            </Link>
          </li>
          <li>
            <Link href="/academics" legacyBehavior>
              <a className="text-white hover:bg-blue-700 px-3 py-1 rounded">Academics</a>
            </Link>
          </li>
        </ul>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
              <FaEnvelope className="text-blue-600 text-2xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-700">contact@joshschools.com</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
              <FaPhone className="text-blue-600 text-2xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-700">(123) 456-7890</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
              <FaMapMarkerAlt className="text-blue-600 text-2xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-gray-700">123 School St, Education City, EC 12345</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="border-gray-300 border rounded-md p-2"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="border-gray-300 border rounded-md p-2"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message"
                className="border-gray-300 border rounded-md p-2"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-blue-800 text-white w-full py-4 text-center">
        <p>&copy; 2024 Josh International School. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://facebook.com" className="text-white hover:text-gray-300">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-gray-300">
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  );
}
