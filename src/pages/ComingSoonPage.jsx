import React from "react"
import { useSearchParams } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { Wrench } from "lucide-react"

export function ComingSoonPage() {
  const [searchParams] = useSearchParams()
  const featureName = searchParams.get("feature") || "This Feature"

  return (
    <div className="flex h-[80vh] items-center justify-center">
      <Card className="w-full max-w-md text-center shadow-md">
        <CardHeader className="pb-4">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
            <Wrench className="h-8 w-8" />
          </div>
          <CardTitle className="text-2xl font-bold">{featureName}</CardTitle>
          <div className="mt-2">
            <Badge variant="secondary" className="uppercase tracking-wider">In Development</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base mb-6">
            We are actively building {featureName.toLowerCase()} to enhance your EduOS experience. It will be available in an upcoming release.
          </CardDescription>
          <Button className="w-full">Request Early Access</Button>
        </CardContent>
      </Card>
    </div>
  )
}
