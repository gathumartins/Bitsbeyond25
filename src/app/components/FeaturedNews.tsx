import React from 'react'
import PostCard from './PostCard';

function FeaturedNews() {
  return (
    <section className="bg-accent dark:bg-accent min-h-[500px] contPadd py-11">
      <h2 className="bodyH2 mb-5">Featured News</h2>
      <div className="grid grid-cols-1 [&_div>p]:hidden md:grid-cols-2 md:grid-rows-3 md:[&_div]:first:row-span-3 gap-5 md:[&>:not(:first-child)]:grid md:[&>:not(:first-child)]:grid-cols-3 md:[&>:not(:first-child)]:gap-5 md:[&>:not(:first-child)>*:first-child]:col-span-1 md:[&>:not(:first-child)>*:last-child]:col-span-2">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </section>
  );
}

export default FeaturedNews