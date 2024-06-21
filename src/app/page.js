'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import '../app/globals.css';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>Josh International School</title>
        <meta name="description" content="Welcome to ABC Secondary School" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-800 text-white w-full py-4 text-center flex flex-col items-center">
       <Image
          src="/School-logo2.png"
          alt="School Logo"
          width={200}
          height={200}
          className="mx-auto"
        />
        <h1 className="text-3xl mt-2">Josh International Schools</h1>
        <p className="text-xl mt-1">"Excellence in Education"</p>
      </header>

      <nav className="w-full bg-blue-600">
  <ul className="flex justify-center space-x-4 py-2">
    <li>
      <Link href="/" 
        className="text-white hover:bg-blue-700 px-3 py-1 rounded">Home
      </Link>
    </li> 
    <li>
      <Link href="/about" 
        className="text-white hover:bg-blue-700 px-3 py-1 rounded">About Us
      </Link>
    </li>
    <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white hover:bg-blue-700 px-3 py-1 rounded"
            >
              Departments <span className="ml-1">&#9660;</span>
            </button>
            {dropdownOpen && (
  <ul className="absolute left-0 w-40 mt-2 bg-blue-600 shadow-lg rounded-md">
    <li>
      <Link href="/departments/library"
        className="block px-4 py-2 text-white-700 hover:bg-blue-500">Library
      </Link>
    </li>
    <li>
      <Link href="/departments/academics" 
        className="block px-4 py-2 text-white-700 hover:bg-blue-500">Academics
      </Link>
    </li>
    <li>
      <Link href="/departments/catering" 
        className="block px-4 py-2 text-white-700 hover:bg-blue-500">Catering
      </Link>
    </li>
    <li>
      <Link href="/departments/clubs-societies" 
        className="block px-6 py-2 text-white-700 hover:bg-blue-500">Clubs & Societies
      </Link>
    </li>
    <li>
      <Link href="/departments/games-sports" 
         className="block px-4 py-2 text-white-700 hover:bg-blue-500">Games & Sports
      </Link>
    </li>
    <li>
      <Link href="/departments/welfare" 
        className="block px-4 py-2 text-white-700 hover:bg-blue-500">Welfare
      </Link>
    </li>
  </ul>
)}

    </li>
    
    <li>
      <Link href="/admissions"
        className="text-white hover:bg-blue-700 px-3 py-1 rounded">Admissions
      </Link>
    </li> 
    <li>
      <Link href="/departments/academics" 
        className="text-white hover:bg-blue-700 px-3 py-1 rounded">Academics
      </Link>
    </li>
    <li>
      <Link href="/contact" className="text-white hover:bg-blue-700 px-3 py-1 rounded">Contact
      </Link>
    </li>
  </ul>
</nav>


      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center bg-blue-500 text-white py-16 mb-8">
          <h2 className="text-4xl font-bold mb-4">Welcome to Josh International School</h2>
          <p className="text-xl mb-6">Where Excellence Meets Education</p>
          <Link href="/admissions"
            className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-200">Apply Now
          </Link>
        </section>

        {/* Academic Programs */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Academic Programs</h2>
          <p className="mb-4">We offer a wide range of programs to cater to the diverse needs of our students.</p>
          <Link href="/departments/academics"
            className="text-blue-600 hover:underline">Learn more about our academic programs
          </Link>
        </section>

        {/* Extracurricular Activities */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Extracurricular Activities</h2>
          <p className="mb-4">Explore the various clubs, sports, and activities we offer beyond academics.</p>
          <Link href="/departments/games&sports"
            className="text-blue-600 hover:underline">Discover our extracurricular activities
          </Link>
        </section>

        {/* Events and Announcements */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Events and Announcements</h2>
          <p className="mb-4">Stay up to date with the latest news and events happening at our school.</p>
          <Link href="/events"
            className="text-blue-600 hover:underline">View all events and announcements
          </Link>
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
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
      </main>

      <footer className="bg-blue-800 text-white w-full py-4 text-center">
        <p className='font-size: 0.75rem;'>&copy; 2024 Josh International Schools. All rights reserved.</p>
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
