"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Layout, Lightbulb, Server, Smartphone } from "lucide-react"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About Me
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-8 leading-relaxed">
            I'm Aarij Irfan, a versatile software engineer with a passion for creating exceptional digital experiences.
            With expertise spanning frontend, backend, AI, and application development, I bring a comprehensive skill
            set to every project I undertake.
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-12 leading-relaxed">
            My approach combines technical excellence with creative problem-solving, allowing me to build solutions that
            are not only functional but also intuitive and engaging for users.
          </motion.p>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ExpertiseCard
              icon={<Layout className="h-8 w-8" />}
              title="Frontend Development"
              description="Creating responsive, interactive user interfaces with modern frameworks and libraries."
            />
            <ExpertiseCard
              icon={<Server className="h-8 w-8" />}
              title="Backend Engineering"
              description="Building robust server-side applications and APIs that power seamless experiences."
            />
            <ExpertiseCard
              icon={<Lightbulb className="h-8 w-8" />}
              title="AI Integration"
              description="Implementing intelligent solutions that leverage the power of artificial intelligence."
            />
            <ExpertiseCard
              icon={<Smartphone className="h-8 w-8" />}
              title="Mobile Development"
              description="Crafting native and cross-platform mobile applications for iOS and Android."
            />
            <ExpertiseCard
              icon={<Code className="h-8 w-8" />}
              title="Desktop Applications"
              description="Building powerful Windows applications with modern technologies."
            />
            <ExpertiseCard
              icon={<Database className="h-8 w-8" />}
              title="Full-Stack Solutions"
              description="Delivering end-to-end solutions that integrate seamlessly across the technology stack."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ExpertiseCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-300">
      <div className="text-purple-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

