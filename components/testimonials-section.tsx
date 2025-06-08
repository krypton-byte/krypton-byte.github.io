"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Senior Developer at TechCorp",
    content:
      "Puja is an exceptional developer with a keen eye for detail. Her ability to solve complex problems and deliver high-quality code is impressive.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Chen",
    role: "Project Manager at InnovateLab",
    content:
      "Working with Puja was a fantastic experience. She consistently delivered projects on time and exceeded our expectations with her technical expertise.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Emily Rodriguez",
    role: "CTO at StartupXYZ",
    content:
      "Puja's passion for technology and her ability to learn new frameworks quickly made her an invaluable team member. Highly recommended!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
          What People Say
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Here's what colleagues and clients have to say about working with me.
        </p>
      </motion.div>

      <div className="relative">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-800/50 to-purple-900/30 rounded-xl p-8 border border-purple-500/20 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <Quote className="text-green-400" size={40} />
          </div>

          <blockquote className="text-lg md:text-xl text-gray-300 text-center mb-6 leading-relaxed italic">
            "{testimonials[currentIndex].content}"
          </blockquote>

          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="text-yellow-400 fill-current" size={20} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <img
              src={testimonials[currentIndex].avatar || "/placeholder.svg"}
              alt={testimonials[currentIndex].name}
              className="w-12 h-12 rounded-full border-2 border-green-400"
            />
            <div className="text-center">
              <h4 className="text-white font-semibold">{testimonials[currentIndex].name}</h4>
              <p className="text-purple-400 text-sm">{testimonials[currentIndex].role}</p>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            variant="default"
            size="sm"
            onClick={prevTestimonial}
            className="bg-gray-700 hover:bg-purple-700 text-white"
          >
            <ChevronLeft size={16} />
          </Button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-green-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          <Button
            variant="default"
            size="sm"
            onClick={nextTestimonial}
            className="bg-gray-700 hover:bg-purple-700 text-white"
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  )
}
