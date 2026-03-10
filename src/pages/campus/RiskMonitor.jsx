import React, { useState } from "react"
import { Card, CardContent } from "@/src/components/ui/card"
import { RiskBadge } from "@/src/components/shared/RiskBadge"
import studentsData from "@/src/data/students.json"

export function CampusRiskMonitor() {
  const [filterRisk, setFilterRisk] = useState("All")
  
  const atRiskStudents = studentsData.filter(s => s.riskLevel !== "on-track")
  const filteredStudents = filterRisk === "All" 
    ? atRiskStudents 
    : atRiskStudents.filter(s => s.riskLevel === filterRisk)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Risk Monitor</h2>
        <div className="w-48">
          <select 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            value={filterRisk}
            onChange={(e) => setFilterRisk(e.target.value)}
          >
            <option value="All">All At-Risk</option>
            <option value="needs-attention">Needs Attention</option>
            <option value="at-risk">At Risk</option>
          </select>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Class</th>
                  <th className="px-4 py-3">Risk Level</th>
                  <th className="px-4 py-3">Flagged Subjects (&lt;60%)</th>
                  <th className="px-4 py-3">Attendance</th>
                  <th className="px-4 py-3">Last Seen</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => {
                  const flaggedSubjects = Object.entries(student.masteryScores)
                    .filter(([_, score]) => score < 60)
                    .map(([subject]) => subject)
                  
                  return (
                    <tr key={student.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{student.name}</td>
                      <td className="px-4 py-3">{student.class}</td>
                      <td className="px-4 py-3"><RiskBadge level={student.riskLevel} /></td>
                      <td className="px-4 py-3 text-red-600 text-xs">
                        {flaggedSubjects.length > 0 ? flaggedSubjects.join(", ") : "None"}
                      </td>
                      <td className="px-4 py-3">{student.attendancePercent}%</td>
                      <td className="px-4 py-3 text-gray-500">Today</td>
                    </tr>
                  )
                })}
                {filteredStudents.length === 0 && (
                  <tr>
                    <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                      No students match the selected filter.
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
