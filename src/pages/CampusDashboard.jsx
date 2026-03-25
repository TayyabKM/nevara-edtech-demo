import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/src/components/ui/card"
import { StatCard } from "@/src/components/shared/StatCard"
import { RiskBadge } from "@/src/components/shared/RiskBadge"
import { FeatureTooltip } from "@/src/components/shared/FeatureTooltip"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from "recharts"
import studentsData from "@/src/data/students.json"
import classesData from "@/src/data/classes.json"
import subjectsData from "@/src/data/subjects.json"
import { Users, AlertTriangle, FileText, CheckCircle, GraduationCap, Building } from "lucide-react"

export function CampusDashboard() {
  const totalStudents = 1240
  const atRiskCount = 104
  const campusAverageMastery = 84

  const riskDistribution = [
    { name: 'On Track', value: 924, color: '#22c55e' },
    { name: 'Needs Attention', value: 212, color: '#eab308' },
    { name: 'At Risk', value: 104, color: '#ef4444' },
  ]

  const topAtRiskStudents = studentsData
    .filter(s => s.riskLevel === 'at-risk' || s.riskLevel === 'needs-attention')
    .sort((a, b) => {
      const avgA = Object.values(a.masteryScores).reduce((sum, val) => sum + val, 0) / Object.keys(a.masteryScores).length
      const avgB = Object.values(b.masteryScores).reduce((sum, val) => sum + val, 0) / Object.keys(b.masteryScores).length
      return avgA - avgB
    })
    .slice(0, 5)

  const teacherPerformanceData = [
    { name: 'Mr. Usman', score: 82 },
    { name: 'Ms. Sana', score: 75 },
    { name: 'Mr. Bilal', score: 88 },
    { name: 'Mrs. Fatima', score: 79 },
    { name: 'Mr. Ali', score: 85 },
  ]

  const getHeatmapColor = (score) => {
    if (score >= 80) return 'bg-green-100 text-green-800'
    if (score >= 60) return 'bg-yellow-100 text-yellow-800'
    return 'bg-red-100 text-red-800'
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Campus Head Dashboard</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <StatCard title="Total Students" value="1,240" icon={Users} />
        <StatCard title="At-Risk Count" value="104" icon={AlertTriangle} />
        <StatCard title="Campus Avg Mastery" value="84%" icon={GraduationCap} />
        <StatCard title="Assessments This Month" value="1,420" icon={FileText} />
        <StatCard title="Teacher Count" value="68" icon={Building} />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <FeatureTooltip
          title="Subject Performance Heatmap"
          description="In the full platform this heatmap covers every class, every subject, and every concept — updated live as assessments come in. Campus heads can drill down from campus level to individual student level in one click."
          benefits={["Live data — not monthly reports", "Drill down: Campus → Grade → Class → Student", "Automatic alerts when any cell drops below threshold"]}
          className="col-span-2"
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Subject Performance Heatmap</CardTitle>
              <CardDescription>Average mastery score per class and subject</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-center">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left">Class</th>
                      {subjectsData.map(subject => (
                        <th key={subject} className="px-2 py-3 truncate max-w-[80px]" title={subject}>
                          {subject.substring(0, 4)}.
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {classesData.map((cls) => (
                      <tr key={cls.classId} className="border-b">
                        <td className="px-4 py-3 font-medium text-gray-900 text-left">{cls.classId}</td>
                        {subjectsData.map(subject => {
                          const score = cls.averageMastery[subject] || 0
                          return (
                            <td key={subject} className="px-2 py-2">
                              <div className={`px-2 py-1 rounded text-xs font-semibold ${getHeatmapColor(score)}`}>
                                {score}%
                              </div>
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </FeatureTooltip>

        <FeatureTooltip
          title="Network-Wide Risk Monitoring"
          description="In the full platform this donut updates in real time and covers all 47 campuses. One click on any segment shows the full list of affected students with recommended interventions."
          benefits={["Real time across all campuses", "Clickable — drill into any risk segment", "Intervention workflow triggered automatically"]}
          align="right"
          className="col-span-1"
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Risk Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px] flex flex-col items-center justify-center">
              <ResponsiveContainer width="100%" height="80%">
                <PieChart>
                  <Pie
                    data={riskDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {riskDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </FeatureTooltip>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Top 5 At-Risk Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Class</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {topAtRiskStudents.map((student) => (
                    <tr key={student.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{student.name}</td>
                      <td className="px-4 py-3">{student.class}</td>
                      <td className="px-4 py-3">
                        <RiskBadge level={student.riskLevel} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <FeatureTooltip
          title="Teacher Performance Intelligence"
          description="The full system tracks lesson plan completion, assessment turnaround time, AI marking adoption, and student outcome correlation per teacher — giving campus heads objective performance data."
          benefits={["Objective data replaces subjective observation", "Tracks AI tool adoption rates per teacher", "Feeds into professional development planning"]}
          align="right"
          className="col-span-1"
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Teacher Performance Comparison</CardTitle>
              <CardDescription>Average student mastery by teacher</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={teacherPerformanceData} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" width={80} />
                  <Tooltip />
                  <Bar dataKey="score" fill="var(--primary-color)" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </FeatureTooltip>
      </div>
    </div>
  )
}
