'use client'

import { motion } from 'framer-motion'
import { 
  LightBulbIcon, 
  MapPinIcon, 
  CurrencyDollarIcon,
  UserGroupIcon 
} from '@heroicons/react/24/outline'

interface HeroProps {
  onGetStarted: () => void
}

export default function Hero({ onGetStarted }: HeroProps) {
  const features = [
    {
      icon: LightBulbIcon,
      title: 'AI-Powered Ideas',
      description: 'Get personalized business recommendations based on your location and budget'
    },
    {
      icon: MapPinIcon,
      title: 'Local Focus',
      description: 'Address real community needs and market gaps in your area'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Funding Support',
      description: 'Connect with banks, NGOs, and microfinance partners'
    },
    {
      icon: UserGroupIcon,
      title: 'Job Creation',
      description: 'Build businesses that create employment opportunities'
    }
  ]

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Build Your Dream Business with{' '}
              <span className="text-primary-600">AI Guidance</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transform your entrepreneurial dreams into reality. Our AI-powered platform helps you identify 
              profitable business opportunities tailored to your location, budget, and community needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={onGetStarted}
                className="btn-primary text-lg px-8 py-3"
              >
                Start Your Journey
              </button>
              <a href="#features" className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature highlights */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 mb-4">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 