'use client';
import Head from 'next/head';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Welfare() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Student's Welfare - Josh International School</title>
        <meta name="description" content="Information about the Student's Welfare at Josh International School" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-800 text-white w-full py-4 text-center">
        <h1 className="text-3xl">Josh International School</h1>
        <p className="text-xl mt-1">"Excellence in Education"</p>
      </header>

       
 <nav className="w-full bg-blue-600">
        <ul className="flex justify-center space-x-4 py-2">
          <li><Link href="/" legacyBehavior><a className="text-white hover:bg-blue-700 px-3 py-1 rounded">Home</a></Link></li>
          <li><Link href="/about" legacyBehavior><a className="text-white hover:bg-blue-700 px-3 py-1 rounded">About Us</a></Link></li>
          <li><Link href="/admissions" legacyBehavior><a className="text-white hover:bg-blue-700 px-3 py-1 rounded">Admissions</a></Link></li>
          <li><Link href="/academics" legacyBehavior><a className="text-white hover:bg-blue-700 px-3 py-1 rounded">Academics</a></Link></li>
          <li className="relative group">
            <button className="text-white hover:bg-blue-700 px-3 py-1 rounded inline-flex items-center">
              Departments
              <span className="ml-1">▼</span>
            </button>
            <ul className="absolute hidden text-gray-700 pt-1 group-hover:block bg-white shadow-lg rounded">
              <li><Link href="/departments/library" legacyBehavior><a className="rounded-t bg-blue-200 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap">Library</a></Link></li>
              <li><Link href="/departments/academics" legacyBehavior><a className="bg-blue-200 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap">Academics</a></Link></li>
              <li><Link href="/departments/catering" legacyBehavior><a className="bg-blue-200 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap">Catering</a></Link></li>
              <li><Link href="/departments/clubs" legacyBehavior><a className="bg-blue-200 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap">Clubs & Societies</a></Link></li>
              <li><Link href="/departments/sports" legacyBehavior><a className="bg-blue-200 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap">Games & Sports</a></Link></li>
              <li><Link href="/departments/welfare" legacyBehavior><a className="rounded-b bg-blue-200 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap">Welfare</a></Link></li>
            </ul>
          </li>
          <li><Link href="/contact" legacyBehavior><a className="text-white hover:bg-blue-700 px-3 py-1 rounded">Contact</a></Link></li>
        </ul>
      </nav> 

      <main className="flex-grow container mx-auto px-4 py-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">From the Dean of Students</h2>
          <p className="text-gray-700 mb-4">
            Welcome to the Department of Welfare, Josh International School. The Department is a service unit that supports other services offered by the entire school. We operate with a Service Delivery charter which we follow to the letter.
          </p>
          <p className="text-gray-700 mb-4">
            We know that catering for school children isn’t always easy. In fact, between the School Food Standards, competition from the high street and the ever-changing tastes of children, catering for younger people can often seem like quite the challenge. We have a great school compliant menu cycles for our students.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">About Welfare</h2>
          
        </section>

        <section className="mb-8">
          
          <p className="text-gray-700">
            Our services are meant to address the barriers students have to learning, both educational learning and life-long learning. We adopt techniques for addressing all students’ various and many issues that affect their abilities to perform in an educational environment both academically and socially.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Inspiration</h2>
          <p className="text-gray-700">
            "Sometimes God will place a wall on your path to force you to go in another direction."
          </p>
        </section>

        <section>
          <h1 className="text-2xl font-semibold mb-2">Issues We Help The Students With</h1>
          <ul className="list-disc list-inside text-gray-700">
            <li>Stress and Depression</li>
            <li>Mental Breakdowns</li>
            <li>Anxiety</li>
            <li>General Guidance</li>
            <li>Peer Counselling</li>
            <li>Drug & Substance Abuse</li>
          </ul>
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
