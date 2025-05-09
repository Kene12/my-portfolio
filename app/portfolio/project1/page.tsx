import Image from "next/image";
import Link from "next/link";

export default function PhpManageSystemLibrary() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 md:px-20 py-12 pd-tp">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        {/* 🔙 Back Button at the top left */}
        <div className="mb-6">
          <Link
            href="/#portfolio"
            className="inline-block text-purple-600 hover:text-purple-800 text-lg font-medium transition"
          >
            ⬅️ Back to Portfolio
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          PHP Manage System Library
        </h1>

        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          This project is a Library Management System built using <span className="font-semibold">PHP</span> and <span className="font-semibold">MySQL</span>. 
          It provides an easy-to-use interface for managing books, members, and the borrowing/returning process. 
          The system is suitable for small to medium-sized libraries.
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-1">
          <li>Developed with procedural PHP</li>
          <li>Uses MySQL as the database</li>
          <li>Manages books, users, borrowing & returns</li>
          <li>Includes admin login/logout functionality</li>
        </ul>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">📸 Website Screenshot</h2>
          <Image
            src="/Screenshot 2025-04-07 164830.png"
            alt="Library Management System Screenshot"
            width={1200}
            height={600}
            className="rounded-lg shadow-md border"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="https://github.com/Kene12/system-library"
            target="_blank"
            className="px-6 py-3 bg-black text-white text-lg rounded-lg hover:bg-gray-800 transition"
          >
            🔗 View on GitHub
          </Link>

          <div className="text-center">
            <p className="text-gray-600 mb-2">Scan QR to open GitHub</p>
            <Image
              src="/tmpe3cq86qn.PNG"
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
