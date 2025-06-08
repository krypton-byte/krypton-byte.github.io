"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiKotlin,
  SiDart,
  SiGo,
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiAndroid,
  SiLinux,
  SiDocker,
  SiGit,
  SiMysql,
  SiPostgresql,
} from "react-icons/si"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 90, icon: SiPython, color: "#4dabf7" },
      { name: "JavaScript", level: 85, icon: SiJavascript, color: "#ffd43b" },
      { name: "TypeScript", level: 80, icon: SiTypescript, color: "#4fc3f7" },
      { name: "Kotlin", level: 75, icon: SiKotlin, color: "#ce93d8" },
      { name: "Dart", level: 70, icon: SiDart, color: "#40c4ff" },
      { name: "Go", level: 65, icon: SiGo, color: "#29b6f6" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90, icon: SiReact, color: "#18ffff" },
      { name: "HTML5", level: 95, icon: SiHtml5, color: "#ff7043" },
      { name: "TailwindCSS", level: 85, icon: SiTailwindcss, color: "#4dd0e1" },
    ],
  },
  {
    title: "Backend & Mobile",
    skills: [
      { name: "Django", level: 85, icon: SiDjango, color: "#66bb6a" },
      { name: "Flask", level: 80, icon: SiFlask, color: "#e0e0e0" },
      { name: "FastAPI", level: 75, icon: SiFastapi, color: "#26c6da" },
      { name: "Android", level: 70, icon: SiAndroid, color: "#76ff03" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Linux", level: 85, icon: SiLinux, color: "#ffee58" },
      { name: "Docker", level: 80, icon: SiDocker, color: "#29b6f6" },
      { name: "Git", level: 90, icon: SiGit, color: "#ff8a65" },
      { name: "MySQL", level: 75, icon: SiMysql, color: "#64b5f6" },
      { name: "PostgreSQL", level: 80, icon: SiPostgresql, color: "#4fc3f7" },
    ],
  },
]

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
          Interactive Skill Map
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explore my technical skills through this interactive visualization. Hover over skills to see proficiency
          levels.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/50 to-purple-900/30 rounded-xl p-6 border border-purple-500/20"
          >
            <h3 className="text-xl font-bold mb-6 text-center text-green-400">{category.title}</h3>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => {
                const IconComponent = skill.icon
                const isSelected = selectedSkill === skill.name

                return (
                  <motion.div
                    key={skill.name}
                    className="relative cursor-pointer"
                    onHoverStart={() => setSelectedSkill(skill.name)}
                    onHoverEnd={() => setSelectedSkill(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div
                        className="p-2 rounded-lg"
                        style={{
                          backgroundColor: isSelected ? skill.color + "30" : "transparent",
                          border: `1px solid ${skill.color}60`,
                        }}
                        animate={{
                          boxShadow: isSelected ? `0 0 25px ${skill.color}70` : "0 0 0px transparent",
                        }}
                      >
                        <IconComponent size={20} style={{ color: skill.color }} />
                      </motion.div>
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>

                    <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: skill.color }}
                        animate={{
                          boxShadow: isSelected ? `0 0 15px ${skill.color}80` : "0 0 5px ${skill.color}40",
                        }}
                      />
                    </div>

                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800/80 px-3 py-1 rounded text-sm font-bold border-2"
                        style={{
                          borderColor: skill.color,
                          color: skill.color,
                          boxShadow: `0 0 10px ${skill.color}60`,
                        }}
                      >
                        {skill.level}%
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
