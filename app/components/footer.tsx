export default function Footer() {
  const buildDate = process.env.NEXT_PUBLIC_BUILD_DATE || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  
  return (
    <footer className="mt-4 md:mt-6 py-6 md:py-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-4">
          <div className="flex items-center gap-2">
            <p className="text-neutral-600 dark:text-neutral-300 text-xs md:text-sm">
              Seeking opportunities Summer 2027
            </p>
             <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </div>
          <p className="text-xs md:text-sm italic bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-medium">
            Feel free to reach out!
          </p>
          <div className="flex flex-col md:items-end gap-1">
            <p className="text-neutral-600 dark:text-neutral-300 text-xs md:text-sm">
              © Varun Mathur
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 text-xs">
              Last updated {buildDate}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
