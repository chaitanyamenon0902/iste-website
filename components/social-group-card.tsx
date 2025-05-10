import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SocialGroupProps {
  group: {
    name: string
    description: string
    icon: string
  }
}

export default function SocialGroupCard({ group }: SocialGroupProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return <Users className="h-6 w-6 text-blue-600" />
      case "Heart":
        return <Heart className="h-6 w-6 text-blue-600" />
      default:
        return <Users className="h-6 w-6 text-blue-600" />
    }
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md border-blue-100">
      <CardContent className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
          {getIcon(group.icon)}
        </div>
        <h3 className="mb-2 text-xl font-bold text-blue-700">{group.name}</h3>
        <p className="text-gray-600 mb-4">{group.description}</p>
        <Button asChild variant="outline" size="sm" className="mt-2">
          <Link href={`/social/${group.name.toLowerCase().replace(/\s+/g, "-")}`}>Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
