import Image from "next/image";
import { useState } from "react";

export default function ProjectCarousel({
  imageLinks,
}: {
  imageLinks: string[];
}) {
  const [currentId, setCurrentId] = useState(0);

  function next() {
    setCurrentId(currentId + 1);
  }

  function previous() {
    setCurrentId(currentId - 1);
  }

  return (
    <div className="w-full max-w-screen-xl mx-auto ">
      <div className="relative" role="region" aria-roledescription="carousel">
        <div className="overflow-hidden">
          <div className="flex -ml-4">
            <div
              role="group"
              aria-roledescription="slide"
              className="min-w-0 shrink-0 grow-0 basis-full pl-4"
            >
              <div className="p-1 relative h-[500px]">
                <Image
                  src={imageLinks[currentId]}
                  fill={true}
                  alt="Project image"
                  className="aspect-video object-cover w-full rounded-lg overflow-hidden"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="inline-flex items-center whitespace-nowrap shrink-0 justify-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm font-medium hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full -left-12 top-1/2 -translate-y-1/2"
          onClick={() => previous()}
          disabled={!(currentId > 0)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-4 w-4"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          <span className="sr-only">Previous slide</span>
        </button>
        <button
          className="inline-flex items-center whitespace-nowrap shrink-0 justify-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm font-medium hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full -right-12 top-1/2 -translate-y-1/2"
          onClick={() => next()}
          disabled={!(currentId < imageLinks.length - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-4 w-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
          <span className="sr-only">Next slide</span>
        </button>
      </div>
    </div>
  );
}
