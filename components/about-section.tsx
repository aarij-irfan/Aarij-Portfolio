"use client"

import { useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import {
  Code,
  Database,
  Layout,
  Lightbulb,
  Smartphone,
  Zap,
  Globe,
  MessageSquare,
  Layers,
  Cpu,
  BarChart,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("story")

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

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

  const highlightVariants = {
    initial: { color: "#ffffff" },
    highlight: { color: "#a855f7" },
  }

  const tabs = [
    { id: "story", label: "My Story" },
    { id: "skills", label: "Expertise" },
    { id: "approach", label: "Approach" },
  ]

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <motion.div
            className="absolute top-10 left-10 w-64 h-64 rounded-full bg-purple-500 blur-[100px]"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-blue-500 blur-[100px]"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div ref={containerRef} className="max-w-5xl mx-auto" style={{ opacity }}>
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-6">
              About Me
            </motion.h2>

            <motion.div variants={itemVariants} className="flex justify-center mb-8">
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  className={`
                    ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-none"
                        : "border-gray-700 bg-transparent hover:bg-gray-800"
                    }
                    transition-all duration-300
                  `}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </Button>
              ))}
            </motion.div>
          </motion.div>

          {/* My Story Tab */}
          {activeTab === "story" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center"
            >
              <div className="md:col-span-3">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="space-y-6 text-lg text-gray-300"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    Hi, I'm{" "}
                    <motion.span
                      variants={highlightVariants}
                      initial="initial"
                      animate="highlight"
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="font-bold"
                    >
                      Aarij Irfan
                    </motion.span>{" "}
                    — a self-driven full-stack developer, digital strategist, and founder of Gen-T AI Solutions. I
                    specialize in building robust, scalable platforms that solve real-world problems through code, data,
                    and design.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    Whether it's a GIS system visualizing 700k+ data points, a custom financial dashboard, or an
                    employment platform connecting thousands of users, I bring ideas to life —{" "}
                    <motion.span
                      variants={highlightVariants}
                      initial="initial"
                      animate="highlight"
                      transition={{ delay: 1.2, duration: 0.5 }}
                      className="font-semibold"
                    >
                      fast, clean, and functional
                    </motion.span>
                    .
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    In the past year alone, I've led the development of platforms with real-time chat, multilingual
                    support, custom dashboards, intelligent automation, and AI integrations — all while managing
                    deployment, data strategy, and user experience.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                  >
                    When I'm not coding, I'm usually brainstorming the next big feature, exploring AI workflows, or
                    refining internal tools to make development smoother for my team and clients.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    className="font-semibold text-xl text-white"
                  >
                    Let's build something powerful.
                  </motion.p>
                </motion.div>
              </div>

              <div className="md:col-span-2">
                <motion.div className="relative" style={{ y }}>
                  <motion.div
                    className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-purple-400">Journey Highlights</h3>

                    <div className="space-y-4">
                      <motion.div
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        <div className="mt-1 bg-purple-500/20 p-2 rounded-full">
                          <Zap className="h-4 w-4 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-medium">Founder</h4>
                          <p className="text-sm text-gray-400">Gen-T AI Solutions</p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      >
                        <div className="mt-1 bg-blue-500/20 p-2 rounded-full">
                          <Globe className="h-4 w-4 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-medium">GIS System Developer</h4>
                          <p className="text-sm text-gray-400">700k+ data points visualization</p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0, duration: 0.6 }}
                      >
                        <div className="mt-1 bg-green-500/20 p-2 rounded-full">
                          <MessageSquare className="h-4 w-4 text-green-400" />
                        </div>
                        <div>
                          <h4 className="font-medium">Platform Architect</h4>
                          <p className="text-sm text-gray-400">Real-time communication systems</p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                      >
                        <div className="mt-1 bg-red-500/20 p-2 rounded-full">
                          <Cpu className="h-4 w-4 text-red-400" />
                        </div>
                        <div>
                          <h4 className="font-medium">AI Integration Specialist</h4>
                          <p className="text-sm text-gray-400">Intelligent automation solutions</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Expertise Tab */}
          {activeTab === "skills" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
              >
                <h3 className="text-xl font-semibold mb-6 text-center">Frontend Development</h3>

                <div className="space-y-5">
                  <SkillBar skill="React & Next.js" level={95} color="from-purple-500 to-blue-500" delay={0.3} />
                  <SkillBar skill="Tailwind CSS" level={90} color="from-blue-500 to-cyan-400" delay={0.4} />
                  <SkillBar skill="Framer Motion" level={85} color="from-cyan-400 to-green-400" delay={0.5} />
                  <SkillBar skill="TypeScript" level={88} color="from-green-400 to-yellow-300" delay={0.6} />
                  <SkillBar skill="UI/UX Design" level={82} color="from-yellow-300 to-orange-400" delay={0.7} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
              >
                <h3 className="text-xl font-semibold mb-6 text-center">Backend Development</h3>

                <div className="space-y-5">
                  <SkillBar skill="Node.js" level={92} color="from-orange-400 to-red-500" delay={0.8} />
                  <SkillBar skill="PostgreSQL" level={88} color="from-red-500 to-purple-500" delay={0.9} />
                  <SkillBar skill="Firebase" level={90} color="from-purple-500 to-blue-500" delay={1.0} />
                  <SkillBar skill="Supabase" level={85} color="from-blue-500 to-cyan-400" delay={1.1} />
                  <SkillBar skill="API Development" level={94} color="from-cyan-400 to-green-400" delay={1.2} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="md:col-span-2 mt-4"
              >
                <h3 className="text-xl font-semibold mb-6 text-center">Specialized Skills</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    { name: "GIS Systems", icon: Globe },
                    { name: "Real-time Chat", icon: MessageSquare },
                    { name: "AI Integration", icon: Cpu },
                    { name: "Data Visualization", icon: BarChart },
                    { name: "System Architecture", icon: Layers },
                    { name: "Mobile Development", icon: Smartphone },
                    { name: "Database Design", icon: Database },
                    { name: "Full-Stack Solutions", icon: Code },
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                      className="bg-gray-800/20 backdrop-blur-sm p-4 rounded-lg border border-gray-700 flex flex-col items-center justify-center text-center hover:bg-gray-800/40 hover:border-purple-500/50 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="bg-purple-500/20 p-3 rounded-full mb-3">
                        <skill.icon className="h-5 w-5 text-purple-400" />
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Approach Tab */}
          {activeTab === "approach" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="md:col-span-3 text-center mb-8"
              >
                <p className="text-xl text-gray-300">
                  I don't just build websites or apps — I build{" "}
                  <span className="text-purple-400 font-semibold">systems that evolve</span> with your needs.
                </p>
              </motion.div>

              {[
                {
                  title: "Problem-First Approach",
                  icon: Lightbulb,
                  description:
                    "I start by deeply understanding the problem before jumping to solutions. This ensures we build exactly what's needed, not just what's requested.",
                  color: "purple",
                },
                {
                  title: "Scalable Architecture",
                  icon: Layers,
                  description:
                    "Every system I build is designed to grow. I create flexible foundations that can adapt to changing requirements and increasing user loads.",
                  color: "blue",
                },
                {
                  title: "User-Centered Design",
                  icon: Layout,
                  description:
                    "Technical excellence means nothing if users struggle. I focus on creating intuitive experiences that feel natural and effortless.",
                  color: "cyan",
                },
                {
                  title: "Full-Stack Integration",
                  icon: Code,
                  description:
                    "Working across the entire stack allows me to create seamless solutions where frontend and backend work in perfect harmony.",
                  color: "green",
                },
                {
                  title: "Data-Driven Development",
                  icon: BarChart,
                  description:
                    "I use metrics and feedback to continuously improve. Every feature is an opportunity to learn and refine the user experience.",
                  color: "yellow",
                },
                {
                  title: "Future-Proof Technology",
                  icon: Cpu,
                  description:
                    "I select technologies that stand the test of time while embracing innovation where it adds real value, not just novelty.",
                  color: "red",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className={`bg-${item.color}-500/20 p-3 rounded-full w-fit mb-4`}>
                    <item.icon className={`h-6 w-6 text-${item.color}-400`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function SkillBar({ skill, level, color, delay }: { skill: string; level: number; color: string; delay: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
        <span className="text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}
