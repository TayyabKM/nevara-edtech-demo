import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { RiskBadge } from "@/src/components/shared/RiskBadge"
import classesData from "@/src/data/classes.json"
import studentsData from "@/src/data/students.json"

export function TeacherClasses() {
  const teacherClasses = classesData.filter(c => c.teacher === "Mr. Usman")
  const [expandedClass, setExpandedClass] = useState(null)

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">My Classes</h2>
      
      <div className="grid gap-6">
        {teacherClasses.map(cls => {
          const classStudents = studentsData.filter(s => cls.students.includes(s.id))
          const onTrack = classStudents.filter(s => s.riskLevel === 'on-track').length
          const needsAttention = classStudents.filter(s => s.riskLevel === 'needs-attention').length
          const atRisk = classStudents.filter(s => s.riskLevel === 'at-risk').length
          const total = classStudents.length
          const isExpanded = expandedClass === cls.classId

          const overallMastery = Math.round(
            Object.values(cls.averageMastery).reduce((a, b) => a + b, 0) / Object.keys(cls.averageMastery).length
          )

          return (
            <Card key={cls.classId} className="overflow-hidden cursor-pointer transition-shadow hover:shadow-md" onClick={() => setExpandedClass(isExpanded ? null : cls.classId)}>
              <CardHeader className="bg-gray-50 border-b">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">{cls.classId}</CardTitle>
                  <div className="text-sm font-medium bg-white px-3 py-1 rounded-full border">
                    Avg Mastery: {overallMastery}%
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-4 flex justify-between text-sm text-gray-500">
                  <span>Total Students: {total}</span>
                </div>
                <div className="w-full h-4 flex rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full" style={{ width: `${(onTrack/total)*100}%` }} title={`On Track: ${onTrack}`}></div>
                  <div className="bg-yellow-500 h-full" style={{ width: `${(needsAttention/total)*100}%` }} title={`Needs Attention: ${needsAttention}`}></div>
                  <div className="bg-red-500 h-full" style={{ width: `${(atRisk/total)*100}%` }} title={`At Risk: ${atRisk}`}></div>
                </div>
                <div className="flex gap-4 mt-2 text-xs">
                  <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> On Track ({onTrack})</div>
                  <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-500"></span> Needs Attention ({needsAttention})</div>
                  <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> At Risk ({atRisk})</div>
                </div>

                {isExpanded && (
                  <div className="mt-6 pt-6 border-t" onClick={(e) => e.stopPropagation()}>
                    <h4 className="font-semibold mb-4">Student List</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                          <tr>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Overall Mastery</th>
                            <th className="px-4 py-2">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {classStudents.map(student => {
                            const studentMastery = Math.round(
                              Object.values(student.masteryScores).reduce((a, b) => a + b, 0) / Object.keys(student.masteryScores).length
                            )
                            return (
                              <tr key={student.id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2 font-medium">{student.name}</td>
                                <td className="px-4 py-2">{studentMastery}%</td>
                                <td className="px-4 py-2"><RiskBadge level={student.riskLevel} /></td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
