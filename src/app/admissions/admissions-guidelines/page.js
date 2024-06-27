// src/app/admissions/guidelines.js

import Head from 'next/head';
import Link from 'next/link';

export default function AdmissionGuidelines() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Admission Guidelines - Josh International School</title>
        <meta name="description" content="Admission guidelines for Josh International School" />
      </Head>

      <header className="bg-blue-800 text-white w-full py-4 text-center">
        <h1 className="text-3xl">Admission Guidelines</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section id="application-process" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Application Process</h2>
          <ul className="list-disc ml-8">
            <li className="mb-2">
              <strong>Application Form:</strong> Download the application form{' '}
              <a href="/path/to/application-form.pdf" className="text-blue-600 hover:underline" download>
                here
              </a>
              .
            </li>
            <li className="mb-2">
              <strong>Submission Deadlines:</strong> Applications must be submitted by [Date].
            </li>
            <li className="mb-2">
              <strong>Required Documents:</strong> Prepare the following documents:
              <ul className="list-disc ml-8">
                <li>Birth Certificate</li>
                <li>Previous Academic Transcripts</li>
                <li>Recommendation Letters</li>
                {/* Add more as per your school's requirements */}
              </ul>
            </li>
            <li>
              <strong>Application Fee:</strong> A non-refundable fee of [Amount] is required.
            </li>
          </ul>
        </section>

        <section id="tuition-and-fees" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Tuition and Fees</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Fee Structure</h3>
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-2 px-4 border border-gray-200">Grade Level</th>
                  <th className="py-2 px-4 border border-gray-200">Tuition Fees</th>
                  <th className="py-2 px-4 border border-gray-200">Additional Costs</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td className="py-2 px-4 border border-gray-200">Kindergarten</td>
                  <td className="py-2 px-4 border border-gray-200">$10,000</td>
                  <td className="py-2 px-4 border border-gray-200">$1,000 (Books, Uniform)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-200">Elementary School (Grades 1-5)</td>
                  <td className="py-2 px-4 border border-gray-200">$12,000</td>
                  <td className="py-2 px-4 border border-gray-200">$1,200 (Books, Uniform, Activity Fee)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-200">Middle School (Grades 6-8)</td>
                  <td className="py-2 px-4 border border-gray-200">$14,000</td>
                  <td className="py-2 px-4 border border-gray-200">$1,500 (Books, Uniform, Field Trips)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-200">High School (Grades 9-12)</td>
                  <td className="py-2 px-4 border border-gray-200">$16,000</td>
                  <td className="py-2 px-4 border border-gray-200">$2,000 (Books, Uniform, Technology Fee)</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-4">Note: Fees are subject to change. Please contact the school for the most up-to-date information.</p>
            <p className="mt-4"><strong>Financial Aid:</strong> Information about scholarships and financial assistance.</p>
          </div>
        </section>

        <section id="eligibility-criteria" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Eligibility Criteria</h2>
          <ul className="list-disc ml-8">
          <li className="mb-2">
              <strong>Age Requirements:</strong> Minimum age requirement for each grade level:
              <ul className="list-disc ml-8">
                <li>Grade 1: Minimum age 6 years</li>
                <li>Grade 2: Minimum age 7 years</li>
                <li>Grade 3: Minimum age 8 years</li>
                <li>Grade 4: Minimum age 9 years</li>
                <li>Grade 5: Minimum age 10 years</li>
                <li>Grade 6: Minimum age 11 years</li>
                {/* Add more grades and age requirements as per your school's policy */}
              </ul>
            </li>
            <li className="mb-2">
              <strong>Educational Background:</strong> Previous academic qualifications required.
            </li>
            <li>
              <strong>Residency:</strong> Specific residency requirements, if any.
            </li>
          </ul>
        </section>

        <section id="admission-criteria" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Admission Criteria</h2>
          <ul className="list-disc ml-8">
            <li className="mb-2">
              <strong>Academic Performance:</strong> GPA and standardized test score expectations.
            </li>
            <li className="mb-2">
              <strong>Interviews/Assessments:</strong> Procedure for interviews and assessments.
            </li>
            <li>
              <strong>Special Considerations:</strong> Criteria for students with disabilities or unique talents.
            </li>
          </ul>
        </section>

        <section id="selection-process" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Selection Process</h2>
          <ul className="list-disc ml-8">
            <li className="mb-2">
              <strong>Review and Decision:</strong> How applications are reviewed and decisions made.
            </li>
            <li className="mb-2">
              <strong>Notification:</strong> Notification process and dates.
            </li>
            <li>
              <strong>Acceptance and Enrollment:</strong> Steps for accepted students to confirm acceptance.
            </li>
          </ul>
        </section>

        <section id="tuition-and-fees" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Tuition and Fees</h2>
          <ul className="list-disc ml-8">
            <li className="mb-2">
              <strong>Fee Structure:</strong> Detailed breakdown of tuition fees and additional costs.
            </li>
            <li>
              <strong>Financial Aid:</strong> Information about scholarships and financial assistance.
            </li>
          </ul>
        </section>

        <section id="policies-and-regulations" className="my-8">
          <h2 className="text-2xl font-bold mb-4">School Policies and Regulations</h2>
          <ul className="list-disc ml-8">
            <li className="mb-2">
              <strong>Code of Conduct:</strong> Expected behavior and adherence to school policies.
            </li>
            <li>
              <strong>Health and Safety:</strong> Requirements for health records and vaccinations.
            </li>
          </ul>
        </section>
        <div className="my-8">
          <Link href="/admissions/application-form" passHref
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700" target="_blank" rel="noopener noreferrer">Apply Now
          </Link>
        </div>
      </main>


      <footer className="bg-blue-800 text-white w-full py-4 text-center">
        <p>&copy; 2024 Josh International School. All rights reserved.</p>
      </footer>
    </div>
  );
}
