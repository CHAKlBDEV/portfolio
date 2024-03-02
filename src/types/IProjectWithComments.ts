import { IProject } from "./IProject";
import { IProjectComment } from "./IProjectComment";

export interface IProjectWithComments extends IProject {
  comments: IProjectComment[];
}
