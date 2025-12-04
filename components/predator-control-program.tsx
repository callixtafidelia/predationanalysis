"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PredatorControlProgram() {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-4 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold">Predator Control Programs</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Governments have implemented predator control programs in BC targeting grey wolves to reduce predation
            pressure on woodland caribou. These interventions attempt to artificially increase prey populations through
            top-down manipulation.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="methods">Methods</TabsTrigger>
            <TabsTrigger value="goals">Goals & Results</TabsTrigger>
            <TabsTrigger value="ethics">Debate</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Wolf Control in British Columbia</CardTitle>
                <CardDescription>A management strategy to protect endangered caribou populations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-lg p-6 border border-amber-200 dark:border-amber-800">
                  <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">⚠️ Context</h4>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    Woodland caribou populations in BC have declined dramatically from thousands to fewer than 50-100
                    individuals in some herds. BC Fish and Wildlife has implemented predator control programs targeting
                    wolves to reduce predation and allow caribou populations to recover.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="border-primary/30">
                    <CardContent className="pt-6">
                      <div className="text-4xl font-bold text-primary mb-2">500+</div>
                      <p className="text-sm font-semibold">Estimated Wolves</p>
                      <p className="text-xs text-muted-foreground mt-1">in British Columbia</p>
                    </CardContent>
                  </Card>
                  <Card className="border-secondary/30">
                    <CardContent className="pt-6">
                      <div className="text-4xl font-bold text-secondary mb-2">50-100</div>
                      <p className="text-sm font-semibold">Estimated Caribou</p>
                      <p className="text-xs text-muted-foreground mt-1">in critical herds</p>
                    </CardContent>
                  </Card>
                  <Card className="border-accent/30">
                    <CardContent className="pt-6">
                      <div className="text-4xl font-bold text-accent mb-2">30+</div>
                      <p className="text-sm font-semibold">Years of Programs</p>
                      <p className="text-xs text-muted-foreground mt-1">since mid-1990s</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Program Structure</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3 items-start p-3 rounded-lg bg-muted">
                      <span className="font-bold text-primary flex-shrink-0">1.</span>
                      <div>
                        <p className="font-semibold">Identification</p>
                        <p className="text-xs text-muted-foreground">
                          Target wolf packs in specific regions affecting caribou
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start p-3 rounded-lg bg-muted">
                      <span className="font-bold text-primary flex-shrink-0">2.</span>
                      <div>
                        <p className="font-semibold">Implementation</p>
                        <p className="text-xs text-muted-foreground">Deploy control methods in targeted areas</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start p-3 rounded-lg bg-muted">
                      <span className="font-bold text-primary flex-shrink-0">3.</span>
                      <div>
                        <p className="font-semibold">Monitoring</p>
                        <p className="text-xs text-muted-foreground">
                          Track wolf and caribou populations to measure effectiveness
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="methods" className="space-y-6 mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Primary Removal Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="border-l-4 border-l-primary pl-4">
                      <h4 className="font-semibold text-sm">Helicopter Aerial Gunning</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Helicopter-based sharpshooters target wolves from the air in winter when visibility is optimal
                      </p>
                    </div>
                    <div className="border-l-4 border-l-primary pl-4">
                      <h4 className="font-semibold text-sm">Ground-Based Trapping</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Snare and leg-hold traps deployed in wolf territories
                      </p>
                    </div>
                    <div className="border-l-4 border-l-primary pl-4">
                      <h4 className="font-semibold text-sm">Hunting & Fur Trade</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Licensed hunters and trappers incentivized through bounties and extended seasons
                      </p>
                    </div>
                    <div className="border-l-4 border-l-primary pl-4">
                      <h4 className="font-semibold text-sm">Poison</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Strychnine-laced baits historically used (less common now)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Non-Lethal Strategies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="border-l-4 border-l-secondary pl-4">
                      <h4 className="font-semibold text-sm">Habitat Protection</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Preserve lichen-rich old-growth forests for caribou winter habitat
                      </p>
                    </div>
                    <div className="border-l-4 border-l-secondary pl-4">
                      <h4 className="font-semibold text-sm">Caribou Pen Restocking</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Capture and breed caribou in protected enclosures for reintroduction
                      </p>
                    </div>
                    <div className="border-l-4 border-l-secondary pl-4">
                      <h4 className="font-semibold text-sm">Moose Reduction</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Control moose populations to reduce alternative wolf prey
                      </p>
                    </div>
                    <div className="border-l-4 border-l-secondary pl-4">
                      <h4 className="font-semibold text-sm">Collaring & Monitoring</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        GPS collars track movements to understand predator-prey interactions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Program Goals and Outcomes</CardTitle>
                <CardDescription>What the programs aimed to achieve and what actually happened</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary text-lg">🎯 Stated Goals</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex gap-2 items-start">
                        <span className="text-primary font-bold flex-shrink-0">→</span>
                        <span>Reduce wolf populations by 30-50% in target areas</span>
                      </div>
                      <div className="flex gap-2 items-start">
                        <span className="text-primary font-bold flex-shrink-0">→</span>
                        <span>Decrease predation pressure on caribou</span>
                      </div>
                      <div className="flex gap-2 items-start">
                        <span className="text-primary font-bold flex-shrink-0">→</span>
                        <span>Allow caribou populations to grow naturally</span>
                      </div>
                      <div className="flex gap-2 items-start">
                        <span className="text-primary font-bold flex-shrink-0">→</span>
                        <span>Prevent caribou herds from facing extinction</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-accent text-lg">📊 Mixed Results</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex gap-2 items-start">
                        <span className="text-accent font-bold flex-shrink-0">⚠</span>
                        <span>Some wolf populations were reduced temporarily</span>
                      </div>
                      <div className="flex gap-2 items-start">
                        <span className="text-accent font-bold flex-shrink-0">⚠</span>
                        <span>Wolf packs relocated to other areas (not eliminated)</span>
                      </div>
                      <div className="flex gap-2 items-start">
                        <span className="text-accent font-bold flex-shrink-0">⚠</span>
                        <span>Caribou recovery has been minimal and inconsistent</span>
                      </div>
                      <div className="flex gap-2 items-start">
                        <span className="text-accent font-bold flex-shrink-0">⚠</span>
                        <span>Some herds continue declining despite predator control</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">⚠️ Key Challenge</h4>
                  <p className="text-sm text-red-800 dark:text-red-200">
                    Predator control addresses only top-down regulation. If habitat loss (bottom-up pressure) continues,
                    caribou may not recover even with reduced wolf populations. Many scientists argue habitat
                    restoration should be the priority.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ethics" className="space-y-6 mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-200 dark:border-green-800">
                <CardHeader className="bg-green-50 dark:bg-green-950/30">
                  <CardTitle className="text-lg text-green-900 dark:text-green-100">
                    ✓ Arguments FOR Predator Control
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-green-900 dark:text-green-100 mb-1">
                        Endangered Species Protection
                      </p>
                      <p className="text-muted-foreground">
                        Caribou are critically endangered; intervention may be necessary to prevent extinction
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-green-900 dark:text-green-100 mb-1">Ecological Imbalance</p>
                      <p className="text-muted-foreground">
                        Wolves are present in unnaturally high numbers due to abundant moose from logging
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-green-900 dark:text-green-100 mb-1">Quick Action</p>
                      <p className="text-muted-foreground">
                        Predator control provides immediate relief while habitat restoration takes decades
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-green-900 dark:text-green-100 mb-1">Holistic Management</p>
                      <p className="text-muted-foreground">
                        Combined with habitat protection, control programs may offer best outcomes
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200 dark:border-red-800">
                <CardHeader className="bg-red-50 dark:bg-red-950/30">
                  <CardTitle className="text-lg text-red-900 dark:text-red-100">
                    ✗ Arguments AGAINST Predator Control
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-red-900 dark:text-red-100 mb-1">Root Cause Ignored</p>
                      <p className="text-muted-foreground">
                        Habitat destruction, not wolves, is the primary threat to caribou
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-red-900 dark:text-red-100 mb-1">Temporary Solution</p>
                      <p className="text-muted-foreground">
                        Removed wolves are replaced by new packs; control must continue indefinitely
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-red-900 dark:text-red-100 mb-1">Ecological Impacts</p>
                      <p className="text-muted-foreground">
                        Removing apex predators disrupts entire food webs and ecosystem health
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-red-900 dark:text-red-100 mb-1">Ethics & Feasibility</p>
                      <p className="text-muted-foreground">
                        Lethal control raises ethical concerns; caribou recovery remains minimal
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-2 border-purple-200 dark:border-purple-800">
              <CardHeader>
                <CardTitle className="text-lg">🔄 The Integrated Approach</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Most conservation biologists now agree that effective caribou recovery requires addressing BOTH
                  top-down and bottom-up pressures simultaneously:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/50 dark:bg-slate-900/50 rounded-lg p-4">
                    <p className="font-semibold text-purple-900 dark:text-purple-100 mb-2">⬇️ Top-Down Solutions</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Strategic predator control in critical areas</li>
                      <li>• Moose management to reduce wolf prey</li>
                      <li>• Population monitoring and adaptive management</li>
                    </ul>
                  </div>
                  <div className="bg-white/50 dark:bg-slate-900/50 rounded-lg p-4">
                    <p className="font-semibold text-purple-900 dark:text-purple-100 mb-2">⬆️ Bottom-Up Solutions</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Protect and restore lichen-rich habitat</li>
                      <li>• Reduce industrial logging in critical areas</li>
                      <li>• Reforestation with native species</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
