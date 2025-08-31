'use client'

import { motion } from 'motion/react'
import { ChevronDown, ExternalLink } from 'lucide-react'
import { Button } from './ui/button'
import imgImage1 from 'figma:asset/0a585244a4409ceb2d45e5f4223da38bcae5937d.png'

export function HeroSection() {
  const scrollToNext = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="text-primary border border-primary/30 px-4 py-2 rounded-full text-sm">
                A Designer who believes
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              Simplicity is the Ultimate{' '}
              <span className="text-primary">Sophistication</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-lg"
            >
              Because the simplest ideas often make the loudest impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <div className="text-3xl font-medium">
                <span>Hello! I Am </span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="text-primary"
                >
                  Shibili Aman TK
                </motion.span>
              </div>

              <div className="text-lg text-muted-foreground">
                <span>I'm a Engineering UnderGrad. | Currently, I'm a Student Ambassador at </span>
                <span className="text-primary">LetsUpgrade</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#projects')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                View My Work
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Animated Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-80 h-80 rounded-full border-2 border-dashed border-primary/30"
              />
              
              {/* Gradient Background */}
              <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-8 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                  className="w-56 h-56 rounded-full overflow-hidden border-4 border-primary/50"
                >
                  <img
                    src={imgImage1}
                    alt="Shibili Aman TK"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-lg flex items-center justify-center"
              >
                <span className="text-primary-foreground font-bold text-lg">UI</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-lg flex items-center justify-center"
              >
                <span className="text-white font-bold text-lg">UX</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="h-6 w-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}