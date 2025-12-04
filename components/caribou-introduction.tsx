"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, TrendingDown, Zap } from "lucide-react"

export default function CaribouIntroduction() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 space-y-12">
        {/* Hero Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Meet the Woodland Caribou</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Woodland caribou (<em>Rangifer tarandus caribou</em>) are a threatened species with deep cultural and
              ecological significance in British Columbia. Their numbers have declined dramatically—from an estimated
              40,000 animals several decades ago to approximately 15,500 today. This decline is mainly driven by two
              interlinked factors: habitat disturbance and increased predation pressure, particularly from grey wolves.
            </p>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-destructive" />
                Population Decline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive mb-2">57.5%</div>
              <p className="text-sm text-muted-foreground">
                decline from 40,000 to 17,000 animals over several decades
              </p>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:border-secondary/40 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="h-5 w-5 text-secondary" />
                Primary Threats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p className="font-semibold">1. Habitat Disturbance</p>
                 <p className="text-muted-foreground">such as wildfire and forest harvesting</p>
                <p className="font-semibold">2. Predation Pressure</p>
                <p className="text-muted-foreground">particularly from grey wolves</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:border-accent/40 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-accent" />
                Conservation Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2">Threatened Species</p>
              <p className="text-sm text-muted-foreground">
                requires management strategies combining predator control and habitat restoration
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="space-y-6">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold">Predation Control As The Recovery Tool</h3>
            <p className="text-muted-foreground leading-relaxed">
              Grey wolves are the primary predators of caribou, and increases in wolf abundance 
              can contribute to major declines in caribou populations 
              (B.C. Ministry of Water, Land and Resource Stewardship, 2025). 
              Because of this, wolf-reduction programs were implemented to support recovery efforts. 
              Among the available management tools, wolf reduction has been reported as one of the 
              most effective short-term actions to help reverse caribou declines (Serrouya et al., 2019).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
