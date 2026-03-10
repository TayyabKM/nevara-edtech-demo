import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import studentsData from "@/src/data/students.json"
import assessmentsData from "@/src/data/assessments.json"

export function ParentAcademicProgress() {
  const child = studentsData[2] // Zainab Malik
  const recentAssessments = assessmentsData.filter(a => child.recentAssessments.includes(a.id))

  // Mock trend data
  const trendData = [
    { week: 'Week 1', Physics: 65, Mathematics: 70, English: 80 },
    { week: 'Week 2', Physics: 68, Mathematics: 72, English: 82 },
    { week: 'Week 3', Physics: 64, Mathematics: 75, English: 81 },
    { week: 'Week 4', Physics: 60, Mathematics: 74, English: 83 },
    { week: 'Week 5', Physics: 58, Mathematics: 76, English: 85 },
    { week: 'Week 6', Physics: 55, Mathematics: 78, English: 84 },
    { week: 'Week 7', Physics: 52, Mathematics: 80, English: 86 },
    { week: 'Week 8', Physics: 50, Mathematics: 82, English: 88 },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Academic Progress</h2>

      <Card>
        <CardHeader>
          <CardTitle>Mastery Trend (Last 8 Weeks)</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Physics" stroke="#ef4444" strokeWidth={2} />
              <Line type="monotone" dataKey="Mathematics" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="English" stroke="#22c55e" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>All Assessments</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Subject</th>
                  <th className="px-4 py-3">Score</th>
                  <th className="px-4 py-3">Teacher Comments</th>
                </tr>
              </thead>
              <tbody>
                {recentAssessments.map((assessment) => (
                  <tr key={assessment.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap">{assessment.date}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">{assessment.subject}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${assessment.aiScore >= 7 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {assessment.aiScore}/10
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {assessment.aiFeedback}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
