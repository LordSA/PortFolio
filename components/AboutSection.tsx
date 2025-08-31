'use client'

import { motion } from 'motion/react'
import { useInView } from './hooks/useInView'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Happy Clients', value: '7' },
    { label: 'Technologies', value: '10+' },
  ]

  const skills = [
    'UI/UX Design',
    'Frontend Development',
    'React & Next.js',
    'TypeScript',
    'Figma',
    'Adobe Creative Suite',
    'Responsive Design',
    'User Research',
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences through design and code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Creative Problem Solver</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a self-taught designer and aspiring developer with 3+ years of experience, 
                currently pursuing a B.Tech in CSE. Passionate about blending logic and creativity, 
                I craft intuitive digital products that balance user needs with business goals.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Focused on front-end development and UI/UX design, I love building clean interfaces 
                and solving real-world problems through code. My approach combines technical 
                expertise with creative vision to deliver exceptional user experiences.
              </p>
            </div>

            {/* Skills Grid */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Core Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    <Badge variant="secondary" className="bg-muted text-foreground">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1, type: "spring" }}
                        className="text-3xl lg:text-4xl font-bold text-primary mb-2"
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-8 pt-8 border-t border-border"
                >
                  <h4 className="text-lg font-semibold mb-4 text-center">Education</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="font-medium">Bachelor of Technology - Computer Science</div>
                      <div className="text-sm text-muted-foreground">Currently Pursuing</div>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <blockquote className="text-xl lg:text-2xl font-medium italic mb-4">
                "Design is not just what it looks like and feels like. 
                Design is how it works."
              </blockquote>
              <cite className="text-muted-foreground">- Steve Jobs</cite>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}