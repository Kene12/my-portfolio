import Image from "next/image";
import About from "./components/about";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-5 md:px-16 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-10 max-w-5xl w-full">

          <div className="space-y-5 text-center md:text-left">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg font-medium text-sm inline-block">
              It's me
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Panithan Kunkaew
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              <span className="text-red-500 font-semibold">UX/UI</span> and <br />
              <span className="text-blue-400 font-semibold">API Website Developer</span>
            </p>
            <a
              href="/#contact"
              className="inline-block bg-red-500 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-red-600 transition"
            >
              Contact me
            </a>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="absolute right-0 bg-blue-300 rounded-l-xl h-full w-3/4 -z-10 hidden md:block" />
            <Image
              src="/itme.png"
              alt="Profile"
              width={400}
              height={400}
              className="rounded-xl shadow-xl object-cover w-64 h-auto md:w-96"
            />
          </div>
        </div>
      </main>

      {/* Other sections */}
      <About />
      <Portfolio />
      <Contact />

      {/* Footer */}
      <footer className="bg-black border-t mt-0">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <p className="text-gray-50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Panithan Kunkaew. All rights reserved.
          </p>
          <div className="flex space-x-4 text-gray-50 text-sm">
            <a href="https://github.com/Kene12" target="_blank" className="hover:text-gray-300 transition">GitHub</a>
            <a href="mailto:your-email@example.com" className="hover:text-gray-300 transition">Email</a>
            <a href="/#contact" className="hover:text-gray-300 transition">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
