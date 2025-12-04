"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TrophicCascade() {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-4 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold">Trophic Cascade</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A trophic cascade occurs when predators at the top of the food chain influence ecosystems far beyond their
            direct predation, affecting vegetation, herbivores, and entire landscapes.
          </p>
        </div>

        <div className="space-y-6">
          {/* Main cascade visualization */}
          <Card>
            <CardHeader>
              <CardTitle>The Cascading Effects of Wolves on BC Ecosystems</CardTitle>
              <CardDescription>How top predators reshape entire food webs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Level 1: Apex Predator */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                      <h4 className="text-2xl font-bold mb-2">🐺 LEVEL 1: Apex Predator</h4>
                      <p className="text-sm">Grey Wolves (Canis lupus)</p>
                      <p className="text-xs mt-2 opacity-90">Population Status: 500+ individuals in BC</p>
                    </div>
                  </div>
                  <div className="hidden md:block text-4xl text-blue-600 font-bold">↓</div>
                </div>

                {/* Level 2: Primary Herbivore */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                      <h4 className="text-2xl font-bold mb-2">🦌 LEVEL 2: Herbivores</h4>
                      <p className="text-sm">Woodland Caribou, Moose, Deer</p>
                      <p className="text-xs mt-2 opacity-90">Affected by: Predation intensity and hunting behavior</p>
                    </div>
                  </div>
                  <div className="hidden md:block text-4xl text-green-600 font-bold">↓</div>
                </div>

                {/* Level 3: Vegetation */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg p-6 text-white">
                      <h4 className="text-2xl font-bold mb-2">🌿 LEVEL 3: Vegetation</h4>
                      <p className="text-sm">Lichens, browse plants, shrubs</p>
                      <p className="text-xs mt-2 opacity-90">Affected by: Herbivore grazing and browsing pressure</p>
                    </div>
                  </div>
                  <div className="hidden md:block text-4xl text-emerald-600 font-bold">↓</div>
                </div>

                {/* Level 4: Broader Ecosystem */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg p-6 text-white">
                      <h4 className="text-2xl font-bold mb-2">🌲 LEVEL 4: Forest Ecosystem</h4>
                      <p className="text-sm">Tree growth, soil stability, wildlife habitat</p>
                      <p className="text-xs mt-2 opacity-90">Affected by: Overall vegetation health and diversity</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cascade scenarios */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-lg">With Wolves Present</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <p className="text-sm">Wolves cull weak/old ungulates, reducing overall herbivory pressure</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <p className="text-sm">Vegetation recovers and thrives with reduced browsing</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <p className="text-sm">More diverse plant communities support other wildlife</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <p className="text-sm">Wolf kills provide food for scavengers (ravens, bears, eagles)</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <p className="text-sm">Resilient, balanced ecosystems support biodiversity</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="text-lg">Without Wolves (or with Control)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <span className="text-accent font-bold flex-shrink-0">✗</span>
                    <p className="text-sm">Ungulate populations explode without top-down control</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-accent font-bold flex-shrink-0">✗</span>
                    <p className="text-sm">Overgrazing and overbrowsing devastates vegetation</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-accent font-bold flex-shrink-0">✗</span>
                    <p className="text-sm">Saplings and undergrowth are stripped bare</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-accent font-bold flex-shrink-0">✗</span>
                    <p className="text-sm">Loss of habitat structure for birds, small mammals, insects</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-accent font-bold flex-shrink-0">✗</span>
                    <p className="text-sm">Ecosystem becomes simplified, biodiversity crashes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Real-world example */}
          <Card className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-2 border-orange-200 dark:border-orange-800">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span>📍</span> Real-World Example: Yellowstone National Park
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                When wolves were reintroduced to Yellowstone in 1995-1997 after 70 years of absence, they triggered one
                of the most dramatic trophic cascades on record:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/50 dark:bg-slate-900/50 rounded-lg p-4">
                  <p className="font-semibold text-primary mb-2">Elk Population Control</p>
                  <p>Elk numbers dropped from 14,000 to 5,000, reducing overgrazing</p>
                </div>
                <div className="bg-white/50 dark:bg-slate-900/50 rounded-lg p-4">
                  <p className="font-semibold text-primary mb-2">Vegetation Recovery</p>
                  <p>Riparian vegetation and willows rebounded, stabilizing riverbanks</p>
                </div>
                <div className="bg-white/50 dark:bg-slate-900/50 rounded-lg p-4">
                  <p className="font-semibold text-primary mb-2">Biodiversity Boost</p>
                  <p>Beaver populations increased 9x due to plant recovery</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
