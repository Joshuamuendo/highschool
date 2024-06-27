'use client';
import Head from 'next/head';
import { useState } from 'react';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    grade: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        // Handle successful submission (e.g., show a thank you message)
      } else {
        console.error('Form submission error');
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Application Form - Josh International School</title>
        <meta name="description" content="Apply to Josh International School" />
      </Head>

      <header className="bg-blue-800 text-white w-full py-4 text-center">
        <h1 className="text-3xl">Application Form</h1>
      </header>

      <main className="flex-grow flex items-center justify-center container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          {[
            { label: 'Full Name', name: 'name', type: 'text' },
            { label: 'Email', name: 'email', type: 'email' },
            { label: 'Phone Number', name: 'phone', type: 'tel' },
            { label: 'Address', name: 'address', type: 'text' },
            { label: 'Date of Birth', name: 'dob', type: 'date' },
            { label: 'Grade Applying For', name: 'grade', type: 'text' },
          ].map(({ label, name, type }) => (
            <div className="mb-4" key={name}>
              <label htmlFor={name} className="block text-gray-700 font-semibold mb-2">
                {label}
              </label>
              <input
                type={type}
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
          ))}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Submit Application
          </button>
        </form>
      </main>

      <footer className="bg-blue-800 text-white w-full py-4 text-center">
        <p>&copy; 2024 Josh International School. All rights reserved.</p>
      </footer>
    </div>
  );
}
