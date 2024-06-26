import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="global-container">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Find your dream job with Smatch
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Smatch is an AI-powered job portal that connects you with the
                perfect job opportunities. Get personalized recommendations,
                streamlined applications, and expert career coaching.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Find Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
