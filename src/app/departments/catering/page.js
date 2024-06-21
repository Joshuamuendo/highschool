import Head from 'next/head';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Catering() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Catering - Josh International Schools</title>
        <meta name="description" content="Welcome to the Department of Catering at Nairobi School" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-800 text-white w-full py-4 text-left">
        <h1 className="text-3xl">Catering Department</h1>
        <p className="text-xl mt-1"></p>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Fom the Cateress</h2>
          <p className="text-gray-700">
            The Catering Department at Josh International Schools is committed to providing high-quality meals that cater to the nutritional needs and preferences of our students.
             We understand the challenges associated with catering for school children, including adherence to School Food Standards, competition from external food providers, and the evolving tastes of our young patrons.
              Despite these challenges, we have developed a comprehensive menu cycle that complies with school regulations while offering diverse and nutritious meal options.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Services Offered</h2>
          <p className="text-gray-700">
            Our services are designed to address the barriers students face to both educational and lifelong learning.
             By providing nourishing meals in a comfortable and welcoming environment, we aim to support the overall well-being and academic success of our students.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Meals Offered</h2>
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-400">
              <thead>
                <tr className="bg-blue-200">
                  <th className="border border-gray-400 px-4 py-2">Day</th>
                  <th className="border border-gray-400 px-4 py-2">Breakfast</th>
                  <th className="border border-gray-400 px-4 py-2">Tea Break</th>
                  <th className="border border-gray-400 px-4 py-2">Lunch Break</th>
                  <th className="border border-gray-400 px-4 py-2">Tea Break</th>
                  <th className="border border-gray-400 px-4 py-2">Supper</th>
                  <th className="border border-gray-400 px-4 py-2">Coffee</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Monday</td>
                  <td className="border border-gray-400 px-4 py-2">Tea, Tea</td>
                  <td className="border border-gray-400 px-4 py-2">Milk tea, Bread</td>
                  <td className="border border-gray-400 px-4 py-2">Ugali, Beans</td>
                  <td className="border border-gray-400 px-4 py-2">-</td>
                  <td className="border border-gray-400 px-4 py-2">Ugali, Beef, Cabbage</td>
                  <td className="border border-gray-400 px-4 py-2">Coffee</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Tuesday</td>
                  <td className="border border-gray-400 px-4 py-2">Tea, Tea</td>
                  <td className="border border-gray-400 px-4 py-2">Milk tea, Bread</td>
                  <td className="border border-gray-400 px-4 py-2">Ugali, Beans</td>
                  <td className="border border-gray-400 px-4 py-2">-</td>
                  <td className="border border-gray-400 px-4 py-2">Ugali, Beef, Cabbage</td>
                  <td className="border border-gray-400 px-4 py-2">Coffee</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Wednesday</td>
                  <td className="border border-gray-400 px-4 py-2">Tea, Tea</td>
                  <td className="border border-gray-400 px-4 py-2">Milk tea, Bread</td>
                  <td className="border border-gray-400 px-4 py-2">Ugali, Beans</td>
                  <td className="border border-gray-400 px-4 py-2">-</td>
                  <td className="border border-gray-400 px-4 py-2">Ugali, Beef, Cabbage</td>
                  <td className="border border-gray-400 px-4 py-2">Coffee</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Thursday</td>
                  <td className="border border-gray-400 px-4 py-2">Tea, Tea</td>
                  <td className="border border-gray-400 px-4 py-2">Milk tea, Bread</td>
                  <td className="border border-gray-400 px-4 py-2">Ugali, Beans</td>
                  <td className="border border-gray-400 px-4 py-2">-</td>
                  <td className="border border-gray-400 px-4 py-2">Ugali, Beef, Cabbage</td>
                  <td className="border border-gray-400 px-4 py-2">Coffee</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Friday</td>
                  <td className="border border-gray-400 px-4 py-2">Tea, Tea</td>
                  <td className="border border-gray-400 px-4 py-2">Milk tea, Bread</td>
                  <td className="border border-gray-400 px-4 py-2">Ugali, Beans</td>
                  <td className="border border-gray-400 px-4 py-2">-</td>
                  <td className="border border-gray-400 px-4 py-2">Ugali, Beef, Cabbage</td>
                  <td className="border border-gray-400 px-4 py-2">Coffee</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Saturday</td>
                  <td className="border border-gray-400 px-4 py-2">Tea, Tea</td>
                  <td className="border border-gray-400 px-4 py-2">Milk tea, Bread</td>
                  <td className="border border-gray-400 px-4 py-2">Ugali, Beans</td>
                  <td className="border border-gray-400 px-4 py-2">-</td>
                  <td className="border border-gray-400 px-4 py-2">Ugali, Beef, Cabbage</td>
                  <td className="border border-gray-400 px-4 py-2">Coffee</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Sunday</td>
                  <td className="border border-gray-400 px-4 py-2">Tea, Tea</td>
                  <td className="border border-gray-400 px-4 py-2">Milk tea, Bread</td>
                  <td className="border border-gray-400 px-4 py-2">Ugali, Beans</td>
                  <td className="border border-gray-400 px-4 py-2">-</td>
                  <td className="border border-gray-400 px-4 py-2">Ugali, Beef, Cabbage</td>
                  <td className="border border-gray-400 px-4 py-2">Coffee</td>
                </tr>
                {/* More rows for other days */}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Catering Team</h2>
          <p className="text-gray-700">
            Our dedicated catering team consists of experienced professionals who are passionate about delivering delicious and nutritious meals to our students.
             Led by our Head Chef, our team works tirelessly to ensure that every meal meets the highest standards of quality and freshness.
          </p>
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
