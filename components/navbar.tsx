"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"]
      const sectionElements = sections.map((id) =>
        id === "home" ? document.documentElement : document.getElementById(id),
      )

      const currentSectionIndex = sectionElements.findIndex((section, index) => {
        if (!section) return false

        const rect = section.getBoundingClientRect()
        const offset = index === 0 ? window.innerHeight * 0.5 : 200

        return rect.top <= offset && rect.bottom >= offset
      })

      if (currentSectionIndex !== -1) {
        setActiveSection(sections[currentSectionIndex])
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const mobileLinkVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/aarij-irfan" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/aarij-irfan" },
  ]

  return (
    <>
      <motion.header
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 ${
          scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
        } transition-all duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Link href="/" className="group flex items-center">
                <div className="relative overflow-hidden">
                  <span className="text-2xl font-bold tracking-tight">AARIJ IRFAN</span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-blue-500"
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navLinks.map((link, i) => (
                  <motion.li key={link.name} custom={i} variants={linkVariants} initial="hidden" animate="visible">
                    <Link
                      href={link.href}
                      className={`group relative text-sm font-medium transition-colors hover:text-white ${
                        activeSection === link.href.replace("#", "") || (activeSection === "home" && link.href === "#")
                          ? "text-white"
                          : "text-white/70"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full ${
                          activeSection === link.href.replace("#", "") ||
                          (activeSection === "home" && link.href === "#")
                            ? "w-full"
                            : "w-0"
                        }`}
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Social Links - Desktop */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all duration-300 hover:bg-white/20 hover:text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              onClick={() => setIsOpen(!isOpen)}
              className="flex md:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative h-10 w-10 rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 flex flex-col bg-black/95 pt-20 backdrop-blur-lg md:hidden"
          >
            <div className="container mx-auto px-4 py-8">
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    custom={i}
                    variants={mobileLinkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center space-x-2 text-2xl font-medium text-white/80 transition-colors hover:text-white"
                    >
                      <span className="inline-block h-1 w-4 bg-purple-500 transition-all duration-300 group-hover:w-8" />
                      <span>{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                variants={mobileLinkVariants}
                custom={navLinks.length + 1}
                className="mt-12 flex justify-center space-x-6"
              >
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all duration-300 hover:bg-white/20 hover:text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon className="h-6 w-6" />
                    <span className="sr-only">{link.name}</span>
                  </motion.a>
                ))}
              </motion.div>

              <motion.div variants={mobileLinkVariants} custom={navLinks.length + 2} className="mt-12 text-center">
                <Link href="#contact">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Me
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
