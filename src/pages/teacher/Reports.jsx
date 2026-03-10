import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import assessmentsData from "@/src/data/assessments.json"
import studentsData from "@/src/data/students.json"

export function TeacherReports() {
  const markedAssessments = assessmentsData.slice(0, 10) // Mocking recent
  const totalMarkedThisMonth = 45

  const subjectAverages = [
    { subject: "Physics", avg: 78 },
    { subject: "Mathematics", avg: 82 },
    { subject: "Chemistry", avg: 75 },
    { subject: "English", avg: 85 }
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Assessments Marked</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-[var(--primary-color)]">{totalMarkedThisMonth}</div>
            <p className="text-sm text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>
        
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Average Score by Subject</CardTitle>
          </CardHeader>
          <CardContent className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectAverages}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="subject" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="avg" fill="var(--accent-color)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent AI Marking Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Student</th>
                  <th className="px-4 py-3">Subject</th>
                  <th className="px-4 py-3">Score</th>
                </tr>
              </thead>
              <tbody>
                {markedAssessments.map((assessment, idx) => {
                  const student = studentsData.find(s => s.recentAssessments.includes(assessment.id)) || studentsData[0]
                  return (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3">{assessment.date}</td>
                      <td className="px-4 py-3 font-medium">{student.name}</td>
                      <td className="px-4 py-3">{assessment.subject}</td>
                      <td className="px-4 py-3">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {assessment.aiScore}/10
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
