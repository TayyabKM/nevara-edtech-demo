import React, { useState } from "react"
import { Card, CardContent } from "@/src/components/ui/card"
import studentsData from "@/src/data/students.json"
import assessmentsData from "@/src/data/assessments.json"
import subjectsData from "@/src/data/subjects.json"

export function StudentAssessments() {
  const student = studentsData[0]
  const [filterSubject, setFilterSubject] = useState("All")
  
  const studentAssessments = assessmentsData.filter(a => student.recentAssessments.includes(a.id))
  const filteredAssessments = filterSubject === "All" 
    ? studentAssessments 
    : studentAssessments.filter(a => a.subject === filterSubject)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">My Assessments</h2>
        <div className="w-48">
          <select 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            value={filterSubject}
            onChange={(e) => setFilterSubject(e.target.value)}
          >
            <option value="All">All Subjects</option>
            {subjectsData.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Subject</th>
                  <th className="px-4 py-3">Question</th>
                  <th className="px-4 py-3">Score</th>
                  <th className="px-4 py-3">AI Feedback</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredAssessments.map((assessment) => (
                  <tr key={assessment.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap">{assessment.date}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">{assessment.subject}</td>
                    <td className="px-4 py-3 max-w-[200px] truncate" title={assessment.question}>
                      {assessment.question.length > 60 ? assessment.question.substring(0, 60) + '...' : assessment.question}
                    </td>
                    <td className="px-4 py-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {assessment.aiScore}/10
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 max-w-[250px] truncate" title={assessment.aiFeedback}>
                      {assessment.aiFeedback}
                    </td>
                    <td className="px-4 py-3">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Marked
                      </span>
                    </td>
                  </tr>
                ))}
                {filteredAssessments.length === 0 && (
                  <tr>
                    <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                      No assessments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
