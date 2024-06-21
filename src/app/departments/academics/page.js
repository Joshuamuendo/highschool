// academics.js
import Head from 'next/head';
import Link from 'next/link';

export default function Academics() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Academics - Josh International School</title>
        <meta name="description" content="Academics information for Josh International School" />
        <link rel="icon" href="/favicon.ico" />
        <p className="text-xl mt-1">"Excellence in Education"</p>
      </Head>

      <header className="bg-blue-800 text-white w-full py-4 text-center">
        <h1 className="text-3xl">Academics</h1>
      </header>

      <nav className="w-full bg-blue-600">
        <ul className="flex justify-center space-x-4 py-2">
          <li><Link href="/" className="text-white hover:bg-blue-700 px-3 py-1 rounded">Home</Link></li>
          <li><Link href="/about"className="text-white hover:bg-blue-700 px-3 py-1 rounded">About Us</Link></li>
          <li><Link href="/admissions"className="text-white hover:bg-blue-700 px-3 py-1 rounded">Admissions</Link></li>
          <li><Link href="/contact"className="text-white hover:bg-blue-700 px-3 py-1 rounded">Contact Us</Link></li>
        </ul>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Welcome to Josh International School Academics</h2>
          <p className="text-gray-700">At Josh International School, we offer a comprehensive academic program designed to foster intellectual growth and personal development. Explore the information below to learn more about our academic offerings:</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Academic Programs</h2>
          <p className="text-gray-700">We offer a wide range of academic programs to cater to the diverse interests and needs of our students. Our programs include:</p>
          <ul className="list-disc pl-8 text-gray-700">
            <li>Primary Education</li>
            <li>Secondary Education</li>
            <li>International Baccalaureate (IB) Program</li>
            {/* Add more academic programs as needed */}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Subjects and Curriculum</h2>
          <p className="text-gray-700">Our curriculum is designed to provide students with a well-rounded education and prepare them for future success. Some of the subjects we offer include:</p>
          <ul className="list-disc pl-8 text-gray-700">
            <li>Mathematics</li>
            <li>Science</li>
            <li>Language Arts</li>
            {/* Add more subjects as needed */}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Teaching Methodologies</h2>
          <p className="text-gray-700">We employ a variety of teaching methodologies to engage students and enhance their learning experience. Our teaching methods include:</p>
          <ul className="list-disc pl-8 text-gray-700">
            <li>Interactive Classroom Discussions</li>
            <li>Hands-on Experiments and Activities</li>
            <li>Project-Based Learning</li>
            {/* Add more teaching methodologies as needed */}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Faculty Members</h2>
          <p className="text-gray-700">Our dedicated faculty members are highly qualified professionals who are passionate about teaching and committed to the success of our students.</p>
          {/* Include information about key faculty members */}
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Academic Calendar</h2>
          <p className="text-gray-700">Stay informed about important dates and events with our academic calendar:</p>
          {/* Include a link to the academic calendar */}
        </section>

      </main>

      <footer className="bg-blue-800 text-white w-full py-4 text-center">
        <p>&copy; 2024 Josh International School. All rights reserved.</p>
      </footer>
    </div>
  );
}
