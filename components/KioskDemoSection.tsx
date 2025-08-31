'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Heart, Stethoscope, FileText, Pill, Clock, Shield, Zap, Globe } from 'lucide-react'

export function KioskDemoSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: Heart,
      title: "Instant Vital Signs",
      description: "Get your blood pressure, heart rate, temperature, and blood sugar checked in under 2 minutes",
      demo: "Touch the biometric scanner → Place finger → Results in 30 seconds",
      color: "text-red-500"
    },
    {
      icon: Stethoscope,
      title: "AI Health Analysis",
      description: "Advanced AI analyzes your vital signs and provides personalized health recommendations",
      demo: "Scan vitals → AI processes data → Personalized health report generated",
      color: "text-blue-500"
    },
    {
      icon: FileText,
      title: "Digital Prescriptions",
      description: "Receive digital prescriptions instantly after doctor consultation with QR code verification",
      demo: "Consult doctor → Get prescription → Print with QR code → Verify authenticity",
      color: "text-green-500"
    },
    {
      icon: Pill,
      title: "Smart Medicine Dispenser",
      description: "Automated medicine dispensing with dosage instructions and safety warnings",
      demo: "Scan prescription → Verify identity → Automated dispensing → Safety instructions",
      color: "text-purple-500"
    }
  ]

  const benefits = [
    { icon: Clock, title: "24/7 Access", description: "Round-the-clock healthcare availability" },
    { icon: Shield, title: "Secure & Private", description: "End-to-end encryption and privacy protection" },
    { icon: Zap, title: "Instant Results", description: "Get health reports in under 5 minutes" },
    { icon: Globe, title: "Multilingual", description: "Support for 15+ regional languages" }
  ]

  const renderActiveIcon = () => {
    const IconComponent = features[activeFeature].icon
    return <IconComponent className={`w-8 h-8 ${features[activeFeature].color}`} />
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of healthcare with our intelligent medical kiosks
          </p>
        </motion.div>

        {/* Interactive Demo */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Feature Controls */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Interactive Features</h3>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeFeature === index 
                    ? 'bg-blue-50 border-2 border-blue-200 shadow-lg' 
                    : 'bg-white border border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-white border-2 ${
                    activeFeature === index ? 'border-blue-200' : 'border-gray-200'
                  } flex items-center justify-center`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                    {activeFeature === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-3 p-3 bg-blue-100 rounded-lg"
                      >
                        <div className="text-sm font-medium text-blue-800">Demo Flow:</div>
                        <div className="text-sm text-blue-700">{feature.demo}</div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Demo Visualization */}
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                {renderActiveIcon()}
              </div>
              <h4 className="text-2xl font-bold">{features[activeFeature].title}</h4>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-blue-200 text-sm mb-2">Process</div>
                <div className="text-white">{features[activeFeature].demo}</div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">⚡</div>
                  <div className="text-xs text-blue-200">Fast</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">🔒</div>
                  <div className="text-xs text-blue-200">Secure</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">📊</div>
                  <div className="text-xs text-blue-200">Accurate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}