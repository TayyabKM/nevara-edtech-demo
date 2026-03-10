import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Server, Activity, Users, Shield } from "lucide-react"

export function AdminSystem() {
  const demoAccounts = [
    { name: "Ali Khan", role: "student", email: "ali@demo.eduos.com" },
    { name: "Mr. Usman", role: "teacher", email: "usman@demo.eduos.com" },
    { name: "Dr. Ahmed", role: "campus", email: "ahmed@demo.eduos.com" },
    { name: "Mr. Khan", role: "parent", email: "khan@demo.eduos.com" },
    { name: "System Admin", role: "admin", email: "admin@demo.eduos.com" },
  ]

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight">System Information</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Server className="h-8 w-8 text-blue-500 mb-2" />
            <p className="text-sm text-gray-500">Platform Version</p>
            <p className="text-xl font-bold">EduOS v1.0.0</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Activity className="h-8 w-8 text-green-500 mb-2" />
            <p className="text-sm text-gray-500">System Status</p>
            <p className="text-xl font-bold text-green-600">Operational</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Shield className="h-8 w-8 text-purple-500 mb-2" />
            <p className="text-sm text-gray-500">Last Data Reset</p>
            <p className="text-lg font-bold">{new Date().toLocaleDateString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Users className="h-8 w-8 text-orange-500 mb-2" />
            <p className="text-sm text-gray-500">Active Roles</p>
            <p className="text-xl font-bold">5</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Demo Accounts</CardTitle>
          <CardDescription>Pre-configured accounts for testing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {demoAccounts.map((account, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{account.name}</td>
                    <td className="px-4 py-3 text-gray-500">{account.email}</td>
                    <td className="px-4 py-3">
                      <Badge variant="outline" className="capitalize">{account.role}</Badge>
                    </td>
                    <td className="px-4 py-3">
                      <span className="flex items-center text-green-600 text-xs font-medium">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-1.5"></span> Active
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
