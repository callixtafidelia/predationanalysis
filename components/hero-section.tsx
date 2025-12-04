"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"

const WolfModel = dynamic(() => import("@/components/WolfModel"), {
  ssr: false,
})

interface HeroSectionProps {
  onNavigate: (section: string) => void
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-2 pb-12 sm:pt-4 sm:pb-16">
      <div className="absolute inset-0 opacity-30">
        <svg className="h-full w-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(79, 172, 254)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="1200" height="600" fill="url(#grad1)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
          
          {/* LEFT SIDE TEXT */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-balance">
                Why are caribou struggling and what do wolves have to do with it?
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover how wolf predation and habitat disturbance shape caribou survival, 
                and why tackling both is key.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-lg bg-primary/10 p-4 border border-primary/20">
                <div className="text-3xl font-bold text-primary">~17,000</div>
                <div className="text-sm text-muted-foreground">Woodland caribou today</div>
              </div>
              <div className="rounded-lg bg-secondary/10 p-4 border border-secondary/20">
                <div className="text-3xl font-bold text-secondary">~40,000</div>
                <div className="text-sm text-muted-foreground">Population in early 1900s</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button onClick={() => onNavigate("caribou")} size="lg" className="gap-2">
                Start Exploring <ArrowRight className="h-4 w-4" />
              </Button>
              <Button onClick={() => onNavigate("casestudy")} variant="outline" size="lg">
                View Case Studies
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE 3D MODEL */}
          <div className="relative w-full h-[500px] md:h-[600px] overflow-visible">
            <WolfModel />
          </div>

        </div>
      </div>
    </section>
  )
}
