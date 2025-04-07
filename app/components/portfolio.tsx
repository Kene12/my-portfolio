import Link from "next/link";

const projects = [
  {
    id: "project1",
    title: "PHP Manage System Library",
    description: "A complete library management system developed in PHP with MySQL, featuring book inventory, user management, and loan tracking for small to medium libraries.",
  },
  {
    id: "project2",
    title: "Java Manage with Users",
    description: "A desktop-based user management app built with Java and Swing, featuring simple CRUD operations."
  },
  {
    id: "project3",
    title: "Fall Detection System",
    description: "A real-time camera-based system that detects falls and sends alert notifications using computer vision."
  },
  {
    id: "project4",
    title: "JavaScript Product API",
    description: "A Node.js REST API for managing products. Server is ready, client under development."
  },
];

export default function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <main className="min-h-screen  px-5 md:px-16 py-10 bg-gray-50 pd-tp">
          <h1 className="text-4xl font-bold mb-8 text-center text-black">📝My Projects</h1>
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