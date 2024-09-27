import Image from "next/image";
import { Blog } from "@/types/blog";
import { HeratIcon } from "@/ui/icon/HeartIcon";
import CustomHeading from "@/components/elements/text/CustomHeading";
import Link from "next/link";

type Props = {
  blog: Blog;
};

export function BlogListItem({ blog }: Props) {
  return (
    <article className="flex space-x-4">
      <Link
        href={`/${blog.author.username}/articles/${blog.id}`}
      >
        <Image
          alt="this blog's thumbnail"
          src="https://picsum.photos/90/90"
          width={90}
          height={90}
          className="rounded-2xl"
        />
      </Link>
      <div>
        <div className="text-lg text-amber-900 mb-2">
          <Link
            href={`/${blog.author.username}/articles/${blog.id}`}
          >
            <CustomHeading tag="h2">
              {blog.title}
            </CustomHeading>
          </Link>
        </div>
        <div className="flex space-x-2 items-center">
          <Image
            alt={`${blog.author.username}'s profile icon`}
            src="https://picsum.photos/25/25"
            width={25}
            height={25}
            className="rounded-full"
          />
          <Link
            href={`/${blog.author.username}`}
            className="text-amber-600 hover:underline hover:cursor-pointer"
          >
            {blog.author.username}
          </Link>
          <span className="flex items-center text-amber-300">
            <HeratIcon className="mr-1" />
            {blog.likes}
          </span>
        </div>
      </div>
    </article>
  );
}
