"use client"

import { useState } from "react"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import CaribouAndPredation from "@/components/caribou-and-predation"
import RegulationTypes from "@/components/regulation-types"
import CaseStudy from "@/components/case-study"
import Conclusion from "@/components/conclusion"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  const sections = [
    { id: "home", label: "Home" },
    { id: "caribou", label: "Meet the Caribou" },
    { id: "regulation", label: "Top-Down vs Bottom-Up" },
    { id: "casestudy", label: "Case Studies" },
    { id: "conclusion", label: "Conclusion" },
  ]

  const renderSection = () => {
    switch (activeSection) {
      case "caribou":
        return <CaribouAndPredation />
      case "regulation":
        return <RegulationTypes />
      case "casestudy":
        return <CaseStudy />
      case "conclusion":
        return <Conclusion />
      default:
        return <HeroSection onNavigate={setActiveSection} />
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      <Header />
      <Navigation sections={sections} activeSection={activeSection} onNavigate={setActiveSection} />
      <div className="relative">{renderSection()}</div>
    </main>
  )
}
