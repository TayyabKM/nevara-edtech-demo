import React, { useState } from "react"
import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import alertsData from "@/src/data/alerts.json"
import studentsData from "@/src/data/students.json"

export function ParentAlerts() {
  const child = studentsData[2] // Zainab Malik
  const initialAlerts = alertsData.filter(a => a.studentId === child.id)
  const [alerts, setAlerts] = useState(initialAlerts)

  const markAsRead = (id) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, status: 'read' } : a))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Alerts & Notifications</h2>

      <Card>
        <CardContent className="p-0">
          <div className="divide-y">
            {alerts.map(alert => (
              <div key={alert.id} className={`p-6 flex items-start justify-between transition-colors ${alert.status === 'read' ? 'bg-white opacity-60' : 'bg-red-50/30'}`}>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-semibold uppercase px-2 py-0.5 rounded-full ${
                      alert.type === 'risk' ? 'bg-red-100 text-red-800' : 
                      alert.type === 'attendance' ? 'bg-orange-100 text-orange-800' : 
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {alert.type}
                    </span>
                    <span className="text-sm text-gray-500">{alert.date}</span>
                  </div>
                  <p className={`text-base ${alert.status === 'read' ? 'text-gray-600' : 'text-gray-900 font-medium'}`}>
                    {alert.message}
                  </p>
                </div>
                {alert.status === 'unread' && (
                  <Button variant="outline" size="sm" onClick={() => markAsRead(alert.id)}>
                    Mark as Read
                  </Button>
                )}
              </div>
            ))}
            {alerts.length === 0 && (
              <div className="p-8 text-center text-gray-500">No alerts found.</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
