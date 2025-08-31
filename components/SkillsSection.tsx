'use client'

import { motion } from 'motion/react'
import { useInView } from './hooks/useInView'
import { Card, CardContent } from './ui/card'
import { Progress } from './ui/progress'
import imgRectangle1 from 'figma:asset/9a2177cf9e77f144133bf282a08a2f575cad7370.png'
import imgRectangle2 from 'figma:asset/8ba2191814908615f8a46560f0b228b9c16d74a7.png'
import imgRectangle3 from 'figma:asset/1d85dc0163cf0b673490fafe2ad8edc7a3d2f1c6.png'
import imgRectangle4 from 'figma:asset/fe9c7a522e036854e90e86205ac6eefc4a56eb24.png'
import imgRectangle5 from 'figma:asset/1ff7ec7e62d8e5d753fd7c1343387647ca8b34c0.png'
import imgRectangle6 from 'figma:asset/29d4980b040e9114b9105f8075bb28be34920982.png'
import imgRectangle7 from 'figma:asset/22d870b52c1b2e38580a02283b6d51cdfe340d48.png'
import imgRectangle8 from 'figma:asset/5a7488c39fdbc8ed144ae7231a0962c724fa3d51.png'
import imgRectangle9 from 'figma:asset/e1604408f9ccbb55161fd96b1f344e755081131c.png'
import imgRectangle10 from 'figma:asset/5386b1e26e968caf8fc33cd8ee0c2525b7769ed6.png'
import imgRectangle11 from 'figma:asset/9ea8af4596611af2ba3291a8163ffa8bf33607b3.png'
import imgRectangle12 from 'figma:asset/834f7656c56bc01eca2ed4a1a75fa59df623ad90.png'
import imgRectangle13 from 'figma:asset/a0c19aec216c3d83909a6e5a62c4c8fa941c6067.png'

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Design',
      skills: [
        { name: 'UI/UX Design', level: 90 },
        { name: 'Figma', level: 95 },
        { name: 'Adobe Creative Suite', level: 30 },
        { name: 'Prototyping', level: 60 },
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 50 },
        { name: 'TypeScript', level: 55 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 45 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'Responsive Design', level: 92 },
        { name: 'API Integration', level: 75 },
        { name: 'User Research', level: 80 },
      ]
    }
  ]

  const techLogos = [
    { src: imgRectangle1, name: 'React' },
    { src: imgRectangle2, name: 'Next.js' },
    { src: imgRectangle3, name: 'TypeScript' },
    { src: imgRectangle4, name: 'JavaScript' },
    { src: imgRectangle5, name: 'HTML5' },
    { src: imgRectangle6, name: 'CSS3' },
    { src: imgRectangle7, name: 'Tailwind' },
    { src: imgRectangle8, name: 'Figma' },
    { src: imgRectangle9, name: 'Adobe' },
    { src: imgRectangle10, name: 'Git' },
    { src: imgRectangle11, name: 'Node.js' },
    { src: imgRectangle12, name: 'MongoDB' },
    { src: imgRectangle13, name: 'Python' },
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </motion.div>

        {/* Technology Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Technologies I Work With</h3>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {techLogos.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group"
              >
                <div className="w-16 h-16 rounded-xl bg-muted/50 p-3 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-xs text-center mt-2 text-muted-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Progress */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.2 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.6 + skillIndex * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: '100%' } : {}}
                          transition={{ duration: 0.8, delay: 0.8 + skillIndex * 0.1 }}
                          className="w-full bg-muted rounded-full h-2 overflow-hidden"
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: 0.8 + skillIndex * 0.1, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Technology evolves rapidly, and so do I. I'm constantly learning new tools, 
                frameworks, and design methodologies to stay at the forefront of digital innovation. 
                My goal is to bridge the gap between beautiful design and functional code.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

