import React, { useEffect } from "react"

const modules = [
  { number: "01", name: "Adaptive Learning Pathways", desc: "Personalization engine that adjusts what each student learns next, at what difficulty, and with what revision intensity — based on mastery scores and behavioral signals.", phase: "Phase 3", roles: "Students, Teachers", ai: "Rules Engine → AWS SageMaker" },
  { number: "02", name: "AI Student Chatbot", desc: "Curriculum-aware conversational assistant providing 24/7 academic support — real-time Q&A, concept explanations, revision suggestions, and teacher escalation.", phase: "Phase 5", roles: "Students, Teachers", ai: "OpenAI GPT-4o" },
  { number: "03", name: "AI-Marked Assessments", desc: "Automated grading for objective and subjective assessments using rubric-based scoring, with instant feedback, teacher override capability, and audit trail.", phase: "Phase 3", roles: "Students, Teachers", ai: "OpenAI GPT-4o — Rubric Pipeline" },
  { number: "04", name: "Gamified Curriculum Modules", desc: "Game-based micro-learning for junior grades — curriculum converted into levels, missions, quests, XP points, badges and streaks with a teacher monitoring console.", phase: "Phase 3", roles: "Students (Junior), Teachers", ai: "Rules-based gamification" },
  { number: "05", name: "Performance Analytics & Governance", desc: "Real-time dashboards for every level — student mastery, campus performance heatmaps, and a board-level executive cockpit with multi-campus comparisons.", phase: "Phase 4", roles: "Students, Teachers, Campus Heads, Board", ai: "Signal aggregation + Predictive ML" },
  { number: "06", name: "Billionaire Bootcamp", desc: "Internal entrepreneurship ecosystem — pitch submissions, peer and mentor evaluation, marketplace simulation, and incubation milestone tracking.", phase: "Phase 5", roles: "Students, Mentors", ai: "Portal and tracking logic" },
  { number: "07", name: "Public Speaking Laboratory", desc: "AI-driven speech platform providing pronunciation scoring, fluency analysis, filler word detection, tone analytics, and debate and presentation modules.", phase: "Phase 5", roles: "Students", ai: "Azure Cognitive Services Speech API" },
  { number: "08", name: "University & Career Pathways", desc: "Intelligent university matching engine using student profiles and alumni placement data — with scholarship notifications, deadline tracking, and career pathway mapping.", phase: "Phase 5", roles: "Students, Counselors, Alumni", ai: "Custom weighted matching algorithm" },
  { number: "09", name: "Question Bank System", desc: "Board-aligned question repository tagged by grade, subject, topic, concept and difficulty — with blueprint-based test generation, randomization and anti-cheating controls.", phase: "Phase 3", roles: "Teachers, Content Team", ai: "AWS OpenSearch" },
  { number: "10", name: "Mock Exam Simulator", desc: "Full board-exam environment with timed paper mode, section navigation, auto-submit, connectivity-resilient local auto-save, and post-exam diagnostic reports.", phase: "Phase 3", roles: "Students", ai: "Web-based simulation engine" },
  { number: "11", name: "Parent Portal", desc: "Secure portal for real-time parental visibility into academic progress, attendance, teacher feedback, and alerts — with controlled two-way communication workflows.", phase: "Phase 4", roles: "Parents", ai: "Secure web and mobile interface" },
]

export function OverviewPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-[0_1px_3px_rgb(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-[#006B6B] tracking-tight">
            Roots International Schools & Colleges
          </div>
          <div className="text-gray-500 font-medium text-sm">
            EduOS — Educational Ecosystem
          </div>
        </div>
      </header>

      <main className="flex-1 space-y-0">
        {/* Section 1 — Hero */}
        <section className="bg-[#006B6B] py-24 px-6 text-center w-full relative">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-sm text-white rounded-full px-5 py-2 text-sm mb-10 font-bold tracking-wider shadow-sm uppercase border border-white/10">
              Proprietary Platform — Roots International Education Network
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight drop-shadow-sm text-white">
              EduOS
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-[#A8D5D1] mb-8 tracking-wide">
              An AI-Powered Educational Ecosystem
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mt-4 leading-relaxed font-medium">
              A fully proprietary platform being developed for Roots International Schools & Colleges — centralizing academic delivery, student analytics, parent communication, and institutional governance across 20 campuses and 20,000 students.
            </p>

            <div className="flex justify-center gap-5 flex-wrap mt-14 w-full">
              {["11 Modules", "5 Role Portals", "20 Campuses", "20,000 Students"].map((stat, i) => (
                <div key={i} className="bg-white/10 text-white rounded-full px-6 py-2.5 text-sm font-bold tracking-wide border border-white/10 shadow-sm backdrop-blur-sm">
                  {stat}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 — Platform Screenshots */}
        <section className="bg-white py-24 px-6 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <span className="text-xs font-bold uppercase tracking-widest text-[#006B6B]">PLATFORM OVERVIEW</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-5 leading-tight tracking-tight">
                What the platform looks like
              </h2>
              <p className="text-gray-500 text-center mt-5 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
                EduOS provides a dedicated interface for every role in the institution — each built around the specific data and tools that role actually needs.
              </p>
            </div>

            <div className="space-y-32 max-w-6xl mx-auto">
              
              {/* Block 1 — Executive Dashboard */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-last lg:order-first">
                  <img src="/screenshots/hero-dashboard.png" loading="lazy" className="rounded-2xl shadow-xl border border-gray-100 w-full" alt="Executive Dashboard" />
                </div>
                <div className="flex flex-col items-start lg:pl-4">
                  <span className="text-[#006B6B] text-xs font-bold uppercase tracking-widest mb-4">
                    Admin / Executive Portal
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
                    Network-wide institutional intelligence
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    Senior leadership sees all 20 campuses in one view — academic scores, attendance rates, fee collection, at-risk student counts, admissions trends, and AI-generated insights. Campus-level drill-down shows exactly why any campus is performing the way it is.
                  </p>
                  <ul className="space-y-3 w-full">
                    {[
                      "Multi-campus KPI overview",
                      "AI-generated daily insights",
                      "Clickable campus breakdown",
                      "Growth, financial and admissions reports"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#006B6B] shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Block 2 — AI Marking */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col items-start lg:pr-4">
                  <span className="text-[#006B6B] text-xs font-bold uppercase tracking-widest mb-4">
                    Teacher Portal
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
                    AI-assisted assessment marking
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    Teachers submit a student answer and receive a scored result with detailed feedback — rubric-based scoring, specific strengths, areas to improve, and suggested revision resources. Designed to standardize marking quality across all teachers and campuses.
                  </p>
                  <ul className="space-y-3 w-full">
                    {[
                      "Rubric-based structured answer scoring",
                      "Instant detailed feedback generation",
                      "Teacher review and override capability",
                      "Results feed into student analytics"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#006B6B] shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-first lg:order-last">
                  <img src="/screenshots/ai-marking.png" loading="lazy" className="rounded-2xl shadow-xl border border-gray-100 w-full" alt="AI Marking Tool" />
                </div>
              </div>

              {/* Block 3 — Chatbot */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-last lg:order-first">
                  <img src="/screenshots/chatbot.png" loading="lazy" className="rounded-2xl shadow-xl border border-gray-100 w-full" alt="AI Student Chatbot" />
                </div>
                <div className="flex flex-col items-start lg:pl-4">
                  <span className="text-[#006B6B] text-xs font-bold uppercase tracking-widest mb-4">
                    Student Portal
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
                    AI academic support assistant
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    Students interact with a curriculum-aware AI assistant that understands RISC subjects, grade levels, and board requirements. The assistant answers academic questions, explains concepts, and suggests revision resources — available at any time.
                  </p>
                  <ul className="space-y-3 w-full">
                    {[
                      "Curriculum-scoped responses",
                      "Difficulty-appropriate explanations",
                      "Revision resource suggestions",
                      "Teacher escalation for complex queries"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#006B6B] shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Block 4 — Academic Report */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col items-start lg:pr-4">
                  <span className="text-[#006B6B] text-xs font-bold uppercase tracking-widest mb-4">
                    Analytics Layer
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
                    Deep academic performance analysis
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    The academic reporting layer breaks down performance by campus, subject, and student — showing 5-year trends, board exam pass rates, at-risk student counts, and subject-level comparisons across the network. Color-coded for instant readability.
                  </p>
                  <ul className="space-y-3 w-full">
                    {[
                      "Campus-by-campus subject breakdown",
                      "5-year performance trend analysis",
                      "Board exam pass rate tracking",
                      "At-risk student monitoring"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#006B6B] shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-first lg:order-last">
                  <img src="/screenshots/academic-report.png" loading="lazy" className="rounded-2xl shadow-xl border border-gray-100 w-full" alt="Academic Report" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3 — The 11 Modules */}
        <section className="bg-gray-50 py-24 px-6 w-full border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#006B6B]">THE MODULES</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-5 leading-tight">
                11 modules. One unified platform.
              </h2>
              <p className="text-gray-500 text-center mt-5 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
                Each module addresses a specific institutional need — and all modules share a single data layer so information flows seamlessly between them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((mod, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-[#006B6B] bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100/50">
                      {mod.number}
                    </span>
                    <span className="bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {mod.phase}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mt-4 leading-snug">{mod.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mt-3 flex-grow">
                    {mod.desc}
                  </p>
                  <div className="border-t border-gray-100 mt-5 pt-5 flex flex-col gap-2">
                    <div className="flex items-start gap-2 text-xs text-gray-500 font-medium">
                      <span className="text-gray-400 text-sm leading-none shrink-0">👥</span>
                      <span className="leading-tight">{mod.roles}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-[#006B6B] font-bold mt-1">
                      <span className="text-[#00A693] text-sm leading-none shrink-0">⚡</span>
                      <span className="leading-tight">{mod.ai}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — Two More Portal Screenshots */}
        <section className="bg-white py-24 px-6 w-full border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#006B6B]">ROLE PORTALS</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-5 leading-tight">
                A dedicated portal for every stakeholder
              </h2>
              <p className="text-gray-500 text-center mt-5 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                Each of the 5 portals is designed around the specific responsibilities of that role — showing only what that person needs to see and do.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
              <div className="flex flex-col">
                <img src="/screenshots/campus-risk.png" loading="lazy" className="rounded-2xl shadow-xl border border-gray-100 w-full mb-6" alt="Campus Head Portal" />
                <h3 className="text-xl font-bold text-gray-900 mb-2 px-1">Campus Head Portal</h3>
                <p className="text-gray-500 text-sm leading-relaxed px-1">
                  Performance heatmaps, risk distribution, teacher comparison and at-risk student identification.
                </p>
              </div>
              <div className="flex flex-col">
                <img src="/screenshots/parent-portal.png" loading="lazy" className="rounded-2xl shadow-xl border border-gray-100 w-full mb-6" alt="Parent Portal" />
                <h3 className="text-xl font-bold text-gray-900 mb-2 px-1">Parent Portal</h3>
                <p className="text-gray-500 text-sm leading-relaxed px-1">
                  Live attendance, subject mastery progress, academic alerts and teacher communication.
                </p>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm font-semibold tracking-wide text-center mt-16 uppercase">
              Also includes: Student Portal · Teacher Portal · Admin & Executive Portal
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-black py-10 w-full text-center">
        <p className="text-sm text-gray-400 font-medium tracking-wide">
          &copy; 2026 Roots International Schools & Colleges. Powered by EduOS.
        </p>
      </footer>
    </div>
  )
}
