"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"

const educationData = [
  {
    degree: "Bachelor's Degree in Mathematics Education",
    institution: "Universitas Sindang Kasih Majalengka",
    year: "2022 - Present",
    description: "Currently pursuing degree in Mathematics Education with focus on integrating technology and AI in educational methods.",
    gpa: "In Progress",
  },
  {
    degree: "Vocational High School",
    institution: "SMKN 1 Panyingkiran",
    year: "2019 - 2022",
    description: "Completed vocational education with focus on technical skills and practical applications.",
    gpa: "Graduate",
  },
  {
    degree: "Junior High School",
    institution: "SMPN 2 DAWUAN",
    year: "2016 - 2019",
    description: "Completed junior high school education with strong foundation in mathematics and sciences.",
    gpa: "Graduate",
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
          Education Timeline
        </h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line - positioned differently for mobile vs desktop */}
        <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-purple-400 to-pink-400 rounded-full opacity-30"></div>

        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative flex items-center mb-12 ${
              // Mobile: all items on the left, Desktop: alternating
              "md:" + (index % 2 === 0 ? "flex-row" : "flex-row-reverse")
            }`}
          >
            {/* Timeline dot - positioned differently for mobile vs desktop */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-400 to-purple-400 rounded-full border-4 border-gray-900 z-10"></div>

            {/* Content card - full width on mobile, half width on desktop */}
            <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
              <motion.div
                className="bg-gradient-to-br from-gray-800/50 to-purple-900/30 rounded-xl p-6 border border-purple-500/20 hover:border-green-400/40 transition-all duration-300"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0, 255, 136, 0.1)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="text-green-400" size={24} />
                  <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                </div>

                <p className="text-purple-400 font-medium mb-2">{item.institution}</p>

                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="text-gray-400" size={16} />
                  <span className="text-gray-400">{item.year}</span>
                </div>

                <p className="text-gray-300 mb-3">{item.description}</p>

                <div className="inline-block bg-gradient-to-r from-green-500/20 to-purple-500/20 px-3 py-1 rounded-full border border-green-400/30">
                  <span className="text-green-400 text-sm font-medium">{item.gpa}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
