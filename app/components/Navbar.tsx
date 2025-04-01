import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-purple-600">
          <Link href="/">My Portfolio</Link>
        </div>
        <ul className="flex space-x-8 text-gray-600 font-medium">
          <li><Link href="/" className="hover:text-purple-600">Home</Link></li>
          <li><Link href="/about" className="hover:text-purple-600">About</Link></li>
          <li><Link href="/services" className="hover:text-purple-600">Services</Link></li>
          <li><Link href="/portfolio" className="hover:text-purple-600">Portfolio</Link></li>
          <li><Link href="/blog" className="hover:text-purple-600">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-purple-600">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
