"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Dashboard",
    description: "A comprehensive analytics dashboard with modern UI and interactive data visualization.",
    tags: ["React", "Tailwind CSS", "Chart.js"],
    image: "/sleek-data-overview.png",
    demoUrl: "https://calm-gingersnap-412bf4.netlify.app/",
  },
  {
    title: "Animated Dashboard",
    description: "Feature-rich dashboard with smooth animations and advanced data visualization components.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "/dynamic-data-overview.png",
    demoUrl: "https://v0-animated-login-page-yf8nn7.vercel.app/dashboard",
  },
  {
    title: "GIS Application",
    description: "Geographic Information System application with interactive maps and data visualization.",
    tags: ["React", "Leaflet", "GeoJSON", "Mapbox"],
    image: "/digital-globe-analysis.png",
    demoUrl: "https://silver-heliotrope-8742d0.netlify.app/",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce solution with product catalog, cart functionality, and checkout process.",
    tags: ["Next.js", "React", "Tailwind CSS", "API Integration"],
    image: "/modern-apparel-store.png",
    demoUrl: "https://shiny-halva-7d885a.netlify.app/",
  },
  {
    title: "Authentication System",
    description: "Animated login and signup pages with secure authentication flow and user management.",
    tags: ["React", "Authentication", "Framer Motion", "Form Validation"],
    image: "/animated-login-interface.png",
    demoUrl: "https://v0-animated-login-page-six.vercel.app/login",
  },
  {
    title: "Finance Dashboard",
    description: "Financial management dashboard with transaction tracking, reporting, and data visualization.",
    tags: ["Next.js", "Chart.js", "Authentication", "Data Visualization"],
    image: "/finance-dashboard.png",
    demoUrl: "https://finance-books.vercel.app/login",
  },
  {
    title: "Access Retail Website",
    description: "Modern retail website with product catalog, responsive design, and seamless user experience.",
    tags: ["React", "E-commerce", "Responsive Design", "UI/UX"],
    image: "/access-retail-website.png",
    demoUrl: "https://access-retail-website.vercel.app/",
  },
  {
    title: "Baji Connect Platform",
    description: "Healthcare job platform connecting community health workers with employment opportunities.",
    tags: ["Next.js", "Job Platform", "Healthcare", "User Management"],
    image: "/baji-connect-platform.png",
    demoUrl: "https://baji-connect.vercel.app/",
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
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 max-w-3xl mx-auto mb-16"
        >
          These are examples showcasing my capabilities. Original client projects are not displayed due to privacy
          considerations.
        </motion.p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
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
          <Button
            variant="outline"
            size="lg"
            className="group"
            onClick={() => window.open("https://github.com/aarij-irfan", "_blank")}
          >
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
      className="group relative flex flex-col h-full overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
      whileHover={{ y: -5 }}
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm md:text-base flex-grow">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-800 rounded-full text-xs font-medium text-gray-300 hover:bg-gray-700 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <Button
            size="sm"
            variant="default"
            className="w-full bg-purple-600 hover:bg-purple-700"
            onClick={() => window.open(project.demoUrl, "_blank")}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View Demo
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
