import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import classesData from "@/src/data/classes.json"
import subjectsData from "@/src/data/subjects.json"

export function CampusClasses() {
  const [expandedClass, setExpandedClass] = useState(null)

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Classes Overview</h2>
      
      <div className="grid gap-6">
        {classesData.map(cls => {
          const isExpanded = expandedClass === cls.classId
          const overallMastery = Math.round(
            Object.values(cls.averageMastery).reduce((a, b) => a + b, 0) / Object.keys(cls.averageMastery).length
          )

          return (
            <Card key={cls.classId} className="overflow-hidden cursor-pointer transition-shadow hover:shadow-md" onClick={() => setExpandedClass(isExpanded ? null : cls.classId)}>
              <CardHeader className="bg-gray-50 border-b">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">{cls.classId}</CardTitle>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">Teacher: {cls.teacher}</span>
                    <div className="text-sm font-medium bg-white px-3 py-1 rounded-full border">
                      Avg Mastery: {overallMastery}%
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-4 flex justify-between text-sm text-gray-500">
                  <span>Total Students: {cls.students.length}</span>
                </div>
                
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t" onClick={(e) => e.stopPropagation()}>
                    <h4 className="font-semibold mb-4">Subject Breakdown</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {subjectsData.map(subject => {
                        const score = cls.averageMastery[subject] || 0
                        return (
                          <div key={subject} className="bg-white p-3 rounded border">
                            <div className="text-sm text-gray-500 mb-1">{subject}</div>
                            <div className="font-bold text-lg">{score}%</div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                              <div className="bg-[var(--primary-color)] h-1.5 rounded-full" style={{ width: `${score}%` }}></div>
                            </div>
                          </div>
                        )
                      })}
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
