"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, AlertCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ReferenceFooter from "@/components/reference-footer"

export default function CaseStudy() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const caseStudyImages = [
    {
      url: "/klinseza.jpg",
      caption: "Linear corridors within the Klinse-Za landscape, region of northeastern British Columbia (Source: https://thenarwhal.ca/bc-endangered-baby-caribou/)",
    },
    {
      url: "/itchailgachuz.png",
      caption: "Landscape view of the Itcha–Ilgachuz Provincial Park, British Columbia (Source: https://chloevanloon.com/2022/09/01/itchy-in-the-itchas-inatting-in-the-itcha-ilgachuz-provincial-park/)",
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % caseStudyImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + caseStudyImages.length) % caseStudyImages.length)
  }

  const caseStudyReferences = [
    {
      title: "BC Ministry of Forests, Lands, Natural Resource Operations and Rural Development. (2021, June). Predator Management to Support Caribou Recovery: 2020-2021 Summary. https://www2.gov.bc.ca/assets/gov/environment/plants-animals-and-ecosystems/wildlife-wildlife-habitat/caribou/predator_management_to_support_caribou_recovery.pdf",
       },
    {
      title: "BC Ministry of Land, Water and Resource Stewardship. (2022, May). Predator Reduction to Support Caribou Recovery: 2021-2022 Summary. https://www2.gov.bc.ca/assets/gov/environment/plants-animals-and-ecosystems/wildlife-wildlife-habitat/caribou/predator_reduction_to_support_caribou_recovery_2021-2022.pdf",
    },
    {
      title: "B.C. Ministry of Water, Land and Resource Stewardship. (2024, June). Predator Reduction to Support Caribou Recovery: 2023-2024 Summary. https://www2.gov.bc.ca/assets/gov/environment/plants-animals-and-ecosystems/wildlife-wildlife-habitat/caribou/predator_reduction_to_support_caribou_recovery_2023-2024.pdf",
    },
    {
      title: "Wildlife Science Centre. (2025). Supporting klinse-za caribou recovery efforts. https://wildlifescience.ca/projects/recovery/supporting-klinse-za-caribou-recovery-efforts/",
    },
     ]

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 space-y-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            Effectiveness of Combined Approaches in Two BC Herds
          </h2>

          <div className="space-y-4 mb-8">
            <div className="relative w-full rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800">
              <img
                src={caseStudyImages[currentImageIndex].url || "/placeholder.svg"}
                alt={caseStudyImages[currentImageIndex].caption}
                className="w-full h-96 object-cover"
              />
              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Caption */}
            <p className="text-center text-muted-foreground italic text-sm">
              {caseStudyImages[currentImageIndex].caption}
            </p>

            {/* Image counter and dots */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex gap-2">
                {caseStudyImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImageIndex ? "bg-primary w-6" : "bg-gray-300 dark:bg-gray-600 w-2"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {currentImageIndex + 1} / {caseStudyImages.length}
              </span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-6xl">
            This comparison reveals how the two herds showed different outcomes, even though wolf reduction had been implemented in both.
          </p>
        </div>

        <Tabs defaultValue="klinse-za" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="klinse-za">Klinse-Za Herd</TabsTrigger>
            <TabsTrigger value="itcha">Itcha-Ilgachuz Herd</TabsTrigger>
          </TabsList>

          {/* Klinse-Za Success Story */}
          <TabsContent value="klinse-za" className="space-y-6 mt-6">
            <Card className="border-green-200 dark:border-green-900/40 bg-gradient-to-br from-green-50/50 dark:from-green-950/20 to-transparent overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">Klinse-Za Herd</CardTitle>
                    <CardDescription className="text-base">
                      The Klinse-Za herd in the South Peace has undergone wolf-reduction efforts since 2015, 
                      in which recent report (B.C. Ministry of Water, Land and Resource Stewardship, 2024) shows high calf recruitment of 21%, 93% adult female survival, and an estimated 14% annual population growth rate.
                    </CardDescription>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400 flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-slate-900/50 p-4 rounded-lg border border-green-200/50 dark:border-green-900/20">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">
                      Calf Recruitment
                    </p>
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400">48</p>
                    <p className="text-xs text-muted-foreground">calves per 100 cows (high)</p>
                  </div>

                  <div className="bg-white dark:bg-slate-900/50 p-4 rounded-lg border border-green-200/50 dark:border-green-900/20">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">
                      Female Survival
                    </p>
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400">93%</p>
                    <p className="text-xs text-muted-foreground">adult female survival rate</p>
                  </div>

                  <div className="bg-white dark:bg-slate-900/50 p-4 rounded-lg border border-green-200/50 dark:border-green-900/20">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">
                      Annual Growth
                    </p>
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400">~14%</p>
                    <p className="text-xs text-muted-foreground">annual population growth</p>
                  </div>
                </div>

                {/* Population Recovery */}
                <div className="bg-green-100/30 dark:bg-green-950/30 p-4 rounded-lg border border-green-200/50 dark:border-green-900/40">
                  <p className="font-semibold text-green-900 dark:text-green-100 mb-2">Remarkable Recovery</p>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Habitat restoration, Indigenous-led maternal penning, and active habitat management have strengthened long-term resilience. 
                    As a result, the population has increased more than three-fold, from 38 animals in 2013 to 130 in 2023 (Wildlife Science Centre, 2025).
                    </p>
                </div>
                </CardContent>
            </Card>
          </TabsContent>

          {/* Itcha-Ilgachuz Limited Response */}
          <TabsContent value="itcha" className="space-y-6 mt-6">
            <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-transparent overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">Itcha-Ilgachuz Herd</CardTitle>
                    <CardDescription className="text-base">
                      The Itcha-Ilgachuz herd began wolf-reduction measures in 2019 (B.C. Ministry of Water, Land and Resource Stewardship, 2024), but recovery has been slower. 
                      Winter conditions in 2020–2021 made wolf tracking difficult (BC Ministry of Forests, Lands, Natural Resource Operations and Rural Development, 2021) resulting in lower reductions and low calf recruitment (10.5% in 2021–2022) (BC Ministry of Land, Water and Resource Stewardship, 2022).
                    </CardDescription>
                  </div>
                  <TrendingDown className="h-8 w-8 text-accent flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-900/50 p-4 rounded-lg border border-accent-200/50 dark:border-accent-900/20">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">
                      2021-2022 
                    </p>
                    <p className="text-3xl font-bold text-accent-600 dark:text-accent-400">10.5%</p>
                    <p className="text-xs text-muted-foreground">calf recruitment (low)</p>
                  </div>

                  <div className="bg-white dark:bg-slate-900/50 p-4 rounded-lg border border-accent-200/50 dark:border-accent-900/20">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">
                      March 2023 
                    </p>
                    <p className="text-3xl font-bold text-black-600 dark:text-black-400">24.2%</p>
                    <p className="text-xs text-muted-foreground">calf recruitment (improving)</p>
                  </div>
                </div>

                
                {/* Positive Trend */}
                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200/50 dark:border-green-900/40 p-4 rounded-lg">
                  <p className="font-semibold text-green-900 dark:text-green-100 mb-2">Positive Developments</p>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    The calf recruitment improved in March 2023, reaching 24.2%, the highest recorded since 1980 (B.C. Ministry of Water, Land and Resource Stewardship, 2024). 
                    Recovery in this herd is expected to continue, but likely at a slower pace compared to Klinse-Za.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Why Outcomes Differ Between Herds */}
<Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
  <CardHeader>
    <CardTitle className="text-2xl">Why the outcomes differ between herds?</CardTitle>
  </CardHeader>

  <CardContent className="space-y-2">
    <p className="text-muted-foreground leading-relaxed">
      Comparing Klinse-Za and Itcha-Ilgachuz reveals the patterns where predator control is paired with habitat restoration, Indigenous engagement, and long-term conservation strategy (Klinse-Za), 
      <strong className="text-foreground"> population increases and stable recruitment occur</strong> . Where predator control occurs without simultaneous habitat protection or in a highly disturbed landscape (Itcha-Ilgachuz), recovery <strong className="text-foreground">remains unstable or slow</strong>.
    </p>
     <p className="text-muted-foreground leading-relaxed">
      This highlights that while wolf reduction can improve caribou recovery through <strong className="text-foreground">top-down control</strong>, 
      the timeline of recovery differs between herds depending on habitat quality, landscape disturbance, 
      and additional management actions. Its effectiveness is greatly enhanced when combined with 
      <strong className="text-foreground"> bottom-up approaches</strong> such as habitat protection and restoration.
    </p>
  </CardContent>
</Card>


        <ReferenceFooter references={caseStudyReferences} />
      </div>
    </section>
  )
}
