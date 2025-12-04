"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AlertCircle, TrendingDown, Zap, CheckCircle, AlertTriangle, ChevronLeft, ChevronRight } from "lucide-react"
import ReferenceFooter from "@/components/reference-footer"

export default function CaribouAndPredation() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    {
      url: "/caribou.jpg",
      caption: "Adult woodland caribou (Rangifer tarandus caribou) in a subalpine winter habitat (Source: https://yukonwildlife.ca/learn/yukon-wildlife/woodland-caribou/)",
    },
    {
      url: "/graywolf.jpeg",
      caption: "Gray wolf (Canis lupus) in winter habitat (Source: https://www.ndow.org/species/gray-wolf/) ",
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const caribouReferences = [
    {
      title: "B.C. Ministry of Water, Land and Resource Stewardship. (2025, November). Predator reduction to support Caribou Recovery: 2024-25 summary. https://www2.gov.bc.ca/assets/gov/environment/plants-animals-and-ecosystems/wildlife-wildlife-habitat/caribou/predator_reduction_to_support_caribou_recovery_2024-25.pdf"
    },
    {
      title: "Government of British Columbia. (2025, November 27). Caribou in British Columbia. https://www2.gov.bc.ca/gov/content/environment/plants-animals-ecosystems/wildlife/wildlife-conservation/caribou",
    },
    {
      title: "Government of Canada. (2025, December 1). Woodland caribou – boreal population. https://natural-resources.canada.ca/forest-forestry/sustainable-forest-management/woodland-caribou-boreal-population",
    },
    {
      title: "Serrouya, R., Seip, D. R., Hervieux, D., McLellan, B. N., McNay, R. S., Steenweg, R., Heard, D. C., Hebblewhite, M., Gillingham, M., & Boutin, S. (2019). Saving endangered species using adaptive management. Proceedings of the National Academy of Sciences, 116(13), 6181–6186. https://doi.org/10.1073/pnas.1816923116",
    },
  ]

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 space-y-12">
        {/* Title */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
           The Decline of Woodland Caribou
          </h2>

          <div className="space-y-4">
            <div className="relative w-full rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800">
              <img
                src={images[currentImageIndex].url || "/placeholder.svg"}
                alt={images[currentImageIndex].caption}
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
            <p className="text-center text-muted-foreground italic text-sm">{images[currentImageIndex].caption}</p>

            {/* Image counter and dots */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex gap-2">
                {images.map((_, index) => (
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
                {currentImageIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>

        {/* Caribou Introduction Content */}
        <div className="space-y-6">
          <div className="flex justify-center">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-6xl">
              Yep, you saw that right! The population of Woodland caribou (<em>Rangifer tarandus caribou</em>) has decrease sharply over the past several decades,
              from around 40,000 animals to about 17,000 (Government of British Columbia, 2025). This is especially concerning because woodland caribou 
              are a threatened species (Government of Canada, 2025) with significant cultural and ecological value in British Columbia. 
              Their decline has been driven largely by habitat disturbance and predation pressure, particularly from grey wolves (<em>Canis lupus</em>).
            </p>
            </div>
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
                decline from 40,000 to 17,000 caribou over several decades
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

          {/* Predation Control Section */}
           <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent mb-6">
  <CardHeader className="pb-1">
    <CardTitle className="flex items-center gap-3 text-xl">
      <CheckCircle className="h-6 w-6 text-primary" />
      Predation Control As The Recovery Tool
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-0.5">
    <p className="text-muted-foreground">
      Grey wolves are the primary predators of caribou, and increases in wolf abundance 
      can contribute to major declines in caribou populations 
      (B.C. Ministry of Water, Land and Resource Stewardship, 2025). 
      Because of this, wolf-reduction programs were implemented to support recovery efforts. 
      Among the available management tools, wolf reduction has been reported as one of the 
      most effective short-term actions to help reverse caribou declines (Serrouya et al., 2019).
    </p>
  </CardContent>
</Card>
               {/* Reference Footer */}
        <ReferenceFooter references={caribouReferences} />
      </div>
    </section>
  )
}
