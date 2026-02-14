import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="py-8 sm:py-12 md:py-20 max-w-5xl">
      {/* Back link */}
      <Link 
        href="/"
        className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors underline underline-offset-4 text-sm md:text-base mb-8 inline-block"
      >
        ← back
      </Link>
      
      <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8 tracking-tighter bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">My Blog</h1>
      <BlogPosts />
    </section>
  )
}
