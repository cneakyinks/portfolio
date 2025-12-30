"use client"
import FeaturedProjects from "./components/featured-projects"
import HomeChatSection from "./components/home-chat-section"
import Footer from "./components/footer"
import { motion } from "framer-motion"
import { LayeredText } from "./about/components/layered-text"
import Image from "next/image"
import Link from "next/link"
import SoftwareCarousel from "./components/software-carousel"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* About Page Header Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col md:grid md:grid-cols-[300px,1fr] gap-8 md:gap-12 items-center md:items-start max-w-5xl mx-auto pt-16 md:pt-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square w-full max-w-[220px] md:max-w-[300px] mx-auto"
            >
              <div className="relative h-full rounded-full overflow-hidden border-4 border-cyan-400/20">
                <Image
                  id="profile-image"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gfdGEFk1D6Mc1GZCSttLfvYGz6Rpvs.png"
                  alt="Celeste Ng"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <div className="space-y-6 w-full text-center md:text-left">
              <div className="space-y-4 mx-auto md:mx-0 max-w-[90%] md:max-w-[80%] lg:max-w-[60%]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <LayeredText className="text-4xl sm:text-5xl font-bold tracking-tight text-white md:text-7xl mb-4">
                    I'm Celeste!
                  </LayeredText>
                  <p className="text-lg sm:text-xl flex flex-wrap gap-2 items-center text-gray-400 justify-center md:justify-start">
                    <span className="relative inline-block cursor-pointer transition-all duration-300 hover:text-cyan-400">
                      Interaction Designer
                    </span>
                    <span className="text-gray-600">|</span>
                    <span className="relative inline-block cursor-pointer transition-all duration-300 hover:text-cyan-400">
                      User Researcher
                    </span>
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="w-full text-base sm:text-lg text-gray-400 text-center md:text-left whitespace-normal break-words"
                >
                  I am an explorative interactive designer who brings ideas to life through dynamic experiences,
                  blending physical and digital interactions, with creativity and intent.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-6 mx-auto"
                >
                  <SoftwareCarousel />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start"
                >
                  <Link href="/resume" target="_blank">
                    <button className="group relative px-8 py-3 text-white overflow-hidden">
                      <span className="relative z-10 flex items-center gap-2">Resume</span>
                      <div className="absolute inset-0 rounded-full bg-black/50 backdrop-blur-sm" />
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-50 blur transition-all group-hover:opacity-75" />
                        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                          <rect
                            className="animate-flow-around"
                            width="100%"
                            height="100%"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                        </svg>
                      </div>
                    </button>
                  </Link>
                  <Link href="/projects">
                    <button className="group relative px-8 py-3 text-white overflow-hidden">
                      <span className="relative z-10 flex items-center gap-2">View My Works!</span>
                      <div className="absolute inset-0 rounded-full bg-black/50 backdrop-blur-sm" />
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-50 blur transition-all group-hover:opacity-75" />
                        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                          <rect
                            className="animate-flow-around"
                            width="100%"
                            height="100%"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                        </svg>
                      </div>
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <div className="py-8">
        <FeaturedProjects />
      </div>
      <div className="py-8">
        <HomeChatSection />
      </div>
      <Footer />
    </main>
  )
}
