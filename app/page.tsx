import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-custom flex items-center justify-center px-5 md:px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-4xl">
        
        <div className="space-y-4">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg font-medium text-sm">
            It's me
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900">
            Panithan Kunkaew
          </h1>
          <p className="text-xl text-gray-600">
            <span className="text-red-500 font-semibold">UX/UI</span> and <br />
             <span className="text-blue-400 font-semibold">API Website Developer</span> 
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-500 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-red-600 transition"
          >
            Contact me
          </a>

        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute right-0 bg-blue-300 rounded-l-xl h-full w-3/4 -z-10 hidden md:block"></div>
          <Image
            src="/itme.png"
            alt="Profile"
            width={400}
            height={400}
            className="rounded-xl shadow-xl object-cover"
          />
        </div>
      </div>
    </main>
  );
}


