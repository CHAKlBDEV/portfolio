import { IProjectWithComments } from "@/types/IProjectWithComments";
import { getProjects } from "./getProjects";
import { getCommentsForProjectSlug } from "./getCommentsForProjectSlug";

export async function getProjectWithComments(
  slug: string,
): Promise<IProjectWithComments | null> {
  const projects = await getProjects();
  const project = projects.find(
    ({ slug: originalSlug }) => originalSlug === slug,
  );

  if (!project) {
    return null;
  }

  return {
    ...project,
    comments: await getCommentsForProjectSlug(slug),
  };
}
