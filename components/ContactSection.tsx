'use client'

import { motion } from 'motion/react'
import { useInView } from './hooks/useInView'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { 
  Mail, 
  MessageCircle, 
  Github, 
  Linkedin, 
  Instagram,
  ExternalLink,
  Send,
  MapPin,
  Phone
} from 'lucide-react'


export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/__shibiliii._?igsh=MWV5dnBvNjVpaHp5eQ==',
      icon: Instagram,
      color: 'hover:text-pink-500'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/+919037619447',
      icon: MessageCircle,
      color: 'hover:text-green-500'
    },
    {
      name: 'Email',
      href: 'mailto:shibiliamantk@gmail.com',
      icon: Mail,
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/LordSA',
      icon: Github,
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shibili-aman-tk?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    }
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shibiliamantk@gmail.com',
      href: 'mailto:shibiliamantk@gmail.com'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+91 903 761 9447',
      href: 'https://wa.me/+919037619447'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kerala, India',
      href: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether it's a collaboration, a question, or just to say hi—I'm always open to 
            connecting with like-minded creatives and developers. Let's build something meaningful together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.href === '#' ? (
                        <p className="text-muted-foreground">{info.value}</p>
                      ) : (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors font-bold font-normal"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">Ready to Start?</h4>
                  <p className="text-muted-foreground mb-4 text-sm">
                    I'm currently looking to join a cross-functional team that values 
                    improving people's lives through accessible design.
                  </p>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => window.open('mailto:shibiliamantk@gmail.com', '_blank')}
                  >
                    Send Email
                    <Mail className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        className="bg-input-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        className="bg-input-background border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-input-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="bg-input-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or just say hello!"
                      rows={5}
                      className="bg-input-background border-border resize-none"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center mt-16"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-2xl">SA</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}