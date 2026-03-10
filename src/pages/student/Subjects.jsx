import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import studentsData from "@/src/data/students.json"
import assessmentsData from "@/src/data/assessments.json"

export function StudentSubjects() {
  const student = studentsData[0]
  const [expandedSubject, setExpandedSubject] = useState(null)

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">My Subjects</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(student.masteryScores).map(([subject, score]) => {
          const subjectAssessments = assessmentsData.filter(a => a.subject === subject && student.recentAssessments.includes(a.id))
          const lastAssessment = subjectAssessments[0]
          const isExpanded = expandedSubject === subject

          return (
            <Card key={subject} className="flex flex-col">
              <CardHeader>
                <CardTitle>{subject}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Mastery</span>
                    <span className="font-bold">{score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[var(--primary-color)] h-2.5 rounded-full" style={{ width: `${score}%` }}></div>
                  </div>
                </div>
                {lastAssessment && (
                  <div className="mb-4 text-sm">
                    <span className="text-gray-500">Last Assessment: </span>
                    <span className="font-medium">{lastAssessment.aiScore}/10</span>
                  </div>
                )}
                <div className="mt-auto">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setExpandedSubject(isExpanded ? null : subject)}
                  >
                    {isExpanded ? "Hide Details" : "View Details"}
                  </Button>
                </div>
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t space-y-3">
                    <h4 className="font-semibold text-sm">Recent Assessments</h4>
                    {subjectAssessments.slice(0, 3).map(a => (
                      <div key={a.id} className="bg-gray-50 p-3 rounded-md text-sm">
                        <div className="flex justify-between font-medium mb-1">
                          <span>{a.date}</span>
                          <span className="text-[var(--primary-color)]">{a.aiScore}/10</span>
                        </div>
                        <p className="text-gray-600 text-xs line-clamp-2" title={a.aiFeedback}>{a.aiFeedback}</p>
                      </div>
                    ))}
                    {subjectAssessments.length === 0 && <p className="text-xs text-gray-500">No recent assessments.</p>}
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
