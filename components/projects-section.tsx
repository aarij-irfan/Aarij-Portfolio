"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "AI-Powered Dashboard",
    description: "A comprehensive analytics dashboard with AI-driven insights and predictive modeling capabilities.",
    tags: ["React", "Python", "TensorFlow", "D3.js"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management and payment processing.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Mobile Fitness App",
    description: "Cross-platform mobile application for fitness tracking with personalized workout recommendations.",
    tags: ["React Native", "Firebase", "Redux", "Health APIs"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Enterprise Resource Planning System",
    description: "Modular ERP system designed for scalability and customization across different business domains.",
    tags: ["C#", ".NET", "SQL Server", "Azure"],
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} variants={itemVariants} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  variants,
}: {
  project: (typeof projects)[0]
  variants: any
}) {
  return (
    <motion.div
      variants={variants}
      className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-800 rounded-full text-xs font-medium text-gray-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <Button size="sm" variant="default">
            View Project
          </Button>
          <Button size="sm" variant="outline" className="gap-2">
            <Github className="h-4 w-4" />
            Code
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

