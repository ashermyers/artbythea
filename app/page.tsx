"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
}

const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

const slideInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

const portraitArtworks = [
  { title: "Blonde", image: "/placeholder.svg?height=400&width=300" },
  { title: "Brunette", image: "/placeholder.svg?height=400&width=300" },
  { title: "Red Dress", image: "/placeholder.svg?height=400&width=300" },
  { title: "Hat Lady", image: "/placeholder.svg?height=400&width=300" },
  { title: "Blue Portrait", image: "/placeholder.svg?height=400&width=300" },
]

const abstractArtworks = [
  { title: "Colorful Abstract", image: "/placeholder.svg?height=400&width=300" },
  { title: "Geometric Forms", image: "/placeholder.svg?height=400&width=300" },
  { title: "Flowing Colors", image: "/placeholder.svg?height=400&width=300" },
  { title: "Mixed Media", image: "/placeholder.svg?height=400&width=300" },
  { title: "Bold Patterns", image: "/placeholder.svg?height=400&width=300" },
]

const landscapeArtworks = [
  { title: "Forest Path", image: "/placeholder.svg?height=400&width=300" },
  { title: "Ocean View", image: "/placeholder.svg?height=400&width=300" },
  { title: "Mountain Trail", image: "/placeholder.svg?height=400&width=300" },
  { title: "Waterfall", image: "/placeholder.svg?height=400&width=300" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        className="relative text-center py-16 bg-gradient-to-br from-muted via-background to-card overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full floating" />
          <div
            className="absolute top-32 right-16 w-16 h-16 bg-secondary/10 rounded-full floating"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-accent/10 rounded-full floating"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <motion.h1
          className="text-6xl font-bold gradient-text tracking-wider relative z-10"
          variants={scaleIn}
          initial="initial"
          animate="animate"
        >
          ART BY THEA
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground mt-4 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Where creativity meets passion
        </motion.p>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-20"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={slideInLeft} className="relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Thea Barbato - Artist Portrait"
                width={500}
                height={600}
                className="relative rounded-2xl shadow-2xl hover-lift"
                priority
              />
              <div className="absolute inset-0 glass-effect rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>

          <motion.div variants={slideInRight} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-foreground">Thea Barbato</h2>
              <p className="text-2xl text-primary font-medium italic">Turning Life Into Art</p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                View My Work
              </Button>
            </div>

            <div className="space-y-6 text-foreground leading-relaxed text-lg">
              <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Creating art has been a passion and love of mine since I was a little girl. I made art into my heart and
                soul childhood, then life intervened as it frequently does. Consequently, my art was put on hold for a
                long while, a little more than three decades.
              </p>

              <p>
                In recent years I've been able to return to my art and I am so grateful for the spark that I lost as a
                little girl and learned over 30 colors, slowly growing, waiting for me to find it once more just a few
                years ago.
              </p>

              <p>
                That fire was ignited again when I took a drawing class at the local community college. Through that
                class, I was reintroduced to my love of art and began to get commissions for my guests' pet portraits.
                Not long after that, projects were replaced by oils and I was able to take my art to the next level.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 italic text-xl text-muted-foreground bg-muted/50 p-6 rounded-r-lg">
                "It's a privilege to share my work and my God given voice with you. There is something magical that
                happens when I work."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Portraits Section */}
      <motion.section
        className="py-20 bg-muted/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold gradient-text mb-4">Portraits</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Capturing the essence and soul of each subject through careful observation and artistic interpretation
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {portraitArtworks.map((artwork, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden hover-lift bg-card border-border group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=400&width=300&query=portrait painting ${artwork.title}`}
                      alt={artwork.title}
                      width={300}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-lg">{artwork.title}</h3>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Abstracts Section */}
      <motion.section
        className="py-20 bg-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold gradient-text mb-4">Abstracts</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Exploring color, form, and emotion through non-representational artistic expression
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {abstractArtworks.map((artwork, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden hover-lift bg-card border-border group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=400&width=300&query=abstract painting ${artwork.title}`}
                      alt={artwork.title}
                      width={300}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-lg">{artwork.title}</h3>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Landscapes Section */}
      <motion.section
        className="py-20 bg-muted/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold gradient-text mb-4">Landscapes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Celebrating the beauty of nature through careful observation and artistic interpretation
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {landscapeArtworks.map((artwork, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden hover-lift bg-card border-border group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=400&width=300&query=landscape painting ${artwork.title}`}
                      alt={artwork.title}
                      width={300}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-lg">{artwork.title}</h3>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">Let's Create Together</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interested in commissioning a piece or learning more about my work? I'd love to hear from you.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="py-12 bg-card border-t border-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">© 2024 Art by Thea. All rights reserved.</p>
          <p className="text-sm text-muted-foreground mt-2">Crafted with passion and creativity</p>
        </div>
      </motion.footer>
    </div>
  )
}
