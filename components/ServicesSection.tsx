'use client'

import { motion } from 'framer-motion'
import { Heart, Video, FileText, Pill, BarChart3, Clock, Shield, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

export function ServicesSection() {
  const services = [
    {
      icon: Heart,
      title: "Instant Health Monitoring",
      description: "Complete vital signs check including blood pressure, heart rate, temperature, and blood sugar levels.",
      features: ["Blood Pressure", "Heart Rate", "Temperature", "Blood Sugar", "SpO2 Monitoring"],
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-950/20"
    },
    {
      icon: Video,
      title: "Telemedicine Consultations",
      description: "Connect with certified doctors instantly through secure video or voice consultations.",
      features: ["Video Calls", "Voice Consultations", "Certified Doctors", "Secure Platform", "Instant Connect"],
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      icon: FileText,
      title: "Digital Prescriptions",
      description: "Receive instant digital prescriptions with QR codes for verification and easy access.",
      features: ["Digital Format", "QR Verification", "Instant Delivery", "Secure Storage", "Easy Sharing"],
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    },
    {
      icon: Pill,
      title: "Smart Medicine Dispensing",
      description: "Automated medicine dispensing with clear dosage instructions and safety information.",
      features: ["Automated Dispensing", "Dosage Instructions", "Safety Warnings", "Quality Assured", "Real-time Inventory"],
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      icon: BarChart3,
      title: "Health Analytics",
      description: "Comprehensive health reports with personalized insights and trend analysis.",
      features: ["Detailed Reports", "Trend Analysis", "Personalized Insights", "Progress Tracking", "Health Goals"],
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20"
    }
  ]

  const features = [
    { icon: Clock, title: "24/7 Availability", description: "Round-the-clock access to healthcare services" },
    { icon: Shield, title: "Secure & Private", description: "End-to-end encryption and HIPAA compliance" },
    { icon: Zap, title: "Instant Results", description: "Get health reports and consultations in minutes" }
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for complete healthcare management, available 24/7 through our smart kiosks
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <Card className="h-full bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (featureIndex * 0.05), duration: 0.3 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${service.color.replace('text', 'bg')}`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-muted/50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Why Choose Our Kiosks</h3>
            <p className="text-muted-foreground">Advanced features that set us apart</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
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
            Ready to Experience the Future of Healthcare?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find a kiosk near you or learn more about bringing our technology to your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground">
              Find Nearest Kiosk
            </Button>
            <Button size="lg" variant="outline">
              Request Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}