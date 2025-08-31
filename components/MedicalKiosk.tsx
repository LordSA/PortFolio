'use client'

import { motion } from 'framer-motion'
import { Heart, Camera, Printer, Phone, CreditCard, Wifi } from 'lucide-react'

export function MedicalKiosk() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main Kiosk Structure */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
      >
        {/* Base/Stand */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-t from-gray-400 to-gray-300 rounded-lg shadow-lg"></div>
        
        {/* Main Body */}
        <div className="relative bg-gradient-to-b from-white to-gray-100 rounded-3xl shadow-2xl border-4 border-gray-200 p-8 mx-4 mb-4">
          {/* Header with Logo */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-t-2xl -mx-8 -mt-8 mb-6 p-4 text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white font-bold text-lg"
            >
              HCTMM Medical Kiosk
            </motion.div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-blue-200 text-sm mt-1"
            >
              24/7 Healthcare Access
            </motion.div>
          </div>

          {/* Main Screen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-black rounded-xl p-6 mb-6 relative overflow-hidden"
          >
            {/* Screen Content */}
            <div className="relative z-10">
              <div className="text-center mb-4">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-green-400 text-lg font-semibold"
                >
                  Welcome! Touch to Start
                </motion.div>
                <div className="text-gray-300 text-sm mt-2">Select a service below</div>
              </div>

              {/* Service Icons */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-600 rounded-lg p-3 text-center cursor-pointer"
                >
                  <Heart className="w-6 h-6 text-white mx-auto mb-1" />
                  <div className="text-white text-xs">Health Check</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-green-600 rounded-lg p-3 text-center cursor-pointer"
                >
                  <Phone className="w-6 h-6 text-white mx-auto mb-1" />
                  <div className="text-white text-xs">Consult Doctor</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-purple-600 rounded-lg p-3 text-center cursor-pointer"
                >
                  <Printer className="w-6 h-6 text-white mx-auto mb-1" />
                  <div className="text-white text-xs">Get Prescription</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-orange-600 rounded-lg p-3 text-center cursor-pointer"
                >
                  <CreditCard className="w-6 h-6 text-white mx-auto mb-1" />
                  <div className="text-white text-xs">Emergency</div>
                </motion.div>
              </div>
            </div>

            {/* Screen Glow Effect */}
            <motion.div
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-blue-500 rounded-xl"
            ></motion.div>
          </motion.div>

          {/* Control Panel */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Biometric Scanner */}
            <motion.div
              animate={{ boxShadow: ['0 0 10px rgba(34, 197, 94, 0.5)', '0 0 20px rgba(34, 197, 94, 0.8)', '0 0 10px rgba(34, 197, 94, 0.5)'] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-gray-800 rounded-lg p-3 text-center"
            >
              <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-4 h-4 bg-green-300 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-600">Fingerprint</div>
            </motion.div>

            {/* Camera */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-gray-800 rounded-lg p-3 text-center"
            >
              <Camera className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-xs text-gray-600">Camera</div>
            </motion.div>

            {/* Payment Slot */}
            <div className="bg-gray-800 rounded-lg p-3 text-center">
              <div className="w-8 h-2 bg-gray-600 rounded mx-auto mb-3 mt-3"></div>
              <div className="text-xs text-gray-600">Card Slot</div>
            </div>
          </div>

          {/* Vital Signs Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-gray-50 rounded-lg p-4 border"
          >
            <div className="text-center text-sm font-semibold text-gray-700 mb-3">Vital Signs Monitor</div>
            <div className="grid grid-cols-4 gap-2 text-xs">
              <div className="text-center">
                <motion.div
                  animate={{ color: ['#ef4444', '#f87171', '#ef4444'] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="font-bold"
                >
                  ♥ 72
                </motion.div>
                <div className="text-gray-500">BPM</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-blue-600">120/80</div>
                <div className="text-gray-500">BP</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-green-600">98%</div>
                <div className="text-gray-500">SpO2</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-orange-600">98.6°F</div>
                <div className="text-gray-500">Temp</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Status Indicators */}
        <div className="absolute top-4 right-4 flex gap-2">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-3 h-3 bg-green-500 rounded-full"
          ></motion.div>
          <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
            <Wifi className="w-2 h-2 text-white" />
          </div>
        </div>
      </motion.div>

      {/* Floating Feature Labels */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute left-0 top-1/4 bg-white rounded-lg shadow-lg p-3 border border-blue-200"
      >
        <div className="text-sm font-semibold text-blue-800">✓ AI Health Analysis</div>
        <div className="text-xs text-gray-600">Instant results</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute right-0 top-1/2 bg-white rounded-lg shadow-lg p-3 border border-green-200"
      >
        <div className="text-sm font-semibold text-green-800">🩺 Telemedicine</div>
        <div className="text-xs text-gray-600">Connect with doctors</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute left-1/2 bottom-0 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 border border-purple-200"
      >
        <div className="text-sm font-semibold text-purple-800">💊 Smart Dispensing</div>
        <div className="text-xs text-gray-600">Automated medication</div>
      </motion.div>
    </div>
  )
}