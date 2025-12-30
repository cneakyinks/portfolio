"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Crown, Code, Layers, Search, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { projects } from "../data/projects"

import { Outfit } from "next/font/google"
import { LayeredText } from "../about/components/layered-text"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const outfit = Outfit({ subsets: ["latin"] })

const iconMap = {
  featured: Crown,
  research: Search,
  development: Code,
  "Immersive Experience Prototype": Layers,
  collaborations: Users,
  ux: Search,
  ui: Search,
  "immersive-experience": Layers,
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const categories = [
    "all",
    "research",
    "Interface Design",
    "Wayfinding",
    "development",
    "video-production",
    "marketing",
  ]

  const filteredProjects =
    selectedCategory === "all"
      ? [...projects].sort((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year))
      : projects
          .filter(
            (project) =>
              project.categories.includes(selectedCategory) ||
              (selectedCategory === "Interface Design" &&
                (project.categories.includes("ui") || project.categories.includes("Interface Design"))) ||
              (selectedCategory === "Wayfinding" &&
                ["Precinct of Good", "Moments of 間", "Video Production", "Path of Familiarity"].includes(
                  project.title,
                )),
          )
          .sort((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year))

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-16 text-center leading-[2 rem] leading-8 leading-[rem] leading-[1.9rem] leading-[1.95rem] leading-6">
          <LayeredText className="mb-4 text-5xl font-bold tracking-tight md:text-6xl">My Works</LayeredText>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A collection of projects showcasing my journey in interaction design and user experience
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Mobile Dropdown */}
          <div className="w-full md:hidden">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2 text-sm font-medium capitalize transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/25"
                    : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const Icon = iconMap[project.categories[0] as keyof typeof iconMap] || Crown
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link href={`/projects/${project.id}`}>
                    <Card className="group relative overflow-hidden border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10">
                      <CardContent className="p-0">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>
                        <div className="relative p-6">
                          <h3
                            className={cn(
                              outfit.className,
                              "mb-2 text-2xl font-bold tracking-tight text-white group-hover:text-cyan-400",
                            )}
                          >
                            {project.title}
                          </h3>
                          <p className="mb-4 text-sm text-gray-400">{project.description}</p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-white">{project.role}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {project.subRoles.map((subRole, index) => (
                                <span key={index} className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-gray-400">
                                  {subRole}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
