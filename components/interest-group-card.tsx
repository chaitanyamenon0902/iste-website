"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface InterestGroupProps {
  group: {
    name: string
    description: string
    imagePath: string
  }
}

export default function InterestGroupCard({ group }: InterestGroupProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Truncate description to roughly 10 words
  const words = group.description.split(" ")
  const truncatedDescription = words.slice(0, 10).join(" ")
  const shouldTruncate = words.length > 10

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg flex flex-col h-full">
      {/* Enhanced image header with gradient background */}
      {/* <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 flex items-center justify-center"> */}
        <div className="h-32 w-full relative">
          <div className="absolute inset-0 flex items-center justify-center bg-blue-900 rounded-lg shadow-inner">
            <Image
              src={`/sig-logos/${group.imagePath}.png`}
              alt={`${group.name} logo`}
              layout="fill"
              objectFit="contain"
              className="p-3"
            />
          </div>
        </div>
      {/* </div> */}
      
      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="mb-2 text-xl font-bold text-blue-700 text-center">{group.name}</h3>
        <div className="text-gray-600 flex-1">
          {isExpanded || !shouldTruncate ? group.description : <>{truncatedDescription}...</>}

          {shouldTruncate && (
            <Button
              variant="link"
              className="p-0 h-auto text-blue-600 font-medium ml-1"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
