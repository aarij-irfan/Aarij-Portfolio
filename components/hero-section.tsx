"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, ExternalLink, ChevronRight, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 400])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    setIsMounted(true)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Calculate movement for parallax effect
  const calcMovement = (factor: number) => {
    if (!isMounted) return { x: 0, y: 0 }

    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    const moveX = ((mousePosition.x - windowWidth / 2) / (windowWidth / 2)) * factor
    const moveY = ((mousePosition.y - windowHeight / 2) / (windowHeight / 2)) * factor

    return { x: moveX, y: moveY }
  }

  // Letter animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  // Particle grid for background
  const generateParticles = (count: number) => {
    return Array.from({ length: count }).map((_, index) => {
      const size = Math.random() * 3 + 1
      const movement = calcMovement(Math.random() * 15 + 5)

      return (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white/10"
          style={{
            width: size,
            height: size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            x: movement.x,
            y: movement.y,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      )
    })
  }

  // Animated shapes
  const generateShapes = () => {
    const shapes = [
      { type: "circle", size: "150px", top: "15%", left: "10%", delay: 0 },
      { type: "square", size: "120px", top: "60%", left: "5%", delay: 0.2 },
      { type: "triangle", size: "140px", top: "20%", left: "85%", delay: 0.4 },
      { type: "circle", size: "100px", top: "70%", left: "80%", delay: 0.6 },
      { type: "square", size: "80px", top: "40%", left: "90%", delay: 0.8 },
    ]

    return shapes.map((shape, index) => {
      const movement = calcMovement(15)

      return (
        <motion.div
          key={index}
          className="absolute opacity-10"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            borderRadius: shape.type === "circle" ? "50%" : shape.type === "square" ? "0%" : "0%",
            border: shape.type === "triangle" ? "none" : "1px solid rgba(255,255,255,0.2)",
            clipPath: shape.type === "triangle" ? "polygon(50% 0%, 0% 100%, 100% 100%)" : "none",
            x: movement.x * (index % 2 === 0 ? -1 : 1),
            y: movement.y * (index % 2 === 0 ? -1 : 1),
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 20 + index * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
            scale: {
              duration: 8 + index * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
            delay: shape.delay,
          }}
        />
      )
    })
  }

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Animated background shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">{generateShapes()}</div>

      {/* Particle background */}
      <div className="absolute inset-0 z-0">{generateParticles(100)}</div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-purple-900/20 via-transparent to-black/80" />

      {/* Animated grid lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]">
          <motion.div
            className="h-full w-full"
            animate={{
              x: [0, 20],
              y: [0, 20],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        </div>
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-4"
        style={{ y, opacity }}
      >
        {/* Name with letter animation */}
        <div className="mb-8 overflow-hidden">
          <h1 className="sr-only">Aarij Irfan - Software Engineer</h1>
          <div className="flex items-center justify-center overflow-hidden">
            {["A", "A", "R", "I", "J"].map((letter, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="relative"
                whileHover={{
                  scale: 1.1,
                  color: "#a855f7",
                  transition: { duration: 0.2 },
                }}
              >
                <span className="relative z-10 inline-block text-[12vw] font-bold leading-none tracking-tighter text-white md:text-[10vw]">
                  {letter}
                </span>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 z-0 blur-2xl"
                  style={{
                    background: `radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(0, 0, 0, 0) 70%)`,
                    x: calcMovement(10).x * (i % 2 === 0 ? 1 : -1),
                    y: calcMovement(10).y * (i % 2 === 0 ? 1 : -1),
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Last name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-2"
          >
            <span className="text-3xl md:text-4xl font-light tracking-wide text-white/80">IRFAN</span>
          </motion.div>
        </div>

        {/* Animated line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-6 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        />

        {/* Subtitle with typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mb-8 text-center"
        >
          <TypewriterEffect text="Software Engineer" />
        </motion.div>

        {/* Brief introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mb-8 max-w-lg text-center text-lg text-white/80"
        >
          Crafting exceptional digital experiences through code. Specializing in frontend, backend, AI, and application
          development.
        </motion.p>

        {/* Skills badges with staggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mb-10 flex flex-wrap justify-center gap-3"
        >
          {["Frontend", "Backend", "AI", "Mobile", "Desktop"].map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 + i * 0.1, duration: 0.5 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(168, 85, 247, 0.3)",
                transition: { duration: 0.2 },
              }}
              className="group relative overflow-hidden rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
            >
              <span className="relative z-10 text-sm font-medium transition-colors group-hover:text-white">
                {skill}
              </span>
              <motion.div
                className="absolute inset-0 z-0"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 2,
                  delay: i * 0.2,
                  ease: "linear",
                }}
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
        >
          <Link href="#projects">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          <Link href="#contact">
            <Button
              size="lg"
              variant="outline"
              className="group border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="absolute bottom-20 flex space-x-4"
        >
          {[
            { icon: Github, href: "https://github.com/aarij-irfan" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/aarij-irfan" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
              whileHover={{
                scale: 1.2,
                rotate: 5,
                backgroundColor: "rgba(168, 85, 247, 0.3)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator - only one now */}
        <motion.div
          className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.8 }}
        >
          <span className="text-sm font-medium text-white/70">Scroll to explore</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <ArrowDown className="h-5 w-5 text-white/70" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

// Typewriter effect component
function TypewriterEffect({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (currentIndex <= text.length && !isDeleting) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, currentIndex))
        setCurrentIndex((prev) => prev + 1)
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, isDeleting])

  return (
    <div className="flex items-center text-xl md:text-2xl font-light text-white/80">
      <span>{displayedText}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
        className="ml-1 inline-block h-6 w-[2px] bg-white/80"
      />
    </div>
  )
}
