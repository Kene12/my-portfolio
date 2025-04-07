import Image from "next/image";
import Link from "next/link";

export default function JavaManageWithUsers() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 md:px-20 py-12 pd-tp">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        {/* 🔙 Back Button */}
        <div className="mb-6">
          <Link
            href="/#portfolio"
            className="inline-block text-purple-600 hover:text-purple-800 text-lg font-medium transition"
          >
            ⬅️ Back to Portfolio
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Java Manage with Users
        </h1>

        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          A desktop-based user management system built using <span className="font-semibold">Java</span> and <span className="font-semibold">Swing</span>. 
          This project allows administrators to manage user data with functionalities such as adding, editing, and deleting user records. 
          It’s ideal for learning Java GUI development and handling user-based data management in standalone applications.
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-1">
          <li>Developed with Java (Swing GUI)</li>
          <li>Simple CRUD operations for user management</li>
          <li>Standalone desktop application</li>
          <li>Good for beginners practicing GUI and logic handling</li>
        </ul>

        {/* GitHub Button & QR Code */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="https://github.com/Kene12/Java-Manage-with-users"
            target="_blank"
            className="px-6 py-3 bg-black text-white text-lg rounded-lg hover:bg-gray-800 transition"
          >
            🔗 View on GitHub
          </Link>

          <div className="text-center">
            <p className="text-gray-600 mb-2">Scan QR to open GitHub</p>
            <Image
              src="/Java-Manage-with-users_qrcode.png"
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
