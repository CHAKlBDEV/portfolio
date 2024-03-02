import { IProject } from "@/types/IProject";
import * as projects from "@/assets/projects.json";
import { readFileSync } from "fs";

export async function getProjects(): Promise<IProject[]> {
  const projects: IProject[] = JSON.parse(
    readFileSync("./src/assets/projects.json", "utf8"),
  );
  return projects;
}
