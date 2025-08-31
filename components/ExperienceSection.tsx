'use client'

import { motion } from 'motion/react'
import { useInView } from './hooks/useInView'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink, Calendar, MapPin } from 'lucide-react'
import imgImagesPicsartBackgroundRemover1 from 'figma:asset/748eb247bd6fe2379cde2ed7858d71dd6f8bed9f.png'
import imgIedcLogo from 'figma:asset/0eef36187f64c94c7971565fc4371a4d2891ea31.png'

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'Student Ambassador',
      company: 'LetsUpgrade',
      location: 'Remote',
      period: '2023 - Present',
      description: 'Promoting tech learning and community growth through collaboration and innovation.',
      logo: imgImagesPicsartBackgroundRemover1,
      type: 'Leadership',
      achievements: [
        'Led community initiatives reaching 1000+ students',
        'Organized technical workshops and webinars',
        'Mentored aspiring developers and designers',
        'Collaborated with industry experts on content creation'
      ]
    },
    {
      title: 'Design Sub Lead',
      company: 'IEDC (Innovation and Entrepreneurship Development Cell)',
      location: 'College',
      period: '2022 - Present',
      description: 'Working as Design Sub lead at Creative and Innovation team, leading design initiatives.',
      logo: imgIedcLogo,
      type: 'Design Leadership',
      achievements: [
        'Led design team of 8+ members',
        'Created brand identity for multiple projects',
        'Designed marketing materials for events',
        'Improved design workflow and processes'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through meaningful roles and impactful projects
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6 items-start">
                    {/* Logo */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex justify-center lg:justify-start"
                    >
                      <div className="w-20 h-20 rounded-xl bg-muted/50 p-3 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="lg:col-span-2 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
                        <div className="text-primary font-semibold mb-2">{experience.company}</div>
                        <p className="text-muted-foreground leading-relaxed">
                          {experience.description}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                              className="text-sm text-muted-foreground flex items-start"
                            >
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          {experience.period}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          {experience.location}
                        </div>
                      </div>

                      <div className="inline-block">
                        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {experience.type}
                        </span>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        Learn More
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                I'm currently looking to join a cross-functional team that values 
                improving people's lives through accessible design.
              </p>
              <Button
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Let's Connect
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}