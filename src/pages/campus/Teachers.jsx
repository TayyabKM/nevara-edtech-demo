import React from "react"
import { Card, CardContent } from "@/src/components/ui/card"
import classesData from "@/src/data/classes.json"
import studentsData from "@/src/data/students.json"

export function CampusTeachers() {
  // Aggregate teacher data
  const teachersMap = {}
  
  classesData.forEach(cls => {
    if (!teachersMap[cls.teacher]) {
      teachersMap[cls.teacher] = {
        name: cls.teacher,
        classes: [],
        students: [],
      }
    }
    teachersMap[cls.teacher].classes.push(cls.classId)
    teachersMap[cls.teacher].students.push(...cls.students)
  })

  const teachersList = Object.values(teachersMap).map(teacher => {
    const teacherStudents = studentsData.filter(s => teacher.students.includes(s.id))
    const atRiskCount = teacherStudents.filter(s => s.riskLevel !== 'on-track').length
    
    let totalMastery = 0
    let masteryCount = 0
    teacherStudents.forEach(s => {
      Object.values(s.masteryScores).forEach(score => {
        totalMastery += score
        masteryCount++
      })
    })
    const avgMastery = masteryCount > 0 ? Math.round(totalMastery / masteryCount) : 0

    return {
      ...teacher,
      atRiskCount,
      avgMastery
    }
  })

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Teachers Overview</h2>
      
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-4 py-3">Teacher Name</th>
                  <th className="px-4 py-3">Classes Assigned</th>
                  <th className="px-4 py-3">Avg Student Mastery</th>
                  <th className="px-4 py-3">At-Risk Students</th>
                </tr>
              </thead>
              <tbody>
                {teachersList.map((teacher, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{teacher.name}</td>
                    <td className="px-4 py-3">{teacher.classes.join(", ")}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{teacher.avgMastery}%</span>
                        <div className="w-24 bg-gray-200 rounded-full h-1.5">
                          <div className="bg-[var(--primary-color)] h-1.5 rounded-full" style={{ width: `${teacher.avgMastery}%` }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${teacher.atRiskCount > 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                        {teacher.atRiskCount} students
                      </span>
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
