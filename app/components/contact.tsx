import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaGithub,
  } from "react-icons/fa";
  
  export default function Contact() {
    return (
      <>
        <section id="contact">
          <main className="items-center justify-center bg-custom ">
            <div className="center-class ">
              <h1 className="text-stry font-bold text-black mb-5">Contact</h1>
            </div>
            <div className=" flex items-center justify-center px-5 md:px-16 py-10">
              <div className="max-w-4xl w-full grid md:grid-cols-2 gap-10 items-start ">
              <form
                  action="https://formsubmit.co/panithankunkaewpd@gmail.com"
                  method="POST"
                  className="space-y-5"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full bg-white text-black border border-gray-300 p-3 rounded-md"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="w-full bg-white text-black border border-gray-300 p-3 rounded-md"
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full bg-white text-black border border-gray-300 p-3 rounded-md"
                  />
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your message"
                    className="w-full bg-white text-black border border-gray-300 p-3 rounded-md"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
                  >
                    Send Message
                  </button>
                </form>

                <div className="space-y-6 text-gray-700">
                  <p>
                    Got an idea or want to collaborate? Let’s build something great together.
                  </p>
        
                  <div>
                    <h2 className="font-bold text-xl text-black">Let’s talk 👋</h2>
                    <p>panithankunkaewpd@gmail.com</p>
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
                    <a href="https://x.com/PanithanKu57482" target="_blank" rel="noopener noreferrer">
                      <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/panithan-kunkaew-8283502a3/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/kenta_sad/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                    <a href="https://github.com/Kene12" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </main>
        </section>
      </>
    );
  }
  