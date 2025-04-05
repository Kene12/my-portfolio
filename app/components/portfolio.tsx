import Link from "next/link";

const projects = [
  {
    id: "project1",
    title: "Personal Portfolio Website",
    description: "A modern portfolio website using Next.js and Tailwind CSS.",
  },
  {
    id: "project2",
    title: "API Backend System",
    description: "A RESTful API for managing blog content with Node.js and MongoDB.",
  },
];

export default function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <main className="min-h-screen px-5 md:px-16 py-10 bg-gray-50 pd-tp">
          <h1 className="text-4xl font-bold mb-8 text-center text-black">My Projects</h1>
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {projects.map((project) => (
              <div key={project.id} className="p-6 bg-white rounded-lg shadow">
                <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
                <p className="text-gray-600 my-2">{project.description}</p>
                <Link
                  href={`/portfolio/${project.id}`}
                  className="text-blue-600 hover:underline font-semibold"
                >
                  View Project →
                </Link>
              </div>
            ))}
          </div>
        </main>
      </section>
    </>
  );
}