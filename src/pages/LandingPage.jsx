import React from "react"
import { Link } from "react-router-dom"
import { schoolConfig } from "@/school.config"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { 
  BookOpen, BrainCircuit, LineChart, Users, Mic, GraduationCap,
  AlertTriangle, BarChart3, Brain, Building2, CheckCircle, 
  MessageSquare, Rocket, Shield, TrendingUp, XCircle
} from "lucide-react"

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="flex items-center justify-between p-6 bg-white shadow-sm border-b border-gray-100">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold" style={{ color: schoolConfig.primaryColor }}>
            {schoolConfig.name}
          </span>
        </div>
        <Link to="/login">
          <Button>Login to Portal</Button>
        </Link>
      </header>

      <main className="flex-1">
        
        {/* Section 1 — Hero */}
        <section className="bg-[#006B6B] py-24 px-6 text-center w-full">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            
            <div className="bg-white/20 text-white rounded-full px-4 py-1.5 text-sm mb-8 font-medium">
              Now in Active Development — Exclusive to Roots International
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
              <span className="block text-white">One Platform.</span>
              <span className="block text-[#A8D5D1] mt-2">Every Student. Every Campus. Every Decision.</span>
            </h1>
            
            <p className="text-lg text-white/80 max-w-3xl mx-auto mt-6 leading-relaxed">
              EduOS is a proprietary AI-powered educational ecosystem built exclusively for Roots International Schools & Colleges — centralizing academic delivery, student analytics, parent communication, and institutional governance across all 20 campuses.
            </p>

            <div className="flex justify-center gap-4 flex-wrap mt-10 text-center">
              <Link to="/login">
                <Button size="lg" className="bg-white text-[#006B6B] hover:bg-gray-100 font-bold border-0 px-8">
                  Explore the Demo →
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white/10 px-8">
                Watch How It Works
              </Button>
            </div>

            <div className="flex justify-center gap-8 md:gap-12 flex-wrap mt-16 w-full max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-2">
                <GraduationCap className="h-6 w-6 text-white mb-1 opacity-90" />
                <span className="text-white font-bold text-lg leading-none">20,000</span>
                <span className="text-white/70 text-xs uppercase tracking-wider font-semibold">Students</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Building2 className="h-6 w-6 text-white mb-1 opacity-90" />
                <span className="text-white font-bold text-lg leading-none">20</span>
                <span className="text-white/70 text-xs uppercase tracking-wider font-semibold">Campuses</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Brain className="h-6 w-6 text-white mb-1 opacity-90" />
                <span className="text-white font-bold text-lg leading-none">AI-Powered</span>
                <span className="text-white/70 text-xs uppercase tracking-wider font-semibold">Infrastructure</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Users className="h-6 w-6 text-white mb-1 opacity-90" />
                <span className="text-white font-bold text-lg leading-none">5</span>
                <span className="text-white/70 text-xs uppercase tracking-wider font-semibold">Role Portals</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — The Problem We're Solving */}
        <section className="bg-white py-20 px-6 w-full">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#006B6B]">WHY EDUOS EXISTS</span>
              <h2 className="text-3xl font-bold text-gray-900 max-w-3xl mx-auto mt-4">
                The challenges Roots faces today — that EduOS solves tomorrow
              </h2>
              <p className="text-gray-500 text-center mt-5 max-w-2xl mx-auto leading-relaxed">
                These are not hypothetical problems. They are documented institutional challenges that EduOS is being built to eliminate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                { icon: "❌", title: "No Cross-Campus Academic Visibility", text: "Campus heads and senior leadership have no single view of academic performance across all 20 campuses. Decisions are made on delayed, fragmented reports.", solution: "Executive Intelligence Dashboard" },
                { icon: "❌", title: "Manual Assessment & Marking", text: "Teachers spend hours marking papers manually — inconsistently and without standardized feedback. There is no way to scale assessment quality across 890 teachers.", solution: "AI Marking Engine" },
                { icon: "❌", title: "Parents Are Left in the Dark", text: "Parents receive report cards once per term. Between terms, there is no real-time visibility into attendance, academic risk, or teacher feedback.", solution: "Parent Portal with Live Alerts" },
                { icon: "❌", title: "No Early Warning System for At-Risk Students", text: "Academic failure is only visible after it happens. There is no system to identify students heading toward failure weeks before it occurs.", solution: "Predictive Risk Indicators" },
                { icon: "❌", title: "Exam Board Compliance Managed Manually", text: "O-Level, A-Level, Matric, and IGCSE deadlines, frameworks, and regulatory updates are tracked manually — creating compliance risk across 20 campuses.", solution: "Board Repository & Compliance Tracker" },
                { icon: "❌", title: "No Platform for Student Development", text: "Entrepreneurship, public speaking, university pathways, and alumni tracking have no digital home. These critical outcomes are invisible and unmeasurable.", solution: "Billionaire Bootcamp + Public Speaking Lab" }
              ].map((prob, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-2">{prob.icon}</div>
                  <h3 className="font-bold text-gray-900 text-lg mt-3 leading-snug">{prob.title}</h3>
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed flex-grow">{prob.text}</p>
                  <div className="mt-5 inline-block self-start bg-teal-50 text-[#006B6B] text-xs font-semibold px-3 py-1.5 rounded-full border border-teal-200">
                    {prob.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — The 5 Portals */}
        <section className="bg-gray-50 py-20 px-6 w-full border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#006B6B]">WHO IT'S FOR</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-4">
                A dedicated experience for every role in your institution
              </h2>
              <p className="text-gray-500 text-center mt-5 max-w-3xl mx-auto leading-relaxed">
                EduOS doesn't show everyone the same screen. Each role gets a portal built specifically for their responsibilities — with the data and tools they actually need.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
              {[
                { emoji: "🎓", role: "Student Portal", bullets: ["Subject mastery tracking", "AI-marked assessments with feedback", "Personalized learning recommendations"] },
                { emoji: "👨‍🏫", role: "Teacher Portal", bullets: ["AI Marking Tool — mark in 4 seconds", "Class performance analytics", "At-risk student identification"] },
                { emoji: "🏫", role: "Campus Head Portal", bullets: ["Campus performance heatmap", "Teacher comparison dashboard", "Real-time risk monitoring"] },
                { emoji: "👨‍👩‍👧", role: "Parent Portal", bullets: ["Live attendance and grade tracking", "Instant alerts for academic risk", "Direct communication with teachers"] },
                { emoji: "🧑‍💼", role: "Admin / Executive", bullets: ["Network-wide KPI dashboard", "AI-generated daily insights", "Growth, financial and admissions reports"] }
              ].map((role, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-[#006B6B] hover:shadow-md transition-all flex flex-col h-full">
                  <div className="text-4xl mb-4">{role.emoji}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{role.role}</h3>
                  <ul className="text-sm text-gray-500 text-left space-y-2.5 flex-grow">
                    {role.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 bg-[#006B6B] rounded-full shrink-0"></span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/login" className="text-sm font-semibold text-[#006B6B] mt-6 block hover:underline">
                    Enter Portal →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — AI Features Showcase */}
        <section className="bg-white py-20 px-6 w-full">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#006B6B]">THE AI LAYER</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-4 max-w-2xl mx-auto leading-tight">
                Artificial Intelligence built into every corner of the platform
              </h2>
              <p className="text-gray-500 text-center mt-5 max-w-3xl mx-auto leading-relaxed">
                EduOS doesn't bolt AI on as a feature. It is the foundation — from how assessments are marked to how risks are predicted to how students get academic support at 2AM.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {[
                { icon: "🤖", title: "AI Assessment Marking Engine", desc: "Teachers submit a question and student answer. Gemini AI returns a score, grade, detailed feedback, strengths, areas to improve, and suggested revision resources — in under 5 seconds. Rubric-based. Board-aligned. Consistent across all 890 teachers.", badge: "Live in this demo — try it in the Teacher Portal", live: true },
                { icon: "💬", title: "AI Student Chatbot", desc: "Students get curriculum-aware academic support 24/7. The chatbot understands RISC's subjects, grade levels, and board requirements. It answers questions, explains concepts, and escalates to teachers when needed — without increasing teacher workload.", badge: "Live in this demo — try it in the Student Portal", live: true },
                { icon: "⚠️", title: "Predictive Risk Detection", desc: "The platform monitors attendance patterns, assessment scores, submission rates, and engagement signals — and flags students heading toward academic failure weeks before it happens. Campus heads get automated alerts with recommended interventions.", badge: "Demonstrated in Campus & Executive portals", live: false },
                { icon: "📊", title: "AI Executive Intelligence", desc: "Every morning, the Executive Dashboard generates fresh AI insights across all 20 campuses — identifying performance anomalies, flagging financial risks, and recommending specific actions. No more waiting for monthly reports.", badge: "Live in this demo — see it in the Admin Portal", live: true }
              ].map((ai, i) => (
                <div key={i} className="bg-white border text-left border-gray-100 border-l-4 border-l-[#006B6B] shadow-sm rounded-xl p-7 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl bg-gray-50 p-2 rounded-lg">{ai.icon}</span>
                    <h3 className="font-bold text-gray-900 text-xl">{ai.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                    {ai.desc}
                  </p>
                  <div className="mt-5">
                    {ai.live ? (
                      <span className="bg-green-50 text-green-700 border border-green-200 text-xs font-semibold px-3 py-1.5 rounded-full inline-block">
                        {ai.badge}
                      </span>
                    ) : (
                      <span className="bg-teal-50 text-teal-700 border border-teal-200 text-xs font-semibold px-3 py-1.5 rounded-full inline-block">
                        {ai.badge}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — Module Overview */}
        <section className="bg-[#E6F4F4] py-20 px-6 w-full">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#006B6B]">THE FULL PLATFORM</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-4">
                8 integrated modules. One unified ecosystem.
              </h2>
              <p className="text-gray-600 text-center mt-5 max-w-3xl mx-auto leading-relaxed">
                Every module is built to work together — data flows from assessments into analytics, from analytics into risk alerts, from risk alerts into parent notifications. Nothing is siloed.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
              {[
                { icon: "📚", title: "Academic Learning Engine", desc: "Gamified curriculum, adaptive pathways, mastery tracking", live: true },
                { icon: "🤖", title: "AI Assessment System", desc: "Instant marking, rubric scoring, board-aligned feedback", live: true },
                { icon: "📊", title: "Analytics & Governance", desc: "Student, campus, and executive performance dashboards", live: true },
                { icon: "👨‍👩‍👧", title: "Parent Portal", desc: "Real-time attendance, grades, alerts, and communication", live: true },
                { icon: "🎤", title: "Public Speaking Lab", desc: "Speech-to-text, pronunciation scoring, confidence analytics", live: false },
                { icon: "🚀", title: "Billionaire Bootcamp", desc: "Entrepreneurship marketplace, pitch submissions, incubation", live: false },
                { icon: "🎓", title: "University Pathways", desc: "AI matching engine, alumni database, scholarship alerts", live: false },
                { icon: "💬", title: "AI Student Chatbot", desc: "24/7 curriculum support, teacher escalation, GPT-4o powered", live: true }
              ].map((mod, i) => (
                <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm flex flex-col h-full border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all">
                  <div className="text-4xl mb-4 bg-gray-50 h-16 w-16 mx-auto rounded-full flex items-center justify-center">{mod.icon}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-3 px-2">{mod.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed flex-grow mb-5 px-2">{mod.desc}</p>
                  <div className="mt-auto">
                    {mod.live ? (
                      <span className="bg-green-50 text-green-700 border border-green-200 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        Live
                      </span>
                    ) : (
                      <span className="bg-gray-100 text-gray-500 border border-gray-200 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 — Final CTA */}
        <section className="bg-[#004D40] py-24 px-6 text-center w-full">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-5">
              Ready to see EduOS in action?
            </h2>
            <p className="text-white/70 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
              Every portal is live. Every AI feature is working. Log in as any role and experience what EduOS will do for Roots International Schools & Colleges.
            </p>

            <div className="flex justify-center gap-4 flex-wrap mt-12">
              <Link to="/login">
                <Button size="lg" className="bg-white text-[#006B6B] hover:bg-gray-100 font-bold border-0 px-8 shadow-lg">
                  Login as Student
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" className="bg-white text-[#006B6B] hover:bg-gray-100 font-bold border-0 px-8 shadow-lg">
                  Login as Teacher
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" className="bg-white text-[#006B6B] hover:bg-gray-100 font-bold border-0 px-8 shadow-lg">
                  Login as Admin
                </Button>
              </Link>
            </div>

            <p className="text-white/50 text-sm mt-8 tracking-wide">
              Also available: <span className="text-white/70 font-medium">Campus Head Portal</span> · <span className="text-white/70 font-medium">Parent Portal</span>
            </p>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center bg-gray-900 border-t border-gray-800 text-gray-400">
        <p className="text-sm">&copy; {new Date().getFullYear()} {schoolConfig.name}. Powered by EduOS.</p>
      </footer>
    </div>
  )
}
