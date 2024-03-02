import Link from "next/link";

export default function Navbar() {
  return (
    <header className="container mx-auto px-4 lg:px-6 h-14 flex items-center">
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/#projects"
        >
          Projects
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/#contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
