import React from "react"
import { Link } from "react-router-dom"
import { schoolConfig } from "@/school.config"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { BookOpen, BrainCircuit, LineChart, Users, Mic, GraduationCap } from "lucide-react"

export function LandingPage() {
  const features = [
    {
      title: "Academic Learning Engine",
      description: "Personalized learning paths adapted to each student's pace and mastery level.",
      icon: BookOpen,
      comingSoon: false
    },
    {
      title: "AI Assessments",
      description: "Instant grading and detailed feedback powered by Google Gemini AI.",
      icon: BrainCircuit,
      comingSoon: false
    },
    {
      title: "Real-Time Analytics",
      description: "Actionable insights for teachers and campus heads to identify at-risk students.",
      icon: LineChart,
      comingSoon: false
    },
    {
      title: "Parent Portal",
      description: "Keep parents in the loop with real-time attendance, grades, and alerts.",
      icon: Users,
      comingSoon: false
    },
    {
      title: "Public Speaking Lab",
      description: "AI-driven speech analysis and confidence building exercises.",
      icon: Mic,
      comingSoon: true
    },
    {
      title: "University Pathways",
      description: "Predictive modeling for university admissions and career counseling.",
      icon: GraduationCap,
      comingSoon: true
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="flex items-center justify-between p-6 bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <img src={schoolConfig.logo} alt="Logo" className="h-10 w-10 rounded-md" />
          <span className="text-2xl font-bold" style={{ color: schoolConfig.primaryColor }}>
            {schoolConfig.name}
          </span>
        </div>
        <Link to="/login">
          <Button>Login to Portal</Button>
        </Link>
      </header>

      <main className="flex-1">
        <section className="py-20 px-6 text-center" style={{ backgroundColor: schoolConfig.primaryColor, color: "white" }}>
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">
            {schoolConfig.tagline}
          </h1>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Experience the future of education with EduOS. Our AI-powered platform streamlines management, enhances learning, and connects the entire school community.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/login">
              <Button size="lg" style={{ backgroundColor: schoolConfig.accentColor, color: "white" }}>
                View Demo
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Request a Meeting
            </Button>
          </div>
        </section>

        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card key={idx} className={`relative overflow-hidden ${feature.comingSoon ? 'opacity-75' : ''}`}>
                {feature.comingSoon && (
                  <div className="absolute inset-0 bg-gray-100/50 backdrop-blur-[1px] z-10 flex items-center justify-center">
                    <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      Coming Soon
                    </span>
                  </div>
                )}
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4" style={{ backgroundColor: `${schoolConfig.primaryColor}15`, color: schoolConfig.primaryColor }}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-8 text-center bg-gray-900 text-gray-400">
        <p>&copy; {new Date().getFullYear()} {schoolConfig.name}. Powered by EduOS.</p>
      </footer>
    </div>
  )
}
