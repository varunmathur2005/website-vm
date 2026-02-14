import { AsciiName } from 'app/components/ascii-name'
import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return (
    <section className="py-8 sm:py-12 md:py-20 max-w-6xl mx-auto">
      {/* Two Column Layout */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20 xl:gap-24 mb-20 md:mb-28">
        {/* Left Column - ASCII Art + Tagline + Socials */}
        <div className="lg:min-w-fit shrink-0 flex flex-col items-center lg:items-start">
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
      <div className="mt-8 md:mt-12 mb-8 md:mb-12">
        <h2 className="text-xl md:text-2xl font-medium italic mb-6 tracking-tight">Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Project 1 - Knock-Knock */}
          <a 
            href="https://github.com/varunmathur2005/Knock-Knock"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg p-6 transition-all"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-2 tracking-tight text-black dark:text-white underline  underline-offset-4">
              Knock-Knock
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm mb-2 font-medium">
              Cold Emailing & Cover Letter Generation Platform
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
              Built this to cold email recruiters and auto-write cover letters, which helped me get interviews at Alaan and fast forward the application grind.
            </p>
          </a>

          {/* Project 2 - LeetDoc */}
          <a 
            href="https://github.com/varunmathur2005/LeetDoc"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg p-6 transition-all"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-2 tracking-tight text-black dark:text-white underline underline-offset-4">
              LeetDoc
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm mb-2 font-medium">
              LeetCode Tracker with Smart Review Scheduling
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
              Made a Chrome extension that logs my LeetCode solves for me and tells me when to revise, so I don't forget everything.
            </p>
          </a>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="mt-8 md:mt-12 mb-8 md:mb-12">
        <h2 className="text-xl md:text-2xl font-medium italic mb-6 tracking-tight">Experience</h2>
        <div className="space-y-6">
          {/* University of Waterloo */}
          <div className="flex gap-4 items-start">
            <Image src="/waterloo.png" alt="University of Waterloo" width={40} height={40} className="shrink-0 rounded" />
            <div className="flex-1">
              <div className="flex justify-between items-start gap-4 mb-1">
                <a href="https://crysp.uwaterloo.ca/" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-semibold text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors underline underline-offset-4">
                  University of Waterloo CrySP labs
                </a>
                <span className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 shrink-0">2025 - 2026</span>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-1">
                Researching diffusion model security and running large-scale multi-GPU experiments
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs italic">
                Machine Learning Researcher • Undergraduate Research Assistantship • Security
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <Image src="/pcc_logo.jpeg" alt="PointClickCare" width={40} height={40} className="shrink-0 rounded" />
            <div className="flex-1">
              <div className="flex justify-between items-start gap-4 mb-1">
                <a href="https://pointclickcare.com/" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-semibold text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors underline underline-offset-4">
                  PointClickCare
                </a>
                <span className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 shrink-0">2025</span>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-1">
                Implemented internal data and analytics platforms for healthcare workflows
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs italic">
                Software Engineering • Internship • HealthTech
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-11 h-11 rounded bg-neutral-800 dark:bg-neutral-800 flex items-center justify-center shrink-0">
              <Image src="/def.png" alt="Definity Financial Corporation" width={25} height={25} className="rounded" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start gap-4 mb-1">
                <a href="https://www.definityfinancial.com/English/overview/default.aspx" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-semibold text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors underline underline-offset-4">
                  Definity Financial Corporation
                </a>
                <span className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 shrink-0">2025</span>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-1">
               Built distributed test orchestration and release validation systems
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs italic">
                Test Automation & DevOps • Internship • Insurance
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <Image src="/Favicon.png" alt="WATonomous" width={40} height={40} className="shrink-0 rounded" />
            <div className="flex-1">
              <div className="flex justify-between items-start gap-4 mb-1">
                <a href="https://www.watonomous.ca/" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-semibold text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors underline underline-offset-4">
                  WATonomous
                </a>
                <span className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 shrink-0">2025</span>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-1">
                Developed world modeling and HD mapping pipelines for autonomy
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs italic">
                Software Engineer • Design Team • Autonomous Vehicles 
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <Image src="/alaan_logo.png" alt="Alaan" width={40} height={40} className="shrink-0 rounded" />
            <div className="flex-1">
              <div className="flex justify-between items-start gap-4 mb-1">
                <a href="https://www.alaan.com/" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-semibold text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors underline underline-offset-4">
                  Alaan (YC W23)
                </a>
                <span className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 shrink-0">2024</span>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-1">
                Built ML pipelines for document processing and fraud detection
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs italic">
                Engineering & Data Insights • Internship • FinTech
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hobbies Section */}
      <div className="mt-8 md:mt-12 mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-medium italic mb-3 tracking-tight">Hobbies</h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
          Outside of work, I’m usually at the gym, on the soccer field, running pickup basketball, or playing poker.
        </p>
      </div>
    </section>
  )
}
