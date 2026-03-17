import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { StatCard } from "@/src/components/shared/StatCard"
import { RiskBadge } from "@/src/components/shared/RiskBadge"
import { FeatureTooltip } from "@/src/components/shared/FeatureTooltip"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts"
import studentsData from "@/src/data/students.json"
import assessmentsData from "@/src/data/assessments.json"
import attendanceData from "@/src/data/attendance.json"
import { BookOpen, CheckCircle, Clock, AlertTriangle } from "lucide-react"

export function StudentDashboard() {
  const student = studentsData[0] // Ali Khan
  const attendance = attendanceData.find(a => a.studentId === student.id)
  const recentAssessments = assessmentsData.filter(a => student.recentAssessments.includes(a.id))

  const masteryData = Object.entries(student.masteryScores).map(([subject, score]) => ({
    subject,
    score
  }))

  const weeklyProgressData = attendance.weeklyAttendance.map((att, index) => ({
    week: `Week ${index + 1}`,
    attendance: att,
    score: Math.floor(Math.random() * 20) + 70 // Mock progress
  }))

  const overallMastery = Math.round(
    Object.values(student.masteryScores).reduce((a, b) => a + b, 0) / Object.keys(student.masteryScores).length
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Good morning, {student.name}</h2>
        <div className="text-sm text-muted-foreground">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Overall Mastery" value={`${overallMastery}%`} icon={BookOpen} description="+2% from last month" />
        <StatCard title="Assessments Completed" value={student.recentAssessments.length} icon={CheckCircle} description="This term" />
        <StatCard title="Attendance" value={`${student.attendancePercent}%`} icon={Clock} description="Last 30 days" />
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk Status</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">
              <RiskBadge level={student.riskLevel} />
            </div>
            <p className="text-xs text-muted-foreground">Based on recent performance</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <FeatureTooltip
          title="Subject Mastery Engine"
          description="In the full platform, mastery scores update in real time after every assessment and learning activity — not just manually entered data."
          benefits={["Updates after every quiz and activity", "Tracks mastery per concept not just subject", "Feeds directly into adaptive recommendations"]}
          className="col-span-1"
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Subject Mastery</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={masteryData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="Mastery" dataKey="score" stroke="var(--primary-color)" fill="var(--primary-color)" fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </FeatureTooltip>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyProgressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="var(--accent-color)" strokeWidth={2} name="Avg Score" />
                <Line type="monotone" dataKey="attendance" stroke="var(--primary-color)" strokeWidth={2} name="Attendance %" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <FeatureTooltip
          title="AI Assessment History"
          description="Every assessment in the full platform is AI-marked instantly with rubric-based scoring, confidence levels, and improvement suggestions pushed straight to this view."
          benefits={["AI marks structured answers in under 5 seconds", "Teacher override and audit trail included", "Results feed the risk and mastery models automatically"]}
          className="col-span-2"
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Recent Assessments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Subject</th>
                      <th className="px-4 py-3">Score</th>
                      <th className="px-4 py-3">AI Feedback</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentAssessments.map((assessment) => (
                      <tr key={assessment.id} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap">{assessment.date}</td>
                        <td className="px-4 py-3 font-medium text-gray-900">{assessment.subject}</td>
                        <td className="px-4 py-3">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {assessment.aiScore}/10
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600 truncate max-w-xs" title={assessment.aiFeedback}>
                          {assessment.aiFeedback}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </FeatureTooltip>

        <FeatureTooltip
          title="Adaptive Learning Pathways"
          description="The full engine analyses 12+ behavioral signals to decide exactly what this student should study next and at what difficulty level."
          benefits={["Personalised for every student", "Reduces failure risk by detecting gaps early", "Phase 2 upgrades to a live ML model"]}
          align="right"
          className="col-span-1"
        >
          <Card className="bg-blue-50 border-blue-100 h-full">
            <CardHeader>
              <CardTitle className="text-blue-900">Recommended Next Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-1">Physics: Newton's Laws Review</h4>
                  <p className="text-sm text-gray-600 mb-3">Based on your recent assessment, review the second law of motion.</p>
                  <button className="text-sm font-medium text-blue-600 hover:underline">Start Module →</button>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-1">Math: Algebra Practice</h4>
                  <p className="text-sm text-gray-600 mb-3">Complete the weekly practice set to maintain your 85% mastery.</p>
                  <button className="text-sm font-medium text-blue-600 hover:underline">Start Practice →</button>
                </div>
              </div>
            </CardContent>
          </Card>
        </FeatureTooltip>
      </div>
    </div>
  )
}
