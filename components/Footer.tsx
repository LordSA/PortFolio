'use client'

import { motion } from 'motion/react'
import { Heart, ArrowUp } from 'lucide-react'
import { Button } from './ui/button'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SA</span>
              </div>
              <span className="text-2xl font-bold">Graphics</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Creating meaningful digital experiences through thoughtful design and clean code. 
              Passionate about solving problems and building beautiful interfaces.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              <span>by Shibili Aman TK</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors text-left text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a
                href="mailto:shibiliamantk@gmail.com"
                className="block hover:text-primary transition-colors"
              >
                shibiliamantk@gmail.com
              </a>
              <a
                href="https://wa.me/+919037619447"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                +91 903 761 9447
              </a>
              <p>Kerala, India</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} SA Graphics. All rights reserved.
          </p>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-primary"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </footer>
  )
}