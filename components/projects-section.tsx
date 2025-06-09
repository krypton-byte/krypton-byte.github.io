"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Code, Smartphone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Neonize",
    description:
      "A cutting-edge Python library that transforms WhatsApp automation from complex to simple. Built on top of the robust Whatsmeow Go library, delivering enterprise-grade performance with Python's ease of use.",
    tech: ["Python", "Go", "WhatsApp API", "Automation"],
    icon: Code,
    color: "#00FF88",
    github: "https://github.com/krypton-byte/neonize",
    live: "https://github.com/krypton-byte/neonize",
  },
  {
    title: "Neonize Dart",
    description:
      "Comprehensive Dart wrapper around the Neonize library, bringing WhatsApp automation capabilities to Dart and Flutter projects. Cross-platform support with type safety.",
    tech: ["Dart", "Flutter", "Cross-Platform", "WhatsApp API"],
    icon: Smartphone,
    color: "#ff33cc",
    github: "https://github.com/krypton-byte/neonize-dart",
    live: "https://github.com/krypton-byte/neonize-dart",
  },
  {
    title: "Thundra IO",
    description:
      "Framework designed to streamline WhatsApp bot development with agentic AI. Provides abstraction layer and modular architecture for scalable bot solutions.",
    tech: ["Python", "AI", "Bot Framework", "WhatsApp"],
    icon: Code,
    color: "#8e2de2",
    github: "https://github.com/krypton-byte/thundra-io",
    live: "https://github.com/krypton-byte/thundra-io",
  },
  {
    title: "Flashbeam",
    description:
      "Android flashlight app with customizable brightness, dark mode, battery alerts, and auto-off timer. Built with Jetpack Compose for modern UI design.",
    tech: ["Android", "Jetpack Compose", "Kotlin", "Mobile"],
    icon: Smartphone,
    color: "#00d4ff",
    github: "https://github.com/krypton-byte/flashbeam",
    live: "https://github.com/krypton-byte/flashbeam",
  },
  {
    title: "QRIS-RS",
    description:
      "Rust-based library for parsing and manipulating QRIS (Quick Response Code Indonesian Standard) data with high performance and safety.",
    tech: ["Rust", "QRIS", "Payment", "Parsing"],
    icon: Code,
    color: "#ff6b35",
    github: "https://github.com/krypton-byte/qris-rs",
    live: "https://github.com/krypton-byte/qris-rs",
  },
  {
    title: "PyQRIS",
    description:
      "Python library for parsing and editing QRIS data. Written in Rust using PyO3 for high performance QRIS manipulation directly from Python.",
    tech: ["Python", "Rust", "PyO3", "QRIS"],
    icon: Code,
    color: "#4CAF50",
    github: "https://github.com/krypton-byte/pyqris",
    live: "https://github.com/krypton-byte/pyqris",
  },
  {
    title: "XTempMail",
    description:
      "Temporary mail client for tempmail.plus with features like custom mail names, message handling, file attachments, and both sync/async support.",
    tech: ["Python", "Email", "API Client", "Async"],
    icon: Globe,
    color: "#9C27B0",
    github: "https://github.com/krypton-byte/xtempmail",
    live: "https://github.com/krypton-byte/xtempmail",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and passion for development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const IconComponent = project.icon

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-purple-900/30 rounded-xl p-6 border border-purple-500/20 hover:border-green-400/40 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="p-3 rounded-lg border"
                    style={{
                      borderColor: project.color + "40",
                      backgroundColor: project.color + "10",
                    }}
                    whileHover={{
                      boxShadow: `0 0 20px ${project.color}40`,
                      scale: 1.1,
                    }}
                  >
                    <IconComponent size={24} style={{ color: project.color }} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-green-500/20 rounded-full text-sm text-green-400 border border-green-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-gray-700 hover:bg-gray-600 text-white transition-all duration-300"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-medium transition-all duration-300"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
