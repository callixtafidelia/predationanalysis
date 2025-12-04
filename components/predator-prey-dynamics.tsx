"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"

const populationData = [
  { year: 2000, wolves: 300, caribou: 200 },
  { year: 2002, wolves: 280, caribou: 220 },
  { year: 2004, wolves: 250, caribou: 250 },
  { year: 2006, wolves: 200, caribou: 280 },
  { year: 2008, wolves: 150, caribou: 300 },
  { year: 2010, wolves: 180, caribou: 220 },
  { year: 2012, wolves: 220, caribou: 150 },
  { year: 2014, wolves: 350, caribou: 100 },
  { year: 2016, wolves: 400, caribou: 80 },
  { year: 2018, wolves: 480, caribou: 70 },
]

const Predator = () => {
  const [hoveredPeriod, setHoveredPeriod] = useState<string | null>(null)

  return (
    <section className="py-16 sm:py-24 px-6 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-4 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold">Predator-Prey Dynamics</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            The relationship between grey wolves and woodland caribou follows classic predator-prey oscillation
            patterns. As predator populations increase, prey populations decline; as prey becomes scarce, predators
            starve and their numbers fall, allowing prey to recover.
          </p>
        </div>

        <Tabs defaultValue="cycle" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="cycle">Population Cycle</TabsTrigger>
            <TabsTrigger value="mechanisms">Mechanisms</TabsTrigger>
            <TabsTrigger value="equilibrium">Equilibrium</TabsTrigger>
          </TabsList>

          <TabsContent value="cycle" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Wolf and Caribou Population Trends</CardTitle>
                <CardDescription>Historical population data from 2000-2018 in British Columbia</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={populationData}>
                      <defs>
                        <linearGradient id="colorWolves" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="rgba(79, 172, 254, 0.8)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="rgba(79, 172, 254, 0)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorCaribou" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="rgba(34, 197, 94, 0.8)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="rgba(34, 197, 94, 0)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                      <XAxis dataKey="year" stroke="rgba(0,0,0,0.5)" />
                      <YAxis stroke="rgba(0,0,0,0.5)" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(255,255,255,0.95)",
                          border: "1px solid rgba(0,0,0,0.1)",
                        }}
                        formatter={(value) => value}
                      />
                      <Area
                        type="monotone"
                        dataKey="wolves"
                        stroke="rgba(79, 172, 254)"
                        fillOpacity={1}
                        fill="url(#colorWolves)"
                        name="Wolves"
                      />
                      <Area
                        type="monotone"
                        dataKey="caribou"
                        stroke="rgba(34, 197, 94)"
                        fillOpacity={1}
                        fill="url(#colorCaribou)"
                        name="Caribou"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mechanisms" className="space-y-6 mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-2xl">🐺</span> Predator Dynamics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Prey Abundance ↑</h4>
                    <p className="text-sm text-muted-foreground">
                      When caribou populations are high, wolves have abundant food, leading to improved nutrition and
                      reproduction.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Wolf Population Growth ↑</h4>
                    <p className="text-sm text-muted-foreground">
                      With better nutrition, wolf packs have more pups and higher survival rates, increasing the total
                      population.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Increased Predation Pressure ↑</h4>
                    <p className="text-sm text-muted-foreground">
                      More wolves means more caribou are killed, potentially exceeding natural replacement rates.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-2xl">🦌</span> Prey Dynamics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Predation Pressure ↑</h4>
                    <p className="text-sm text-muted-foreground">
                      As wolf numbers increase, more caribou are killed, and the population begins to decline.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Population Decline ↓</h4>
                    <p className="text-sm text-muted-foreground">
                      With death rates exceeding birth rates, caribou populations fall, sometimes dramatically.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Predator Starvation ↓</h4>
                    <p className="text-sm text-muted-foreground">
                      As prey becomes scarce, wolves face starvation, reducing pack size and reproductive success.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="equilibrium" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Finding Natural Equilibrium</CardTitle>
                <CardDescription>
                  In pristine systems, predator-prey relationships naturally oscillate around an equilibrium point
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border border-primary/20">
                  <h4 className="font-semibold mb-4">The Classic Cycle</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <p className="font-semibold text-sm">High Prey Population</p>
                        <p className="text-sm text-muted-foreground">
                          Abundant food supports predator population growth
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Growing Predator Population</p>
                        <p className="text-sm text-muted-foreground">
                          Increased wolf numbers intensify predation pressure
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-white text-xs flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Declining Prey Population</p>
                        <p className="text-sm text-muted-foreground">Predation exceeds natural reproduction</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-white text-xs flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Predator Population Crash</p>
                        <p className="text-sm text-muted-foreground">
                          Food scarcity leads to predator starvation and migration
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center font-bold">
                        5
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Prey Recovery</p>
                        <p className="text-sm text-muted-foreground">
                          With reduced predation, prey populations recover...
                        </p>
                      </div>
                    </div>
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

export default Predator
