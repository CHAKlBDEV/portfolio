import { IProject } from "@/types/IProject";
import Card from "./card";

export default function ProjectsSection({
  projects,
}: {
  projects: IProject[];
}) {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Projects
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out my projects below.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:gap-6">
            {projects.map(({ description, slug, thumbnailImageUrl, title }) => (
              <Card
                key={slug}
                slug={slug}
                description={description}
                imgUrl={thumbnailImageUrl}
                title={title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
