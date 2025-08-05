'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeftIcon, SparklesIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'

interface BusinessIdeaGeneratorProps {
  onBack: () => void
}

interface FormData {
  budget: string
  location: string
  interests: string[]
  experience: string
  timeline: string
}

export default function BusinessIdeaGenerator({ onBack }: BusinessIdeaGeneratorProps) {
  const [formData, setFormData] = useState<FormData>({
    budget: '',
    location: '',
    interests: [],
    experience: '',
    timeline: ''
  })
  const [isGenerating, setIsGenerating] = useState(false)

  const interestOptions = [
    'Food & Beverage',
    'Retail & E-commerce',
    'Technology & Digital',
    'Health & Wellness',
    'Education & Training',
    'Agriculture & Farming',
    'Manufacturing',
    'Services & Consulting',
    'Transportation & Logistics',
    'Entertainment & Recreation'
  ]

  const budgetRanges = [
    { value: '0-50000', label: '₹0 - ₹50,000 (Micro)' },
    { value: '50000-200000', label: '₹50,000 - ₹2,00,000 (Small)' },
    { value: '200000-500000', label: '₹2,00,000 - ₹5,00,000 (Medium)' },
    { value: '500000-1000000', label: '₹5,00,000 - ₹10,00,000 (Large)' },
    { value: '1000000+', label: '₹10,00,000+ (Enterprise)' }
  ]

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.budget || !formData.location || formData.interests.length === 0) {
      toast.error('Please fill in all required fields')
      return
    }

    setIsGenerating(true)
    
    // Simulate AI processing
    setTimeout(() => {
      setIsGenerating(false)
      toast.success('Business ideas generated successfully!')
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-primary-600 hover:text-primary-700 mb-4"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to home
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Business Idea Generator</h1>
          <p className="text-gray-600 mt-2">Tell us about yourself and we'll recommend the best business opportunities for you.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Budget Range */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What's your investment budget?</h3>
            <div className="space-y-3">
              {budgetRanges.map((range) => (
                <label key={range.value} className="flex items-center">
                  <input
                    type="radio"
                    name="budget"
                    value={range.value}
                    checked={formData.budget === range.value}
                    onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                  />
                  <span className="ml-3 text-gray-700">{range.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Where are you located?</h3>
            <input
              type="text"
              placeholder="Enter your city, town, or village"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              className="input-field"
              required
            />
          </div>

          {/* Interests */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What industries interest you?</h3>
            <p className="text-sm text-gray-600 mb-4">Select all that apply (minimum 1)</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {interestOptions.map((interest) => (
                <label key={interest} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleInterestToggle(interest)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{interest}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isGenerating}
              className="btn-primary text-lg px-8 py-3 flex items-center disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Generating Ideas...
                </>
              ) : (
                <>
                  <SparklesIcon className="h-5 w-5 mr-2" />
                  Generate Business Ideas
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 