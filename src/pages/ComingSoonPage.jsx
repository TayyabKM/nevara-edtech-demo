import React from "react"
import { useSearchParams } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { Wrench } from "lucide-react"

export function ComingSoonPage() {
  const [searchParams] = useSearchParams()
  const featureName = searchParams.get("feature") || "This Feature"

  const getRoadmapText = (name) => {
    switch (name) {
      case "Mock Exams":
        return "Full board-simulated exam environment with timed papers, section navigation, auto-submit, and post-exam diagnostics. Integrated with adaptive revision plans.";
      case "My Portfolio":
        return "Lifelong digital academic profile. Transcripts, co-curricular achievements, leadership record, and a one-click university-ready PDF export.";
      case "Chatbot":
        return "AI-powered curriculum assistant available 24/7. Answers subject questions, suggests revision resources, and escalates to teachers when needed. Built on GPT-4o with RISC curriculum context.";
      case "Public Speaking Lab":
        return "Speech-to-text analysis, pronunciation scoring, filler word detection, and confidence analytics. Powered by Azure Speech API.";
      case "Billionaire Bootcamp":
        return "Internal entrepreneurship ecosystem — pitch submissions, peer evaluation, marketplace simulation, and incubation milestone tracking.";
      case "University Pathways":
        return "AI-powered university matching engine, alumni placement database, scholarship deadline alerts, and career pathway mapping.";
      default:
        return `We are actively building ${name.toLowerCase()} to enhance your EduOS experience. It will be available in an upcoming release.`;
    }
  }

  return (
    <div className="flex h-[80vh] items-center justify-center">
      <Card className="w-full max-w-md text-center shadow-md">
        <CardHeader className="pb-4">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
            <Wrench className="h-8 w-8" />
          </div>
          <CardTitle className="text-2xl font-bold">{featureName}</CardTitle>
          <div className="mt-2">
            <Badge variant="secondary" className="uppercase tracking-wider">Currently in Development</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base mb-6 text-gray-700 font-medium">
            {getRoadmapText(featureName)}
          </CardDescription>
          <Button className="w-full">Request Early Access</Button>
        </CardContent>
      </Card>
    </div>
  )
}
