import { IProjectComment } from "@/types/IProjectComment";
import { generateRandomId } from "@/utils/generateRandomId";
import { readFileSync, writeFileSync } from "fs";

export async function addCommentForProject(
  projectSlug: string,
  content: string,
  authorName: string,
): Promise<IProjectComment> {
  const now = new Date();

  const comment: IProjectComment = {
    content,
    id: generateRandomId(),
    name: authorName,
    date: `${now.getUTCDate()}-${now.getUTCMonth()}-${now.getUTCFullYear()}`,
  };

  const comments: Record<string, IProjectComment[]> = JSON.parse(
    readFileSync("./src/assets/comments.json", "utf8"),
  );
  comments[projectSlug].push(comment);
  writeFileSync("./src/assets/comments.json", JSON.stringify(comments));
  return comment;
}
