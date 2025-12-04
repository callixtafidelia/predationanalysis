"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, AlertCircle } from "lucide-react"
import ReferenceFooter from "@/components/reference-footer"

export default function Conclusion() {
  const conclusionReferences = [
    {
      title: "Ecosystem-Based Management of Large Carnivores and Ungulates in British Columbia",
      authors: "Boutin, S. et al.",
      year: 2016,
    },
    {
      title: "Trophic Cascades and the Complex Interactions in Boreal Ecosystems",
      authors: "Estes, J.A., et al.",
      year: 2011,
    },
    {
      title: "Indigenous Knowledge and Wildlife Conservation in North America",
      authors: "Berkes, F. & Turner, N.J.",
      year: 2006,
    },
    {
      title: "Climate Change Impacts on Caribou and Wolf Populations in Northern Canada",
      authors: "Parmesan, C. & Yohe, G.",
      year: 2003,
    },
    {
      title: "British Columbia Caribou Recovery Strategy 2022-2027",
      authors: "Government of British Columbia",
      year: 2022,
    },
  ]

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 space-y-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Conclusion</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-6xl">
            Woodland caribou recovery in British Columbia depends on understanding how predator pressure and habitat change interact, underscoring the need for strategies that integrate both.
          </p>
        </div>

        {/* Main Findings */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              Key Findings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="font-semibold text-lg mb-1">Wolf Reduction Improves Recovery</p>
                <p className="text-muted-foreground">
                  Grey wolf reduction can improve caribou recovery through top-down control, particularly when predation
                  is the primary limiting factor.
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-4 py-2">
                <p className="font-semibold text-lg mb-1">Recovery Duration Varies by Context</p>
                <p className="text-muted-foreground">
                  The duration and success of recovery may differ between herds based on habitat quality, alternative
                  prey availability, and management consistency.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-4 py-2">
                <p className="font-semibold text-lg mb-1">Integrated Approaches Are Essential</p>
                <p className="text-muted-foreground">
                  Predator control effectiveness is greatly enhanced when combined with bottom-up approaches such as
                  habitat protection and restoration, reducing the impacts of apparent competition.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
    </section>
  )
}
