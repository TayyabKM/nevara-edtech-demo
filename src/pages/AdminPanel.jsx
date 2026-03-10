import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"
import { schoolConfig } from "@/school.config"
import { Settings, Image as ImageIcon, Download, RefreshCw, LayoutDashboard, Database } from "lucide-react"

export function AdminPanel() {
  const [config, setConfig] = useState(schoolConfig)

  const handleSave = () => {
    document.documentElement.style.setProperty("--primary-color", config.primaryColor)
    document.documentElement.style.setProperty("--accent-color", config.accentColor)
    alert("Branding updated for this session (demo mode).")
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Admin System Settings</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center"><Settings className="mr-2 h-5 w-5" /> Branding Configuration</CardTitle>
            <CardDescription>Customize the platform appearance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">School Name</label>
              <Input 
                value={config.name} 
                onChange={(e) => setConfig({...config, name: e.target.value})} 
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Short Name</label>
              <Input 
                value={config.shortName} 
                onChange={(e) => setConfig({...config, shortName: e.target.value})} 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Primary Color</label>
                <div className="flex gap-2">
                  <Input 
                    type="color" 
                    value={config.primaryColor} 
                    onChange={(e) => setConfig({...config, primaryColor: e.target.value})} 
                    className="w-12 p-1 h-10"
                  />
                  <Input 
                    value={config.primaryColor} 
                    onChange={(e) => setConfig({...config, primaryColor: e.target.value})} 
                    className="flex-1"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Accent Color</label>
                <div className="flex gap-2">
                  <Input 
                    type="color" 
                    value={config.accentColor} 
                    onChange={(e) => setConfig({...config, accentColor: e.target.value})} 
                    className="w-12 p-1 h-10"
                  />
                  <Input 
                    value={config.accentColor} 
                    onChange={(e) => setConfig({...config, accentColor: e.target.value})} 
                    className="flex-1"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Logo Upload</label>
              <div className="flex items-center gap-4 border-2 border-dashed rounded-md p-4 bg-gray-50 justify-center">
                <ImageIcon className="h-8 w-8 text-gray-400" />
                <span className="text-sm text-gray-500">Click to upload new logo (UI only)</span>
              </div>
            </div>
            <Button onClick={handleSave} className="w-full mt-4">Save Changes</Button>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><LayoutDashboard className="mr-2 h-5 w-5" /> Live Preview</CardTitle>
              <CardDescription>How it looks to users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md overflow-hidden shadow-sm">
                <div className="h-12 border-b flex items-center px-4 justify-between bg-white">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded bg-gray-200 overflow-hidden">
                      <img src={config.logo} alt="Logo" className="h-full w-full object-cover" />
                    </div>
                    <span className="font-bold text-sm" style={{ color: config.primaryColor }}>{config.name}</span>
                  </div>
                  <div className="h-6 w-6 rounded-full flex items-center justify-center text-white text-xs" style={{ backgroundColor: config.accentColor }}>
                    U
                  </div>
                </div>
                <div className="flex h-32 bg-gray-50">
                  <div className="w-1/4 border-r bg-white p-2">
                    <div className="h-6 rounded mb-2 text-white text-[10px] flex items-center px-2" style={{ backgroundColor: config.primaryColor }}>
                      Active Item
                    </div>
                    <div className="h-6 rounded bg-gray-100 mb-2"></div>
                    <div className="h-6 rounded bg-gray-100"></div>
                  </div>
                  <div className="w-3/4 p-4">
                    <div className="h-4 w-1/2 bg-gray-200 rounded mb-4"></div>
                    <div className="h-16 bg-white border rounded shadow-sm flex items-center justify-center">
                      <span className="text-xs text-gray-400">Content Area</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Database className="mr-2 h-5 w-5" /> Demo Data Management</CardTitle>
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
                <Button variant="outline" className="flex-1">
                  <Download className="mr-2 h-4 w-4" /> Export PDF Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


