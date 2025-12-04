"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from "lucide-react"
import ReferenceFooter from "@/components/reference-footer"

export default function RegulationTypes() {
  const regulationReferences = [
    {
      title: "Lamb, C. T., Williams, S., Boutin, S., Bridger, M., Cichowski, D., Cornhill, K., DeMars, C., Dickie, M., Ernst, B., Ford, A., Gillingham, M. P., Greene, L., Heard, D. C., Hebblewhite, M., Hervieux, D., Klaczek, M., McLellan, B. N., McNay, R. S., Neufeld, L., … Serrouya, R. (2024). Effectiveness of population‐based recovery actions for threatened Southern Mountain Caribou. Ecological Applications, 34(4). https://doi.org/10.1002/eap.2965",
    },
    {
      title: "Maltman, J. C., Coops, N. C., Rickbeil, G. J., Hermosilla, T., & Burton, A. C. (2024). Quantifying forest disturbance regimes within Caribou (Rangifer tarandus) range in British Columbia. Scientific Reports, 14(1). https://doi.org/10.1038/s41598-024-56943-0 ",
        },
    {
      title: "Minister of Forests, Lands, Natural Resource Operations and Rural Development. (2018, April 5). Provincial Caribou Recovery Program Discussion Paper. https://www.cclmportal.ca/sites/default/files/2022-12/BC_CaribouRecoveryProgramDiscussionPaper_2018-04-05.pdf ",
    },
    {
      title: "Wildlife Conservation Society Canada. (2014, December 5). Defining Habitat Restoration for Boreal Caribou in The Context of National Recovery: A Discussion Paper. https://www.registrelep-sararegistry.gc.ca/virtual_sara/files/Boreal%20caribou%20habitat%20restoration%20discussion%20paper_dec2014.pdf",
    },
    ]

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 space-y-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Top-Down vs. Bottom-Up Regulation in Caribou Recovery
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-6xl">
            Understanding the mechanisms that regulate caribou populations is essential for developing effective
            recovery strategies.
          </p>
        </div>

        {/* Two Column Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top-Down Regulation */}
          <Card className="border-primary/30 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent py-4">
              <div className="flex items-center gap-2 mb-2">
                <ArrowDown className="h-6 w-6 text-primary" />
                <CardTitle>Top-Down Regulation</CardTitle>
              </div>
              <CardDescription>Predators Control Prey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 py-1">
              <div className="bg-primary/5 p-4 rounded border border-primary/20">
                <p className="font-semibold text-sm mb-2">How It Works</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Top-down control occurs when a predator regulates the abundance of its prey. 
                   </p>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="font-semibold text-sm mb-1">High Wolf Density</p>
                  <p className="text-sm text-muted-foreground">
                    In this case, high densities of grey wolves exert strong pressure on caribou populations and can lead to significant declines.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-sm mb-1">Wolf Reduction Programs</p>
                  <p className="text-sm text-muted-foreground">
                    Wolf-reduction programs across multiple herds aim to relieve this pressure and increase caribou numbers each year. 
                  </p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/40 p-3 rounded">
                <p className="text-xs text-green-800 dark:text-green-200">
                  Recent research by Lamb et al., (2024) supports this, 
                  showing that wolf reduction can increase caribou populations even when applied as a standalone action.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Bottom-Up Regulation */}
          <Card className="border-secondary/30 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-transparent py-4">
              <div className="flex items-center gap-2 mb-2">
                <ArrowUp className="h-6 w-6 text-secondary" />
                <CardTitle>Bottom-Up Regulation</CardTitle>
              </div>
              <CardDescription>Resources Control Populations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 py-1">
              <div className="bg-secondary/5 p-4 rounded border border-secondary/20">
                <p className="font-semibold text-sm mb-2">How It Works</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bottom-up control comes from forces at lower trophic levels, such as food availability and habitat quality.
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-sm mb-1">Critical Habitats</p>
                  <p className="text-sm text-muted-foreground">
                     Woodland caribou depend heavily on old-growth forests and alpine areas, where lichens, their main winter food source are found (Minister of Forests, Lands, Natural Resource Operations and Rural Development, 2018).
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-sm mb-1">Habitat Disturbance</p>
                  <p className="text-sm text-muted-foreground">
                   A study from Maltman et al., (2014) showed that disturbances such as wildfire and forest harvesting significantly affect caribou populations.
                  </p>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 p-3 rounded">
                <p className="text-xs text-muted-foreground">
                 Southern Mountain caribou experienced a 22.8% disturbed area during the 1985–2019 period (Maltman et al., 2024), which aligns with their steep population declines.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* The Apparent Competition Problem */}
        <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
          <CardHeader>
            <CardTitle className="text-lg">The Combination of Recovery Strategies</CardTitle>
            <CardDescription>How Bottom-Up and Top-Down Pressures Work Together</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3 text-sm">
              <p className="leading-relaxed">
                This highlights the need for long-term habitat solutions: habitat protection and restoration (Wildlife Conservation Society Canada, 2014), 
                working alongside wolf reduction as a short-term strategy, are essential for successful caribou conservation.
              </p>

              <div className="bg-accent/10 p-4 rounded border border-accent/20 space-y-2">
                <div className="flex gap-3">
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex gap-3 items-start">
                <span className="font-bold text-primary text-lg">✓</span>
                <span className="text-sm">
                  <strong>Habitat Protection:</strong> Preserve old-growth forests and alpine areas
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="font-bold text-primary text-lg">✓</span>
                <span className="text-sm">
                  <strong>Habitat Restoration:</strong> Restore disturbed areas and support lichen recovery
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="font-bold text-primary text-lg">✓</span>
                <span className="text-sm">
                  <strong>Linear Feature Reduction:</strong> Deactivate roads and remove barriers
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="font-bold text-primary text-lg">✓</span>
                <span className="text-sm">
                  <strong>Predator Management:</strong> Strategic wolf reduction when necessary
                </span>
              </li>
            </ul>
                </div>
              </div>
             </div>
          </CardContent>
        </Card>
        <ReferenceFooter references={regulationReferences} />
      </div>
    </section>
  )
}
