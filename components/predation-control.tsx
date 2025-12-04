"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertTriangle } from "lucide-react"

export default function PredationControl() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 space-y-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Predation Control to Recover Woodland Caribou
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            The provincial government implemented wolf predator-reduction programs beginning in 2015 to quickly reduce
            predation pressure on vulnerable herds.
          </p>
        </div>

        {/* Effectiveness Card */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-primary" />
              Proven Effectiveness
            </CardTitle>
            <CardDescription>Short-term vs. Alternative Management Strategies</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Government assessments indicate that{" "}
              <strong>
                wolf reduction has been the most effective short-term tool to stabilize or reverse caribou population
                declines
              </strong>{" "}
              compared with other single-management strategies such as:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Maternal penning alone</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Recreational closures alone</span>
              </li>
            </ul>
            <p className="text-muted-foreground italic pt-2">
              However, predation control only addresses one side of the ecological equation.
            </p>
          </CardContent>
        </Card>

        {/* How It Works */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-secondary/20">
            <CardHeader>
              <CardTitle className="text-lg">Wolf Reduction Programs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                These programs work by reducing top-down predation pressure on caribou herds, allowing:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Increased adult female survival rates</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Improved calf recruitment (newborn survival)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Higher overall population growth rates</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="text-lg">Research Findings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">Recent synthesis studies confirm that:</p>
              <div className="bg-accent/10 p-3 rounded border border-accent/20">
                <p className="text-sm font-semibold text-accent mb-2">
                  "Wolf reduction can increase caribou numbers even when applied as a standalone action, particularly
                  when predation is the key limiting factor."
                </p>
              </div>
              <p className="text-xs text-muted-foreground">
                This demonstrates the power of top-down regulation in specific ecological contexts.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Important Caveat */}
        <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900/40 rounded-lg p-6 space-y-4">
          <div className="flex gap-3">
            <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-1" />
            <div className="space-y-3">
              <h3 className="font-bold text-yellow-900 dark:text-yellow-100">The Incomplete Solution</h3>
              <p className="text-sm text-yellow-800 dark:text-yellow-200 leading-relaxed">
                While predation control addresses top-down pressure, it only solves half the problem. To understand why
                some herds recover while others do not, we must examine both top-down AND bottom-up regulatory forces.
                Long-term caribou recovery requires comprehensive strategies that combine predator management with
                habitat protection and restoration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
