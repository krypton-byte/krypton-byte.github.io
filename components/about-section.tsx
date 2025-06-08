"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm PUJA SUARA (krypton-byte), a Mathematics Education student at Universitas Sindang Kasih (USK), Majalengka. 
          I have a strong interest in Artificial Intelligence, especially in the field of Large Language Models (LLM). 
          I love exploring new technologies and creating innovative solutions that bridge mathematics and technology.
        </motion.p>

        <motion.div
          className="relative p-6 rounded-lg bg-gradient-to-r from-purple-900/20 to-green-900/20 border border-purple-500/30"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-xl md:text-2xl font-medium text-green-400 italic">
            "Creativity is just intelligence having fun – and I like to code with both."
          </blockquote>
        </motion.div>
      </motion.div>
    </section>
  )
}
