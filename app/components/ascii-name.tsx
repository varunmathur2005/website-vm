'use client'

import { useEffect, useState } from 'react'

export function AsciiName() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const varunArt = `██╗   ██╗  █████╗  ██████╗  ██╗   ██╗ ███╗   ██╗
██║   ██║ ██╔══██╗ ██╔══██╗ ██║   ██║ ████╗  ██║
██║   ██║ ███████║ ██████╔╝ ██║   ██║ ██╔██╗ ██║
╚██╗ ██╔╝ ██╔══██║ ██╔══██╗ ██║   ██║ ██║╚██╗██║
 ╚████╔╝  ██║  ██║ ██║  ██║ ╚██████╔╝ ██║ ╚████║
  ╚═══╝   ╚═╝  ╚═╝ ╚═╝  ╚═╝  ╚═════╝  ╚═╝  ╚═══╝`

  const mathurArt = `███╗   ███╗  █████╗  ████████╗ ██╗  ██╗ ██╗   ██╗ ██████╗ 
████╗ ████║ ██╔══██╗ ╚══██╔══╝ ██║  ██║ ██║   ██║ ██╔══██╗
██╔████╔██║ ███████║    ██║    ███████║ ██║   ██║ ██████╔╝
██║╚██╔╝██║ ██╔══██║    ██║    ██╔══██║ ██║   ██║ ██╔══██╗
██║ ╚═╝ ██║ ██║  ██║    ██║    ██║  ██║ ╚██████╔╝ ██║  ██║
╚═╝     ╚═╝ ╚═╝  ╚═╝    ╚═╝    ╚═╝  ╚═╝  ╚═════╝  ╚═╝  ╚═╝`

  const fullNameArt = `██╗   ██╗  █████╗  ██████╗  ██╗   ██╗ ███╗   ██╗     ███╗   ███╗  █████╗  ████████╗ ██╗  ██╗ ██╗   ██╗ ██████╗ 
██║   ██║ ██╔══██╗ ██╔══██╗ ██║   ██║ ████╗  ██║     ████╗ ████║ ██╔══██╗ ╚══██╔══╝ ██║  ██║ ██║   ██║ ██╔══██╗
██║   ██║ ███████║ ██████╔╝ ██║   ██║ ██╔██╗ ██║     ██╔████╔██║ ███████║    ██║    ███████║ ██║   ██║ ██████╔╝
╚██╗ ██╔╝ ██╔══██║ ██╔══██╗ ██║   ██║ ██║╚██╗██║     ██║╚██╔╝██║ ██╔══██║    ██║    ██╔══██║ ██║   ██║ ██╔══██╗
 ╚████╔╝  ██║  ██║ ██║  ██║ ╚██████╔╝ ██║ ╚████║     ██║ ╚═╝ ██║ ██║  ██║    ██║    ██║  ██║ ╚██████╔╝ ██║  ██║
  ╚═══╝   ╚═╝  ╚═╝ ╚═╝  ╚═╝  ╚═════╝  ╚═╝  ╚═══╝     ╚═╝     ╚═╝ ╚═╝  ╚═╝    ╚═╝    ╚═╝  ╚═╝  ╚═════╝  ╚═╝  ╚═╝`

  return (
    <>
      {/* Single line version for large screens */}
      <pre 
        className={`
          hidden xl:block
          text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem]
          font-mono 
          overflow-x-auto
          transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
          bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
          dark:from-blue-400 dark:via-purple-400 dark:to-pink-400
          bg-clip-text text-transparent
          mb-4
        `}
        style={{
          backgroundSize: '200% 200%',
          animation: 'gradient 3s ease infinite',
        }}
      >
        <style jsx>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
        {fullNameArt}
      </pre>

      {/* Stacked version for medium and small screens */}
      <div className="xl:hidden mb-4">
        <pre 
          className={`
            text-[0.45rem] xs:text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem]
            font-mono 
            overflow-x-auto
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
            bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
            dark:from-blue-400 dark:via-purple-400 dark:to-pink-400
            bg-clip-text text-transparent
            mb-2
          `}
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradient 3s ease infinite',
          }}
        >
          <style jsx>{`
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
          {varunArt}
        </pre>
        <pre 
          className={`
            text-[0.45rem] xs:text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem]
            font-mono 
            overflow-x-auto
            transition-all duration-1000 ease-out delay-100
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
            bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
            dark:from-blue-400 dark:via-purple-400 dark:to-pink-400
            bg-clip-text text-transparent
          `}
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradient 3s ease infinite',
          }}
        >
          {mathurArt}
        </pre>
      </div>
    </>
  )
}
