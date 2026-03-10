import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import attendanceData from "@/src/data/attendance.json"
import studentsData from "@/src/data/students.json"

export function ParentAttendance() {
  const child = studentsData[2] // Zainab Malik
  const attendance = attendanceData.find(a => a.studentId === child.id)

  const presentDays = 35
  const absentDays = 3
  const lateDays = 2

  // Mock 8 weeks of 5 days
  const weeks = Array.from({ length: 8 }, (_, weekIndex) => {
    return Array.from({ length: 5 }, (_, dayIndex) => {
      // Randomly assign some absences/lates for demo
      const rand = Math.random()
      if (rand > 0.9) return 'absent'
      if (rand > 0.85) return 'late'
      return 'present'
    })
  })

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Attendance Record</h2>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-[var(--primary-color)]">{child.attendancePercent}%</div>
            <p className="text-sm text-gray-500 mt-1">Overall Attendance</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600">{presentDays}</div>
            <p className="text-sm text-gray-500 mt-1">Days Present</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-red-600">{absentDays}</div>
            <p className="text-sm text-gray-500 mt-1">Days Absent</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600">{lateDays}</div>
            <p className="text-sm text-gray-500 mt-1">Days Late</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Attendance Grid (Last 8 Weeks)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6 text-sm">
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-green-500 rounded"></div> Present</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-red-500 rounded"></div> Absent</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-yellow-500 rounded"></div> Late</div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr>
                  <th className="p-2 border-b">Week</th>
                  <th className="p-2 border-b">Mon</th>
                  <th className="p-2 border-b">Tue</th>
                  <th className="p-2 border-b">Wed</th>
                  <th className="p-2 border-b">Thu</th>
                  <th className="p-2 border-b">Fri</th>
                </tr>
              </thead>
              <tbody>
                {weeks.map((week, wIdx) => (
                  <tr key={wIdx}>
                    <td className="p-2 border-b font-medium text-gray-500">Week {8 - wIdx}</td>
                    {week.map((status, dIdx) => (
                      <td key={dIdx} className="p-2 border-b">
                        <div className={`w-8 h-8 mx-auto rounded-md ${
                          status === 'present' ? 'bg-green-500' :
                          status === 'absent' ? 'bg-red-500' : 'bg-yellow-500'
                        }`}></div>
                      </td>
                    ))}
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
