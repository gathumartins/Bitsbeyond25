import React from 'react'
import { Card, CardHeader, CardContent} from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';

interface PostCardProps {
  horizontal?: boolean;
}

function PostCard({ horizontal = false }: PostCardProps) {
  return (
    <Card
      className={`bg-transparent border-0 p-0 shadow-none ${horizontal ? "md:grid md:grid-cols-3 md:gap-5" : ""}`}
    >
      <CardHeader
        className={`relative p-0 ${horizontal ? "md:col-span-1" : ""}`}
      >
        <Image
          src="/images/featimg.jpg"
          alt="featured image"
          height={317}
          width={576}
          priority
          className="rounded w-full inline-block dark:grayscale-100"
        />
      </CardHeader>
      <CardContent className={`p-0 ${horizontal ? "md:col-span-2" : ""}`}>
        <h3 className="font-sans font-semibold text-lg text-black dark:text-black">
          Teachers Computer Science Program & iKids Computer Science Program
          Graduation
        </h3>
        <div className="font-sans text-base text-black dark:text-black">
          <p>
            Adipiscing elit ed tincidunt lectus iaculis orci faucibus tristique.
            Pellentesque ornare tortor viverra nisi vulputat imperdiet.
            Morbirhoncus,
          </p>
        </div>
        <div className="flex justify-between items-center gap-5">
          <h4 className="font-sans text-lg font-semibold text-blue dark:text-blue">
            30th June 2025
          </h4>
          <Link
            href="/"
            title="Read More Link"
            className="font-sans text-lg font-semibold text-blue dark:text-blue hover:text-black"
          >
            Read more
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default PostCard