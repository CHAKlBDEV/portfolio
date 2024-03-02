import { IProjectComment } from "@/types/IProjectComment";
import { readFileSync } from "fs";

export async function getCommentsForProjectSlug(
  projectSlug: string,
): Promise<IProjectComment[]> {
  const comments: Record<string, IProjectComment[]> = JSON.parse(
    readFileSync("./src/assets/comments.json", "utf8"),
  );

  return comments[projectSlug] || [];
}
