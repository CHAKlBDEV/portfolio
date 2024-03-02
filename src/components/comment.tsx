import { IProjectComment } from "@/types/IProjectComment";
import Image from "next/image";

export default function Comment({ comment }: { comment: IProjectComment }) {
  return (
    <div className="grid gap-6">
      <div className="border-t border-gray-200 dark:border-gray-800"></div>
      <div className="flex items-start gap-4">
        <span className="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12 border">
          <Image
            className="aspect-square h-full w-full p-2"
            alt="@shadcn"
            fill={true}
            src="/images/profile.svg"
          />
        </span>
        <div className="grid gap-1.5">
          <div className="flex items-center gap-2">
            <div className="font-semibold">{comment.date}</div>
            <div className="text-gray-500 text-xs dark:text-gray-400">
              {comment.name}
            </div>
          </div>
          <div>{comment.content}</div>
        </div>
      </div>
    </div>
  );
}
