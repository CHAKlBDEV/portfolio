import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Card from "@/components/card";
import TagCard from "@/components/tagCard";
import Navbar from "@/components/navbar";
import { getProjects } from "@/data/getProjects";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { IProject } from "@/types/IProject";
import { useRouter } from "next/router";
import ProjectCarousel from "@/components/projectCarousel";
import Comment from "@/components/comment";
import Footer from "@/components/footer";
import { getProjectWithComments } from "@/data/getProjectWithComments";
import { IProjectWithComments } from "@/types/IProjectWithComments";

export const getStaticPaths = (async () => {
  const projects = await getProjects();
  return {
    paths: projects.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: true,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const project = await getProjectWithComments(params?.slug as string);
  return { props: { project }, revalidate: 60 };
}) satisfies GetStaticProps<{
  project: IProjectWithComments | null;
}>;

export default function Home({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!project) {
    return <p>404</p>;
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="flex items-center">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  {project.title}
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4 justify-center">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="w-full">
              <ProjectCarousel imageLinks={project.images} />
            </div>
          </div>
          <div className="container mx-auto grid gap-6 my-20">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Join the Conversation</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Let me know what you think!
              </p>
            </div>
            {project.comments.map((comment, id) => (
              <Comment key={id} comment={comment} />
            ))}
          </div>
        </section>
        <div className="landing-section opacity-50 dark:opacity-100"></div>
        <Footer />
      </main>
    </div>
  );
}
