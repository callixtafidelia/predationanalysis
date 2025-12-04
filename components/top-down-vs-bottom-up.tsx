"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TopDownVsBottomUp() {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-4 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold">Top-Down vs. Bottom-Up Regulation</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Ecosystems are regulated by two fundamental forces: top-down (predation) and bottom-up (resource
            availability). Understanding these mechanisms is crucial to managing wildlife effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Top-Down Regulation */}
          <Card className="border-2 border-primary/30 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="text-2xl">🐺 Top-Down Regulation</CardTitle>
              <CardDescription>Controlled by Predators</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-primary">How It Works</h4>
                <p className="text-sm text-muted-foreground">
                  Predators at the top of the food chain limit prey populations through predation. When predators are
                  abundant, prey populations decrease. When predators decline, prey rebounds.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-primary">In BC Forests</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2 items-start">
                    <span className="text-primary">•</span>
                    <span>Wolves hunt caribou, moose, and deer</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-primary">•</span>
                    <span>Predation pressure limits ungulate populations</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-primary">•</span>
                    <span>Reduced herbivory allows vegetation to recover</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-primary">•</span>
                    <span>Ecosystem structure and diversity improve</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                <p className="text-xs font-semibold text-primary mb-2">KEY POINT</p>
                <p className="text-sm">
                  When top-down control is strong, ecosystems exhibit greater stability and biodiversity even when
                  resources are limited.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-primary text-sm">Control Mechanism Flow</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">
                      →
                    </div>
                    <span>Predators increase</span>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <div className="h-6 w-6 rounded-full bg-primary/30 flex items-center justify-center text-xs font-bold">
                      →
                    </div>
                    <span>Predation pressure ↑</span>
                  </div>
                  <div className="flex items-center gap-2 ml-8">
                    <div className="h-6 w-6 rounded-full bg-primary/40 flex items-center justify-center text-xs font-bold">
                      →
                    </div>
                    <span>Prey population ↓</span>
                  </div>
                  <div className="flex items-center gap-2 ml-12">
                    <div className="h-6 w-6 rounded-full bg-primary/50 flex items-center justify-center text-xs font-bold">
                      →
                    </div>
                    <span>Vegetation recovers</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bottom-Up Regulation */}
          <Card className="border-2 border-secondary/30 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-transparent">
              <CardTitle className="text-2xl">🌿 Bottom-Up Regulation</CardTitle>
              <CardDescription>Controlled by Resources</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-secondary">How It Works</h4>
                <p className="text-sm text-muted-foreground">
                  The availability of food and resources determines population sizes. When resources are abundant,
                  populations grow. When resources are scarce, populations decline through starvation.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-secondary">In BC Forests</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2 items-start">
                    <span className="text-secondary">•</span>
                    <span>Lichen availability drives caribou survival</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-secondary">•</span>
                    <span>Winter food scarcity limits population growth</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-secondary">•</span>
                    <span>Browse availability controls moose and deer numbers</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-secondary">•</span>
                    <span>Resource competition determines survival rates</span>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/5 rounded-lg p-4 border border-secondary/10">
                <p className="text-xs font-semibold text-secondary mb-2">KEY POINT</p>
                <p className="text-sm">
                  When bottom-up control dominates, predators can only persist if their prey is abundant; adding more
                  predators doesn't necessarily reduce prey.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-secondary text-sm">Control Mechanism Flow</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold">
                      →
                    </div>
                    <span>Resources increase</span>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <div className="h-6 w-6 rounded-full bg-secondary/30 flex items-center justify-center text-xs font-bold">
                      →
                    </div>
                    <span>Prey nutrition ↑</span>
                  </div>
                  <div className="flex items-center gap-2 ml-8">
                    <div className="h-6 w-6 rounded-full bg-secondary/40 flex items-center justify-center text-xs font-bold">
                      →
                    </div>
                    <span>Reproduction ↑</span>
                  </div>
                  <div className="flex items-center gap-2 ml-12">
                    <div className="h-6 w-6 rounded-full bg-secondary/50 flex items-center justify-center text-xs font-bold">
                      →
                    </div>
                    <span>Population grows</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comparison table */}
        <Card>
          <CardHeader>
            <CardTitle>Comparing Regulatory Mechanisms</CardTitle>
            <CardDescription>How top-down and bottom-up regulation differ in BC ecosystems</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-semibold">Aspect</th>
                    <th className="text-left py-3 px-4 font-semibold text-primary">Top-Down Control</th>
                    <th className="text-left py-3 px-4 font-semibold text-secondary">Bottom-Up Control</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-3 px-4 font-medium">Primary Driver</td>
                    <td className="py-3 px-4">Predator abundance and hunting</td>
                    <td className="py-3 px-4">Food availability and resources</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Population Limit</td>
                    <td className="py-3 px-4">Set by predation pressure</td>
                    <td className="py-3 px-4">Set by carrying capacity</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Response to Pressure</td>
                    <td className="py-3 px-4">Prey declines despite resources</td>
                    <td className="py-3 px-4">Population limited by starvation</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Example in BC</td>
                    <td className="py-3 px-4">Wolves controlling caribou numbers</td>
                    <td className="py-3 px-4">Winter lichen scarcity limiting caribou</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Management Focus</td>
                    <td className="py-3 px-4">Predator control programs</td>
                    <td className="py-3 px-4">Habitat protection and restoration</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Real-world application */}
        <Card className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-950/20 dark:to-emerald-950/20 border-2 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="text-lg">🎯 The BC Caribou Challenge</CardTitle>
            <CardDescription>A Perfect Storm of Both Mechanisms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              British Columbia's woodland caribou face a dual crisis combining both top-down and bottom-up pressures:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white/50 dark:bg-slate-900/50 rounded-lg p-4 border-l-4 border-l-primary">
                <p className="font-semibold text-primary mb-2">⬇️ Bottom-Up Pressure</p>
                <p className="text-xs text-muted-foreground">
                  Industrial logging destroys lichen-rich old-growth forest habitat, reducing winter food availability
                  for caribou.
                </p>
              </div>
              <div className="bg-white/50 dark:bg-slate-900/50 rounded-lg p-4 border-l-4 border-l-secondary">
                <p className="font-semibold text-secondary mb-2">⬆️ Top-Down Pressure</p>
                <p className="text-xs text-muted-foreground">
                  Increased wolf populations (supported by abundant moose in logged areas) intensify predation on
                  already-stressed caribou herds.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
