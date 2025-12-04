"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"

const threatsData = [
  { name: "Habitat Loss", value: 45, color: "rgba(251, 146, 60, 1)" },
  { name: "Predation", value: 30, color: "rgba(79, 172, 254, 1)" },
  { name: "Competition", value: 15, color: "rgba(34, 197, 94, 1)" },
  { name: "Other", value: 10, color: "rgba(168, 85, 247, 1)" },
]

const recoveryScenarios = [
  { year: 2024, "Habitat Only": 70, "Predator Control Only": 85, Integrated: 120 },
  { year: 2026, "Habitat Only": 95, "Predator Control Only": 90, Integrated: 160 },
  { year: 2028, "Habitat Only": 130, "Predator Control Only": 95, Integrated: 220 },
  { year: 2030, "Habitat Only": 180, "Predator Control Only": 100, Integrated: 300 },
]

export default function EcologicalImpact() {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-4 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold">Ecological Impact & Future</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Understanding the current state of the wolf-caribou system and projecting future scenarios under different
            management strategies.
          </p>
        </div>

        {/* Current situation */}
        <Card>
          <CardHeader>
            <CardTitle>Current Status in BC</CardTitle>
            <CardDescription>The state of wolves and caribou today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="border-l-4 border-l-primary pl-4">
                  <h4 className="font-semibold text-primary mb-2">🐺 Wolf Populations</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Estimated 500+ wolves in British Columbia</p>
                    <p>• Population stable to increasing in many areas</p>
                    <p>• Thriving due to abundant alternative prey (moose, deer)</p>
                    <p>• Present in most wilderness areas and protected parks</p>
                  </div>
                </div>

                <div className="border-l-4 border-l-secondary pl-4">
                  <h4 className="font-semibold text-secondary mb-2">🦌 Caribou Populations</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Only 50-100 individuals remaining in critical herds</p>
                    <p>• Continues declining despite predator control efforts</p>
                    <p>• Habitat fragmentation restricts movement</p>
                    <p>• Functionally extinct in many historical ranges</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold mb-4">Threat Contribution to Caribou Decline</h4>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={threatsData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={(entry) => `${entry.name} ${entry.value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {threatsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Threats analysis */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="text-lg text-orange-700 dark:text-orange-300">🏭 Habitat Loss (45%)</CardTitle>
              <CardDescription>The Primary Threat</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Industrial logging, road construction, and resource extraction destroy lichen-rich old-growth forests
                that caribou depend on for winter survival.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex gap-2 items-start">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">×</span>
                  <span>Loss of critical winter habitat</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">×</span>
                  <span>Fragmented populations unable to interbreed</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">×</span>
                  <span>Increased exposure to predation</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="text-lg text-blue-700 dark:text-blue-300">🐺 Predation (30%)</CardTitle>
              <CardDescription>A Symptom of Imbalance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Wolves are natural predators, but unnaturally high wolf populations result from abundant alternative
                prey in logged areas, combined with habitat loss making caribou vulnerable.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex gap-2 items-start">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <span>Direct killing by wolf packs</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <span>Wolves supported by moose in cleared areas</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <span>Declining caribou increasingly vulnerable</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recovery scenarios */}
        <Card>
          <CardHeader>
            <CardTitle>Projected Caribou Recovery Scenarios</CardTitle>
            <CardDescription>
              Expected population outcomes under different management approaches (2024-2030)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={recoveryScenarios}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                  <XAxis dataKey="year" stroke="rgba(0,0,0,0.5)" />
                  <YAxis
                    stroke="rgba(0,0,0,0.5)"
                    label={{ value: "Population Size", angle: -90, position: "insideLeft" }}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: "rgba(255,255,255,0.95)", border: "1px solid rgba(0,0,0,0.1)" }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="Habitat Only" stroke="rgba(34, 197, 94, 1)" strokeWidth={2} />
                  <Line
                    type="monotone"
                    dataKey="Predator Control Only"
                    stroke="rgba(79, 172, 254, 1)"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="Integrated"
                    stroke="rgba(251, 146, 60, 1)"
                    strokeWidth={3}
                    strokeDasharray="0"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Scenario analysis */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-2xl">🌿</span> Habitat-First Approach
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="font-semibold text-green-700 dark:text-green-300">Projections</div>
                <p className="text-xs text-muted-foreground">
                  Slow recovery starting ~5 years, reaching viability in 8-10 years
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-4 space-y-2 text-sm border border-green-200 dark:border-green-800">
                <div>
                  <p className="font-semibold text-green-900 dark:text-green-100">✓ Strengths</p>
                  <ul className="text-xs text-green-800 dark:text-green-200 mt-1 space-y-1">
                    <li>• Addresses root cause</li>
                    <li>• Permanent solution</li>
                    <li>• Restores whole ecosystem</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-green-900 dark:text-green-100">✗ Challenges</p>
                  <ul className="text-xs text-green-800 dark:text-green-200 mt-1 space-y-1">
                    <li>• Takes many years</li>
                    <li>• Political resistance</li>
                    <li>• High upfront costs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-2xl">🐺</span> Predator Control-Only
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="font-semibold text-blue-700 dark:text-blue-300">Projections</div>
                <p className="text-xs text-muted-foreground">
                  Marginal gains, likely plateaus without other interventions
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4 space-y-2 text-sm border border-blue-200 dark:border-blue-800">
                <div>
                  <p className="font-semibold text-blue-900 dark:text-blue-100">✓ Strengths</p>
                  <ul className="text-xs text-blue-800 dark:text-blue-200 mt-1 space-y-1">
                    <li>• Immediate effects</li>
                    <li>• Relatively quick</li>
                    <li>• Politically popular</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-blue-900 dark:text-blue-100">✗ Challenges</p>
                  <ul className="text-xs text-blue-800 dark:text-blue-200 mt-1 space-y-1">
                    <li>• Doesn't solve core issue</li>
                    <li>• Temporary effect</li>
                    <li>• Ecological consequences</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-2xl">🔄</span> Integrated Approach
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="font-semibold text-orange-700 dark:text-orange-300">Projections</div>
                <p className="text-xs text-muted-foreground">Rapid initial gains, sustainable long-term recovery</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-950/30 rounded-lg p-4 space-y-2 text-sm border border-orange-200 dark:border-orange-800">
                <div>
                  <p className="font-semibold text-orange-900 dark:text-orange-100">✓ Strengths</p>
                  <ul className="text-xs text-orange-800 dark:text-orange-200 mt-1 space-y-1">
                    <li>• Addresses both factors</li>
                    <li>• Best chance of success</li>
                    <li>• Restores ecological balance</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-orange-900 dark:text-orange-100">✗ Challenges</p>
                  <ul className="text-xs text-orange-800 dark:text-orange-200 mt-1 space-y-1">
                    <li>• Complex coordination</li>
                    <li>• Higher overall cost</li>
                    <li>• Requires consensus</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key insights */}
        <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-2 border-emerald-200 dark:border-emerald-800">
          <CardHeader>
            <CardTitle className="text-lg">💡 Key Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white/50 dark:bg-slate-900/50 rounded-lg p-4">
                <p className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">
                  Predator-Prey Dynamics Matter
                </p>
                <p className="text-xs text-muted-foreground">
                  Understanding how wolves and caribou naturally oscillate helps us design effective management
                  strategies
                </p>
              </div>
              <div className="bg-white/50 dark:bg-slate-900/50 rounded-lg p-4">
                <p className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Trophic Cascades Are Real</p>
                <p className="text-xs text-muted-foreground">
                  Changes at the top of the food chain affect entire ecosystems; removing wolves has downstream
                  consequences
                </p>
              </div>
              <div className="bg-white/50 dark:bg-slate-900/50 rounded-lg p-4">
                <p className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Both Regulations Matter</p>
                <p className="text-xs text-muted-foreground">
                  Top-down control (predators) and bottom-up effects (habitat/resources) must be addressed together
                </p>
              </div>
              <div className="bg-white/50 dark:bg-slate-900/50 rounded-lg p-4">
                <p className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Balance Is the Goal</p>
                <p className="text-xs text-muted-foreground">
                  Ecological success comes from restoring natural balance, not eliminating predators or prey
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to action */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/30">
          <CardContent className="pt-8">
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-bold">The Path Forward</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Protecting British Columbia's woodland caribou requires moving beyond single-solution approaches. By
                combining strategic predator management with landscape-scale habitat protection and restoration, we can
                restore ecological balance and ensure these magnificent animals thrive for generations to come.
              </p>
              <div className="pt-4 text-sm text-muted-foreground">
                <p>Learn more about conservation efforts and how you can support them.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
