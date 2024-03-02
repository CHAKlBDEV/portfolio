import Image from "next/image";
import TagCard from "./tagCard";

export default function MainSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-2 px-4 md:px-6 z-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Chakib Baiker
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Software Engineer | Backend Engineer | Fullstack developer
          </p>
        </div>
        <div className="mx-auto py-5">
          <Image
            alt="Avatar"
            className="rounded-full border aspect-square overflow-hidden object-cover object-center"
            height="200"
            src="/images/profilepic.webp"
            width="200"
          />
        </div>
        <p className="text-gray-500 dark:text-gray-400 max-w-screen-sm text-center">
          Node/typescript developer with 3 years of experience designing and
          developing web APIs that are robust, secure and scalable. Strongly
          committed to writing clean and secure code.
        </p>
        <div className="space-x-2">
          <TagCard content="Node" />
          <TagCard content="Next" />
          <TagCard content="React" />
        </div>
      </div>
    </section>
  );
}
