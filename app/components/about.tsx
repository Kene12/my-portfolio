import Image from "next/image";

export default function About() {
  return (
    <>
        <section id="about">
            <main className="min-h-screen bg-custom flex items-center justify-center px-5 md:px-16 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl">

                <div className="relative">
                <Image
                    src="/metoo.png"
                    alt="Panithan Kunkaew"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-lg"
                />
                </div>

                <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">👋 Hello, I’m Panithan Kunkaew. A UX/UI and API Website Developer.</h1>
                <p className="text-gray-700 mb-6">
                    I am a recent graduate passionate about creating UX/UI designs tailored to user needs, utilizing tools such as React.js, Next.js, and TypeScript for website development. Additionally, I develop efficient backend APIs using technologies like Node.js, Bun, and Python.
                </p>
                <p className="text-gray-700 mb-6">
                    Let's collaborate and create something extraordinary together!
                </p>
                <div className="flex gap-4">
                    <a href="/#contact"  className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
                        Contact me
                    </a>
                    <a href="/cv.pdf" className="border border-black text-black px-5 py-2 rounded-md hover:bg-gray-100 transition">
                    Download CV
                    </a>
                </div>
                </div>
            </div>
            </main>
        </section>
    </>
  );
}
