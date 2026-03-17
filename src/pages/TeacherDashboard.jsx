import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/src/components/ui/card"
import { StatCard } from "@/src/components/shared/StatCard"
import { RiskBadge } from "@/src/components/shared/RiskBadge"
import { FeatureTooltip } from "@/src/components/shared/FeatureTooltip"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"
import { Select } from "@/src/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import studentsData from "@/src/data/students.json"
import classesData from "@/src/data/classes.json"
import subjectsData from "@/src/data/subjects.json"
import { markStudentAnswer } from "@/src/lib/gemini"
import { Users, AlertTriangle, FileText, CheckCircle, Loader2 } from "lucide-react"

export function TeacherDashboard() {
  const teacherClasses = classesData.filter(c => c.teacher === "Mr. Usman")
  const studentIds = teacherClasses.flatMap(c => c.students)
  const students = studentsData.filter(s => studentIds.includes(s.id))

  const atRiskStudents = students.filter(s => s.riskLevel !== "on-track")

  const classPerformanceData = teacherClasses.map(c => {
    const data = { name: c.classId }
    Object.entries(c.averageMastery).forEach(([subject, score]) => {
      data[subject] = score
    })
    return data
  })

  const [aiMarkingState, setAiMarkingState] = useState({
    subject: subjectsData[0],
    question: "Explain Newton's First Law of Motion.",
    studentAnswer: "An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.",
    marksOutOf: 10,
    loading: false,
    result: null,
    error: null
  })

  const handleMarkWithAI = async () => {
    setAiMarkingState(prev => ({ ...prev, loading: true, error: null, result: null }))
    try {
      const result = await markStudentAnswer({
        subject: aiMarkingState.subject,
        question: aiMarkingState.question,
        studentAnswer: aiMarkingState.studentAnswer,
        marksOutOf: aiMarkingState.marksOutOf
      })
      setAiMarkingState(prev => ({ ...prev, loading: false, result }))
    } catch (error) {
      setAiMarkingState(prev => ({ ...prev, loading: false, error: "Failed to mark answer. Please check your API key." }))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Students" value={students.length} icon={Users} description="Across 2 classes" />
        <StatCard title="At-Risk Students" value={atRiskStudents.length} icon={AlertTriangle} description="Needs attention" />
        <StatCard title="Assessments Marked" value="24" icon={CheckCircle} description="This week" />
        <StatCard title="Class Average Mastery" value="78%" icon={FileText} description="Across all subjects" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <FeatureTooltip
          title="Class Performance Analytics"
          description="In the full platform this updates live — every assessment submission recalculates class averages and surfaces which topics need immediate reteaching."
          benefits={["Live recalculation after every submission", "Drill down from class to individual student", "Exportable reports for campus head review"]}
          className="col-span-1"
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Class Performance</CardTitle>
              <CardDescription>Average mastery per subject across classes</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={classPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Physics" fill="var(--primary-color)" />
                  <Bar dataKey="Mathematics" fill="var(--accent-color)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </FeatureTooltip>

        <FeatureTooltip
          title="Predictive Risk Engine"
          description="The full risk model analyses attendance patterns, assessment scores, submission rates and engagement signals to predict which students are heading toward failure — weeks before it happens."
          benefits={["Early warning 4 to 6 weeks before failure", "Automated alerts sent to teachers and parents", "Intervention workflow built in"]}
          align="right"
          className="col-span-1"
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>At-Risk Students</CardTitle>
              <CardDescription>Students requiring immediate intervention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3">Class</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {atRiskStudents.map((student) => (
                      <tr key={student.id} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900">{student.name}</td>
                        <td className="px-4 py-3">{student.class}</td>
                        <td className="px-4 py-3">
                          <RiskBadge level={student.riskLevel} />
                        </td>
                        <td className="px-4 py-3">
                          <Button variant="outline" size="sm">Message</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </FeatureTooltip>
      </div>

      <Card className="border-t-4 border-t-[var(--accent-color)] shadow-md">
        <FeatureTooltip
          title="AI Marking — Full Platform Capabilities"
          description="This demo shows single-answer marking. The full platform includes bulk paper upload, platform-integrated auto-marking for mock exams, and board-aligned rubrics for O-Level, A-Level, Matric and IGCSE."
          benefits={["Bulk PDF upload — mark entire class in one click", "Auto-marks platform mock exams instantly", "Board-calibrated rubrics per subject"]}
        >
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-100 text-blue-800 rounded-lg">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <CardTitle>AI Marking Tool</CardTitle>
                <CardDescription>Powered by Google Gemini</CardDescription>
              </div>
            </div>
          </CardHeader>
        </FeatureTooltip>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Subject</label>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={aiMarkingState.subject}
                  onChange={(e) => setAiMarkingState(prev => ({ ...prev, subject: e.target.value }))}
                >
                  {subjectsData.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Question</label>
                <Textarea
                  value={aiMarkingState.question}
                  onChange={(e) => setAiMarkingState(prev => ({ ...prev, question: e.target.value }))}
                  placeholder="Enter Question"
                  className="min-h-[80px]"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Student Answer</label>
                <Textarea
                  value={aiMarkingState.studentAnswer}
                  onChange={(e) => setAiMarkingState(prev => ({ ...prev, studentAnswer: e.target.value }))}
                  placeholder="Paste Student Answer"
                  className="min-h-[120px]"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Total Marks</label>
                <Input
                  type="number"
                  value={aiMarkingState.marksOutOf}
                  onChange={(e) => setAiMarkingState(prev => ({ ...prev, marksOutOf: e.target.value }))}
                  placeholder="e.g. 10"
                />
              </div>
              <Button
                onClick={handleMarkWithAI}
                disabled={aiMarkingState.loading || !aiMarkingState.question || !aiMarkingState.studentAnswer}
                className="w-full"
              >
                {aiMarkingState.loading ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Marking with AI...</>
                ) : (
                  "Mark with AI"
                )}
              </Button>
            </div>

            <div className="bg-gray-50 rounded-lg border p-6 flex flex-col">
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">AI Assessment Result</h3>

              {aiMarkingState.loading && (
                <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
                  <Loader2 className="h-8 w-8 animate-spin mb-4 text-[var(--primary-color)]" />
                  <p>Analyzing student answer...</p>
                  <p className="text-xs mt-2">Checking against curriculum standards</p>
                </div>
              )}

              {aiMarkingState.error && (
                <div className="flex-1 flex items-center justify-center text-red-500 bg-red-50 p-4 rounded-md">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  {aiMarkingState.error}
                </div>
              )}

              {!aiMarkingState.loading && !aiMarkingState.error && !aiMarkingState.result && (
                <div className="flex-1 flex items-center justify-center text-gray-400">
                  <p>Enter a question and answer to see AI feedback.</p>
                </div>
              )}

              {aiMarkingState.result && (
                <div className="space-y-4 flex-1 overflow-y-auto pr-2">
                  <div className="flex items-center justify-between bg-white p-4 rounded-md border shadow-sm">
                    <div>
                      <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Score</p>
                      <p className="text-3xl font-bold text-[var(--primary-color)]">
                        {aiMarkingState.result.score} <span className="text-lg text-gray-400">/ {aiMarkingState.marksOutOf}</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Grade</p>
                      <p className="text-3xl font-bold text-[var(--accent-color)]">{aiMarkingState.result.grade}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Overall Feedback</h4>
                    <p className="text-sm text-gray-700 bg-white p-3 rounded-md border">{aiMarkingState.result.overallFeedback}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-1 text-sm flex items-center"><CheckCircle className="h-4 w-4 mr-1" /> Strengths</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                        {aiMarkingState.result.strengths.map((s, i) => <li key={i}>{s}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-700 mb-1 text-sm flex items-center"><AlertTriangle className="h-4 w-4 mr-1" /> Areas to Improve</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                        {aiMarkingState.result.improvements.map((s, i) => <li key={i}>{s}</li>)}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Suggested Resources</h4>
                    <div className="flex flex-wrap gap-2">
                      {aiMarkingState.result.suggestedResources.map((r, i) => (
                        <span key={i} className="bg-blue-50 text-blue-700 border border-blue-200 text-xs px-2 py-1 rounded-full">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t mt-4 flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      AI Confidence: <span className="font-medium text-gray-700">{aiMarkingState.result.confidenceLevel}</span>
                    </span>
                    <Button size="sm" variant="outline">Save to Gradebook</Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 border-l-4 p-6 rounded-r-lg" style={{ borderColor: '#006B6B', backgroundColor: '#E6F4F4' }}>
            <h3 className="text-lg font-bold text-[#006B6B] mb-4">🚀 This Feature Is Expanding</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h4 className="font-semibold text-[#006B6B] text-sm mb-2">Phase 2 — Bulk Paper Upload</h4>
                <p className="text-sm text-gray-700">Teachers upload a full set of student answer papers (PDF or image). The AI reads, marks, and grades every paper automatically — no manual input required.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#006B6B] text-sm mb-2">Phase 3 — Platform-Integrated Auto-Marking</h4>
                <p className="text-sm text-gray-700">When students complete assessments directly on the platform, AI marks their answers instantly. Results appear in the gradebook without any teacher action.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#006B6B] text-sm mb-2">Phase 4 — Exam Board Alignment</h4>
                <p className="text-sm text-gray-700">Marking rubrics calibrated against O-Level, A-Level, Matric, and IGCSE board standards for each subject.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
