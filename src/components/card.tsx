import Image from "next/image";
import Link from "next/link";

export default function Card({
  title,
  description,
  imgUrl,
  slug,
}: {
  title: string;
  description: string;
  imgUrl: string;
  slug: string;
}) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="rounded-3xl border bg-card shadow-sm dark:border-none">
        <div className="p-4 md:p-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
            <div className="mt-4">
              <Image
                src={imgUrl}
                alt="Project Thumbnail"
                width="400"
                height="250"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "400/250", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
