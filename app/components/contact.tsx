import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaGithub,
  } from "react-icons/fa";
  
  export default function Contact() {
    return (
      <main className="min-h-screen flex items-center justify-center px-5 md:px-16 py-10 bg-white">
        <div className="max-w-4xl w-full grid md:grid-cols-2 gap-10 items-start ">
          {/* Left: Form */}
          <form className="space-y-5">
            <h1 className="text-4xl font-bold text-black mb-5">Contact</h1>
  
            <input
              type="text"
              placeholder="Your name"
              className="w-full border text-black border-gray-300 p-3 rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full border text-black border-gray-300 p-3 rounded-md focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border text-black border-gray-300 p-3 rounded-md focus:outline-none"
            />
            <textarea
              rows={4}
              placeholder="Your message"
              className="w-full border text-black border-gray-300 p-3 rounded-md focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
  
          {/* Right: Info */}
          <div className="space-y-6 text-gray-700">
            <p>
              Drop me a line for inquiries, collaborations, speaking engagements,
              or just to say hello.
            </p>
  
            <div>
              <h2 className="font-bold text-xl text-black">Say hi,</h2>
              <p>hello@gmail.com</p>
            </div>
  
            <div>
              <h2 className="font-bold text-xl text-black">Call me</h2>
              <p>+66 956 519 512</p>
            </div>
  
            <div>
              <h2 className="font-bold text-xl text-black">Find me socials</h2>
              <div className="flex gap-4 text-2xl text-gray-600 mt-2">
              <a href="https://www.facebook.com/panithan.kunkaew.2025/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
                <FaTwitter />
                <FaLinkedin />
                <FaInstagram />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  