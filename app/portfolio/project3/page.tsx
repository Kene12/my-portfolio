import Image from "next/image";
import Link from "next/link";

export default function FallDetectionSystem() {
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
          Fall Detection System using Camera and Alert Notification
        </h1>

        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          This project is an intelligent fall detection system deployed on an <span className="font-semibold">NVIDIA Jetson Nano</span>, using camera input and real-time video processing. 
          It continuously monitors for fall events and sends alert notifications when a fall is detected. 
          Designed for edge deployment, this system is ideal for safety-critical applications such as elderly care or remote monitoring.
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-1">
          <li>Runs on NVIDIA Jetson Nano (edge AI platform)</li>
          <li>Real-time fall detection using camera input</li>
          <li>Lightweight, efficient, and suitable for embedded systems</li>
          <li>Sends automatic alerts upon fall detection</li>
          <li>Optimized for elderly care and remote safety monitoring</li>
        </ul>

        {/* Screenshot Section (optional) */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">📸 System Interface Screenshot</h2>
          <Image
            src="/9f674c42-2769-4f26-be5c-04e3695aa882.jpg"
            alt="Fall Detection System Screenshot"
            width={1200}
            height={600}
            className="rounded-lg shadow-md border"
          />
          <Image
            src="/4030cf09-e8bf-49ec-a756-06aa2eada3e9.jpg"
            alt="Fall Detection System Screenshot"
            width={1200}
            height={600}
            className="rounded-lg shadow-md border"
          />
        </div>

        {/* GitHub & QR Code */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="https://github.com/Kene12/Fall-Detection-System-using-Camera-and-Alert-Notification"
            target="_blank"
            className="px-6 py-3 bg-black text-white text-lg rounded-lg hover:bg-gray-800 transition"
          >
            🔗 View on GitHub
          </Link>

          <div className="text-center">
            <p className="text-gray-600 mb-2">Scan QR to open GitHub</p>
            <Image
              src="/Fall-Detection-System-using-Camera-and-Alert-Notificatio_qrcode.png"
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
