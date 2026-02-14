import { BlogPosts } from 'app/components/posts'
import { AsciiName } from 'app/components/ascii-name'
import Link from 'next/link'

export default function Page() {
  return (
    <section className="py-8 sm:py-12 md:py-20 max-w-6xl mx-auto">
      {/* Two Column Layout */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20 xl:gap-24 mb-20 md:mb-28">
        {/* Left Column - ASCII Art + Tagline + Socials */}
        <div className="lg:min-w-fit shrink-0">
          <AsciiName />
          
          {/* Tagline */}
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-6 italic font-medium">
            living in the present moment :)
          </p>
          
          {/* Social Links */}
          <div className="flex flex-wrap gap-3 md:gap-4 text-sm md:text-base">
            <a 
              href="https://www.linkedin.com/in/varunmathur2005/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors underline underline-offset-4"
            >
              linkedin
            </a>
            <a 
              href="https://github.com/varunmathur2005" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors underline underline-offset-4"
            >
              github
            </a>
            <a 
              href="mailto:v3mathur@uwaterloo.ca"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors underline underline-offset-4"
            >
              mail
            </a>
            <Link
              href="/blog"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors underline underline-offset-4"
            >
              blog
            </Link>
          </div>
        </div>

        {/* Right Column - About Me */}
        <div className="flex-1 max-w-2xl">
          <p className="text-neutral-900 dark:text-neutral-100 text-lg md:text-xl mb-6 leading-relaxed font-medium">
            <span className="italic font-semibold">Computer Science</span> @ University of Waterloo.
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 text-lg md:text-xl leading-relaxed mb-6 font-medium">
            Machine Learning Security Researcher @ University of Waterloo CrySP Labs.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg font-normal">
            Previously at PointClickCare, Definity, Alaan (YC W23).
          </p>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="mt-16 md:mt-20 mb-16 md:mb-20">
        <h2 className="text-2xl md:text-3xl font-medium italic mb-8 tracking-tight">Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Project 1 - Knock-Knock */}
          <a 
            href="https://github.com/varunmathur2005/Knock-Knock"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg p-6 transition-all"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-3 tracking-tight text-black dark:text-white">
              Knock-Knock
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base mb-3 font-medium">
              Cold Emailing & Cover Letter Generation Platform
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
              Built this to cold email recruiters and auto-write cover letters, which helped me get interviews at Alaan and skip the boring application grind.
            </p>
          </a>

          {/* Project 2 - LeetDoc */}
          <a 
            href="https://github.com/varunmathur2005/LeetDoc"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg p-6 transition-all"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-3 tracking-tight text-black dark:text-white">
              LeetDoc
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base mb-3 font-medium">
              LeetCode Tracker with Smart Review Scheduling
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
              Made a Chrome extension that logs my LeetCode solves for me and tells me when to revise, so I don't forget everything.
            </p>
          </a>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="mt-16 md:mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">Recent Posts</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
