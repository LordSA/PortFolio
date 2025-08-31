'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { useInView } from './hooks/useInView'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Modern E-Commerce Platform',
      description: 'A fully responsive e-commerce platform built with React, Next.js, and Stripe integration. Features include product catalog, shopping cart, user authentication, and payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      category: 'Web Development',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Healthcare Management System',
      description: 'A comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine features. Built with focus on accessibility and user experience.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      category: 'Full Stack',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Brand Identity Design',
      description: 'Complete brand identity design for a tech startup including logo design, color palette, typography, and brand guidelines. Created cohesive visual identity across all touchpoints.',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
      technologies: ['Figma', 'Adobe Illustrator', 'Photoshop'],
      category: 'Design',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Task Management App',
      description: 'Intuitive task management application with real-time collaboration, drag-and-drop functionality, and team workspace features. Focused on productivity and user experience.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Firebase', 'Vuetify'],
      category: 'Web Development',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Mobile App UI/UX Design',
      description: 'Complete UI/UX design for a fitness tracking mobile application. Includes user research, wireframing, prototyping, and final design with interactive animations.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      technologies: ['Figma', 'Principle', 'Adobe XD'],
      category: 'UI/UX Design',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Real Estate Platform',
      description: 'Modern real estate platform with property listings, virtual tours, mortgage calculator, and agent matching. Built with performance and SEO optimization in mind.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Mapbox'],
      category: 'Full Stack',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  const categories = ['All', 'Web Development', 'Full Stack', 'Design', 'UI/UX Design']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work in design and development
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={project.featured ? 'lg:col-span-2' : ''}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-0`}>
                  {/* Image */}
                  <motion.div 
                    className="relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`relative ${project.featured ? 'h-80' : 'h-64'} overflow-hidden`}>
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Overlay Actions */}
                      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-background/90 hover:bg-background"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-background/90 hover:bg-background"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <CardContent className={`p-8 flex flex-col justify-between ${project.featured ? '' : 'h-full'}`}>
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <Badge variant="secondary" className="mb-3">
                            {project.category}
                          </Badge>
                        </div>
                        {project.featured && (
                          <Badge className="bg-primary/10 text-primary">
                            Featured
                          </Badge>
                        )}
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.2, delay: 0.6 + techIndex * 0.05 }}
                            className="px-3 py-1 text-xs bg-muted/50 text-muted-foreground rounded-full"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 mt-6">
                      <Button
                        variant="outline"
                        className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Have a Project in Mind?</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Let's collaborate and bring your ideas to life with creative design and clean code.
          </p>
          <Button
            size="lg"
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Start a Project
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}