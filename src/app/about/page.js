// about.js
import Head from 'next/head';
import Link from 'next/link';import Image from 'next/image';


export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>About Us - Josh International Schools</title>
        <meta name="description" content="Learn about Josh Schools" />
        <link rel="icon" href="/favicon.ico" />
       
        <p className="text-xl mt-1">"Excellence in Education"</p>
      </Head>

      <header className="bg-blue-800 text-white w-full py-4 text-center">
      <Image 
          src="/school-logo.png" // Replace this URL with your actual logo URL
          alt="School Logo"
          width={200}
          height={200}
        />
        <h1 className="text-3xl">About Us</h1>
      </header>

      <nav className="w-full bg-blue-600">
        <ul className="flex justify-center space-x-4 py-2">
          <li><Link href="/" className="text-white hover:bg-blue-700 px-3 py-1 rounded">Home</Link></li>
          <li><Link href="/admissions" className="text-white hover:bg-blue-700 px-3 py-1 rounded">Admissions</Link></li>
          <li><Link href="/academics" className="text-white hover:bg-blue-700 px-3 py-1 rounded">Academics</Link></li>
          <li><Link href="/contact" className="text-white hover:bg-blue-700 px-3 py-1 rounded">Contact us</Link></li>
        </ul>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700">At Josh International Schools, our mission is to provide a nurturing environment where students can thrive academically, socially, and emotionally.</p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
          <ul className="list-disc pl-8 text-gray-700">
            <li>Excellence in education</li>
            <li>Respect for diversity</li>
            <li>Commitment to community</li>
            <li>Continuous improvement</li>
          </ul>
        </section>
      </main>

      <footer className="bg-blue-800 text-white w-full py-4 text-center">
        <p>&copy; 2024 Josh International Schools. All rights reserved.</p>
      </footer>
    </div>
  );
}
