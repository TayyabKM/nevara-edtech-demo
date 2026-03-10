import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/src/components/ui/card"
import { RiskBadge } from "@/src/components/shared/RiskBadge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import studentsData from "@/src/data/students.json"
import assessmentsData from "@/src/data/assessments.json"
import attendanceData from "@/src/data/attendance.json"
import alertsData from "@/src/data/alerts.json"
import { User, Bell, CheckCircle, AlertTriangle, Clock } from "lucide-react"

export function ParentDashboard() {
  const child = studentsData[2] // Zainab Malik (At-risk student for demo purposes)
  const attendance = attendanceData.find(a => a.studentId === child.id)
  const recentAssessments = assessmentsData.filter(a => child.recentAssessments.includes(a.id))
  const alerts = alertsData.filter(a => a.studentId === child.id)

  const overallMastery = Math.round(
    Object.values(child.masteryScores).reduce((a, b) => a + b, 0) / Object.keys(child.masteryScores).length
  )

  const weeklyAttendanceData = attendance.weeklyAttendance.map((att, index) => ({
    week: `Week ${index + 1}`,
    attendance: att
  }))

  const getProgressColor = (score) => {
    if (score >= 80) return "bg-green-500"
    if (score >= 60) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Parent Portal</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="col-span-1 border-t-4" style={{ borderTopColor: "var(--primary-color)" }}>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <User className="h-8 w-8 text-gray-400" />
            </div>
            <div>
              <CardTitle>{child.name}</CardTitle>
              <CardDescription>{child.class}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-sm text-gray-500">Overall Mastery</span>
                <span className="font-bold text-lg">{overallMastery}%</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-sm text-gray-500">Current Status</span>
                <RiskBadge level={child.riskLevel} />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Attendance</span>
                <span className="font-bold">{child.attendancePercent}%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Subject Mastery Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(child.masteryScores).map(([subject, score]) => (
                <div key={subject}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{subject}</span>
                    <span className="text-gray-500">{score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${getProgressColor(score)}`} 
                      style={{ width: `${score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Recent Assessment Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Subject</th>
                    <th className="px-4 py-3">Score</th>
                    <th className="px-4 py-3">Teacher Comment</th>
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

        <div className="col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Bell className="h-5 w-5 mr-2 text-red-500" /> Recent Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map(alert => (
                  <div key={alert.id} className={`p-3 rounded-lg border ${alert.status === 'unread' ? 'bg-red-50 border-red-100' : 'bg-gray-50 border-gray-100'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-semibold uppercase ${alert.type === 'risk' ? 'text-red-600' : 'text-orange-600'}`}>
                        {alert.type}
                      </span>
                      <span className="text-xs text-gray-500">{alert.date}</span>
                    </div>
                    <p className="text-sm text-gray-800">{alert.message}</p>
                  </div>
                ))}
                {alerts.length === 0 && <p className="text-sm text-gray-500 text-center py-4">No recent alerts.</p>}
              </div>
            </CardContent>
          </Card>

          <Card className={child.riskLevel === 'on-track' ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}>
            <CardContent className="p-4 flex items-start gap-3">
              {child.riskLevel === 'on-track' ? (
                <CheckCircle className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
              )}
              <div>
                <h4 className={`font-semibold ${child.riskLevel === 'on-track' ? 'text-green-800' : 'text-amber-800'}`}>
                  {child.riskLevel === 'on-track' ? "Great Job!" : "Intervention Recommended"}
                </h4>
                <p className={`text-sm mt-1 ${child.riskLevel === 'on-track' ? 'text-green-700' : 'text-amber-700'}`}>
                  {child.riskLevel === 'on-track' 
                    ? `${child.name} is doing excellent. Keep encouraging their current study habits.` 
                    : `${child.name} is struggling in some subjects. Please schedule a meeting with their teacher to discuss a support plan.`}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Attendance Summary (Last 8 Weeks)</CardTitle>
        </CardHeader>
        <CardContent className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyAttendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="attendance" stroke="var(--primary-color)" strokeWidth={2} name="Attendance %" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
