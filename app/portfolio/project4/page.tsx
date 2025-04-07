import Image from "next/image";
import Link from "next/link";

export default function JavascriptProductServer() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 md:px-20 py-12 pd-tp">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <div className="mb-6">
          <Link
            href="/#portfolio"
            className="inline-block text-purple-600 hover:text-purple-800 text-lg font-medium transition"
          >
            ⬅️ Back to Portfolio
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          JavaScript Product API (Server Side)
        </h1>

        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          This project is a RESTful API server built using <span className="font-semibold">Node.js</span> and <span className="font-semibold">Express.js</span>. 
          It handles product-related operations such as creating, reading, updating, and deleting products. 
          The server is fully functional and designed to support future client-side development.
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-1">
          <li>Built with Node.js and Express.js</li>
          <li>Implements full CRUD operations for products</li>
          <li>Follows RESTful API design</li>
          <li>Ready to be integrated with any frontend (client coming soon)</li>
          <li>Ideal for learning API development with JavaScript</li>
        </ul>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="https://github.com/Kene12/javascript_product"
            target="_blank"
            className="px-6 py-3 bg-black text-white text-lg rounded-lg hover:bg-gray-800 transition"
          >
            🔗 View on GitHub
          </Link>

          <div className="text-center">
            <p className="text-gray-600 mb-2">Scan QR to open GitHub</p>
            <Image
              src="/javascript_product_qrcode.png" // ใส่ QR โค้ดของโปรเจกต์นี้
              alt="QR Code to GitHub Repository"
              width={120}
              height={120}
              className="mx-auto border rounded-lg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
