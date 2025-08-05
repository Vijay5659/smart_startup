'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import BusinessIdeaGenerator from '@/components/BusinessIdeaGenerator'
import Footer from '@/components/Footer'

export default function Home() {
  const [showGenerator, setShowGenerator] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {!showGenerator ? (
        <>
          <Hero onGetStarted={() => setShowGenerator(true)} />
          <Features />
        </>
      ) : (
        <BusinessIdeaGenerator onBack={() => setShowGenerator(false)} />
      )}
      
      <Footer />
    </div>
  )
} 