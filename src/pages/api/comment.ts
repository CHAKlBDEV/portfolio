import { addCommentForProject } from "@/data/addCommentForProject";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, errors: ["wrong_method"] });
    return;
  }
  const { username, content, slug } = req.body;

  const comment = await addCommentForProject(slug, content, username);

  res.revalidate(`/projects/${slug}`);
  res.status(200).json({ success: true, data: comment });
}
