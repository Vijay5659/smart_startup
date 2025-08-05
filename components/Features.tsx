'use client'

import { motion } from 'framer-motion'
import { 
  ChartBarIcon,
  ClipboardDocumentListIcon,
  BuildingOfficeIcon,
  BanknotesIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline'

export default function Features() {
  const features = [
    {
      icon: ChartBarIcon,
      title: 'Localized Business Idea Generator',
      description: 'Input your budget, location, and interests. Our AI analyzes local market gaps and recommends profitable business opportunities with minimal competition.',
      details: [
        'Market gap analysis',
        'Competition assessment',
        'Profit potential evaluation',
        'Location-specific recommendations'
      ]
    },
    {
      icon: ClipboardDocumentListIcon,
      title: 'Dynamic Business Kit Checklist',
      description: 'Get comprehensive checklists for every suggested business including required equipment, licenses, initial inventory, and operational guidance.',
      details: [
        'Equipment requirements',
        'Licensing information',
        'Initial inventory lists',
        'Operational procedures'
      ]
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Job Creation Estimator',
      description: 'Understand the employment impact of your business idea. Estimate how many local jobs your venture is likely to generate.',
      details: [
        'Employment projections',
        'Skill requirements',
        'Local hiring potential',
        'Community impact assessment'
      ]
    },
    {
      icon: BanknotesIcon,
      title: 'Capital & Micro-Loan Support',
      description: 'Auto-generate business plans and connect with local banks, NGOs, and microfinance partners to secure funding.',
      details: [
        'Business plan generation',
        'Funding partner connections',
        'Loan application guidance',
        'Financial planning tools'
      ]
    },
    {
      icon: AcademicCapIcon,
      title: 'Training and Workshops Hub',
      description: 'Access relevant workshops, mentorship, and skill-building sessions to upskill yourself and your team.',
      details: [
        'Skill development programs',
        'Mentorship connections',
        'Workshop scheduling',
        'Learning resources'
      ]
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Community Needs Feedback Loop',
      description: 'Regularly collect information from local residents about their needs and product/service gaps to drive smarter recommendations.',
      details: [
        'Community surveys',
        'Feedback collection',
        'Needs assessment',
        'Market validation'
      ]
    },
    {
      icon: ArrowTrendingUpIcon,
      title: 'Scalable Recommendations',
      description: 'Whether for micro-enterprises or large ventures, get tailored guidance based on financial scale, location, and potential demand.',
      details: [
        'Scale-appropriate advice',
        'Growth planning',
        'Risk assessment',
        'Success metrics'
      ]
    }
  ]

  return (
    <div id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Complete platform for entrepreneurial success
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive suite of tools and resources empowers you to build successful, 
            community-driven businesses that address real local needs.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <ul className="mt-4 space-y-2">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary-600 mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 