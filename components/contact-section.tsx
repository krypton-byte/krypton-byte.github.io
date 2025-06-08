"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    })

    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities and interesting projects. Let's connect!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-purple-900/30 rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-green-500/10 transition-colors cursor-pointer"
                whileHover={{ x: 10 }}
              >
                <div className="p-2 bg-green-500/20 rounded-lg border border-green-400/30">
                  <Mail className="text-green-400" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">puja.suara@email.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-purple-500/10 transition-colors cursor-pointer"
                whileHover={{ x: 10 }}
              >
                <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-400/30">
                  <Phone className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-pink-500/10 transition-colors cursor-pointer"
                whileHover={{ x: 10 }}
              >
                <div className="p-2 bg-pink-500/20 rounded-lg border border-pink-400/30">
                  <MapPin className="text-pink-400" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">San Francisco, CA</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gradient-to-br from-gray-800/50 to-purple-900/30 rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
            <div className="flex gap-4">
              {[
                { icon: Github, color: "#333", bgColor: "#222", href: "#" },
                { icon: Linkedin, color: "#0077b5", bgColor: "#0a66c2", href: "#" },
                { icon: Twitter, color: "#1da1f2", bgColor: "#1a8cd8", href: "#" },
              ].map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: `0 0 20px ${social.color}40`,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={24} className="text-white" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-gray-800/50 to-purple-900/30 rounded-xl p-6 border border-purple-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-700/50 border-gray-600 text-white focus:border-green-400 focus:ring-green-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-700/50 border-gray-600 text-white focus:border-green-400 focus:ring-green-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-gray-700/50 border-gray-600 text-white focus:border-green-400 focus:ring-green-400"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-gray-700/50 border-gray-600 text-white focus:border-green-400 focus:ring-green-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-semibold py-3 transition-all duration-300 transform hover:scale-105"
              >
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
