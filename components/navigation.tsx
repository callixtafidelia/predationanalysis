"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface NavigationProps {
  sections: Array<{ id: string; label: string }>
  activeSection: string
  onNavigate: (id: string) => void
}

export default function Navigation({ sections, activeSection, onNavigate }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-40 border-b border-primary/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="flex overflow-x-auto gap-1 py-3">
          {sections.map((section) => (
            <Button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              variant={activeSection === section.id ? "default" : "ghost"}
              size="sm"
              className="whitespace-nowrap"
            >
              {section.label}
              {activeSection === section.id && <ChevronRight className="ml-1 h-4 w-4" />}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )
}
