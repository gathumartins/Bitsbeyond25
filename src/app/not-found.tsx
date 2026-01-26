import Link from "next/link";

export default function NotFound() {
  return (
    <article className="bg-gray">
      <section className="container max-w-[900px] mx-auto flex contPadd py-11 h-lvh bg-[url(/images/notfound.png)] bg-no-repeat bg-top-right">
        <div className="flex flex-col justify-center text-center items-start max-w-[300px] self-center">
          <h1 className="relative w-full text-center -mt-16">
            <span className="text-accent font-sans font-semibold text-[200px]">
              404
            </span>
            <span className="absolute left-2 top-0 text-blue font-sans font-semibold text-[200px]/normal">
              404
            </span>
          </h1>
          <h2 className="relative -mt-[80px] w-full">
            <span className="text-accent font-sans font-semibold text-[100px]">
              ERROR
            </span>
            <span className="absolute -left-2 top-0 text-blue font-sans font-semibold text-[100px]/normal">
              ERROR
            </span>
          </h2>
          <p className="text-center text-4xl font-semibold font-sans w-full">
            Page not found
          </p>
          <Link
            href="/"
            className="text-center font-sans bg-blue hover:bg-black dark:hover:bg-black dark:bg-blue p-2 w-[120px] rounded text-white dark:text-white text-base self-center my-4"
          >
            Go Home
          </Link>
        </div>
      </section>
    </article>
  );
}
