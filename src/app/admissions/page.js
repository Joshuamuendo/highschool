// admissions.js
import Head from 'next/head';
import Link from 'next/link';

export default function Admissions() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Admissions - Josh Schools</title>
        <meta name="description" content="Admissions information for Josh Schools" />
        <link rel="icon" href="/favicon.ico" />
        <p className="text-xl mt-1">"Excellence in Education"</p>
      </Head>

      <header className="bg-blue-800 text-white w-full py-4 text-center">
        <h1 className="text-3xl">Admissions</h1>
      </header>

      <nav className="w-full bg-blue-600">
        <ul className="flex justify-center space-x-4 py-2">
          <li><Link href="/" className="text-white hover:bg-blue-700 px-3 py-1 rounded">Home</Link></li>
           <li><Link href="/about"className="text-white hover:bg-blue-700 px-3 py-1 rounded">About Us</Link></li>
          <li><Link href="/academics"className="text-white hover:bg-blue-700 px-3 py-1 rounded">Academics</Link></li>
          <li><Link href="/contact"className="text-white hover:bg-blue-700 px-3 py-1 rounded">Contact Us</Link></li>
        </ul>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Welcome to Josh International Schools Admissions</h2>
          <p className="text-gray-700">We're excited that you're considering Josh International Schools for your educational journey. Explore the information below to learn more about our admissions process and how to apply.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Admissions Process</h2>
          <p className="text-gray-700">Our admissions process is designed to be straightforward and transparent. Here's an overview of the steps:</p>
          <ul className="list-disc pl-8 text-gray-700">
            <li>Review our admissions requirements and deadlines.</li>
            <li>Complete the online application form.</li>
            <li>Submit any required documents, such as transcripts or letters of recommendation.</li>
            <li>Attend an admissions interview (if required).</li>
            <li>Receive your admissions decision.</li>
          </ul>
          <p className="text-gray-700">If you have any questions about the admissions process, please don't hesitate to contact our admissions office.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Application Forms and Documents</h2>
          <p className="text-gray-700">Download the necessary application forms and documents below:</p>
          <ul className="list-disc pl-8 text-gray-700">
            {/* <li><Link href="/application-form"><a className="text-blue-600 hover:underline">Application Form</a></Link></li>
            <li><Link href="/admissions-guidelines"><a className="text-blue-600 hover:underline">Admissions Guidelines</a></Link></li> */}
            {/* Include links to other documents as needed */}
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Tuition and Fees</h2>
          <p className="text-gray-700">We believe in providing high-quality education at an affordable cost. Here's an overview of our tuition and fees:</p>
          {/* Include detailed information about tuition and fees */}
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Programs and Curriculum</h2>
          <p className="text-gray-700">At Josh International Schools, we offer a diverse range of academic programs and a comprehensive curriculum designed to meet the needs of our students. Explore our programs and curriculum:</p>
          {/* Include details about programs and curriculum */}
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Extracurricular Activities</h2>
          <p className="text-gray-700">We believe in the holistic development of our students. Explore the extracurricular activities and opportunities available at Josh Schools:</p>
          {/* Include information about extracurricular activities */}
        </section>


        {/* Include other sections such as Tuition and Fees, Programs and Curriculum, Extracurricular Activities, etc. */}

      </main>

      <footer className="bg-blue-800 text-white w-full py-4 text-center">
        <p>&copy; 2024 Josh International Schools. All rights reserved.</p>
      </footer>
    </div>
  );
}
