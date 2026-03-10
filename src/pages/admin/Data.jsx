import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Database, Download, RefreshCw, Upload } from "lucide-react"

export function AdminData() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight">Data Management</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center"><Database className="mr-2 h-5 w-5" /> Demo Data Status</CardTitle>
            <CardDescription>Manage seeded JSON data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg border text-center">
                <p className="text-2xl font-bold text-gray-900">1,245</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Total Demo Sessions</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border text-center">
                <p className="text-lg font-bold text-gray-900 mt-1">Today, 09:41 AM</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Last Accessed</p>
              </div>
            </div>
            <div className="flex gap-4 pt-2">
              <Button variant="outline" className="flex-1 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700">
                <RefreshCw className="mr-2 h-4 w-4" /> Reset Demo Data
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center"><Download className="mr-2 h-5 w-5" /> Export & Import</CardTitle>
            <CardDescription>Backup or restore system data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              <Download className="mr-2 h-4 w-4" /> Export All Data (JSON)
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Download className="mr-2 h-4 w-4" /> Export Analytics Report (PDF)
            </Button>
            <div className="relative pt-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">Import</span>
              </div>
            </div>
            <Button variant="outline" className="w-full justify-start">
              <Upload className="mr-2 h-4 w-4" /> Upload Data Archive
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
