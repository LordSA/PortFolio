'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, CheckCircle, TrendingUp, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

export function SolutionSection() {
  const problems = [
    "Limited healthcare access in rural areas",
    "Long waiting times at medical facilities", 
    "High healthcare costs and affordability issues",
    "Lack of 24/7 medical availability",
    "Healthcare professional shortages"
  ]

  const solutions = [
    "Smart kiosks accessible 24/7 anywhere",
    "Instant health checks and consultations",
    "Affordable, transparent pricing",
    "Round-the-clock medical assistance",
    "AI-powered preliminary diagnosis"
  ]

  const impacts = [
    { metric: "85%", label: "Reduction in travel time to healthcare" },
    { metric: "60%", label: "Faster diagnosis and treatment" },
    { metric: "40%", label: "Lower healthcare costs" },
    { metric: "99.9%", label: "Service availability uptime" }
  ]

  return (
    <section id="solutions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">Our Solution</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Solving Healthcare's Biggest Challenges
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're transforming healthcare delivery by addressing critical gaps in accessibility, affordability, and availability
          </p>
        </motion.div>

        {/* Problem-Solution Framework */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full bg-destructive/5 border-destructive/20">
              <CardHeader>
                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <CardTitle className="text-destructive">The Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Millions lack access to timely, affordable healthcare, especially in underserved communities.
                </p>
                <ul className="space-y-3">
                  {problems.map((problem, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="flex items-start gap-3 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{problem}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"
            >
              <ArrowRight className="w-6 h-6 text-primary-foreground" />
            </motion.div>
          </div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="h-full bg-primary/5 border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-primary">Our Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Smart medical kiosks that provide instant, affordable healthcare services anywhere, anytime.
                </p>
                <ul className="space-y-3">
                  {solutions.map((solution, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                      className="flex items-start gap-3 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{solution}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Measurable Impact</h3>
                <p className="text-primary-foreground/80">
                  Real results from our deployed kiosks
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {impacts.map((impact, index) => (
                  <motion.div
                    key={impact.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold mb-2">{impact.metric}</div>
                    <div className="text-sm text-primary-foreground/80 leading-tight">{impact.label}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">How Our Kiosks Work</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple, intuitive process that gets you the care you need in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Touch & Start", description: "Touch the screen to begin your health journey" },
              { step: "02", title: "Health Check", description: "Quick vital signs monitoring and assessment" },
              { step: "03", title: "Consult", description: "Connect with doctors if needed via video call" },
              { step: "04", title: "Get Care", description: "Receive prescription, medication, or health report" }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {step.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Healthcare in Your Community?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with us to bring accessible healthcare to your area
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground">
            Become a Partner
          </Button>
        </motion.div>
      </div>
    </section>
  )
}