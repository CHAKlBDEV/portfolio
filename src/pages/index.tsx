import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Card from "@/components/card";
import TagCard from "@/components/tagCard";
import Navbar from "@/components/navbar";
import { getProjects } from "@/data/getProjects";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { IProject } from "@/types/IProject";
import Footer from "@/components/footer";
import MainSection from "@/components/mainSection";
import ProjectsSection from "@/components/projectsSection";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = (async () => {
  const projects = await getProjects();
  return { props: { projects } };
}) satisfies GetStaticProps<{
  projects: IProject[];
}>;

export default function Home({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <MainSection />
        <div className="landing-section opacity-50 dark:opacity-100"></div>
        <ProjectsSection projects={projects} />
        <Footer />
      </main>
    </div>
  );
}
